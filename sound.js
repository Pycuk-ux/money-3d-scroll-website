// Звуки интерфейса без файлов: щелчок колеса и шелест купюры синтезируются в Web Audio один раз
// при включении. Звук выключен по умолчанию, выбор хранится в localStorage.
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

// Буфер из функции sample(t) → [-1, 1]
function render(seconds, sample) {
  const rate = ctx.sampleRate;
  const buffer = ctx.createBuffer(1, Math.ceil(seconds * rate), rate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = sample(i / rate, i);
  return buffer;
}

function build() {
  // Щелчок: короткий всплеск шума и высокий тон, оба гаснут за несколько миллисекунд
  let prev = 0;
  buffers.tick = render(0.045, (t) => {
    const white = Math.random() * 2 - 1;
    const click = (white - prev) * 0.5; // разность соседних — остаются только высокие частоты
    prev = white;
    return click * Math.exp(-t / 0.0035) * 0.7 + Math.sin(2 * Math.PI * 2300 * t) * Math.exp(-t / 0.006) * 0.35;
  });

  // Шелест бумаги: шум с мягкой огибающей и редкими потрескиваниями волокон
  const T = 0.32;
  let low = 0;
  let last = 0;
  buffers.flip = render(T, (t) => {
    const white = Math.random() * 2 - 1;
    low += (white - low) * 0.35; // срезаем самый верх, чтобы не шипело
    const air = low - last * 0.6;
    last = low;
    const env = Math.sin(Math.PI * Math.min(1, t / T)) ** 2 * Math.exp(-t / 0.22);
    const crackle = Math.random() < 0.004 ? (Math.random() * 2 - 1) * 0.9 : 0;
    return (air * 0.9 + crackle) * env;
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
  build();
  return ctx;
}

// Первое действие пользователя «размораживает» звук, если он был включён в прошлый раз
function unlock() {
  if (enabled) ensure()?.resume();
}
['pointerdown', 'keydown', 'touchstart'].forEach((type) => window.addEventListener(type, unlock, { passive: true }));

function play(name, { volume = 1, rate = 1 } = {}) {
  if (!enabled || !ctx || ctx.state !== 'running') return;
  const source = ctx.createBufferSource();
  source.buffer = buffers[name];
  source.playbackRate.value = rate;
  const gain = ctx.createGain();
  gain.gain.value = volume;
  source.connect(gain).connect(master);
  source.start();
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
  // Купюра перевернулась на другую сторону
  flip() {
    play('flip', { rate: 0.9 + Math.random() * 0.2 });
  },
};
