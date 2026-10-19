// Контент из Sanity (проект 6xkrruwb, датасет production — публичный на чтение).
// Купюры из Sanity заменяют одноимённые записи data.js (совпадение по коду валюты),
// новые добавляются, порядок — по полю «Порядок в колесе». Если Sanity недоступен
// (нет сети, превью на claude.ai, не настроен CORS), сайт остаётся на data.js.

export const SANITY = {
  projectId: '6xkrruwb',
  dataset: 'production',
  apiVersion: '2025-02-19',
  timeout: 3000, // мс: дольше прелоадер не ждёт
  imageWidth: 1024,
};

const QUERY = `*[_type == "banknote" && !(_id in path("drafts.**"))] | order(order asc) {
  order, "slug": slug.current, country, currency, currencyName, denomination, issuer, material,
  "front": front.asset->url, "back": back.asset->url,
  summary, facts, sections, sources
}`;

const LABELS = {
  ru: { summary: 'История в одном предложении', sources: 'Источники и ссылки' },
  en: { summary: 'History in one sentence', sources: 'Sources and links' },
};

const pick = (field, lang) => field?.[lang] ?? field?.ru ?? field?.en ?? '';
const image = (url) => (url ? `${url}?w=${SANITY.imageWidth}` : undefined);

function details(doc, lang) {
  const has = doc.summary || doc.facts?.length || doc.sections?.length || doc.sources?.length;
  if (!has) return undefined;
  return {
    facts: doc.facts?.map((f) => [pick(f.label, lang), pick(f.value, lang)]),
    summary: doc.summary ? [LABELS[lang].summary, pick(doc.summary, lang)] : undefined,
    sections: (doc.sections ?? []).map((s) => ({
      title: pick(s.title, lang),
      // Пустая строка в тексте Sanity — новый абзац
      text: pick(s.text, lang) ? pick(s.text, lang).split(/\n\s*\n/) : undefined,
      list: s.list?.length ? s.list.map((p) => [pick(p.head, lang), pick(p.body, lang)]) : undefined,
    })),
    sources: doc.sources?.length
      ? {
        title: LABELS[lang].sources,
        groups: [{ title: '', links: doc.sources.map((l) => [l.url, pick(l.label, lang), pick(l.note, lang)]) }],
      }
      : undefined,
  };
}

function toItem(doc) {
  const both = (field) => (field ? { ru: pick(field, 'ru'), en: pick(field, 'en') } : undefined);
  const d = { ru: details(doc, 'ru'), en: details(doc, 'en') };
  return {
    id: doc.slug || doc.currency?.toLowerCase(),
    currency: doc.currency,
    currencyName: both(doc.currencyName),
    material: doc.material || 'cotton',
    name: both(doc.country),
    caption: both(doc.denomination),
    issuer: both(doc.issuer),
    src: image(doc.front),
    back: image(doc.back),
    details: d.ru || d.en ? d : undefined,
    order: doc.order,
  };
}

// Подмешивает купюры из Sanity в items (меняет массив на месте). Возвращает их число.
export async function mergeSanity(items) {
  const url = `https://${SANITY.projectId}.apicdn.sanity.io/v${SANITY.apiVersion}/data/query/${SANITY.dataset}`
    + `?query=${encodeURIComponent(QUERY)}`;
  let docs;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), SANITY.timeout);
    const res = await fetch(url, { signal: ctrl.signal });
    clearTimeout(timer);
    if (!res.ok) return 0;
    docs = (await res.json()).result;
  } catch {
    return 0;
  }
  if (!Array.isArray(docs) || !docs.length) return 0;

  items.forEach((item, i) => { item.order ??= i + 1; });
  docs.forEach((doc) => {
    if (!doc.currency) return;
    const next = toItem(doc);
    const existing = items.find((it) => it.currency === doc.currency);
    if (!existing) {
      items.push(next);
      return;
    }
    // Пустые поля Sanity не затирают данные из data.js
    Object.entries(next).forEach(([key, value]) => { if (value !== undefined && value !== '') existing[key] = value; });
  });
  items.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  return docs.length;
}
