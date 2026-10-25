// Курсы валют к доллару из Open Exchange Rates через функцию /api/rates на Vercel.
// Ключ живёт только на сервере (переменная окружения OXR_APP_ID), в браузер он не попадает.

export const RATES = {
  endpoint: '/api/rates',
  // Где функции /api точно нет: локальный `npx serve` и превью на claude.ai.
  // На любом другом адресе — vercel.app или свой домен — курсы запрашиваются.
  skipHosts: ['localhost', '127.0.0.1', 'claude.ai', 'claudeusercontent.com'],
};

let data = null;

export async function loadRates() {
  const host = location.hostname;
  if (location.protocol === 'file:' || RATES.skipHosts.some((h) => host === h || host.endsWith(`.${h}`))) return null;
  try {
    const res = await fetch(RATES.endpoint);
    if (!res.ok) return null;
    data = await res.json();
    return data;
  } catch {
    return null;
  }
}

// Сколько долларов стоит 1 единица валюты, или null, если курса нет
export function usdPer(code) {
  const perUsd = data?.rates?.[code];
  return perUsd ? 1 / perUsd : null;
}

export const ratesTimestamp = () => data?.timestamp ?? null;

// Курсы загружены — значит, отсутствие валюты в них означает «нет данных», а не «ещё не пришло»
export const ratesLoaded = () => !!data?.rates;
