// Заливает коллекцию из data.js в Sanity: 46 банкнот, тексты и картинки.
// Ничего устанавливать не нужно, нужен Node 18+.
//
//   SANITY_TOKEN=... node sanity-import.mjs            — создать то, чего ещё нет (правки в Studio не трогает)
//   SANITY_TOKEN=... node sanity-import.mjs --replace  — перезаписать всё данными из data.js
//   node sanity-import.mjs --dry                       — показать, что будет залито, без отправки
//
// Данные и картинки берутся с живого сайта (SOURCE) или из локальной папки репозитория.

import fs from 'node:fs/promises';
import path from 'node:path';

const PROJECT = '6xkrruwb';
const DATASET = 'production';
const API = `https://${PROJECT}.api.sanity.io/v2025-02-19`;
const SOURCE = process.env.SOURCE || 'https://my-money-collection.vercel.app';
const TOKEN = process.env.SANITY_TOKEN;
const DRY = process.argv.includes('--dry');
const REPLACE = process.argv.includes('--replace');

const isUrl = /^https?:\/\//.test(SOURCE);
async function read(file, asText) {
  if (isUrl) {
    const res = await fetch(`${SOURCE}/${file}`);
    if (!res.ok) throw new Error(`${file}: ${res.status}`);
    return asText ? res.text() : Buffer.from(await res.arrayBuffer());
  }
  return fs.readFile(path.join(SOURCE, file), asText ? 'utf8' : undefined);
}

const code = await read('data.js', true);
const { ITEMS } = await import(`data:text/javascript,${encodeURIComponent(code)}`);

let key = 0;
const k = () => `k${(key++).toString(36)}`;
const both = (ru, en) => (ru || en ? { ru: ru ?? '', en: en ?? '' } : undefined);

async function uploadImage(file) {
  if (!file) return undefined;
  if (DRY) return { _type: 'image', asset: { _type: 'reference', _ref: `(${file})` } };
  const body = await read(file, false);
  const res = await fetch(`${API}/assets/images/${DATASET}?filename=${encodeURIComponent(path.basename(file))}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'image/png' },
    body,
  });
  if (!res.ok) throw new Error(`upload ${file}: ${res.status} ${await res.text()}`);
  const { document } = await res.json();
  return { _type: 'image', asset: { _type: 'reference', _ref: document._id } };
}

function details(item) {
  const R = item.details?.ru;
  const E = item.details?.en;
  if (!R) return {};
  return {
    summary: both(R.summary?.[1], E?.summary?.[1]),
    facts: R.facts?.map(([l, v], i) => ({ _key: k(), label: both(l, E?.facts?.[i]?.[0]), value: both(v, E?.facts?.[i]?.[1]) })),
    sections: R.sections?.map((s, i) => {
      const e = E?.sections?.[i] ?? {};
      const items = s.list ?? s.people;
      const itemsEn = e.list ?? e.people ?? [];
      return {
        _key: k(),
        title: both(s.title, e.title),
        text: s.text ? both(s.text.join('\n\n'), e.text?.join('\n\n')) : undefined,
        list: items?.map(([h, b], j) => ({ _key: k(), head: both(h, itemsEn[j]?.[0]), body: both(b, itemsEn[j]?.[1]) })),
      };
    }),
    sources: R.sources?.groups.flatMap((g, gi) => g.links.map(([url, l, n], li) => {
      const en = E?.sources?.groups?.[gi]?.links?.[li] ?? [];
      return { _key: k(), url, label: both(l, en[1]), note: both(n, en[2]) };
    })),
  };
}

const mutations = [];
for (const [i, item] of ITEMS.entries()) {
  const doc = {
    _id: `banknote-${item.id}`,
    _type: 'banknote',
    order: i + 1,
    slug: { _type: 'slug', current: item.id },
    country: both(item.name.ru, item.name.en),
    currency: item.currency,
    currencyName: item.currencyName && both(item.currencyName.ru, item.currencyName.en),
    // Номинал — только у купюр, которые уже есть; у остальных caption пока = название валюты
    denomination: item.src ? both(item.caption.ru, item.caption.en) : undefined,
    issuer: item.issuer && both(item.issuer.ru, item.issuer.en),
    material: item.material || 'cotton',
    front: await uploadImage(item.src),
    back: await uploadImage(item.back),
    ...details(item),
  };
  Object.keys(doc).forEach((f) => doc[f] === undefined && delete doc[f]);
  mutations.push({ [REPLACE ? 'createOrReplace' : 'createIfNotExists']: doc });
  console.log(`${String(i + 1).padStart(2)} ${item.name.ru}${item.src ? ' · картинки' : ''}${item.details ? ' · текст' : ''}`);
}

if (DRY) {
  console.log(`\n--dry: ${mutations.length} документов, ничего не отправлено`);
  console.log(JSON.stringify(mutations[0], null, 2).slice(0, 1500));
  process.exit(0);
}
if (!TOKEN) {
  console.error('Нужен токен: SANITY_TOKEN=... node sanity-import.mjs');
  process.exit(1);
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
console.log(`\nГотово: ${mutations.length} банкнот в Sanity (${REPLACE ? 'перезаписаны' : 'созданы, существующие не тронуты'}).`);
