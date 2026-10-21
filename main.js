import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';
import { gsap } from 'gsap';
import Lenis from 'lenis';
import { createWheel } from './views.js';
import { createMap } from './map.js';
import { ITEMS, UI, LANGS } from './data.js';
import { initDither } from './dither.js';
import { placeholderCanvas, whenFontsReady } from './placeholder.js';
import { loadRates, usdPer } from './rates.js';
import { sound } from './sound.js';

/* ---------- Настройки ---------- */

const CONFIG = {
  thickness: 0.006, // толщина «бумаги» в долях ширины
  lerp: 0.06, // инерция колеса и сетки: меньше — мягче и дольше доезжает
  moveDuration: 0.6, // переезд купюры на страницу и обратно (ease-in-out cubic)
  introDuration: 1.1, // переезд купюры из прелоадера к башне
  dragSpeed: 0.01, // рад на пиксель при перевороте
  hoverTilt: THREE.MathUtils.degToRad(5), // наклон к курсору: угол уходит назад на столько
  // Бумага: изгиб от вращения и движения, с пружиной (лёгкий отскок после остановки).
  // Изгиб — в долях ширины купюры на краю.
  paper: {
    flipCurl: 0.07, // S-изгиб на каждый рад/с вращения: края отстают от поворота
    curlMax: 0.4, // предел S-изгиба
    flipCup: 0.015, // прогиб «чашкой» на каждый рад/с вращения
    moveCup: 0.03, // прогиб «чашкой» на каждую ширину/с движения
    cupMax: 0.14, // предел прогиба
    moveLift: 0.12, // подъём отстающего края на каждую ширину/с движения вбок — эффект перелистывания
    liftMax: 0.3, // предел подъёма края
    stiffness: 80, // жёсткость: больше — бумага плотнее, быстрее выпрямляется
    damping: 9, // затухание: меньше — дольше «дрожит» после остановки
    wave: 0.004, // «дыхание» поверхности в покое
  },
  // Стопка у колеса — «башня». Механика и числа взяты из CardSwap:
  // cardDistance 0, verticalDistance 48, depth 140, visibleCards 3, speed 1, bounce 0.35,
  // hoverSpread 0.12, dim 0.5. Расстояния — в px при ширине купюры refWidth, дальше масштаб.
  deck: {
    cardDistance: 0, // сдвиг каждой следующей купюры вправо, px
    verticalDistance: 48, // и вверх, px
    depth: 140, // и вглубь, px
    visibleCards: 3, // сколько купюр видно; следующая гаснет
    speed: 1, // общая скорость пружин и очереди
    bounce: 0.35, // упругость: 0 — без отскока, 1 — сильный
    hoverSpread: 0.12, // насколько башня раздвигается при наведении
    dim: 0.5, // насколько дальние купюры уходят в цвет фона
    stagger: 0.05, // с, задержка между купюрами, когда башня сдвигается
    queueGap: 0.11, // с, пауза между сменами при быстрой прокрутке через несколько купюр
    maxHurry: 6, // во сколько раз максимум ускоряется очередь, когда башня отстала от колеса
    exitDir: { x: 0, y: 1 }, // куда уходит передняя купюра: вниз (как в CardSwap); вверх — y: -1
    refWidth: 460, // ширина карточки CardSwap, к которой привязаны px-расстояния
  },

  // Смена купюры на странице: старая уходит вглубь, новая приходит из глубины
  zoom: { depthOut: 0.8, depthIn: 0.35, out: 0.5, in: 0.6, delay: 0.25 },
  // Прилипание купюры при прокрутке страницы
  sticky: { top: 0.15, minScale: 0.3, range: 1.2 },
  // Оборот на 360° за всю прокрутку страницы купюры; старт после 5% высоты страницы
  scrollSpin: { turns: 1, startAt: 0.05 },
  stackDrop: 44, // px: на столько стопка у колеса ниже центра экрана (≈ 2.75rem)
  rateGap: 64, // px от нижнего края передней купюры до строки курса на главной
  fov: 32,
  cameraZ: 5,
  maxTexture: 1024,
  maxPixelRatio: 2,
  // Поверхности без металла: хлопково-льняная бумага и полимер
  surfaces: {
    cotton: { roughness: 0.82, sheen: 0.35, clearcoat: 0, clearcoatRoughness: 0.3, bumpScale: 0.6 },
    polymer: { roughness: 0.32, sheen: 0, clearcoat: 0.35, clearcoatRoughness: 0.25, bumpScale: 0.05 },
  },
  sheenColor: 0xfff6e8,
  fiberRepeat: 2.2,
  paperColor: 0xe9dfcc,
  envIntensity: 0.9,
  rectIntensity: 1.3, // блик, который скользит при наклоне
  exposure: 1,
};

const root = document.documentElement;
const COUNT = ITEMS.length;
const TAU = Math.PI * 2;
const mod = (n, m) => ((n % m) + m) % m;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let reducedMotion = motionQuery.matches;
motionQuery.addEventListener('change', (e) => { reducedMotion = e.matches; });

/* ---------- Язык ---------- */

let lang = readLang();

function readLang() {
  try {
    const saved = localStorage.getItem('paper-tender-lang');
    if (LANGS.includes(saved)) return saved;
  } catch {}
  return (navigator.language || '').toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

function saveLang(value) {
  try { localStorage.setItem('paper-tender-lang', value); } catch {}
}

const t = () => UI[lang];
// «1 UAH = $0.024»; пустая строка, если курса нет (claude.ai, локальный запуск, нет валюты в OXR)
function rateLine(i) {
  const code = ITEMS[i]?.currency;
  const usd = code && usdPer(code);
  if (!usd) return '';
  const value = usd >= 1
    ? usd.toFixed(2)
    : usd.toLocaleString('en-US', { maximumSignificantDigits: 3, maximumFractionDigits: 10 });
  return `1 ${code} = $${value}`;
}

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Порядок колеса, башни и листания на странице купюры — по английскому алфавиту на любом языке
// (на русском те же места, только названия переведены).
// seq — номера купюр по порядку, rank — место купюры в этом порядке
const seq = ITEMS.map((_, i) => i).sort((a, b) => ITEMS[a].name.en.localeCompare(ITEMS[b].name.en, 'en'));
const rank = [];
seq.forEach((item, position) => { rank[item] = position; });

const text = (i) => ({
  name: ITEMS[i].name[lang],
  caption: ITEMS[i].caption[lang],
  issuer: ITEMS[i].issuer?.[lang] ?? '',
});

/* ---------- Запуск ---------- */

// Дизеринг на фоне работает и без WebGL
initDither(document.querySelector('.dither'));

const canvas = document.querySelector('.stage');
const renderer = root.classList.contains('is-webgl') ? createRenderer(canvas) : null;

if (!renderer) {
  // Без WebGL остаётся обычная сетка из разметки
  root.classList.remove('is-webgl', 'is-loading');
} else {
  start(renderer);
}

function createRenderer(target) {
  try {
    return new THREE.WebGLRenderer({ canvas: target, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch {
    return null;
  }
}

/* ---------- Загиб бумаги в вершинном шейдере ---------- */

// Профиль по X: «чашка», S-изгиб и подъём отстающего края от движения плюс бегущая волна.
// Нормаль правится той же производной, чтобы блик ехал по изгибу.
function applyPaperBend(material, uniforms) {
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform float uBend;
        uniform float uCurl;
        uniform float uLift;
        uniform float uWave;
        uniform float uTime;
        // x ∈ [−0.5, 0.5]; s = 2x ∈ [−1, 1]. uBend — «чашка», uCurl — S-изгиб, края в разные стороны,
        // uLift — подъём одного края к зрителю: > 0 поднимает левый (купюра едет вправо), < 0 — правый.
        float liftSide(float s) { return uLift > 0.0 ? max(-s, 0.0) : max(s, 0.0); }
        float paperZ(float x) {
          float s = x * 2.0;
          float side = liftSide(s);
          return uBend * x * x + uCurl * 0.5 * s * abs(s) + abs(uLift) * 0.5 * side * side
            + uWave * sin(x * 6.2832 + uTime);
        }
        float paperDz(float x) {
          float s = x * 2.0;
          return 2.0 * uBend * x + uCurl * 2.0 * abs(s) - 2.0 * uLift * liftSide(s)
            + uWave * 6.2832 * cos(x * 6.2832 + uTime);
        }`,
      )
      .replace(
        '#include <beginnormal_vertex>',
        `#include <beginnormal_vertex>
        objectNormal.x -= paperDz(position.x) * objectNormal.z;`,
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        transformed.z += paperZ(position.x);`,
      );
  };
  material.customProgramCacheKey = () => 'paper-bend';
}

/* ---------- Приложение ---------- */

function start(renderer) {
  const isWeak = (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4;
  const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = CONFIG.exposure;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(CONFIG.fov, 1, 0.1, 100);
  camera.position.set(0, 0, CONFIG.cameraZ);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  scene.environment = pmrem.fromScene(room, 0.04).texture;
  scene.environmentIntensity = CONFIG.envIntensity;
  room.dispose();
  pmrem.dispose();

  if (!isWeak) {
    RectAreaLightUniformsLib.init();
    const rect = new THREE.RectAreaLight(0xfff3e2, CONFIG.rectIntensity, 2.4, 1.2);
    rect.position.set(2.2, 2.2, 2.6);
    rect.lookAt(0, 0, 0);
    scene.add(rect);
  }

  /* --- Купюры --- */

  const fibers = createFiberTexture(maxAnisotropy);
  // Порядок граней BoxGeometry: +x, −x, +y, −y, +z (лицо), −z (оборот)
  const geometry = new THREE.BoxGeometry(1, 1, CONFIG.thickness, 48, 1, 1);

  const cards = ITEMS.map((item, i) => {
    const s = CONFIG.surfaces[item.material === 'polymer' ? 'polymer' : 'cotton'];
    const uniforms = { uBend: { value: 0 }, uCurl: { value: 0 }, uLift: { value: 0 }, uWave: { value: 0 }, uTime: { value: i * 1.7 } };
    const surface = () => {
      const m = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0,
        roughness: s.roughness,
        sheen: s.sheen,
        sheenRoughness: 0.8,
        sheenColor: new THREE.Color(CONFIG.sheenColor),
        clearcoat: s.clearcoat,
        clearcoatRoughness: s.clearcoatRoughness,
        bumpMap: fibers,
        bumpScale: s.bumpScale,
        roughnessMap: fibers,
        transparent: true,
      });
      applyPaperBend(m, uniforms);
      return m;
    };
    const front = surface();
    const back = surface();
    const edge = new THREE.MeshStandardMaterial({ color: CONFIG.paperColor, roughness: 0.85, metalness: 0, transparent: true });
    applyPaperBend(edge, uniforms);
    const mesh = new THREE.Mesh(geometry, [edge, edge, edge, edge, front, back]);
    mesh.visible = false;
    scene.add(mesh);
    return {
      mesh,
      materials: [front, back, edge],
      front,
      back,
      uniforms,
      aspect: 2,
      opacity: -1,
      hero: 0, // 0…1: насколько купюра — «главная» на странице или в переезде
      heroIn: false, // приходит из глубины (true) или уходит вглубь (false)
      // Пружины изгиба и прошлое положение — для скорости
      curl: { x: 0, v: 0 },
      cup: { x: 0, v: 0 },
      lift: { x: 0, v: 0 },
      prev: null,
    };
  });

  /* --- Камера, ресайз и перевод пикселей в мир --- */

  const view = { w: 1, h: 1, worldH: 1, portrait: false };

  function layout() {
    view.w = window.innerWidth;
    view.h = window.innerHeight;
    view.portrait = view.w <= 720 || view.w / view.h < 0.85;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, CONFIG.maxPixelRatio));
    renderer.setSize(view.w, view.h, false);
    camera.aspect = view.w / view.h;
    camera.updateProjectionMatrix();
    view.worldH = 2 * Math.tan(THREE.MathUtils.degToRad(CONFIG.fov / 2)) * CONFIG.cameraZ;
  }

  // Место стопки у колеса: справа на десктопе, сверху на телефоне
  function panelRect() {
    return view.portrait
      ? { x: view.w * 0.5, y: view.h * 0.28, w: view.w * 0.74 }
      : { x: view.w * 0.72, y: view.h * 0.5 + CONFIG.stackDrop, w: Math.min(view.w * 0.34, 600) * 1.05 }; // +5%
  }

  // Место купюры на странице: прилипает на 15vh и уменьшается до 30% при прокрутке
  const noteSlot = document.querySelector('.detail__note');
  function detailRect() {
    const r = noteSlot.getBoundingClientRect();
    const S = CONFIG.sticky;
    const stickyTop = view.h * S.top;
    const passed = Math.max(0, stickyTop - r.top);
    const p = clamp(passed / (r.height * S.range), 0, 1);
    const scale = lerp(1, S.minScale, 1 - (1 - p) * (1 - p));
    const w = r.width * scale;
    const h = r.height * scale;
    return { x: r.left + r.width / 2, y: Math.max(r.top, stickyTop) + h / 2, w };
  }

  // pose — центр и ширина главной купюры в пикселях; bind — к чему она привязана каждый кадр
  const pose = { x: 0, y: 0, w: 1, bind: 'center' };
  const rot = { y: 0, base: 0, flip: Math.PI / 2, vy: 0, dragging: false, scroll: 0, scrollOn: false };
  const tilt = { x: 0, y: 0 };
  let flipSide = null; // какой стороной купюра на странице повёрнута к зрителю — для звука
  const fade = { stack: 0 }; // видимость стопки (кроме главной купюры)
  const fly = { x: 0 }; // уход стопки вправо при переходе на карту: 0 — на месте, 1 — за экраном

  /* --- Слои интерфейса --- */

  const wheelLayer = document.querySelector('.wheel-view');
  const mapLayer = document.querySelector('.map-view');
  const hitArea = document.querySelector('.wheel-view__hit');
  const detail = document.querySelector('.detail');
  const detailBody = document.querySelector('.detail__body');
  const reveal = () => detail.querySelectorAll('[data-reveal]');
  const switcher = document.querySelector('.switcher');
  const viewButtons = switcher.querySelectorAll('[data-view]');
  const langNav = document.querySelector('.lang');
  const langButtons = langNav.querySelectorAll('[data-lang]');

  let mode = 'intro'; // intro | wheel | map | detail
  let origin = 'wheel'; // откуда открыта страница купюры
  let originRect = null;
  let current = seq[0]; // главная купюра
  let busy = true; // идёт анимация перехода

  const isReduced = () => reducedMotion;
  const map = createMap(mapLayer, ITEMS, {
    text,
    labels: t,
    lang: () => lang,
    isReduced,
    onSelect: (i, rect) => openDetail(i, 'map', rect),
  });
  const wheel = createWheel(wheelLayer, ITEMS, {
    lerp: CONFIG.lerp,
    isReduced,
    text,
    labels: t,
    order: () => seq,
    // Щелчок на каждую смену строки — только когда колесо крутит пользователь
    onChange: () => { if (mode === 'wheel' && !busy) sound.tick(Math.abs(wheel.velocity)); },
    onHover: () => {},
    onOpen: (i) => openDetail(i, 'wheel'),
  });

  const frontIndex = () => deckFront();

  hitArea.addEventListener('click', () => openDetail(frontIndex(), 'wheel'));
  viewButtons.forEach((b) => b.addEventListener('click', () => switchView(b.dataset.view)));
  langButtons.forEach((b) => b.addEventListener('click', () => setLanguage(b.dataset.lang)));
  // Щелчок на нажатие любой кнопки: переключатели, чипы, стрелки, закрытие, список и значки карты
  document.addEventListener('click', (e) => { if (e.target.closest?.('button')) sound.click(); });
  const soundButton = document.querySelector('.sound__toggle');
  const showSound = () => soundButton.setAttribute('aria-pressed', String(sound.enabled));
  soundButton.addEventListener('click', () => {
    sound.set(!sound.enabled);
    showSound();
  });
  showSound();
  detail.querySelector('.detail__close').addEventListener('click', closeDetail);
  detail.querySelectorAll('[data-step]').forEach((b) => b.addEventListener('click', () => stepDetail(Number(b.dataset.step))));

  window.addEventListener('keydown', (e) => {
    if (mode !== 'detail') return;
    if (e.key === 'Escape') closeDetail();
    else if (e.key === 'ArrowLeft') stepDetail(-1);
    else if (e.key === 'ArrowRight') stepDetail(1);
  });

  layout();
  window.addEventListener('resize', layout);

  /* --- Прокрутка страницы купюры --- */

  history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: !reducedMotion });
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();

  /* --- Указатель: наклон к курсору и переворот --- */

  const pointer = { x: -1, y: -1, mouse: false, over: false };

  // Прямоугольник главной купюры на экране
  function heroRect() {
    if (mode === 'wheel') {
      const r = panelRect();
      return { ...r, h: r.w / cards[frontIndex()].aspect };
    }
    if (mode === 'detail') return { ...pose, h: pose.w / cards[current].aspect };
    return null;
  }

  function isOverHero(x, y) {
    const r = heroRect();
    return !!r && Math.abs(x - r.x) <= r.w / 2 && Math.abs(y - r.y) <= r.h / 2;
  }

  window.addEventListener('pointermove', (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.mouse = e.pointerType === 'mouse';
  });
  document.addEventListener('pointerleave', () => { pointer.mouse = false; });

  let drag = null;
  window.addEventListener('pointerdown', (e) => {
    if (mode !== 'detail' || busy || e.button !== 0 || !isOverHero(e.clientX, e.clientY)) return;
    if (e.target.closest('button, a')) return;
    e.preventDefault();
    drag = { id: e.pointerId, x: e.clientX, t: performance.now() };
    // Переворот не дальше чем на 180° в любую сторону от стороны, видимой в начале
    rot.base = Math.round(rot.y / Math.PI) * Math.PI;
    rot.dragging = true;
    rot.vy = 0;
    root.classList.add('is-flipping');
  });
  window.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const now = performance.now();
    const delta = (e.clientX - drag.x) * CONFIG.dragSpeed;
    rot.y = clamp(rot.y + delta, rot.base - Math.PI, rot.base + Math.PI);
    rot.vy = delta / Math.max(0.001, (now - drag.t) / 1000);
    drag.x = e.clientX;
    drag.t = now;
  });
  const endDrag = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    // Если палец замер перед отпусканием, броска нет
    if (performance.now() - drag.t > 80) rot.vy = 0;
    drag = null;
    rot.dragging = false;
    root.classList.remove('is-flipping');
  };
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);

  /* --- Подсказка переворота: курсор неподвижно на купюре 1 с --- */

  const flipHint = document.querySelector('.flip-hint');
  const hintState = { since: 0, x: -1, y: -1 };
  function updateFlipHint(over) {
    const now = performance.now();
    if (!over || rot.dragging || Math.hypot(pointer.x - hintState.x, pointer.y - hintState.y) > 2) {
      hintState.since = now;
      hintState.x = pointer.x;
      hintState.y = pointer.y;
      flipHint.classList.remove('is-visible');
      return;
    }
    if (now - hintState.since >= 1000 && !flipHint.classList.contains('is-visible')) {
      flipHint.style.transform = `translate(${pointer.x + 14}px, ${pointer.y + 18}px)`;
      flipHint.classList.add('is-visible');
    }
  }

  // Заголовок страницы уменьшается до 85% по мере прокрутки, но едет вместе с текстом
  function scaleTitle() {
    const line = detailBody.querySelector('.detail-text:last-child .detail-title > span');
    if (!line) return;
    const p = clamp(window.scrollY / (view.h * 0.5), 0, 1);
    line.style.transform = `scale(${1 - 0.15 * p})`;
  }

  /* --- Язык --- */

  function setLanguage(next) {
    if (!LANGS.includes(next) || next === lang) return;
    lang = next;
    saveLang(next);
    applyLanguage();
  }

  function applyLanguage() {
    const ui = t();
    root.lang = lang;
    langButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    langNav.setAttribute('aria-label', ui.language);
    soundButton.setAttribute('aria-label', ui.sound);
    switcher.setAttribute('aria-label', ui.modes);
    viewButtons.forEach((b) => { b.textContent = ui[b.dataset.view]; });
    document.querySelectorAll('[data-i18n]').forEach((n) => { n.textContent = ui[n.dataset.i18n].replaceAll('{n}', COUNT); });
    detail.querySelector('.detail__close').setAttribute('aria-label', ui.close);
    document.querySelector('.fallback').setAttribute('aria-label', ui.collection);
    wheel.refresh();
    map.refresh();
    renderList();
    if (!detail.hidden) swapBody(current, true);
  }

  // Текстовый список для скринридеров повторяет коллекцию на текущем языке
  function renderList() {
    const list = document.querySelector('.collection');
    list.replaceChildren(...seq.map((i) => {
      const { name, caption, issuer } = text(i);
      const li = node('li', 'note');
      li.append(node('h2', 'note__name', name), node('p', 'note__caption', caption), node('p', 'note__quote', issuer));
      return li;
    }));
  }

  /* --- Текст страницы купюры --- */

  // Заголовок → плашка с данными → разделы → плашка с источниками.
  // Если у купюры ещё нет текста (details), страница показывает название, номинал и эмитента.
  function buildBody(i) {
    const { name, caption, issuer } = text(i);
    const d = ITEMS[i].details?.[lang];
    const ui = t();
    const box = node('article', 'detail-text');

    const title = node('h1', 'detail-title');
    // Заголовок: «Валюта — Страна»
    title.append(node('span', '', d?.title ?? `${capitalize(ITEMS[i].currencyName[lang])} — ${name}`));
    box.append(title);

    const plate = node('section', 'plate');
    const facts = node('dl', 'plate__facts');
    // Пока банкноты нет, caption — это название валюты, а не номинал
    const basics = ITEMS[i].src
      ? [[ui.issuer, issuer], [ui.denomination, caption], [ui.currency, ITEMS[i].currency]]
      : [[ui.currency, `${caption} (${ITEMS[i].currency})`]];
    (d?.facts ?? basics.filter(([, value]) => value)).forEach(([label, value]) => {
      const fact = node('div');
      fact.append(node('dt', 'label', label), node('dd', '', value));
      facts.append(fact);
    });
    plate.append(facts);
    if (d?.summary) {
      const summary = node('div', 'plate__summary');
      summary.append(node('p', 'label', d.summary[0]), node('p', '', d.summary[1]));
      plate.append(summary);
    }
    box.append(plate);

    const sections = node('div', 'detail-sections');
    if (!d) sections.append(node('p', 'detail-placeholder', ui.placeholder));
    d?.sections.forEach((sec) => {
      const el = node('section', 'detail-section');
      el.append(node('h2', '', sec.title));
      if (sec.list) {
        const ol = node('ol', 'detail-list');
        sec.list.forEach(([head, body]) => {
          const li = node('li');
          li.append(node('h3', '', head), node('p', '', body));
          ol.append(li);
        });
        el.append(ol);
      }
      if (sec.people) {
        const dl = node('dl', 'detail-people');
        sec.people.forEach(([who, role]) => {
          const row = node('div');
          row.append(node('dt', '', who), node('dd', '', role));
          dl.append(row);
        });
        el.append(dl);
      }
      sec.text?.forEach((para) => el.append(node('p', '', para)));
      sections.append(el);
    });
    box.append(sections);

    if (d?.sources) {
      const sources = node('section', 'plate sources');
      sources.append(node('h2', 'label', d.sources.title));
      d.sources.groups.forEach((group) => {
        const g = node('div', 'sources__group');
        const ol = node('ol');
        group.links.forEach(([href, label, note]) => {
          const li = node('li');
          const a = node('a', '', label);
          a.href = href;
          a.target = '_blank';
          a.rel = 'noopener';
          li.append(a);
          if (note) li.append(node('span', 'sources__note', ` — ${note}`));
          ol.append(li);
        });
        if (group.title) g.append(node('h3', 'label', group.title));
        g.append(ol);
        sources.append(g);
      });
      box.append(sources);
    }
    return box;
  }

  // Заголовок занимает всю ширину страницы между полями: подбираем размер шрифта под строку
  function fitTitles() {
    detailBody.querySelectorAll('.detail-title').forEach((h1) => {
      const line = h1.firstChild;
      h1.style.fontSize = '100px';
      const width = line.getBoundingClientRect().width;
      if (width > 0) h1.style.fontSize = `${(100 * h1.clientWidth) / width}px`;
    });
  }
  window.addEventListener('resize', fitTitles);
  document.fonts?.addEventListener?.('loadingdone', fitTitles);

  // Уходящий текст уезжает вверх и гаснет, новый приходит снизу; в слоте не больше двух
  function swapBody(i, instant = false) {
    [...detailBody.children].forEach((child) => {
      gsap.killTweensOf(child);
      if (instant || reducedMotion || child.dataset.leaving) {
        child.remove();
        return;
      }
      child.dataset.leaving = '1';
      gsap.to(child, { y: -40, opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: () => child.remove() });
    });
    const next = buildBody(i);
    detailBody.append(next);
    fitTitles();
    if (instant || reducedMotion) return;
    gsap.fromTo(next, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.1 });
  }

  /* --- Переключение колесо ↔ карта --- */

  // На карту: купюры башни улетают вправо, глобус въезжает справа налево, список — слева.
  // Обратно — наоборот.
  const listRows = () => map.parts.list.children;
  const masthead = document.querySelector('.masthead');

  // Логотип и подпись переезжают между центром (колесо) и левым краем (карта): FLIP —
  // запоминаем, где были, меняем раскладку и плавно доводим с прежнего места
  function moveMasthead(toMap, quick) {
    const parts = [masthead.querySelector('.masthead__logo'), ...masthead.querySelectorAll('.masthead__line')];
    parts.forEach((p) => { gsap.killTweensOf(p); gsap.set(p, { clearProps: 'transform' }); });
    const before = parts.map((p) => p.getBoundingClientRect().left);
    root.classList.toggle('is-map-layout', toMap);
    if (quick) return;
    parts.forEach((p, i) => {
      const dx = before[i] - p.getBoundingClientRect().left;
      if (Math.abs(dx) < 0.5) return; // телефон: логотип и так слева
      gsap.fromTo(p, { x: dx }, { x: 0, duration: 1.1, delay: i * 0.04, ease: 'power3.inOut', clearProps: 'transform' });
    });
  }

  function switchView(next) {
    if (busy || next === mode || (mode !== 'wheel' && mode !== 'map')) return;
    busy = true;
    const quick = reducedMotion;
    viewButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === next)));

    if (next === 'map') {
      map.prepare().then(() => {
        root.classList.add('is-transit');
        wheel.setActive(false);
        map.setActive(true);
        moveMasthead(true, quick);
        sound.riffle(quick ? 0 : 0.3); // в такт купюрам, которые срываются вправо
        sound.globe(true, quick ? 0 : 0.15); // глобус въезжает через 0.15 с
        const tl = gsap.timeline({
          onComplete: () => {
            mode = 'map';
            root.dataset.view = 'map';
            root.classList.remove('is-transit');
            // На карте сцена не видна; стопку прячем, чтобы при открытии купюры была видна только она
            fade.stack = 0;
            fly.x = 0;
            gsap.set(canvas, { opacity: 0 });
            gsap.set(wheelLayer, { clearProps: 'transform,opacity' });
            wheelRows().forEach((li) => gsap.set(li.children, { clearProps: 'transform,opacity' }));
            gsap.set(wheelProgress(), { clearProps: 'opacity' });
            gsap.set(map.parts.stage, { clearProps: 'transform' });
            gsap.set(listRows(), { clearProps: 'transform,opacity' });
            busy = false;
          },
        });
        tl.to(fly, { x: 1, duration: quick ? 0 : 1.1, ease: 'none' }, 0)
          .add(() => staggerWheelOut(quick), 0)
          .to(wheelProgress(), { opacity: 0, duration: quick ? 0 : 0.5, ease: 'power2.in' }, 0)
          .fromTo(map.parts.stage, { xPercent: 100 }, { xPercent: 0, duration: quick ? 0 : 1.2, ease: 'power3.inOut' }, quick ? 0 : 0.15)
          // Страны выезжают слева по очереди сверху вниз
          .fromTo(listRows(), { x: -64, opacity: 0 }, { x: 0, opacity: 1, duration: quick ? 0 : 0.8, ease: 'power3.out', stagger: quick ? 0 : 0.012 }, quick ? 0 : 0.35);
      });
      return;
    }

    root.classList.add('is-transit');
    map.setActive(false);
    moveMasthead(false, quick);
    sound.riffle(quick ? 0 : 0.6); // в такт купюрам, которые прилетают обратно
    sound.globe(false);
    mode = 'wheel';
    root.dataset.view = 'wheel';
    wheel.setActive(true);
    fade.stack = 1;
    fly.x = 1;
    gsap.set(canvas, { opacity: 1 });
    const tl = gsap.timeline({
      onComplete: () => {
        root.classList.remove('is-transit');
        gsap.set(map.parts.stage, { clearProps: 'transform' });
        gsap.set(listRows(), { clearProps: 'transform,opacity' });
        busy = false;
      },
    });
    tl.to(map.parts.stage, { xPercent: 100, duration: quick ? 0 : 1.1, ease: 'power3.inOut' }, 0)
      .to(listRows(), { x: -64, opacity: 0, duration: quick ? 0 : 0.5, ease: 'power2.in', stagger: quick ? 0 : 0.008 }, 0)
      .to(fly, { x: 0, duration: quick ? 0 : 1.1, ease: 'none' }, quick ? 0 : 0.2)
      .add(() => staggerWheel(0, quick), quick ? 0 : 0.55)
      .fromTo(wheelProgress(), { opacity: 0 }, { opacity: 1, duration: quick ? 0 : 0.6, ease: 'power2.out', clearProps: 'opacity' }, quick ? 0 : 0.55);
    gsap.set(wheelLayer, { clearProps: 'transform,opacity' });
    staggerWheel(-1, quick); // строки спрятаны до своей очереди
  }

  // Страны колеса появляются и уходят сверху вниз, каждая чуть позже предыдущей, со сдвигом
  // влево — как список стран на карте
  const wheelProgress = () => wheelLayer.querySelector('.wheel-progress');
  const WHEEL_STAGGER = { x: -64, step: 0.05, in: 0.8, out: 0.45 };
  const wheelRows = () => [...wheel.list.children]
    .filter((li) => Number(li.style.opacity || 1) > 0.01)
    .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);

  // delay < 0 — только спрятать строки (появление запустится позже)
  function staggerWheel(delay, quick) {
    const rows = wheelRows();
    rows.forEach((li) => gsap.killTweensOf(li.children));
    if (quick) {
      rows.forEach((li) => gsap.set(li.children, { clearProps: 'transform,opacity' }));
      return;
    }
    if (delay < 0) {
      rows.forEach((li) => gsap.set(li.children, { x: WHEEL_STAGGER.x, opacity: 0 }));
      return;
    }
    rows.forEach((li, i) => {
      gsap.fromTo(li.children, { x: WHEEL_STAGGER.x, opacity: 0 }, {
        x: 0, opacity: 1, duration: WHEEL_STAGGER.in, ease: 'power3.out', delay: delay + i * WHEEL_STAGGER.step, clearProps: 'transform,opacity',
      });
    });
  }

  function staggerWheelOut(quick) {
    wheelRows().forEach((li, i) => {
      gsap.killTweensOf(li.children);
      gsap.to(li.children, {
        x: WHEEL_STAGGER.x, opacity: 0, duration: quick ? 0 : WHEEL_STAGGER.out, ease: 'power2.in', delay: quick ? 0 : i * WHEEL_STAGGER.step * 0.6,
      });
    });
  }

  /* --- Страница купюры --- */

  const nearestTurn = (a) => Math.round(a / TAU) * TAU;

  function openDetail(index, from, rect) {
    if (busy || (mode !== 'wheel' && mode !== 'map')) return;
    busy = true;
    origin = from;
    current = index;
    const quick = reducedMotion;
    const dur = quick ? 0 : CONFIG.moveDuration;
    const originLayer = from === 'wheel' ? wheelLayer : mapLayer;

    // Стартовая позиция: передняя купюра стопки или миниатюра в значке на карте
    if (from === 'map') {
      originRect = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, w: rect.width };
      Object.assign(pose, originRect);
      gsap.set(canvas, { opacity: 1 });
    } else {
      Object.assign(pose, panelRect());
    }
    pose.bind = null;
    cards.forEach((c, i) => { gsap.killTweensOf(c); c.hero = i === index ? 1 : 0; c.heroIn = false; });

    (from === 'wheel' ? wheel : map).setActive(false);
    originLayer.classList.add('is-origin');
    mode = 'detail';
    root.dataset.view = 'detail';
    detail.hidden = false;
    swapBody(index, true);
    detailRate.textContent = rateLine(index);
    noteSlot.style.setProperty('--note-aspect', String(cards[index].aspect));
    gsap.set(reveal(), { opacity: 0, y: 24 });
    lenis.scrollTo(0, { immediate: true, force: true });

    const to = detailRect();
    sound.whooshIn(dur);
    const tl = gsap.timeline({
      onComplete: () => {
        pose.bind = 'detail';
        rot.scrollOn = true;
        busy = false;
        lenis.start();
      },
    });
    // power2.inOut в GSAP — это ease-in-out cubic
    tl.to(pose, { x: to.x, y: to.y, w: to.w, duration: dur, ease: 'power2.inOut' }, 0)
      .to(fade, { stack: 0, duration: quick ? 0 : 0.5, ease: 'power2.out' }, 0);
    if (from === 'wheel') {
      tl.to(wheelLayer, { x: () => -view.w * 0.6, opacity: 0, duration: dur, ease: 'power2.inOut' }, 0);
    } else {
      tl.to(mapLayer, { opacity: 0, duration: quick ? 0 : 0.5, ease: 'power2.out' }, 0);
    }
    tl.to(switcher, { opacity: 0, duration: quick ? 0 : 0.3 }, 0)
      .to(reveal(), { opacity: 1, y: 0, duration: quick ? 0 : 0.6, ease: 'power3.out', stagger: 0.08 }, quick ? 0 : dur * 0.55);
  }

  // Закрытие сразу, с того места, где пользователь сейчас: купюра летит к стопке
  // из своего текущего (в том числе уменьшенного, прилипшего) положения
  function closeDetail() {
    if (busy || mode !== 'detail') return;
    busy = true;
    lenis.stop();
    sound.whooshOut();
    runClose();
  }

  function runClose() {
    const quick = reducedMotion;
    const dur = quick ? 0 : CONFIG.moveDuration;
    const toWheel = origin === 'wheel';
    // Оборот от прокрутки переходит в обычный поворот и доводится до лицевой стороны
    rot.y += rot.scroll;
    rot.scroll = 0;
    rot.scrollOn = false;
    pose.bind = null;
    Object.assign(pose, detailRect());
    cards.forEach((c, i) => { gsap.killTweensOf(c); c.hero = i === current ? 1 : 0; });

    // Исходный вид оживает сразу, чтобы въехать уже на нужной купюре
    if (toWheel) {
      wheel.jumpTo(current);
      deckJump(current);
      wheel.setActive(true);
    } else {
      map.setActive(true);
    }

    const to = toWheel ? panelRect() : originRect;
    const tl = gsap.timeline({
      onComplete: () => {
        detail.hidden = true;
        wheelLayer.classList.remove('is-origin');
        mapLayer.classList.remove('is-origin');
        cards.forEach((c) => { c.hero = 0; });
        mode = origin;
        root.dataset.view = origin;
        pose.bind = toWheel ? 'panel' : null;
        gsap.set([wheelLayer, mapLayer], { clearProps: 'transform' });
        lenis.scrollTo(0, { immediate: true, force: true });
        window.scrollTo(0, 0);
        busy = false;
      },
    });

    tl.to(reveal(), { opacity: 0, y: -16, duration: quick ? 0 : 0.3, ease: 'power2.in' }, 0)
      .to(pose, { x: to.x, y: to.y, w: to.w, duration: dur, ease: 'power2.inOut' }, 0)
      .to(rot, { y: nearestTurn(rot.y), vy: 0, duration: dur, ease: 'power2.inOut', onComplete: () => { rot.y = 0; rot.base = 0; } }, 0)
      .to(switcher, { opacity: 1, duration: quick ? 0 : 0.4 }, quick ? 0 : dur * 0.6);

    if (toWheel) {
      tl.to(fade, { stack: 1, duration: quick ? 0 : 0.6, ease: 'power2.out' }, quick ? 0 : dur * 0.5)
        .fromTo(wheelLayer, { x: () => -view.w * 0.6, opacity: 0 }, { x: 0, opacity: 1, duration: dur, ease: 'power2.inOut' }, quick ? 0 : dur * 0.3);
    } else {
      tl.to(mapLayer, { opacity: 1, duration: quick ? 0 : 0.5, ease: 'power2.out' }, quick ? 0 : dur * 0.7)
        .to(canvas, { opacity: 0, duration: quick ? 0 : 0.3 }, quick ? 0 : dur);
    }
  }

  // Листание на странице: текущая купюра уходит вглубь и гаснет, следующая приходит из глубины
  function stepDetail(dir) {
    if (busy || mode !== 'detail') return;
    const prev = current;
    current = seq[mod(rank[current] + dir, COUNT)];
    const Z = CONFIG.zoom;
    const quick = reducedMotion;

    const leaving = cards[prev];
    leaving.heroIn = false;
    gsap.to(leaving, { hero: 0, duration: quick ? 0 : Z.out, ease: 'power2.inOut', overwrite: true });

    const coming = cards[current];
    coming.heroIn = true;
    coming.hero = 0;
    gsap.to(coming, { hero: 1, duration: quick ? 0 : Z.in, ease: 'power2.out', delay: quick ? 0 : Z.delay, overwrite: true });

    noteSlot.style.setProperty('--note-aspect', String(coming.aspect));
    swapBody(current);
    detailRate.textContent = rateLine(current);
  }

  /* --- Загрузка --- */

  const counter = { value: 0 };
  const countEl = document.querySelector('.preloader__count');
  const renderCount = () => { countEl.textContent = String(Math.round(counter.value)); };

  const manager = new THREE.LoadingManager();
  manager.onProgress = (_url, loaded, total) => {
    gsap.to(counter, { value: (loaded / total) * 100, duration: 0.6, ease: 'power2.out', onUpdate: renderCount, overwrite: true });
  };
  manager.onLoad = () => {
    renderer.compile(scene, camera);
    gsap.to(counter, { value: 100, duration: 0.8, ease: 'power2.out', onUpdate: renderCount, overwrite: true, onComplete: intro });
  };
  // Ошибка одной картинки не должна стопорить прелоадер
  manager.onError = () => {};

  const loader = new THREE.TextureLoader(manager);
  const placeholders = [];
  ITEMS.forEach((item, i) => {
    const card = cards[i];
    if (!item.src) {
      // Картинки ещё нет — заглушка с кодом валюты
      const canvas = placeholderCanvas(item);
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = maxAnisotropy;
      card.aspect = canvas.width / canvas.height;
      card.front.map = texture;
      card.back.map = texture;
      placeholders.push(texture);
      return;
    }
    loader.load(item.src, (texture) => {
      prepareTexture(texture, maxAnisotropy);
      renderer.initTexture(texture);
      card.aspect = texture.image.width / texture.image.height;
      card.front.map = texture;
      card.front.needsUpdate = true;
      if (!card.backReady) {
        // Пока оборот не загружен (или его нет), на обороте повторяется лицо
        card.back.map = texture;
        card.back.needsUpdate = true;
      }
    });
  });

  // Обороты грузятся после заставки: прелоадер ждёт только лица — вдвое меньше данных на старте
  function loadBacks() {
    const backLoader = new THREE.TextureLoader();
    ITEMS.forEach((item, i) => {
      if (!item.back) return;
      backLoader.load(item.back, (texture) => {
        prepareTexture(texture, maxAnisotropy);
        renderer.initTexture(texture);
        const card = cards[i];
        card.backReady = true;
        card.back.map = texture;
        card.back.needsUpdate = true;
      });
    });
  }

  whenFontsReady(ITEMS, () => {
    placeholders.forEach((texture) => { texture.needsUpdate = true; });
    map.refresh();
  });
  const homeRate = document.querySelector('.home-rate');
  const detailRate = document.querySelector('.detail__rate');
  let homeRateIndex = -1;
  function updateRates() {
    homeRateIndex = -1; // главная обновится в следующем кадре
    detailRate.textContent = rateLine(current);
  }
  loadRates().then(updateRates);

  // Прелоадер: купюра ребром по центру → поворачивается в фас → уезжает к колесу, за ней собирается стопка
  const first = seq[0]; // купюра прелоадера — первая по алфавиту
  cards[first].hero = 1;
  function intro() {
    const quick = reducedMotion;
    const tl = gsap.timeline({
      onComplete: () => {
        cards[first].hero = 0;
        mode = 'wheel';
        root.dataset.view = 'wheel';
        pose.bind = 'panel';
        busy = false;
        loadBacks();
        // Карту готовим заранее, пока на главной ничего не происходит
        (window.requestIdleCallback ?? setTimeout)(() => map.prepare());
      },
    });
    tl.to(countEl, { yPercent: -40, opacity: 0, duration: quick ? 0 : 0.5, ease: 'power2.in' })
      .to(rot, { flip: 0, duration: quick ? 0 : 1.2, ease: 'power3.inOut' }, quick ? 0 : '-=0.1')
      .add(() => {
        pose.bind = null;
        root.classList.remove('is-loading');
        wheel.setActive(true);
        staggerWheel(0, quick);
        deckIntro();
      })
      .to(pose, {
        x: () => panelRect().x,
        y: () => panelRect().y,
        w: () => panelRect().w,
        duration: quick ? 0 : CONFIG.introDuration,
        ease: 'power2.inOut',
      })
      .to(fade, { stack: 1, duration: quick ? 0 : 0.8, ease: 'power2.out' }, quick ? '<' : '<0.6')
      .from(wheelLayer, { x: () => -view.w * 0.4, opacity: 0, duration: quick ? 0 : 1, ease: 'power3.out' }, quick ? '<' : '<-0.4')
      .from([switcher, langNav], { opacity: 0, duration: quick ? 0 : 0.6, ease: 'power2.out', stagger: 0.08 }, '<0.3');
  }

  applyLanguage();
  root.dataset.view = 'wheel';
  Object.assign(pose, { x: view.w / 2, y: view.h / 2, w: panelRect().w });

  /* --- Башня купюр у колеса (механика CardSwap) --- */

  // Каждая купюра — набор пружин x, y, z, p (p — место в башне, 0 — передняя).
  // Смена передней: она уходит вниз из башни, затем — в конец; остальные по очереди
  // подтягиваются вперёд. Назад: последняя приходит снизу, из-за башни, и встаёт вперёд.
  const D = CONFIG.deck;
  const STEP = 1 / 240;
  const AXES = ['x', 'y', 'z', 'p'];
  const deck = {
    order: [...seq],
    cards: ITEMS.map((_, i) => ({ pos: i, from: i, hold: 0, phase: 'rest', dir: D.exitDir, x: 0, y: 0, z: 0, p: i, v: { x: 0, y: 0, z: 0, p: 0 } })),
    spread: 0,
    spreadV: 0,
    nextShift: 0,
    hurry: 1, // текущее ускорение пружин при догоне
    scale: 1,
  };
  const deckFront = () => deck.order[0];

  function slot(position) {
    const q = Math.min(position, D.visibleCards);
    const spread = 1 + deck.spread;
    return { x: q * D.cardDistance * spread, y: -q * D.verticalDistance * spread, z: -q * D.depth, p: q };
  }

  // Расстояние, на котором уходящая купюра уже не перекрывает башню, px до масштаба
  const clearance = (index, dir) => {
    const w = D.refWidth;
    return Math.abs(dir.x) * w + Math.abs(dir.y) * (w / cards[index].aspect) + 12;
  };

  function targetOf(card, index, now) {
    if (card.phase === 'exit') {
      const base = slot(0);
      const reach = clearance(index, card.dir) * 1.3;
      return { x: base.x + card.dir.x * reach, y: base.y + card.dir.y * reach, z: base.z, p: 0 };
    }
    if (card.phase === 'enter') {
      const base = slot(0);
      return { x: base.x, y: base.y + clearance(index, D.exitDir) * 1.3, z: base.z, p: card.p };
    }
    return slot(Math.max(0, now < card.hold ? card.from : card.pos));
  }

  function settleOrder(now) {
    const stagger = (D.stagger / D.speed / deck.hurry) * 1000;
    deck.order.forEach((index, position) => {
      const card = deck.cards[index];
      if (card.pos === position) return;
      card.from = card.pos;
      card.pos = position;
      card.hold = now + position * stagger;
    });
  }

  function shift(direction) {
    const now = performance.now();
    if (direction > 0) {
      const front = deck.cards[deck.order[0]];
      deck.order = [...deck.order.slice(1), deck.order[0]];
      settleOrder(now);
      front.phase = 'exit';
      front.dir = D.exitDir;
      front.hold = 0;
    } else {
      const backIndex = deck.order[COUNT - 1];
      const back = deck.cards[backIndex];
      deck.order = [backIndex, ...deck.order.slice(0, COUNT - 1)];
      settleOrder(now);
      back.phase = 'enter';
      back.hold = 0;
    }
  }

  // Сразу поставить купюру index вперёд, без анимации (возврат со страницы купюры)
  function deckJump(index) {
    deck.order = ITEMS.map((_, i) => seq[mod(rank[index] + i, COUNT)]);
    deck.order.forEach((i, position) => {
      const card = deck.cards[i];
      Object.assign(card, slot(position), { pos: position, from: position, hold: 0, phase: 'rest', v: { x: 0, y: 0, z: 0, p: 0 } });
    });
  }

  // При загрузке купюры сразу стоят на своих местах башни и просто проявляются
  // (fade.stack); остальные 43 никуда не летят
  function deckIntro() {
    deckJump(deckFront());
  }

  function spring(card, target, omega, zeta, dt) {
    const k2 = omega * omega;
    const d = 2 * zeta * omega;
    const steps = Math.max(1, Math.ceil(dt / STEP));
    const h = dt / steps;
    for (let i = 0; i < steps; i++) {
      for (const axis of AXES) {
        card.v[axis] += (k2 * (target[axis] - card[axis]) - d * card.v[axis]) * h;
        card[axis] += card.v[axis] * h;
      }
    }
  }

  function updateDeck(dt, hovered) {
    const now = performance.now();
    const still = reducedMotion;

    // Колесо задаёт, какая купюра должна быть впереди; башня догоняет его по одной.
    // Чем сильнее башня отстала, тем чаще смены и быстрее пружины — после быстрой прокрутки
    // она догоняет колесо почти сразу, а не листает все купюры с обычной скоростью
    let backlog = 0;
    if (mode === 'wheel' && wheel.index >= 0) {
      const diff = mod(rank[wheel.index] - rank[deckFront()], COUNT);
      backlog = Math.min(diff, COUNT - diff);
      if (backlog && now >= deck.nextShift) {
        shift(diff <= COUNT / 2 ? 1 : -1);
        const hurry = Math.min(D.maxHurry, backlog);
        deck.nextShift = now + (D.queueGap * 1000) / D.speed / hurry;
      }
    }
    const hurryTarget = 1 + (Math.min(D.maxHurry, backlog) - 1) * 0.35 * (backlog > 1);
    deck.hurry += (hurryTarget - deck.hurry) * damp(0.2, dt);

    // Раздвижка при наведении
    const spreadTarget = hovered && !still ? D.hoverSpread : 0;
    const so = TAU * 1.4;
    deck.spreadV += (so * so * (spreadTarget - deck.spread) - 2 * 0.9 * so * deck.spreadV) * dt;
    deck.spread += deck.spreadV * dt;

    const restOmega = TAU * 1.7 * D.speed * deck.hurry;
    const restZeta = still ? 1 : 1 - 0.72 * D.bounce;
    const moveOmega = TAU * 1.9 * D.speed * deck.hurry;
    deck.cards.forEach((card, index) => {
      const target = targetOf(card, index, now);
      const moving = card.phase === 'exit' || card.phase === 'enter';
      spring(card, target, moving ? moveOmega : restOmega, moving ? 1 : restZeta, dt);
      const base = slot(0);
      if (card.phase === 'exit') {
        const travelled = (card.x - base.x) * card.dir.x + (card.y - base.y) * card.dir.y;
        if (travelled >= clearance(index, card.dir)) card.phase = 'rest';
      } else if (card.phase === 'enter') {
        if (card.y - base.y >= clearance(index, D.exitDir)) card.phase = 'rest';
      }
    });
  }

  /* --- Кадр --- */

  // Уход башни вправо: передняя купюра срывается первой, дальние — следом
  function flyOffset(depth) {
    if (!fly.x) return 0;
    const local = clamp(fly.x * 1.3 - Math.max(0, depth) * 0.1, 0, 1);
    const eased = local < 0.5 ? 4 * local ** 3 : 1 - (-2 * local + 2) ** 3 / 2;
    return eased * view.w * 0.8;
  }

  const damp = (factor, dt) => 1 - Math.pow(1 - factor, dt * 60);

  gsap.ticker.add((_time, deltaMs) => {
    const dt = Math.min(deltaMs / 1000, 0.05);
    const still = reducedMotion;

    map.update(dt);
    wheel.update(dt);

    // На карте купюры не видны — не тратим на сцену кадр
    if (mode === 'map' && !busy) return;

    if (pose.bind === 'panel') Object.assign(pose, panelRect());
    else if (pose.bind === 'center') Object.assign(pose, { x: view.w / 2, y: view.h / 2, w: panelRect().w });
    else if (pose.bind === 'detail') Object.assign(pose, detailRect());

    // Наклон к курсору: угол, к которому движется мышь, уходит назад на hoverTilt
    const over = pointer.mouse && !busy && !rot.dragging && isOverHero(pointer.x, pointer.y);
    let tx = 0;
    let ty = 0;
    if (over && !still) {
      const r = heroRect();
      const nx = clamp((pointer.x - r.x) / (r.w / 2), -1, 1);
      const ny = clamp((r.y - pointer.y) / (r.h / 2), -1, 1);
      tx = -ny * CONFIG.hoverTilt;
      ty = nx * CONFIG.hoverTilt;
    }
    tilt.x += (tx - tilt.x) * damp(0.1, dt);
    tilt.y += (ty - tilt.y) * damp(0.1, dt);
    root.classList.toggle('is-over-note', over && mode === 'detail');
    updateFlipHint(over && mode === 'detail');
    if (mode === 'detail') scaleTitle();
    if (rot.scrollOn) {
      // Полный оборот за всю прокрутку страницы, обратно — в обратную сторону
      const doc = document.documentElement.scrollHeight;
      const start = doc * CONFIG.scrollSpin.startAt;
      const span = Math.max(1, doc - view.h - start);
      rot.scroll = clamp((window.scrollY - start) / span, 0, 1) * TAU * CONFIG.scrollSpin.turns;
    }
    if (mode === 'wheel') {
      placeHitArea();
      placeHomeRate();
    }

    // Переворот на странице: инерция и доводка до лица или оборота
    if (mode === 'detail' && !busy && !rot.dragging) {
      const flung = rot.y + rot.vy * dt;
      rot.y = clamp(flung, rot.base - Math.PI, rot.base + Math.PI);
      if (rot.y !== flung) rot.vy = 0; // бросок упёрся в 180° — дальше не крутится
      rot.vy *= Math.pow(0.05, dt);
      if (Math.abs(rot.vy) < 0.6) {
        rot.vy = 0;
        rot.y += (Math.round(rot.y / Math.PI) * Math.PI - rot.y) * damp(0.08, dt);
      }
    }

    // Шелест, когда купюра на странице поворачивается к зрителю другой стороной (ребро — π/2)
    if (mode === 'detail') {
      const side = Math.round((rot.y + rot.scroll) / Math.PI);
      if (flipSide !== null && side !== flipSide && !busy) sound.flip();
      flipSide = side;
    } else {
      flipSide = null;
    }

    const k = view.worldH / view.h; // мировых единиц на пиксель
    const panel = panelRect();
    const stackW = panel.w * k;
    const Z = CONFIG.zoom;
    const P = CONFIG.paper;

    // Башня: px-расстояния CardSwap масштабируются под ширину купюры
    const towerScale = panel.w / D.refWidth;
    const overTower = pointer.mouse && mode === 'wheel' && !busy
      && Math.abs(pointer.x - panel.x) <= panel.w / 2
      && pointer.y <= panel.y + panel.w / 2 && pointer.y >= panel.y - panel.w;
    updateDeck(dt, overTower);

    cards.forEach((c, i) => {
      const m = c.mesh;
      const dc = deck.cards[i];
      const frontWeight = dc.pos === 0 && dc.phase === 'rest' ? clamp(1 - dc.p, 0, 1) : 0;

      // Башня у колеса
      let x = panel.x + dc.x * towerScale + flyOffset(dc.p);
      let y = panel.y + dc.y * towerScale;
      let z = dc.z * towerScale * k;
      let w = stackW;
      let rx = tilt.x * frontWeight;
      let ry = tilt.y * frontWeight;
      let opacity = clamp(D.visibleCards - dc.p, 0, 1) * fade.stack;
      // Дальние купюры уходят в цвет фона (как тень dim в CardSwap)
      let haze = D.dim * 0.62 * clamp(dc.p / Math.max(1, D.visibleCards - 1), 0, 1);

      // Главная купюра: прелоадер, переезд, страница
      if (c.hero > 0) {
        const hw = pose.w * k;
        const depth = c.heroIn ? Z.depthIn : Z.depthOut;
        const heroZ = mode === 'detail' ? -(1 - c.hero) * depth * hw : 0;
        const blend = mode === 'detail' || mode === 'intro' ? 1 : c.hero;
        x = lerp(x, pose.x, blend);
        y = lerp(y, pose.y, blend);
        z = lerp(z, heroZ, blend);
        w = lerp(w, hw, blend);
        rx = lerp(rx, tilt.x, blend);
        ry = lerp(ry, rot.y + rot.flip + rot.scroll + tilt.y, blend);
        opacity = mode === 'detail' ? c.hero : lerp(opacity, 1, blend);
        haze = lerp(haze, 0, blend);
      }
      setHaze(c, haze);

      const wasVisible = m.visible;
      m.visible = opacity > 0.003;
      if (!m.visible) return;
      const wx = (x - view.w / 2) * k;
      const wy = -(y - view.h / 2) * k;
      m.scale.set(w, w / c.aspect, w);
      m.position.set(wx, wy, z);
      m.rotation.set(rx, ry, 0);

      // Скорость купюры: вращение вокруг вертикали (рад/с) и движение (ширин/с)
      let omega = 0;
      let speed = 0;
      let vx = 0;
      if (wasVisible && c.prev && dt > 0) {
        omega = clamp((ry - c.prev.ry) / dt, -20, 20);
        speed = Math.min(10, Math.hypot(wx - c.prev.x, wy - c.prev.y, z - c.prev.z) / dt / w);
        vx = clamp((wx - c.prev.x) / dt / w, -10, 10);
      }
      c.prev = { x: wx, y: wy, z, ry };

      // Бумага отстаёт от движения: края гнутся против вращения, середина прогибается от скорости.
      // Пружина даёт мягкий отскок, когда купюра останавливается.
      const curlTarget = still ? 0 : clamp(-omega * P.flipCurl, -P.curlMax, P.curlMax);
      const cupTarget = still ? 0 : -Math.min(P.cupMax, Math.abs(omega) * P.flipCup + speed * P.moveCup);
      // Едет вправо — приподнимается левый край, влево — правый, как лист при перелистывании
      const liftTarget = still ? 0 : clamp(vx * P.moveLift, -P.liftMax, P.liftMax);
      [[c.curl, curlTarget], [c.cup, cupTarget], [c.lift, liftTarget]].forEach(([spring, target]) => {
        spring.v += (P.stiffness * (target - spring.x) - P.damping * spring.v) * dt;
        spring.x += spring.v * dt;
      });

      if (Math.abs(opacity - c.opacity) > 0.002) {
        c.opacity = opacity;
        c.materials.forEach((mat) => { mat.opacity = opacity; });
      }

      const u = c.uniforms;
      u.uBend.value = c.cup.x;
      u.uCurl.value = c.curl.x;
      u.uLift.value = c.lift.x;
      u.uWave.value = still ? 0 : P.wave + Math.abs(c.cup.x) * 0.08;
      u.uTime.value += dt * 1.2;
    });

    renderer.render(scene, camera);
  });

  // Купюра уходит в цвет фона: меньше своего цвета, больше свечения цветом фона
  const hazeColor = new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--color-bg').trim() || '#e7dcc8');
  function setHaze(card, haze) {
    if (Math.abs((card.haze ?? -1) - haze) < 0.002) return;
    card.haze = haze;
    card.materials.forEach((mat, j) => {
      if (j < 2) mat.color.setScalar(1 - haze);
      else mat.color.setHex(CONFIG.paperColor).multiplyScalar(1 - haze);
      mat.emissive.copy(hazeColor).multiplyScalar(haze);
    });
  }

  // Курс под передней купюрой башни; позиция — по высоте купюры, текст — при смене передней
  function placeHomeRate() {
    const front = deckFront();
    if (front !== homeRateIndex) {
      homeRateIndex = front;
      homeRate.textContent = rateLine(front);
    }
    const r = panelRect();
    const h = r.w / cards[front].aspect;
    homeRate.style.transform = `translate(${r.x}px, ${r.y + h / 2 + CONFIG.rateGap}px) translateX(-50%)`;
  }

  // Прозрачная кнопка поверх передней купюры: клик открывает её страницу
  function placeHitArea() {
    const r = panelRect();
    const h = r.w / cards[frontIndex()].aspect;
    hitArea.style.left = `${r.x - r.w / 2}px`;
    hitArea.style.top = `${r.y - h / 2}px`;
    hitArea.style.width = `${r.w}px`;
    hitArea.style.height = `${h}px`;
  }
}

/* ---------- Текстуры ---------- */

function prepareTexture(texture, anisotropy) {
  const image = texture.image;
  const scale = Math.min(1, CONFIG.maxTexture / Math.max(image.width, image.height));
  if (scale < 1) {
    const c = document.createElement('canvas');
    c.width = Math.round(image.width * scale);
    c.height = Math.round(image.height * scale);
    c.getContext('2d').drawImage(image, 0, 0, c.width, c.height);
    texture.image = c;
  }
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = anisotropy;
  texture.needsUpdate = true;
}

// Плитка волокон: короткие изогнутые штрихи разной яркости на сером
function createFiberTexture(anisotropy) {
  const random = mulberry32(20251017);
  const size = 512;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#d8d8d8';
  ctx.fillRect(0, 0, size, size);
  ctx.lineCap = 'round';
  for (let i = 0; i < 2600; i++) {
    const x = random() * size;
    const y = random() * size;
    const len = 6 + random() * 26;
    const angle = random() * TAU;
    const bendAngle = angle + (random() - 0.5) * 1.2;
    const light = random() > 0.5;
    ctx.strokeStyle = light ? `rgba(255,255,255,${0.25 + random() * 0.35})` : `rgba(120,120,120,${0.15 + random() * 0.25})`;
    ctx.lineWidth = 0.6 + random() * 1.1;
    // Рисуем со сдвигами, чтобы плитка стыковалась без шва
    for (const dx of [-size, 0, size]) {
      for (const dy of [-size, 0, size]) {
        const sx = x + dx;
        const sy = y + dy;
        if (sx < -40 || sx > size + 40 || sy < -40 || sy > size + 40) continue;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.quadraticCurveTo(
          sx + Math.cos(angle) * len * 0.5,
          sy + Math.sin(angle) * len * 0.5,
          sx + Math.cos(bendAngle) * len,
          sy + Math.sin(bendAngle) * len,
        );
        ctx.stroke();
      }
    }
  }
  const texture = new THREE.CanvasTexture(c);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(CONFIG.fiberRepeat, CONFIG.fiberRepeat);
  texture.colorSpace = THREE.NoColorSpace;
  texture.anisotropy = anisotropy;
  return texture;
}

/* ---------- Общие утилиты ---------- */

function node(tag, className = '', content = '') {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (content) el.textContent = content;
  return el;
}

function mulberry32(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let r = Math.imul(a ^ (a >>> 15), 1 | a);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
