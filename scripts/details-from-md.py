# Markdown с текстами купюр → details.js. Структура страницы — как в исходном файле,
# «История в одном предложении» заменяется на story (как купюра попала в коллекцию).
import json, re, sys
# src = '-' — только привести к единому виду то, что уже есть в details.js
src, out = sys.argv[1], sys.argv[2]
md = open(src, encoding='utf-8').read() if src != '-' else ''
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

# Единый вид страницы для всех купюр:
# - в плашке только эмитент, валюта, материал (с большой буквы) и размер;
# - «Три интересных факта про дизайн» (или «Несколько…», если фактов не три);
# - «Дизайн, авторы, художники» без строк вида «информация не найдена».
FACTS = {'ru': ['Эмитент', 'Валюта', 'Материал', 'Размер'], 'en': ['Issuer', 'Currency', 'Material', 'Size']}
CURRENCY = {  # если валюты нет в фактах исходника
  'ukraine': {'ru': 'украинская гривна (UAH)', 'en': 'Ukrainian hryvnia (UAH)'},
  'bangladesh': {'ru': 'бангладешская така (BDT)', 'en': 'Bangladeshi taka (BDT)'},
}
FACTS_TITLE = {'ru': ('Три интересных факта про дизайн', 'Несколько интересных фактов про дизайн'),
               'en': ('Three interesting design facts', 'A few interesting design facts')}
PEOPLE_TITLE = {'ru': 'Дизайн, авторы, художники', 'en': 'Design, authors, artists'}
NOT_FOUND = ('информация', 'no information')

def normalize(id_, lang, d):
    facts = dict((k, v) for k, v in d['facts'])
    if FACTS[lang][1] not in facts and id_ in CURRENCY:
        facts[FACTS[lang][1]] = CURRENCY[id_][lang]
    d['facts'] = [[k, facts[k][:1].upper() + facts[k][1:] if k == FACTS[lang][2] else facts[k]] for k in FACTS[lang] if k in facts]
    d.pop('summary', None)
    for sec in d['sections']:
        if 'list' in sec:
            sec['title'] = FACTS_TITLE[lang][0 if len(sec['list']) == 3 else 1]
        if 'people' in sec:
            sec['title'] = PEOPLE_TITLE[lang]
            sec['people'] = [p for p in sec['people'] if not p[1].lower().startswith(NOT_FOUND)]
    return d

result = {}
parts = []
if md:
    ru, en = md.split('# English version')
    parts = [('ru', ru.split('# Русская версия')[1]), ('en', en)]
for lang, part in parts:
    blocks = re.split(r'\n## \d\d\. ', part)[1:]
    assert len(blocks) == 5, len(blocks)
    for i, b in enumerate(blocks):
        d = parse(b, lang, i)
        if IDS[i] in STORY:
            d['story'] = STORY[IDS[i]][lang]
        result.setdefault(IDS[i], {})[lang] = normalize(IDS[i], lang, d)
# Новые страны дописываются к уже имеющимся в details.js
try:
    old = open(out, encoding='utf-8').read()
    existing = json.loads(old[old.index('{'):old.rindex('}') + 1])
except (FileNotFoundError, ValueError):
    existing = {}
for id_, langs in result.items():  # истории «как попала» не теряются при повторной сборке
    for lang, d in langs.items():
        if 'story' not in d and existing.get(id_, {}).get(lang, {}).get('story'):
            d['story'] = existing[id_][lang]['story']
existing.update(result)
result = {id_: {lang: normalize(id_, lang, d) for lang, d in langs.items()} for id_, langs in existing.items()}
head = ('// Тексты страниц купюр, все в одном месте: data.js подключает их к купюрам по id.\n'
        '// facts — эмитент, валюта, материал, размер; story — «Как купюра оказалась у меня» (пока её нет,\n'
        '// блока на странице нет); sections — стороны, концепция, факты о дизайне, авторы, история; sources.\n'
        '// Собирается скриптом scripts/details-from-md.py: python3 scripts/details-from-md.py <file.md> details.js\n'
        '// добавляет страны из markdown, а с «-» вместо файла только приводит всё к единому виду.\n\n')
open(out, 'w', encoding='utf-8').write(head + 'export const DETAILS = ' + json.dumps(result, ensure_ascii=False, indent=2) + ';\n')
print({k: [len(v['ru']['sections']), len(v['en']['sections']), len(v['ru']['facts'])] for k, v in result.items()})
