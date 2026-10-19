// Вся коллекция в одном Markdown-файле ⇄ Sanity.
// Ничего устанавливать не нужно, нужен Node 18+.
//
//   node sanity-md.mjs export [collection.md]                 — выгрузить коллекцию из Sanity в файл (токен не нужен)
//   SANITY_TOKEN=... node sanity-md.mjs import [collection.md] — залить файл в Sanity
//   node sanity-md.mjs import collection.md --dry             — показать, что изменится, без отправки
//
// Заливка обновляет только то, что написано в файле: пустые поля и разделы, которых нет,
// в Sanity не трогаются. Фото — путь к файлу рядом с collection.md; «(в Sanity)» — оставить как есть.
//
// Формат одной страны:
//
//   # UAH
//   Порядок: 1
//   Страна: Украина | Ukraine
//   Валюта: гривна | Hryvnia
//   Номинал: 1 гривна | 1 Hryvnia
//   Эмитент: Национальный банк Украины | National Bank of Ukraine
//   Материал: cotton            (cotton — хлопок и лён, polymer — полимер)
//   Лицо: photos/uah-front.jpg
//   Оборот: photos/uah-back.jpg
//
//   ## История в одном предложении
//   RU: …
//   EN: …
//
//   ## Факты
//   - Эмитент | Issuer :: Национальный банк Украины | National Bank of Ukraine
//
//   ## Раздел: Лицевая сторона | Front
//   RU:
//   Абзац. Пустая строка — новый абзац.
//   EN:
//   Paragraph.
//   - Пункт списка | List item :: описание | description
//
//   ## Источники
//   - https://… | Название | Title | пояснение | note

import fs from 'node:fs/promises';
import path from 'node:path';

const PROJECT = '6xkrruwb';
const DATASET = 'production';
const API = `https://${PROJECT}.api.sanity.io/v2025-02-19`;
const TOKEN = process.env.SANITY_TOKEN;

const [mode = 'help', fileArg = 'collection.md'] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const DRY = process.argv.includes('--dry');
const KEEP_IMAGE = '(в Sanity)';

const FIELDS = [
  ['order', 'Порядок', 'number'],
  ['country', 'Страна', 'i18n'],
  ['currencyName', 'Валюта', 'i18n'],
  ['denomination', 'Номинал', 'i18n'],
  ['issuer', 'Эмитент', 'i18n'],
  ['material', 'Материал', 'string'],
  ['front', 'Лицо', 'image'],
  ['back', 'Оборот', 'image'],
];

/* ---------- Sanity ---------- */

async function query(groq) {
  const res = await fetch(`${API}/data/query/${DATASET}?query=${encodeURIComponent(groq)}`, {
    headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {},
  });
  if (!res.ok) throw new Error(`Sanity: ${res.status} ${await res.text()}`);
  return (await res.json()).result;
}

async function uploadImage(file) {
  const body = await fs.readFile(file);
  const ext = path.extname(file).slice(1).toLowerCase().replace('jpg', 'jpeg');
  const res = await fetch(`${API}/assets/images/${DATASET}?filename=${encodeURIComponent(path.basename(file))}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': `image/${ext}` },
    body,
  });
  if (!res.ok) throw new Error(`Загрузка ${file}: ${res.status} ${await res.text()}`);
  const { document } = await res.json();
  return { _type: 'image', asset: { _type: 'reference', _ref: document._id } };
}

/* ---------- Документы → Markdown ---------- */

const pair = (v) => (v ? [v.ru ?? '', v.en ?? ''].join(' | ') : '');

function docToMd(doc) {
  const out = [`# ${doc.currency}`];
  for (const [key, label, type] of FIELDS) {
    let value = doc[key];
    if (type === 'i18n') value = pair(value);
    if (type === 'image') value = value?.asset ? KEEP_IMAGE : '';
    out.push(`${label}: ${value ?? ''}`);
  }
  out.push('', '## История в одном предложении', `RU: ${doc.summary?.ru ?? ''}`, `EN: ${doc.summary?.en ?? ''}`);
  out.push('', '## Факты');
  (doc.facts ?? []).forEach((f) => out.push(`- ${pair(f.label)} :: ${pair(f.value)}`));
  (doc.sections ?? []).forEach((s) => {
    out.push('', `## Раздел: ${pair(s.title)}`);
    if (s.text?.ru || s.text?.en) out.push('RU:', s.text?.ru ?? '', 'EN:', s.text?.en ?? '');
    (s.list ?? []).forEach((p) => out.push(`- ${pair(p.head)} :: ${pair(p.body)}`));
  });
  out.push('', '## Источники');
  (doc.sources ?? []).forEach((l) => out.push(`- ${[l.url, l.label?.ru, l.label?.en, l.note?.ru, l.note?.en].map((v) => v ?? '').join(' | ')}`));
  return out.join('\n');
}

/* ---------- Markdown → изменения ---------- */

let keyN = 0;
const key = () => `md${Date.now().toString(36)}${(keyN++).toString(36)}`;

// «ru | en»; без «|» — одно значение на оба языка
function i18n(text) {
  const t = text.trim();
  if (!t) return undefined;
  const [ru, en] = t.includes(' | ') ? t.split(' | ', 2) : [t, t];
  return { ru: ru.trim(), en: (en ?? ru).trim() };
}

function parseItem(line) {
  const [a, b = ''] = line.replace(/^-\s*/, '').split(' :: ');
  return [i18n(a), i18n(b)];
}

// Текст RU:/EN: внутри раздела; RU: на той же строке — однострочное значение
function parseBilingual(lines) {
  const text = { ru: [], en: [] };
  let lang = null;
  for (const line of lines) {
    const m = line.match(/^(RU|EN):\s*(.*)$/);
    if (m) {
      lang = m[1].toLowerCase();
      if (m[2]) text[lang].push(m[2]);
    } else if (lang && !line.startsWith('- ')) {
      text[lang].push(line);
    }
  }
  const join = (arr) => arr.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  const ru = join(text.ru);
  const en = join(text.en);
  return ru || en ? { ru, en } : undefined;
}

function parseCountry(block, baseDir) {
  const lines = block.split('\n');
  const currency = lines[0].replace(/^#\s*/, '').trim().split(/\s/)[0].toUpperCase();
  const set = {};
  const images = {};

  // Шапка: строки «Поле: значение» до первого «## »
  let i = 1;
  for (; i < lines.length && !lines[i].startsWith('## '); i++) {
    const m = lines[i].match(/^([^:]+):\s*(.*)$/);
    if (!m) continue;
    const field = FIELDS.find(([, label]) => label.toLowerCase() === m[1].trim().toLowerCase());
    if (!field || !m[2].trim()) continue;
    const [name, , type] = field;
    const value = m[2].trim();
    if (type === 'number') set[name] = Number(value);
    else if (type === 'string') set[name] = value;
    else if (type === 'i18n') set[name] = i18n(value);
    else if (type === 'image' && value !== KEEP_IMAGE) images[name] = path.resolve(baseDir, value);
  }

  // Разделы «## …»
  const parts = [];
  for (; i < lines.length; i++) {
    if (lines[i].startsWith('## ')) parts.push({ head: lines[i].slice(3).trim(), lines: [] });
    else if (parts.length) parts[parts.length - 1].lines.push(lines[i]);
  }
  const sections = [];
  for (const { head, lines: body } of parts) {
    const items = body.filter((l) => l.startsWith('- '));
    if (/^история/i.test(head)) {
      const summary = parseBilingual(body);
      if (summary) set.summary = summary;
    } else if (/^факты/i.test(head)) {
      if (items.length) set.facts = items.map((l) => {
        const [label, value] = parseItem(l);
        return { _key: key(), label, value };
      });
    } else if (/^источники/i.test(head)) {
      if (items.length) set.sources = items.map((l) => {
        const [url, lr, le, nr, ne] = l.replace(/^-\s*/, '').split(' | ').map((v) => v?.trim() ?? '');
        return { _key: key(), url, label: { ru: lr, en: le || lr }, note: { ru: nr, en: ne || nr } };
      });
    } else if (/^раздел:/i.test(head)) {
      const section = { _key: key(), title: i18n(head.replace(/^раздел:\s*/i, '')) };
      const text = parseBilingual(body);
      if (text) section.text = text;
      if (items.length) section.list = items.map((l) => {
        const [h, b] = parseItem(l);
        return { _key: key(), head: h, body: b };
      });
      sections.push(section);
    }
  }
  if (sections.length) set.sections = sections;
  Object.keys(set).forEach((k) => set[k] === undefined && delete set[k]);
  return { currency, set, images };
}

/* ---------- Команды ---------- */

if (mode === 'export') {
  const docs = await query(`*[_type == "banknote" && !(_id in path("drafts.**"))] | order(order asc)`);
  const head = [
    '<!-- Коллекция для Sanity. Правь и заливай: SANITY_TOKEN=... node sanity-md.mjs import collection.md',
    '     «Поле: ru | en»; без «|» — одно значение на оба языка. Пустое поле — не трогать.',
    `     Фото: путь к файлу рядом с этим .md; «${KEEP_IMAGE}» — оставить загруженное. -->`,
  ].join('\n');
  await fs.writeFile(fileArg, `${head}\n\n${docs.map(docToMd).join('\n\n---\n\n')}\n`);
  console.log(`Выгружено ${docs.length} банкнот в ${fileArg}`);
} else if (mode === 'import') {
  const md = await fs.readFile(fileArg, 'utf8');
  const baseDir = path.dirname(path.resolve(fileArg));
  const blocks = md.replace(/<!--[\s\S]*?-->/g, '').split(/^(?=# )/m).filter((b) => b.startsWith('# '));
  const countries = blocks.map((b) => parseCountry(b.replace(/\n---\s*$/m, ''), baseDir));
  if (!DRY && !TOKEN) {
    console.error('Нужен токен: SANITY_TOKEN=... node sanity-md.mjs import collection.md');
    process.exit(1);
  }
  const existing = DRY ? [] : await query(`*[_type == "banknote" && !(_id in path("drafts.**"))]{_id, currency}`);

  const mutations = [];
  for (const { currency, set, images } of countries) {
    for (const [field, file] of Object.entries(images)) {
      await fs.access(file).catch(() => { throw new Error(`${currency}: нет файла ${file}`); });
      set[field] = DRY ? `(загрузить ${path.basename(file)})` : await uploadImage(file);
    }
    const found = existing.find((d) => d.currency === currency);
    const id = found?._id ?? `banknote-${currency.toLowerCase()}`;
    if (!found) mutations.push({ createIfNotExists: { _id: id, _type: 'banknote', currency } });
    if (Object.keys(set).length) mutations.push({ patch: { id, set } });
    const fields = Object.keys(set);
    console.log(`${currency.padEnd(4)} ${found || DRY ? '' : '(новая) '}${fields.length ? fields.join(', ') : '— без изменений'}`);
  }

  if (DRY) {
    console.log(`\n--dry: стран в файле — ${countries.length}, ничего не отправлено`);
    console.log(JSON.stringify(mutations.slice(0, 2), null, 2).slice(0, 2500));
    process.exit(0);
  }
  const res = await fetch(`${API}/data/mutate/${DATASET}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ mutations }),
  });
  if (!res.ok) {
    console.error(`Sanity ответил ${res.status}: ${await res.text()}`);
    process.exit(1);
  }
  console.log(`\nГотово. Стран обновлено: ${countries.length}. Изменения уже опубликованы.`);
} else {
  console.log('node sanity-md.mjs export [collection.md]   |   SANITY_TOKEN=... node sanity-md.mjs import [collection.md] [--dry]');
}
