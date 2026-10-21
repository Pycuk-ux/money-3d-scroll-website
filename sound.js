// Звуки интерфейса: щелчок колеса и шелест купюры. Файлы загружаются и декодируются один раз
// при включении звука и играют через Web Audio без задержки.
// Звук выключен по умолчанию, выбор хранится в localStorage.
// Браузер разрешает звук только после действия пользователя — до первого клика или нажатия
// клавиши звуки молча пропускаются.

const KEY = 'paper-tender-sound';
const VOLUME = 0.25;

let enabled = read();
let ctx = null;
let master = null;
const buffers = {};
let lastTick = 0;

function read() {
  try { return localStorage.getItem(KEY) === 'on'; } catch { return false; }
}

function save() {
  try { localStorage.setItem(KEY, enabled ? 'on' : 'off'); } catch { /* приватный режим */ }
}

// Файлы звуков: щелчки храповика (assets/sounds/tick-*.mp3 — три отдельных щелчка из одной записи,
// чтобы прокрутка не звучала одинаково) и шелест бумаги для переворота купюры
const FILES = {
  tick: ['assets/sounds/tick-1.mp3', 'assets/sounds/tick-2.mp3', 'assets/sounds/tick-3.mp3'],
  flip: ['assets/sounds/flip.mp3'],
  click: ['assets/sounds/click.mp3'], // нажатие любой кнопки
  riffle: ['assets/sounds/riffle.mp3'], // пересчёт пачки, ускоренный вдвое: башня улетает и возвращается
  // Обратный свист: нарастает к пику (через 0.245 с от начала файла) и обрывается — купюра подлетает.
  // whoosh-out — тот же звук задом наперёд: резкое начало и затухание — купюра улетает
  whooshIn: ['assets/sounds/whoosh-in.mp3'],
  whooshOut: ['assets/sounds/whoosh-out.mp3'],
};
const WHOOSH_PEAK = 0.245;

function load() {
  Object.entries(FILES).forEach(([name, urls]) => {
    buffers[name] = [];
    urls.forEach((url) => {
      fetch(url)
        .then((r) => r.arrayBuffer())
        .then((data) => ctx.decodeAudioData(data))
        .then((buffer) => { buffers[name].push(buffer); })
        .catch(() => { /* без звука, но сайт работает */ });
    });
  });
}

function ensure() {
  if (ctx) return ctx;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;
  ctx = new AudioCtx();
  master = ctx.createGain();
  master.gain.value = VOLUME;
  master.connect(ctx.destination);
  load();
  return ctx;
}

// Первое действие пользователя «размораживает» звук, если он был включён в прошлый раз
function unlock() {
  if (enabled) ensure()?.resume();
}
['pointerdown', 'keydown', 'touchstart'].forEach((type) => window.addEventListener(type, unlock, { passive: true }));

function play(name, { volume = 1, rate = 1, delay = 0 } = {}) {
  const list = buffers[name];
  if (!enabled || !ctx || ctx.state !== 'running' || !list?.length) return;
  const source = ctx.createBufferSource();
  source.buffer = list[Math.floor(Math.random() * list.length)];
  source.playbackRate.value = rate;
  const gain = ctx.createGain();
  gain.gain.value = volume;
  source.connect(gain).connect(master);
  source.start(ctx.currentTime + Math.max(0, delay));
}

export const sound = {
  get enabled() { return enabled; },
  set(value) {
    enabled = value;
    save();
    if (enabled) ensure()?.resume();
  },
  // Смена строки колеса. Быстрая прокрутка не превращается в треск: щелчки не чаще раза в 35 мс
  tick(strength = 1) {
    const now = performance.now();
    if (now - lastTick < 35) return;
    lastTick = now;
    play('tick', { volume: 0.6 + 0.4 * Math.min(1, strength), rate: 0.95 + Math.random() * 0.1 });
  },
  // Купюры башни улетают на карту или возвращаются с неё
  riffle(delay = 0) {
    play('riffle', { delay, volume: 0.8 });
  },
  // Нажатие кнопки
  click() {
    play('click', { rate: 0.97 + Math.random() * 0.06 });
  },
  // Купюра перевернулась на другую сторону
  flip() {
    play('flip', { rate: 0.9 + Math.random() * 0.2 });
  },
  // Купюра подлетает к экрану за duration секунд: пик свиста — ближе к концу полёта
  whooshIn(duration) {
    play('whooshIn', { delay: duration * 0.85 - WHOOSH_PEAK });
  },
  // Купюра улетает обратно
  whooshOut() {
    play('whooshOut');
  },
};
