// Карта коллекции: глобус со странами, значки собранных купюр и список стран слева.
// Глобус рисуется своим WebGL-рендером. Страны раскрашиваются в шейдере по двум текстурам:
// карта номеров стран (каждый пиксель — номер страны) и маска границ. Цвет страны берётся
// из маленькой палитры — подсветка при наведении меняет одну её ячейку, а не всю карту.

import * as THREE from 'three';
import { imageFor } from './placeholder.js';
import { sound } from './sound.js';
import { track } from './analytics.js';

const COLORS = {
  water: '#A79F91',
  land: '#8B8275', // купюры этой страны ещё нет
  border: '#666055',
  owned: '#948465', // купюра есть
  ownedBorder: '#665539',
  hover: '#826D43',
};

// Банкнота евро — все страны еврозоны
const EUROZONE = ['AT', 'BE', 'BG', 'HR', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'ES'];
// Где стоит значок, если центр страны не подходит: [долгота, широта]
const ANCHORS = { 'european-union': [6, 49], 'united-kingdom': [-1.8, 52.8] };

const CONFIG = {
  start: { lon: 28, lat: 24 }, // центр глобуса при первом показе
  texture: 4096, // ширина текстуры карты; на телефоне вдвое меньше
  maxLat: 70,
  maxZoom: 1.5, // колесо мыши увеличивает глобус до +50%
  maxPinch: 1.2, // два пальца на телефоне — до +20%
  inertia: 0.06, // доля скорости, остающаяся через секунду
  focusDuration: 1.1,
};

const DEG = Math.PI / 180;
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const damp = (factor, dt) => 1 - Math.pow(1 - factor, dt * 60);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const wrap = (deg) => ((((deg + 180) % 360) + 360) % 360) - 180;
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const capitalize = (s) => (s ? s[0].toLocaleUpperCase() + s.slice(1) : s);
// Контрольные каналы номера страны: пиксель на сглаженном краю почти никогда их не пройдёт
const checkG = (id) => (id ? (id * 97 + 31) & 255 : 0);
const checkB = (id) => (id ? (id * 53 + 7) & 255 : 0);

function el(tag, className = '', text = '') {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// Точка на единичной сфере в координатах SphereGeometry (u = долгота, v = широта)
function lonLatToVec(lon, lat) {
  const phi = ((lon + 180) / 360) * Math.PI * 2;
  const theta = (90 - lat) * DEG;
  return new THREE.Vector3(-Math.cos(phi) * Math.sin(theta), Math.cos(theta), Math.sin(phi) * Math.sin(theta));
}

// Кольцо без скачков через линию перемены дат: долготы идут непрерывно, могут выйти за ±180°
function unwrap(raw) {
  const r = Float64Array.from(raw);
  let offset = 0;
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < r.length; i += 2) {
    if (i) {
      const d = raw[i] - raw[i - 2];
      if (d > 180) offset -= 360;
      else if (d < -180) offset += 360;
    }
    r[i] = raw[i] + offset;
    min = Math.min(min, r[i]);
    max = Math.max(max, r[i]);
  }
  r.min = min;
  r.max = max;
  return r;
}

// Центр самого большого полигона страны
function centroid(country) {
  let best = null;
  let bestArea = 0;
  country.p.forEach((poly) => {
    const r = poly[0];
    let a = 0;
    let cx = 0;
    let cy = 0;
    for (let i = 0, j = r.length - 2; i < r.length; j = i, i += 2) {
      const f = r[j] * r[i + 1] - r[i] * r[j + 1];
      a += f;
      cx += (r[j] + r[i]) * f;
      cy += (r[j + 1] + r[i + 1]) * f;
    }
    if (Math.abs(a) > bestArea) {
      bestArea = Math.abs(a);
      best = [wrap(cx / (3 * a)), cy / (3 * a)];
    }
  });
  return best ?? [0, 0];
}

const VERTEX = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormal;
  void main() {
    vUv = vec2(uv.x, 1.0 - uv.y);
    vNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Цвета в sRGB как есть, без перевода цветовых пространств — совпадают с заданными hex
const FRAGMENT = /* glsl */ `
  uniform sampler2D uIds;
  uniform sampler2D uBorders;
  uniform sampler2D uPalette;
  uniform vec3 uBorder;
  uniform vec3 uOwnedBorder;
  varying vec2 vUv;
  varying vec3 vNormal;
  void main() {
    float id = floor(texture2D(uIds, vUv).r * 255.0 + 0.5);
    vec3 fill = texture2D(uPalette, vec2((id + 0.5) / 256.0, 0.5)).rgb;
    vec2 b = texture2D(uBorders, vUv).rg;
    float cover = max(b.r, b.g);
    vec3 line = mix(uBorder, uOwnedBorder, b.g / max(cover, 1e-3));
    vec3 color = mix(fill, line, clamp(cover * 1.15, 0.0, 1.0));
    // Мягкий свет сверху слева и затемнение к краю; в центре диска цвет ровно заданный
    vec3 n = normalize(vNormal);
    float light = dot(n, normalize(vec3(-0.45, 0.55, 0.7)));
    float rim = smoothstep(0.0, 0.6, n.z);
    color *= mix(0.8, 1.0, rim) * (1.0 + 0.08 * (light - 0.7));
    gl_FragColor = vec4(color, 1.0);
  }
`;

// text(index) → { name, caption }; labels() → тексты интерфейса; lang() → 'ru' | 'en'
export function createMap(container, items, { text, labels, lang, isReduced, onSelect }) {
  // stage — глобус со значками (въезжает справа), list — список (въезжает слева)
  const stage = el('div', 'map-view__stage');
  const canvas = el('canvas', 'map-view__globe');
  const badgeLayer = el('div', 'map-view__badges');
  const tip = el('div', 'map-tip');
  // Номинал над купюрой на глобусе при наведении — та же плашка, что у списка
  const flag = el('div', 'map-flag');
  const flagIn = el('div', 'map-flag__in');
  const flagChip = el('button', 'map-pick__chip');
  const flagArrow = el('button', 'map-pick__arrow', '↗\uFE0E'); // \uFE0E — стрелка текстом, не эмодзи
  [flagChip, flagArrow].forEach((b) => {
    b.type = 'button';
    b.addEventListener('click', () => { if (flagItem >= 0) open(flagItem); });
  });
  flagIn.append(flagChip, flagArrow);
  flag.append(flagIn);
  stage.append(canvas, badgeLayer, flag, tip);
  const list = el('ol', 'map-view__list');
  list.dataset.lenisPrevent = ''; // колесо прокручивает список, а не страницу (Lenis иначе гасит событие)
  // Купюра и номинал у страны в списке: при наведении и у выбранной
  const pick = el('div', 'map-pick');
  const pickThumb = el('button', 'map-pick__thumb');
  const pickImg = el('img');
  pickImg.alt = '';
  pickImg.draggable = false;
  pickThumb.append(pickImg);
  const pickChip = el('button', 'map-pick__chip');
  const pickArrow = el('button', 'map-pick__arrow', '↗\uFE0E');
  [pickThumb, pickChip, pickArrow].forEach((b) => {
    b.type = 'button';
    b.addEventListener('click', () => { if (pickItem >= 0) open(pickItem, pickImg); });
  });
  pick.append(pickThumb, pickChip, pickArrow);
  container.append(stage, list, pick);

  const view = { w: 1, h: 1, cx: 0, cy: 0, r: 1, base: 1, small: false };
  const zoom = { value: 1, target: 1 };
  const center = { lon: CONFIG.start.lon, lat: CONFIG.start.lat, vlon: 0, vlat: 0 };
  let focus = null; // плавный поворот к выбранной стране
  let active = false;
  let dirty = true;
  let hoverItem = -1;
  let selected = -1;
  let tipCountry = -1;
  let listHover = -1; // страна под курсором в списке
  let pickItem = -1; // чья купюра показана у списка
  let pickTimer = 0;

  let renderer = null;
  let scene;
  let camera;
  let globe;
  let world = null; // { countries, ids, W, H, owner }
  let palette = null;
  let paletteTex = null;
  let paletteCur = null;
  let paletteTarget = null;
  let preparing = null;

  const anchors = items.map(() => new THREE.Vector3());
  const badges = items.map((item, i) => {
    const node = el('button', 'map-badge is-hidden');
    node.type = 'button';
    node.tabIndex = -1;
    const img = el('img', 'map-badge__thumb');
    img.alt = '';
    img.draggable = false;
    img.decoding = 'async';
    node.append(img);
    node.addEventListener('pointerenter', (e) => {
      if (e.pointerType !== 'mouse' || drag.moved) return;
      setHover(i);
      showFlag(i);
    });
    node.addEventListener('pointerleave', (e) => {
      if (e.pointerType !== 'mouse') return;
      setHover(-1);
      leaveFlag();
    });
    node.addEventListener('click', () => {
      if (drag.moved) return;
      open(i);
    });
    badgeLayer.append(node);
    return { node, img, x: 0, y: 0, shown: false, facing: 0 };
  });
  const BADGE = { w: 40, h: 20 }; // размер миниатюры на карте
  let flagItem = -1;
  let flagTimer = 0;

  function showFlag(i) {
    clearTimeout(flagTimer);
    if (flagItem !== i || !flag.classList.contains('is-shown')) {
      flagItem = i;
      flagChip.textContent = text(i).caption;
      // Плашка мгновенно встаёт под место и въезжает снизу
      flag.classList.remove('is-shown', 'is-leaving');
      flag.classList.add('no-anim');
      placeFlag();
      void flag.offsetWidth;
      flag.classList.remove('no-anim');
    }
    flag.classList.add('is-shown');
  }

  // Уход с купюры — с задержкой, чтобы успеть перевести курсор на плашку
  function leaveFlag() {
    clearTimeout(flagTimer);
    flagTimer = setTimeout(hideFlag, 160);
  }

  function hideFlag() {
    clearTimeout(flagTimer);
    if (flag.classList.contains('is-shown')) flag.classList.add('is-leaving'); // уезжает вверх
    flag.classList.remove('is-shown');
    flagItem = -1;
  }

  flag.addEventListener('pointerenter', () => {
    clearTimeout(flagTimer);
    if (flagItem >= 0) setHover(flagItem);
  });
  flag.addEventListener('pointerleave', () => {
    setHover(-1);
    leaveFlag();
  });

  function placeFlag() {
    if (flagItem < 0) return;
    const b = badges[flagItem];
    if (!b.shown) {
      hideFlag();
      return;
    }
    const top = b.y - (BADGE.h / 2) * 1.15 - 6 - flag.offsetHeight;
    flag.style.transform = `translate(${Math.round(b.x - flag.offsetWidth / 2)}px, ${Math.round(top)}px)`;
  }

  // from — картинка, из которой вырастает купюра на странице
  function open(i, from = badges[i].img) {
    if (!active) return;
    onSelect(i, from.getBoundingClientRect());
  }

  /* --- Список стран по алфавиту --- */

  function renderList() {
    // По английскому алфавиту на любом языке — как в колесе
    const order = items.map((_, i) => i).sort((a, b) => items[a].name.en.localeCompare(items[b].name.en, 'en'));
    list.setAttribute('aria-label', labels().countries);
    list.style.setProperty('--rows', String(Math.ceil(items.length / 2))); // две колонки на телефоне
    list.replaceChildren(...order.map((i) => {
      const li = el('li', 'map-view__item');
      const btn = el('button', 'map-view__country', text(i).name);
      btn.type = 'button';
      btn.dataset.index = String(i);
      btn.addEventListener('click', () => select(i));
      btn.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') hoverList(i); });
      btn.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') leaveList(); });
      li.append(btn);
      return li;
    }));
    markList();
    markScroll();
  }

  function markList() {
    list.querySelectorAll('.map-view__country').forEach((b) => {
      const i = Number(b.dataset.index);
      b.classList.toggle('is-open', i === pickItem);
      b.classList.toggle('is-hover', i === hoverItem);
    });
  }

  // Наведение на строку списка: страна подсвечивается на карте, справа от названия — купюра и номинал.
  // Уход со строки — с задержкой, чтобы успеть перевести курсор на купюру или номинал.
  function hoverList(i) {
    clearTimeout(pickTimer);
    if (i !== listHover) sound.tick(); // тот же щелчок, что при прокрутке колеса
    listHover = i;
    setHover(i);
    updatePick();
  }

  function leaveList() {
    clearTimeout(pickTimer);
    pickTimer = setTimeout(() => {
      if (hoverItem === listHover) setHover(-1); // курсор мог уже перейти на страну на глобусе
      listHover = -1;
      updatePick();
    }, 160);
  }

  pick.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') clearTimeout(pickTimer); });
  pick.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') leaveList(); });
  list.addEventListener('scroll', () => {
    placePick();
    markScroll();
  }, { passive: true });

  // Есть ли ещё страны выше или ниже видимой части — для градиентов по краям списка
  function markScroll() {
    const below = list.scrollHeight - list.clientHeight - list.scrollTop;
    list.classList.toggle('has-more-above', list.scrollTop > 1);
    list.classList.toggle('has-more-below', below > 1);
  }

  function updatePick() {
    const next = listHover >= 0 ? listHover : selected;
    if (next !== pickItem) {
      pickItem = next;
      if (next >= 0) {
        pickImg.src = imageFor(items[next]);
        pickChip.textContent = text(next).caption;
      }
      markList();
    }
    placePick();
  }

  function placePick() {
    const btn = pickItem >= 0 ? list.querySelector(`[data-index="${pickItem}"]`) : null;
    const box = list.getBoundingClientRect();
    const r = btn?.getBoundingClientRect();
    const inside = !!r && r.bottom > box.top + 8 && r.top < box.bottom - 8;
    pick.classList.toggle('is-shown', inside);
    if (!inside) return;
    // От строки, а не от названия: название при наведении сдвигается на 8px с анимацией
    const left = Math.min(btn.parentNode.getBoundingClientRect().left + btn.offsetWidth + 8 + 16, view.w - pick.offsetWidth - 8);
    pick.style.transform = `translate(${Math.round(left)}px, ${Math.round(r.top + r.height / 2 - pick.offsetHeight / 2)}px)`;
  }

  function renderBadges() {
    badges.forEach((b, i) => { b.img.src = imageFor(items[i]); });
  }

  /* --- Выбор и наведение --- */

  function setHover(i) {
    if (hoverItem === i) return;
    hoverItem = i;
    container.classList.toggle('is-pointing', i >= 0);
    markList();
    paintPalette();
  }

  // Выбор из списка: глобус поворачивается к стране, на карте остаётся только её купюра
  function select(i) {
    selected = i;
    track('map-select', { country: items[i].id });
    updatePick();
    paintPalette();
    const [lon, lat] = anchorOf(i);
    const from = { lon: center.lon, lat: center.lat };
    const to = { lon: from.lon + wrap(lon - from.lon), lat: clamp(lat, -CONFIG.maxLat, CONFIG.maxLat) };
    center.vlon = 0;
    center.vlat = 0;
    focus = isReduced() ? null : { from, to, t: 0 };
    if (!focus) Object.assign(center, to);
    dirty = true;
  }

  /* --- Данные и текстуры --- */

  function anchorOf(i) {
    return ANCHORS[items[i].id] ?? world?.anchor[i] ?? [0, 0];
  }

  function prepare() {
    if (!preparing) {
      preparing = fetch('assets/world.json')
        .then((r) => r.json())
        .then((data) => new Promise((resolve) => {
          // Отдаём кадр перед тяжёлой отрисовкой текстур
          requestAnimationFrame(() => { build(data); resolve(); });
        }));
    }
    return preparing;
  }

  function build(data) {
    const countries = data.countries;
    countries.forEach((c) => { c.p = c.p.map((poly) => poly.map(unwrap)); });
    const W = view.small ? CONFIG.texture / 2 : CONFIG.texture;
    const H = W / 2;
    const px = (lon) => ((lon + 180) / 360) * W;
    const py = (lat) => ((90 - lat) / 180) * H;
    // Кольцо, вышедшее за ±180°, рисуется ещё раз со сдвигом на 360° с другой стороны карты
    const trace = (ctx, c) => {
      ctx.beginPath();
      c.p.forEach((poly) => poly.forEach((r) => {
        for (let k = -2; k <= 2; k++) {
          const shift = k * 360;
          if (r.min + shift >= 180 || r.max + shift <= -180) continue;
          ctx.moveTo(px(r[0] + shift), py(r[1]));
          for (let i = 2; i < r.length; i += 2) ctx.lineTo(px(r[i] + shift), py(r[i + 1]));
          ctx.closePath();
        }
      }));
    };

    // Чья купюра у каждой страны
    const byRegion = new Map();
    items.forEach((item, i) => {
      (item.region === 'EU' ? EUROZONE : [item.region]).forEach((a2) => byRegion.set(a2, i));
    });
    const owner = countries.map((c) => byRegion.get(c.a2) ?? -1);
    const anchor = items.map((item) => {
      const k = countries.findIndex((c) => c.a2 === item.region);
      return k >= 0 ? centroid(countries[k]) : null;
    });

    // Номера стран: 1…N в красном канале, контроль — в зелёном и синем
    const idCanvas = document.createElement('canvas');
    idCanvas.width = W;
    idCanvas.height = H;
    const ictx = idCanvas.getContext('2d', { willReadFrequently: true });
    ictx.fillStyle = '#000';
    ictx.fillRect(0, 0, W, H);
    countries.forEach((c, k) => {
      const id = k + 1;
      ictx.fillStyle = `rgb(${id},${checkG(id)},${checkB(id)})`;
      trace(ictx, c);
      ictx.fill('evenodd');
    });
    const px4 = ictx.getImageData(0, 0, W, H).data;
    const ids = new Uint8Array(W * H);
    for (let i = 0, n = W * H; i < n; i++) {
      const r = px4[i * 4];
      // Сглаженный край между странами — берём соседний пиксель
      ids[i] = r <= countries.length && px4[i * 4 + 1] === checkG(r) && px4[i * 4 + 2] === checkB(r) ? r : i ? ids[i - 1] : 0;
    }

    // Границы: все — в красном канале, у собранных стран — ещё и в зелёном
    const borderCanvas = document.createElement('canvas');
    borderCanvas.width = W;
    borderCanvas.height = H;
    const bctx = borderCanvas.getContext('2d');
    bctx.fillStyle = '#000';
    bctx.fillRect(0, 0, W, H);
    bctx.globalCompositeOperation = 'lighter';
    bctx.lineJoin = 'round';
    bctx.lineWidth = (W / 4096) * 1.7;
    bctx.strokeStyle = '#f00';
    countries.forEach((c) => { trace(bctx, c); bctx.stroke(); });
    bctx.strokeStyle = '#0f0';
    countries.forEach((c, k) => { if (owner[k] >= 0) { trace(bctx, c); bctx.stroke(); } });

    world = { countries, ids, W, H, owner, anchor };
    items.forEach((_, i) => anchors[i].copy(lonLatToVec(...anchorOf(i))));

    // Палитра: ячейка 0 — вода, дальше — страны
    palette = new Uint8Array(256 * 4);
    paletteCur = new Float32Array(256 * 3);
    paletteTarget = new Float32Array(256 * 3);
    paintPalette(true);
    paletteTex = new THREE.DataTexture(palette, 256, 1, THREE.RGBAFormat);
    paletteTex.needsUpdate = true;

    const idTex = new THREE.DataTexture(ids, W, H, THREE.RedFormat, THREE.UnsignedByteType);
    idTex.unpackAlignment = 1;
    idTex.minFilter = idTex.magFilter = THREE.NearestFilter;
    idTex.wrapS = THREE.RepeatWrapping;
    idTex.needsUpdate = true;

    const borderTex = new THREE.CanvasTexture(borderCanvas);
    borderTex.flipY = false;
    borderTex.wrapS = THREE.RepeatWrapping;
    borderTex.minFilter = THREE.LinearMipmapLinearFilter;

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setClearColor(0x000000, 0);
    borderTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 10000);
    camera.position.z = 5000;
    const toVec = (h) => new THREE.Vector3(...hex(h).map((v) => v / 255));
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      uniforms: {
        uIds: { value: idTex },
        uBorders: { value: borderTex },
        uPalette: { value: paletteTex },
        uBorder: { value: toVec(COLORS.border) },
        uOwnedBorder: { value: toVec(COLORS.ownedBorder) },
      },
    });
    globe = new THREE.Mesh(new THREE.SphereGeometry(1, 160, 120), material);
    scene.add(globe);
    renderBadges();
    layout();
  }

  // Цели палитры: собранные страны, наведённая и выбранная купюра; instant — без перехода
  function paintPalette(instant = false) {
    if (!world) return;
    const water = hex(COLORS.water);
    const land = hex(COLORS.land);
    const owned = hex(COLORS.owned);
    const hover = hex(COLORS.hover);
    for (let id = 0; id < 256; id++) {
      const k = id - 1;
      const who = k >= 0 && k < world.countries.length ? world.owner[k] : -2;
      const c = id === 0 || who === -2 ? water : who < 0 ? land : who === hoverItem || who === selected ? hover : owned;
      paletteTarget.set(c, id * 3);
    }
    if (instant) paletteCur.set(paletteTarget);
    writePalette();
  }

  function writePalette() {
    for (let i = 0; i < 256; i++) {
      for (let j = 0; j < 3; j++) palette[i * 4 + j] = Math.round(paletteCur[i * 3 + j]);
      palette[i * 4 + 3] = 255;
    }
    if (paletteTex) paletteTex.needsUpdate = true;
    dirty = true;
  }

  /* --- Размеры --- */

  function layout() {
    view.w = container.clientWidth || window.innerWidth;
    view.h = container.clientHeight || window.innerHeight;
    view.small = view.w <= 720;
    if (view.small) {
      // Телефон: глобус сверху, под ним список
      const top = 112;
      const avail = view.h * 0.6 - top;
      view.base = Math.min(view.w * 0.47, avail / 2);
      view.cx = view.w / 2;
      view.cy = top + avail / 2;
      container.style.setProperty('--list-top', `${Math.round(view.cy + view.base + 20)}px`);
    } else {
      view.cx = view.w * 0.56;
      view.base = Math.max(120, Math.min(view.h * 0.475, view.cx - 280, view.w - view.cx - 24));
      view.cy = view.h / 2;
      container.style.removeProperty('--list-top');
    }
    if (!renderer) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(view.w, view.h, false);
    Object.assign(camera, { left: -view.w / 2, right: view.w / 2, top: view.h / 2, bottom: -view.h / 2 });
    camera.updateProjectionMatrix();
    globe.position.set(view.cx - view.w / 2, view.h / 2 - view.cy, 0);
    applyZoom();
    placePick();
    markScroll();
  }

  function applyZoom() {
    view.r = view.base * zoom.value;
    if (globe) globe.scale.setScalar(view.r);
    dirty = true;
  }

  // Колесо мыши над глобусом — увеличение до maxZoom
  stage.addEventListener('wheel', (e) => {
    if (!active || !world) return;
    e.preventDefault();
    const dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
    zoom.target = clamp(zoom.target * Math.exp(-dy * 0.0015), 1, CONFIG.maxZoom);
  }, { passive: false });
  window.addEventListener('resize', layout);

  /* --- Поворот глобуса --- */

  function orient() {
    const p = lonLatToVec(center.lon, 0);
    globe.rotation.set(center.lat * DEG, Math.atan2(-p.x, p.z), 0, 'XYZ');
    globe.updateMatrixWorld();
  }

  const inverse = new THREE.Quaternion();
  const probe = new THREE.Vector3();
  // Страна под точкой экрана: номер в world.countries или -1
  function countryAt(x, y) {
    if (!world) return -1;
    const nx = (x - view.cx) / view.r;
    const ny = (view.cy - y) / view.r;
    const d = nx * nx + ny * ny;
    if (d >= 1) return -1;
    inverse.copy(globe.quaternion).invert();
    probe.set(nx, ny, Math.sqrt(1 - d)).applyQuaternion(inverse);
    let u = Math.atan2(probe.z, -probe.x) / (Math.PI * 2);
    if (u < 0) u += 1;
    const v = Math.acos(clamp(probe.y, -1, 1)) / Math.PI;
    const ix = Math.min(world.W - 1, Math.floor(u * world.W));
    const iy = Math.min(world.H - 1, Math.floor(v * world.H));
    return world.ids[iy * world.W + ix] - 1;
  }

  /* --- Ввод: перетаскивание, наведение, подсказка --- */

  const drag = { id: null, x: 0, y: 0, moved: false, t: 0 };

  // Два пальца на глобусе — увеличение до maxPinch и обратно; поворот на это время замирает
  const touches = new Map();
  let pinch = null;
  const spread = () => {
    const [a, b] = [...touches.values()];
    return Math.hypot(a.x - b.x, a.y - b.y);
  };

  container.addEventListener('pointerdown', (e) => {
    if (!active || !world || e.button > 0) return;
    if (e.target.closest('.map-view__list, .map-pick')) return;
    if (e.pointerType === 'touch') {
      touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (touches.size === 2) {
        pinch = { from: spread(), zoom: zoom.target };
        drag.id = null;
        drag.moved = true; // это не касание по стране
        center.vlon = 0;
        center.vlat = 0;
        return;
      }
    }
    const inside = Math.hypot(e.clientX - view.cx, e.clientY - view.cy) < view.r;
    if (!inside && !e.target.closest('.map-badge')) return;
    drag.id = e.pointerId;
    drag.x = e.clientX;
    drag.y = e.clientY;
    drag.moved = false;
    drag.t = performance.now();
    focus = null;
    center.vlon = 0;
    center.vlat = 0;
  });

  window.addEventListener('pointermove', (e) => {
    if (!active || !world) return;
    if (touches.has(e.pointerId)) {
      touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pinch && touches.size === 2) {
        zoom.target = clamp(pinch.zoom * (spread() / pinch.from), 1, CONFIG.maxPinch);
        return;
      }
    }
    if (drag.id === e.pointerId) {
      const dx = e.clientX - drag.x;
      const dy = e.clientY - drag.y;
      if (!drag.moved && Math.hypot(dx, dy) > 4) {
        drag.moved = true;
        container.classList.add('is-dragging');
        hideTip();
      }
      if (drag.moved) {
        const now = performance.now();
        const dt = Math.max(1, now - drag.t) / 1000;
        const dlon = (-dx / view.r) / DEG;
        const dlat = (dy / view.r) / DEG;
        center.lon = wrap(center.lon + dlon);
        center.lat = clamp(center.lat + dlat, -CONFIG.maxLat, CONFIG.maxLat);
        center.vlon = dlon / dt;
        center.vlat = dlat / dt;
        drag.t = now;
        dirty = true;
      }
      drag.x = e.clientX;
      drag.y = e.clientY;
      return;
    }
    if (e.pointerType === 'mouse') hoverAt(e.clientX, e.clientY, e.target);
  });

  function endDrag(e) {
    touches.delete(e.pointerId);
    if (touches.size < 2 && pinch) {
      pinch = null;
      setTimeout(() => { drag.moved = false; }, 0);
    }
    if (drag.id !== e.pointerId) return;
    drag.id = null;
    container.classList.remove('is-dragging');
    // Отпустили после паузы — без инерции
    if (performance.now() - drag.t > 80) {
      center.vlon = 0;
      center.vlat = 0;
    }
    if (drag.moved) {
      setTimeout(() => { drag.moved = false; }, 0);
      return;
    }
    if (e.target.closest?.('.map-badge')) return;
    const k = countryAt(e.clientX, e.clientY);
    const who = k >= 0 ? world.owner[k] : -1;
    if (e.pointerType === 'mouse') {
      if (who >= 0) open(who);
      else deselect(); // клик мимо собранных стран снова показывает все купюры
    } else if (who >= 0) {
      // Касание: сначала выбор, переход — по купюре
      select(who);
      list.querySelector(`[data-index="${who}"]`)?.scrollIntoView({ block: 'nearest' });
      hideTip();
    } else if (k >= 0) {
      deselect();
      showTip(k, e.clientX, e.clientY);
    } else {
      deselect();
      hideTip();
    }
  }
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('keydown', (e) => { if (active && e.key === 'Escape') deselect(); });

  // Клик по пустому месту (не кнопка, не купюра, не собранная страна) снимает выбор:
  // на карте снова все купюры. Клики по самому глобусу разбирает endDrag
  container.addEventListener('click', (e) => {
    if (!active || drag.moved || e.target.closest('button')) return;
    if (Math.hypot(e.clientX - view.cx, e.clientY - view.cy) < view.r) return;
    deselect();
  });

  function deselect() {
    if (selected < 0) return;
    selected = -1;
    updatePick();
    paintPalette();
    dirty = true;
  }
  window.addEventListener('pointercancel', endDrag);

  function hoverAt(x, y, target) {
    if (target?.closest?.('.map-badge, .map-view__list, .map-pick')) {
      hideTip();
      return;
    }
    if (target && !container.contains(target)) {
      hideTip();
      setHover(-1);
      return;
    }
    const k = countryAt(x, y);
    const who = k >= 0 ? world.owner[k] : -1;
    setHover(who);
    if (k >= 0 && who < 0) showTip(k, x, y);
    else hideTip();
  }

  container.addEventListener('pointerleave', () => {
    if (drag.id !== null) return;
    hideTip();
    setHover(-1);
  });

  // Подсказка для страны без купюры: название, валюта и «пока нет в коллекции»
  function showTip(k, x, y) {
    if (tipCountry !== k) {
      tipCountry = k;
      const c = world.countries[k];
      const code = lang();
      let name = c.name;
      let currency = '';
      try { if (c.a2) name = new Intl.DisplayNames([code], { type: 'region' }).of(c.a2) ?? name; } catch { /* нет такого кода */ }
      try { if (c.cur) currency = capitalize(new Intl.DisplayNames([code], { type: 'currency' }).of(c.cur) ?? ''); } catch { /* нет такого кода */ }
      tip.replaceChildren(el('strong', 'map-tip__name', name));
      if (currency) tip.append(el('span', 'map-tip__currency', currency));
      tip.append(el('span', 'map-tip__note', labels().notCollected));
    }
    const pad = 16;
    const w = tip.offsetWidth;
    const h = tip.offsetHeight;
    const left = x + pad + w > view.w - 8 ? x - pad - w : x + pad;
    const top = clamp(y + pad, 8, view.h - h - 8);
    tip.style.transform = `translate(${left}px, ${top}px)`;
    tip.classList.add('is-shown');
  }

  function hideTip() {
    tipCountry = -1;
    tip.classList.remove('is-shown');
  }

  /* --- Кадр --- */

  const world3 = new THREE.Vector3();

  function update(dt) {
    if (!active || !world) return;

    if (focus) {
      focus.t = Math.min(1, focus.t + dt / CONFIG.focusDuration);
      const k = easeInOut(focus.t);
      center.lon = wrap(focus.from.lon + (focus.to.lon - focus.from.lon) * k);
      center.lat = focus.from.lat + (focus.to.lat - focus.from.lat) * k;
      if (focus.t >= 1) focus = null;
      dirty = true;
    } else if (drag.id === null && (center.vlon || center.vlat)) {
      const keep = Math.pow(CONFIG.inertia, dt);
      center.vlon *= keep;
      center.vlat *= keep;
      center.lon = wrap(center.lon + center.vlon * dt);
      center.lat = clamp(center.lat + center.vlat * dt, -CONFIG.maxLat, CONFIG.maxLat);
      if (Math.abs(center.vlon) + Math.abs(center.vlat) < 0.5) center.vlon = center.vlat = 0;
      dirty = true;
    }

    if (Math.abs(zoom.target - zoom.value) > 1e-4) {
      zoom.value += (zoom.target - zoom.value) * (isReduced() ? 1 : damp(0.15, dt));
      applyZoom();
    }

    // Плавная смена цвета при наведении
    let changed = false;
    const f = isReduced() ? 1 : damp(0.2, dt);
    for (let i = 0; i < paletteCur.length; i++) {
      const d = paletteTarget[i] - paletteCur[i];
      if (Math.abs(d) > 0.3) {
        paletteCur[i] += d * f;
        changed = true;
      } else if (d) {
        paletteCur[i] = paletteTarget[i];
        changed = true;
      }
    }
    if (changed) writePalette();

    if (!dirty) return;
    dirty = false;
    orient();
    placeBadges();
    renderer.render(scene, camera);
  }

  // Значки: проекция на экран, обратная сторона скрыта. Подписей нет, чтобы поместились все купюры;
  // при выборе страны остаётся только её купюра
  function placeBadges() {
    badges.forEach((b, i) => {
      world3.copy(anchors[i]).applyQuaternion(globe.quaternion);
      b.facing = world3.z;
      b.x = view.cx + world3.x * view.r;
      b.y = view.cy - world3.y * view.r;
      const show = b.facing > 0.18 && (selected < 0 || i === selected);
      if (show !== b.shown) {
        b.shown = show;
        b.node.classList.toggle('is-hidden', !show);
      }
      b.node.style.opacity = show ? String(clamp((b.facing - 0.18) / 0.2, 0, 1)) : '';
      b.node.style.transform = `translate(${b.x - BADGE.w / 2}px, ${b.y - BADGE.h / 2}px)`;
      b.node.classList.toggle('is-hover', i === hoverItem || i === selected);
    });
      if (view.small) syncFlag();
    placeFlag();
  }

  // Телефон: наведения нет, поэтому у выбранной страны плашка с номиналом висит над купюрой
  // на глобусе всё время, пока купюра видна
  function syncFlag() {
    const want = selected >= 0 && badges[selected].shown ? selected : -1;
    if (want >= 0 && (flagItem !== want || !flag.classList.contains('is-shown'))) showFlag(want);
    else if (want < 0 && flagItem >= 0) hideFlag();
  }

  function setActive(on) {
    active = on;
    container.setAttribute('aria-hidden', String(!on));
    if (on) {
      layout();
      dirty = true;
    } else {
      drag.id = null;
      container.classList.remove('is-dragging');
      hideTip();
      clearTimeout(pickTimer);
      listHover = -1;
      hideFlag();
      setHover(-1);
    }
    updatePick();
  }

  function refresh() {
    renderList();
    if (pickItem >= 0) pickChip.textContent = text(pickItem).caption;
    if (world) {
      renderBadges();
      tipCountry = -1;
      dirty = true;
    }
  }

  renderList();
  layout();

  return { prepare, update, refresh, setActive, parts: { stage, list } };
}
