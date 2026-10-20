// Колесо названий — DOM поверх сцены, со своей инерцией: цель двигается вводом,
// текущее значение дотягивается к ней через lerp. Карта — в map.js.

const damp = (factor, dt) => 1 - Math.pow(1 - factor, dt * 60);
const mod = (n, m) => ((n % m) + m) % m;

function el(tag, className = '', text = '') {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

/* ---------- Колесо ---------- */

// order() — номера купюр в порядке колеса (по алфавиту на текущем языке)
export function createWheel(container, items, { lerp, isReduced, text, labels, order, onChange, onHover, onOpen }) {
  const RADIUS_STEPS = 9; // видимых строк в каждую сторону
  const list = el('ul', 'wheel-view__list');
  // Название и номинал активной купюры справа — только в мобильном прямом списке
  const info = el('div', 'wheel-view__info');
  const infoName = el('span', 'wheel-info__name');
  const infoCaption = el('span', 'wheel-chip');
  info.append(infoName, infoCaption);

  // Прогресс слева: по черте на банкноту. Активная — длинная и тёмная, соседние
  // плавно короче, самая короткая — 10% активной. Длины следуют за колесом без скачков.
  const progress = el('div', 'wheel-progress');
  const ticks = items.map(() => {
    const tick = el('span', 'wheel-progress__tick');
    progress.append(tick);
    return tick;
  });
  container.append(list, info, progress);

  const state = { current: 0, target: 0 };
  const geo = { r: 900, lineH: 80, cx: 0, cy: 0, fadeUp: 0.09, fadeDown: 0.09, rowsUp: Infinity, rowsDown: Infinity, flat: false, left: 20 };
  let active = false;
  let activeIndex = -1;
  let snapTimer = 0;

  const rows = [];
  for (let k = -RADIUS_STEPS; k <= RADIUS_STEPS; k++) {
    const li = el('li', 'wheel-item');
    const name = el('span', 'wheel-item__name');
    const tags = el('span', 'wheel-item__tags');
    const caption = el('span', 'wheel-chip');
    const open = el('button', 'wheel-chip wheel-chip--open', '↗');
    open.type = 'button';
    open.tabIndex = -1;
    tags.append(caption, open);
    li.append(name, tags);
    list.append(li);
    rows.push({ li, name, caption, open, k, index: -1, offset: 0 });
  }

  function measure() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const portrait = w <= 720 || w / h < 0.85;
    // На телефоне — под левую колонку, на 2pt (≈2.7px) меньше прежнего
    const font = portrait ? Math.max(23, w * 0.075 - (2 * 4) / 3) : Math.min(88, Math.max(40, w * 0.045));
    geo.flat = portrait;
    geo.left = Math.max(16, w * 0.04);
    list.classList.toggle('is-flat', portrait);
    info.style.setProperty('--info-y', `${h * 0.68}px`);
    // Телефон: на одну строку меньше сверху и снизу, та же высота — шаг больше в 1.25 раза
    geo.lineH = font * 1.12 * (portrait ? 1.25 : 1);
    geo.r = Math.max(h * 0.95, 640);
    geo.cy = h * (portrait ? 0.68 : 0.5);
    geo.cx = (portrait ? 20 : Math.max(24, w * 0.075)) - geo.r;
    // На телефоне купюра стоит над колесом — верхние строки гаснут быстрее
    geo.fadeUp = portrait ? 0.48 : 0.09;
    geo.fadeDown = portrait ? 0.105 : 0.09;
    geo.rowsUp = portrait ? 2 : Infinity; // сколько строк видно над главной
    geo.rowsDown = portrait ? 4 : Infinity; // и под ней
    // Телефон: крайние видимые строки сверху и снизу одинаково бледные
    geo.edgeOpacity = 0.3;
    if (portrait) {
      // Прогресс параллелен списку: от верха последнего названия сверху до 32px над низом экрана
      const top = geo.cy - geo.rowsUp * geo.lineH - font * 0.5;
      progress.style.top = `${top}px`;
      progress.style.height = `${Math.max(80, h - 32 - top)}px`;
    } else {
      progress.style.top = '';
      progress.style.height = '';
    }
    list.style.setProperty('--wheel-font', `${font}px`);
  }

  function fill(row, index) {
    if (row.index === index) return;
    row.index = index;
    const t = text(index);
    row.name.textContent = t.name;
    row.caption.textContent = t.caption;
    row.open.setAttribute('aria-label', labels().open);
  }

  function update(dt) {
    if (!active) return;
    const k = isReduced() ? 1 : damp(lerp, dt);
    state.current += (state.target - state.current) * k;
    if (Math.abs(state.target - state.current) < 1e-4) state.current = state.target;

    const base = Math.round(state.current);
    const step = geo.lineH / geo.r; // угол на одну строку
    rows.forEach((row) => {
      const slot = base + row.k;
      fill(row, order()[mod(slot, items.length)]);
      const d = slot - state.current;
      row.offset = slot;
      const dist = Math.abs(d);
      const fade = d < 0 ? geo.fadeUp : geo.fadeDown;
      // За последней видимой строкой — плавно в ноль
      const limit = d < 0 ? geo.rowsUp : geo.rowsDown;
      const edge = Math.min(1, Math.max(0, limit + 0.5 - dist) / 0.5);
      if (geo.flat) {
        // Телефон: прямой вертикальный список у левого края
        row.li.style.transform = `translate3d(${geo.left}px, ${geo.cy + d * geo.lineH}px, 0) translateY(-50%)`;
      } else {
        const angle = d * step;
        const x = geo.cx + geo.r * Math.cos(angle);
        const y = geo.cy + geo.r * Math.sin(angle);
        row.li.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${angle}rad) translateY(-50%)`;
      }
      const fadeOpacity = geo.flat
        ? 1 - (1 - geo.edgeOpacity) * Math.min(1, dist / limit) // главная 100% → крайняя edgeOpacity
        : Math.max(0, 1 - Math.max(0, dist - 0.5) * fade);
      row.li.style.opacity = String(fadeOpacity * edge);
      row.li.classList.toggle('is-active', dist < 0.5);
    });

    updateProgress();

    const next = order()[mod(base, items.length)];
    if (next !== activeIndex) {
      activeIndex = next;
      showInfo(next);
      onChange(next);
    }
  }

  const PROGRESS = { min: 0.1, falloff: 3.5 };
  function updateProgress() {
    const pos = mod(state.current, items.length);
    ticks.forEach((tick, i) => {
      const d = Math.abs(i - pos);
      const near = Math.exp(-d / PROGRESS.falloff); // 1 у активной, плавно к 0
      const length = PROGRESS.min + (1 - PROGRESS.min) * near;
      tick.style.transform = `scaleX(${length.toFixed(4)})`;
      tick.style.opacity = (0.3 + 0.7 * Math.max(0, 1 - d)).toFixed(3);
    });
  }

  function showInfo(index) {
    const t = text(index);
    infoName.textContent = t.name;
    infoCaption.textContent = t.caption;
    info.classList.remove('is-entering');
    void info.offsetWidth; // перезапуск анимации появления
    info.classList.add('is-entering');
  }

  function scheduleSnap() {
    clearTimeout(snapTimer);
    snapTimer = setTimeout(() => { state.target = Math.round(state.target); }, 140);
  }

  container.addEventListener('wheel', (e) => {
    if (!active) return;
    e.preventDefault();
    const scale = e.deltaMode === 1 ? 32 : 1;
    state.target += (e.deltaY * scale) / (geo.lineH * 2.2);
    onHover(null); // прокрутка важнее наведения: справа — активная купюра
    scheduleSnap();
  }, { passive: false });

  let drag = null;
  container.addEventListener('pointerdown', (e) => {
    if (!active || e.button !== 0 || e.target.closest('button')) return;
    drag = { id: e.pointerId, y: e.clientY, sy: e.clientY, moved: false };
  });
  container.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    if (!drag.moved && Math.abs(e.clientY - drag.sy) > 5) {
      drag.moved = true;
      onHover(null);
      container.setPointerCapture(e.pointerId);
      container.classList.add('is-dragging');
    }
    if (drag.moved) {
      state.target -= (e.clientY - drag.y) / geo.lineH;
      drag.y = e.clientY;
    }
  });
  const release = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    if (drag.moved) {
      state.target = Math.round(state.target);
      if (container.hasPointerCapture(e.pointerId)) container.releasePointerCapture(e.pointerId);
    } else {
      // Клик по активной строке открывает купюру, по другой — докручивает к ней
      const li = e.target.closest?.('.wheel-item');
      const row = rows.find((r) => r.li === li);
      if (row?.li.classList.contains('is-active')) onOpen(row.index);
      else if (row) state.target = row.offset;
    }
    container.classList.remove('is-dragging');
    drag = null;
  };
  container.addEventListener('pointerup', release);
  container.addEventListener('pointercancel', release);

  // Наведение на строку показывает её купюру справа
  rows.forEach((row) => {
    row.li.addEventListener('pointerenter', (e) => {
      if (active && e.pointerType === 'mouse' && !drag?.moved) onHover(row.index);
    });
    row.open.addEventListener('click', () => onOpen(row.index));
  });
  list.addEventListener('pointerleave', () => onHover(null));

  window.addEventListener('keydown', (e) => {
    if (!active) return;
    if (e.key === 'ArrowDown') state.target = Math.round(state.target) + 1;
    else if (e.key === 'ArrowUp') state.target = Math.round(state.target) - 1;
    else if (e.key === 'Enter') onOpen(activeIndex);
    else return;
    e.preventDefault();
  });

  window.addEventListener('resize', measure);
  measure();

  return {
    list,
    update,
    get velocity() { return state.target - state.current; },
    // Непрерывная позиция колеса: по ней едет стопка купюр
    get position() { return state.current; },
    get index() { return activeIndex; },
    refresh() {
      rows.forEach((row) => { row.index = -1; });
      if (activeIndex >= 0) showInfo(activeIndex);
    },
    // Встать на купюру без прокрутки (например, после листания на странице купюры)
    jumpTo(index) {
      const base = Math.round(state.current);
      const slot = base + (mod(order().indexOf(index) - base, items.length));
      const near = slot - base > items.length / 2 ? slot - items.length : slot;
      state.current = state.target = near;
    },
    setActive(value) {
      active = value;
      if (value) {
        measure();
        activeIndex = -1;
        update(1);
      } else {
        onHover(null);
      }
    },
  };
}
