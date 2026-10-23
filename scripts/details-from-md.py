# Markdown с текстами купюр → details.js. Структура страницы — как в исходном файле,
# «История в одном предложении» заменяется на story (как купюра попала в коллекцию).
import json, re, sys
src, out = sys.argv[1], sys.argv[2]
md = open(src, encoding='utf-8').read()
IDS = ['armenia', 'azerbaijan', 'belarus', 'bosnia-and-herzegovina', 'brazil']
TITLES = {
  'ru': ['Драм — Армения', 'Манат — Азербайджан', 'Белорусский рубль — Беларусь', 'Конвертируемая марка — Босния и Герцеговина', 'Реал — Бразилия'],
  'en': ['Dram — Armenia', 'Manat — Azerbaijan', 'Belarusian Ruble — Belarus', 'Convertible Mark — Bosnia and Herzegovina', 'Real — Brazil'],
}
STORY = {'armenia': {
  'ru': 'Мой друг и по совместительству одноклубник по баскетбольной сборной университета Паша поделился ею, когда узнал, что я коллекционирую купюры.',
  'en': 'My friend Pasha, who is also my teammate on the university basketball team, gave it to me when he found out I collect banknotes.',
}}
clean = lambda s: re.sub(r'\*+', '', s).strip()

def parse(block, lang, idx):
    d = {'title': TITLES[lang][idx], 'facts': [], 'sections': []}
    cur = None
    for raw in block.split('\n'):
        line = raw.rstrip()
        if not line or line.startswith('## ') or line == '---':
            continue
        m = re.match(r'- \*\*(.+?):\*\* (.+)', line)
        if m and cur is None:
            d['facts'].append([m.group(1), clean(m.group(2))]); continue
        if line.startswith('**История в одном предложении') or line.startswith('**History in one sentence'):
            continue
        if line.startswith('### '):
            title = line[4:].strip()
            low = title.lower()
            kind = 'sources' if ('источники' in low or 'sources' in low) else 'list' if ('детал' in low or 'details' in low) else 'people' if ('авторы' in low or 'contributors' in low) else 'text'
            cur = {'title': title, 'kind': kind, 'items': []}
            if kind == 'sources':
                d['sources'] = {'title': title, 'groups': [{'links': []}]}
            else:
                d['sections'].append(cur)
            continue
        if cur is None:
            continue
        if cur['kind'] == 'sources':
            m = re.match(r'\d+\. \[(.+?)\]\((.+?)\)', line)
            d['sources']['groups'][0]['links'].append([m.group(2), m.group(1)])
        elif cur['kind'] == 'list':
            m = re.match(r'\d+\. \*\*(.+?)\*\* (.+)', line)
            if m: cur['items'].append([clean(m.group(1)).rstrip('.'), clean(m.group(2))])
            else: cur['items'][-1][1] += ' ' + clean(line)
        elif cur['kind'] == 'people':
            m = re.match(r'\*\*(.+?)\*\* (.+)', line)
            cur['items'].append([clean(m.group(1)).rstrip('.'), clean(m.group(2))])
        else:
            cur['items'].append(clean(line))
    for sec in d['sections']:
        kind, items = sec.pop('kind'), sec.pop('items')
        sec['list' if kind == 'list' else 'people' if kind == 'people' else 'text'] = items
    return d

ru, en = md.split('# English version')
ru = ru.split('# Русская версия')[1]
result = {}
for lang, part in (('ru', ru), ('en', en)):
    blocks = re.split(r'\n## \d\d\. ', part)[1:]
    assert len(blocks) == 5, len(blocks)
    for i, b in enumerate(blocks):
        d = parse(b, lang, i)
        if IDS[i] in STORY:
            d['story'] = STORY[IDS[i]][lang]
        result.setdefault(IDS[i], {})[lang] = d
head = ('// Тексты страниц купюр. data.js подключает их к купюрам по id. Формат тот же, что у details в data.js,\n'
        '// плюс story — текст «Как она ко мне попала»; пока истории нет, плашки на странице нет.\n'
        '// Собрано из markdown скриптом scripts/details-from-md.py — новые страны удобно добавлять так же.\n\n')
open(out, 'w', encoding='utf-8').write(head + 'export const DETAILS = ' + json.dumps(result, ensure_ascii=False, indent=2) + ';\n')
print({k: [len(v['ru']['sections']), len(v['en']['sections']), len(v['ru']['facts'])] for k, v in result.items()})
