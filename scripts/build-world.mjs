// Собирает assets/world.json для карты: границы стран (Natural Earth 1:50m из world-atlas@2.0.2),
// у каждой страны — код ISO alpha-2 и код валюты. Названия на RU/EN сайт берёт из Intl.DisplayNames.
//
//   node scripts/build-world.mjs <папка world-atlas> <папка i18n-iso-countries> <папка country-to-currency>
//
// Формат: { countries: [{ id, a2, cur, name, p: [[[lon, lat, …], …], …] }] } —
// p — полигоны, каждый — массив колец, кольцо — плоский массив lon,lat с точностью 0.02°.

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [atlasDir, isoDir, curDir] = process.argv.slice(2);
const topo = JSON.parse(fs.readFileSync(path.join(atlasDir, 'countries-50m.json'), 'utf8'));
const codes = JSON.parse(fs.readFileSync(path.join(isoDir, 'codes.json'), 'utf8'));
const { default: toCurrency } = await import(pathToFileURL(path.join(curDir, 'index.js')));

const numToA2 = Object.fromEntries(codes.map(([a2, , num]) => [num, a2]));
// Территории без числового кода в Natural Earth
const extra = { Kosovo: ['XK', 'EUR'], 'N. Cyprus': ['CY', 'TRY'], Somaliland: ['SO', 'SOS'] };

// Декодер TopoJSON: дуги в абсолютные координаты
const { scale: [kx, ky], translate: [dx, dy] } = topo.transform;
const arcs = topo.arcs.map((arc) => {
  let x = 0;
  let y = 0;
  return arc.map(([ax, ay]) => {
    x += ax;
    y += ay;
    return [x * kx + dx, y * ky + dy];
  });
});
const ring = (ids) => {
  const out = [];
  ids.forEach((i, n) => {
    const pts = i < 0 ? arcs[~i].slice().reverse() : arcs[i];
    pts.forEach((p, j) => { if (n === 0 || j > 0) out.push(p); });
  });
  return out;
};
const round = (v) => Math.round(v * 50) / 50;
const flat = (pts) => {
  const res = [];
  let px;
  let py;
  for (const [x, y] of pts) {
    const rx = round(x);
    const ry = round(y);
    if (rx === px && ry === py) continue;
    res.push(rx, ry);
    px = rx;
    py = ry;
  }
  return res;
};

const countries = topo.objects.countries.geometries.map((g) => {
  const name = g.properties.name;
  const a2 = g.id ? numToA2[g.id] : extra[name]?.[0];
  const cur = g.id ? (a2 && toCurrency[a2]) || null : extra[name]?.[1] ?? null;
  const polys = g.type === 'Polygon' ? [g.arcs] : g.type === 'MultiPolygon' ? g.arcs : [];
  const p = polys.map((poly) => poly.map((r) => flat(ring(r))).filter((r) => r.length >= 6)).filter((poly) => poly.length);
  return { id: g.id ?? null, a2: a2 ?? null, cur, name, p };
}).filter((c) => c.p.length);

const out = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'assets', 'world.json');
fs.writeFileSync(out, JSON.stringify({ source: 'Natural Earth 1:50m via world-atlas@2.0.2', countries }));
console.log(`${countries.length} стран → ${out} (${(fs.statSync(out).size / 1024).toFixed(0)} KB)`);
console.log('без a2:', countries.filter((c) => !c.a2).map((c) => c.name).join(', '));
console.log('без валюты:', countries.filter((c) => !c.cur).map((c) => c.name).join(', '));
