// Коллекция и тексты интерфейса на двух языках.
// 46 стран, по одной банкноте от каждой. Порядок — как в колесе.
// currency — код валюты ISO 4217 (для курса к доллару), currencyName — её название.
// src / back — лицо и оборот. Пока картинки нет, сцена рисует заглушку с кодом валюты.
// caption — номинал; пока он неизвестен, показывается название валюты.
// details — текст страницы купюры; если его нет, страница показывает основные данные.

export const ITEMS = [
  {
    id: 'ukraine',
    currency: 'UAH',
    currencyName: { ru: 'гривна', en: 'Hryvnia' },
    material: 'cotton',
    name: { ru: 'Украина', en: 'Ukraine' },
    src: 'assets/objects/06.png',
    back: 'assets/objects/06-back.png',
    caption: { ru: '1 гривна', en: '1 Hryvnia' },
    issuer: { ru: 'Национальный банк Украины', en: 'National Bank of Ukraine' },
    details: {
      ru: {
        title: 'Гривна — Украина',
        facts: [
          ['Эмитент', 'Национальный банк Украины (НБУ)'],
          ['Материал', 'специальная банкнотная бумага'],
          ['Размер', '118 × 63 мм'],
          ['Образец', '2006'],
        ],
        summary: ['История в одном предложении', 'Владимир Великий на лицевой стороне и реконструкция укреплённого Киева на обороте связывают образ правителя с городом его эпохи.'],
        sections: [
          {
            title: 'Лицевая сторона — Владимир Великий',
            text: ['На банкноте изображён Владимир Великий — киевский князь конца X — начала XI века, при котором произошло крещение Руси. Его портрет соседствует с фигурами святых, государственным трезубцем и орнаментами, отсылающими к средневековому наследию. Жёлто-голубая палитра и крупная цифра «1» придают композиции узнаваемый национальный характер. Портрет — современный художественный образ исторического правителя, а не прижизненное изображение.'],
          },
          {
            title: 'Оборотная сторона — Град Владимира в Киеве',
            text: ['Главный сюжет оборота — Град Владимира, укреплённая часть древнего Киева, развивавшаяся при князе Владимире. Это не фотография сохранившегося города, а историческая реконструкция. Справа от городского пейзажа изображена декоративная композиция с военным снаряжением, крестом и мотивами искусства той эпохи. Вместе обе стороны превращают банкноту в небольшую иллюстрированную историю раннесредневекового Киева.'],
          },
          {
            title: 'Три детали дизайна',
            list: [
              ['Портрет как водяной знак', 'На светлом поле слева от основного портрета есть его повторение, видимое на просвет.'],
              ['Символ старинной гривны', 'Небольшие изображения на двух сторонах совмещаются при просмотре банкноты на свет; в них проявляется буква «У».'],
              ['Семицветная печать', 'На обороте использована специальная орловская офсетная печать, позволяющая получать точные стыки красок в защитных узорах.'],
            ],
          },
          {
            title: 'Создание дизайна и участники',
            people: [
              ['Национальный банк Украины', 'Эмитент, заказчик и орган, утвердивший выпуск банкноты данного образца. Образец 2006 года введён в обращение 22 мая 2006 года. Экземпляр 2011 года сохраняет дизайн этого образца; изменения касались года выпуска и подписи главы НБУ.'],
              ['Василий Лопата', 'Художник-график, соавтор первых эскизов гривны начала 1990-х годов; создавал портреты и пейзажи для первоначальной серии банкнот.'],
              ['Борис Максимов', 'Художник-дизайнер, соавтор первоначального оформления гривны, работавший над общей графической концепцией, орнаментами, цветами и шрифтами.'],
            ],
            text: [
              'Важно об авторстве: подтверждена роль Лопаты и Максимова в становлении визуальной системы гривны, но найденные источники не позволяют надёжно установить персональное авторство всех элементов именно редизайна 2006 года. В материалах об этом образце также упоминается коллектив художников НБУ. Отдельная дизайн-студия по аналогии с O Street для данной версии не подтверждена.',
              'Производство: Банкнотно-монетный двор Национального банка Украины — профильный национальный производственный комплекс. Авторство творческого дизайна и производство банкнот следует учитывать отдельно.',
            ],
          },
          {
            title: 'Исторический контекст',
            text: ['Первоначальные бумажные гривны появились после восстановления независимости Украины и начала денежной реформы 1990-х годов. В ранних версиях одногривневой банкноты Владимир Великий уже был главным персонажем, но на обороте изображались руины Херсонеса. В последующих вариантах сюжет заменили на Град Владимира в Киеве: акцент сместился к столице и её средневековой истории.'],
          },
        ],
        sources: {
          title: 'Источники и ссылки',
          groups: [
            {
              title: 'Официальные источники о банкноте',
              links: [
                ['https://www.otpbank.com.ua/pdf/privateclients/documents/exchange-banknote/bn11.pdf', 'Национальный банк Украины — техническое описание банкноты 1 гривна образца 2006 года (PDF, копия)', 'описание сюжетов, орнаментов и защитных элементов'],
                ['https://bank.gov.ua/admin_uploads/banknote/f48a06b1252f484c9d009d9758483a8a/Poster_1_2006.pdf', 'НБУ — официальный плакат с защитными признаками банкноты (PDF)', 'водяной знак, защитная нить, микротекст'],
                ['https://visnyk.bank.gov.ua/archive/2006/5.pdf', 'Вестник НБУ, май 2006 (PDF)', 'введение образца в обращение 22 мая 2006 года'],
                ['https://visnyk.bank.gov.ua/archive/2011/8.pdf', 'Вестник НБУ, август 2011 (PDF)', 'выпуск 2011 года без смены основного дизайна'],
                ['https://talan.bank.gov.ua/uploads/navchalni_materialy/210kh297-putivnik-istoriia-grivni-vulitsiami-kiieva.pdf?v=2', 'НБУ — путеводитель по истории гривны (PDF)', 'историческое объяснение Града Владимира'],
              ],
            },
            {
              title: 'Художники и история графического дизайна',
              links: [
                ['https://www.gallery.pl.ua/batko-ukra%D1%97nsko%D1%97-grivni.html', 'Полтавский художественный музей — «Батько української гривні»', 'роли Василия Лопаты и Бориса Максимова в первоначальном дизайне'],
                ['https://podrobnosti.ua/345056-utochnenie-avtorami-grivny-javljajutsja-boris-maksimov-i-vasilij-lopata.html', 'Podrobnosti — уточнение об авторах гривны (2006)', 'разделение функций дизайнеров'],
                ['https://myfinance.co.ua/spetsproekty/hryvnia/istoriia-banknoty-v-odnu-hryvniu-sto-tysiach-za-odnu-5785/', 'MyFinance — история одногривневой банкноты', 'сравнение версий оформления'],
              ],
            },
          ],
        },
      },
      en: {
        title: 'Hryvnia — Ukraine',
        facts: [
          ['Issuer', 'National Bank of Ukraine (NBU)'],
          ['Material', 'special banknote paper'],
          ['Size', '118 × 63 mm'],
          ['Design sample', '2006'],
        ],
        summary: ['History in one sentence', 'Volodymyr the Great on the front and a reconstruction of fortified Kyiv on the back connect the image of the ruler with the city of his era.'],
        sections: [
          {
            title: 'Front — Volodymyr the Great',
            text: ['The note shows Volodymyr the Great, Prince of Kyiv in the late 10th and early 11th centuries, under whom Rus was baptised. His portrait sits beside figures of saints, the state trident and ornaments that refer to the medieval heritage. The yellow and blue palette and the large “1” give the composition a recognisable national character. The portrait is a modern artistic image of a historical ruler, not a likeness made in his lifetime.'],
          },
          {
            title: 'Back — Volodymyr’s City in Kyiv',
            text: ['The main subject of the back is Volodymyr’s City, the fortified part of ancient Kyiv that grew under Prince Volodymyr. It is not a photograph of a surviving city but a historical reconstruction. To the right of the cityscape is a decorative composition with military equipment, a cross and motifs from the art of the period. Together the two sides turn the note into a small illustrated history of early medieval Kyiv.'],
          },
          {
            title: 'Three design details',
            list: [
              ['Portrait as a watermark', 'On the light field to the left of the main portrait there is a repeat of it, visible against the light.'],
              ['The old hryvnia symbol', 'Small images on the two sides line up when the note is held to the light, revealing the letter “У”.'],
              ['Seven-colour printing', 'The back uses special Orlov offset printing, which gives exact colour joins in the security patterns.'],
            ],
          },
          {
            title: 'Design and contributors',
            people: [
              ['National Bank of Ukraine', 'Issuer, client and the body that approved this design. The 2006 design entered circulation on 22 May 2006. The 2011 note keeps this design; only the year of issue and the governor’s signature changed.'],
              ['Vasyl Lopata', 'Graphic artist and co-author of the first hryvnia sketches in the early 1990s; drew portraits and landscapes for the original series.'],
              ['Borys Maksymov', 'Designer and co-author of the original hryvnia look, who worked on the overall graphic concept, ornaments, colours and lettering.'],
            ],
            text: [
              'A note on authorship: the role of Lopata and Maksymov in shaping the hryvnia’s visual system is confirmed, but the sources found do not reliably attribute every element of the 2006 redesign to individual artists. Materials about this design also mention a team of NBU artists. No separate design studio, like O Street, is confirmed for this version.',
              'Production: the Banknote Printing and Minting Works of the National Bank of Ukraine, the country’s dedicated production plant. Creative authorship and production should be considered separately.',
            ],
          },
          {
            title: 'Historical context',
            text: ['The first paper hryvnias appeared after Ukraine restored its independence and began the currency reform of the 1990s. Volodymyr the Great was already the main figure on early one-hryvnia notes, but their back showed the ruins of Chersonesus. Later versions replaced it with Volodymyr’s City in Kyiv, shifting the focus to the capital and its medieval history.'],
          },
        ],
        sources: {
          title: 'Sources and links',
          groups: [
            {
              title: 'Official sources on the note',
              links: [
                ['https://www.otpbank.com.ua/pdf/privateclients/documents/exchange-banknote/bn11.pdf', 'National Bank of Ukraine — technical description of the 1 hryvnia note, 2006 design (PDF, copy)', 'subjects, ornaments and security features'],
                ['https://bank.gov.ua/admin_uploads/banknote/f48a06b1252f484c9d009d9758483a8a/Poster_1_2006.pdf', 'NBU — official poster with the note’s security features (PDF)', 'watermark, security thread, microtext'],
                ['https://visnyk.bank.gov.ua/archive/2006/5.pdf', 'NBU Herald, May 2006 (PDF)', 'the design entering circulation on 22 May 2006'],
                ['https://visnyk.bank.gov.ua/archive/2011/8.pdf', 'NBU Herald, August 2011 (PDF)', 'the 2011 issue without a change of design'],
                ['https://talan.bank.gov.ua/uploads/navchalni_materialy/210kh297-putivnik-istoriia-grivni-vulitsiami-kiieva.pdf?v=2', 'NBU — guide to the history of the hryvnia (PDF)', 'historical background of Volodymyr’s City'],
              ],
            },
            {
              title: 'Artists and graphic design history',
              links: [
                ['https://www.gallery.pl.ua/batko-ukra%D1%97nsko%D1%97-grivni.html', 'Poltava Art Museum — “Father of the Ukrainian hryvnia”', 'the roles of Vasyl Lopata and Borys Maksymov in the original design'],
                ['https://podrobnosti.ua/345056-utochnenie-avtorami-grivny-javljajutsja-boris-maksimov-i-vasilij-lopata.html', 'Podrobnosti — clarification on the hryvnia’s authors (2006)', 'how the designers split the work'],
                ['https://myfinance.co.ua/spetsproekty/hryvnia/istoriia-banknoty-v-odnu-hryvniu-sto-tysiach-za-odnu-5785/', 'MyFinance — history of the one-hryvnia note', 'comparison of design versions'],
              ],
            },
          ],
        },
      },
    },
  },
  {
    id: 'malaysia',
    currency: 'MYR',
    currencyName: { ru: 'ринггит', en: 'Ringgit' },
    material: 'cotton',
    name: { ru: 'Малайзия', en: 'Malaysia' },
    caption: { ru: 'ринггит', en: 'Ringgit' },
  },
  {
    id: 'azerbaijan',
    currency: 'AZN',
    currencyName: { ru: 'манат', en: 'Manat' },
    material: 'cotton',
    name: { ru: 'Азербайджан', en: 'Azerbaijan' },
    caption: { ru: 'манат', en: 'Manat' },
  },
  {
    id: 'united-states',
    currency: 'USD',
    currencyName: { ru: 'доллар США', en: 'US Dollar' },
    material: 'cotton',
    name: { ru: 'США', en: 'United States' },
    caption: { ru: 'доллар США', en: 'US Dollar' },
  },
  {
    id: 'trinidad-and-tobago',
    currency: 'TTD',
    currencyName: { ru: 'доллар Тринидада и Тобаго', en: 'Trinidad and Tobago Dollar' },
    material: 'cotton',
    name: { ru: 'Тринидад и Тобаго', en: 'Trinidad and Tobago' },
    caption: { ru: 'доллар Тринидада и Тобаго', en: 'Trinidad and Tobago Dollar' },
  },
  {
    id: 'brazil',
    currency: 'BRL',
    currencyName: { ru: 'реал', en: 'Real' },
    material: 'cotton',
    name: { ru: 'Бразилия', en: 'Brazil' },
    caption: { ru: 'реал', en: 'Real' },
  },
  {
    id: 'ghana',
    currency: 'GHS',
    currencyName: { ru: 'седи', en: 'Cedi' },
    material: 'cotton',
    name: { ru: 'Гана', en: 'Ghana' },
    caption: { ru: 'седи', en: 'Cedi' },
  },
  {
    id: 'singapore',
    currency: 'SGD',
    currencyName: { ru: 'сингапурский доллар', en: 'Singapore Dollar' },
    material: 'cotton',
    name: { ru: 'Сингапур', en: 'Singapore' },
    caption: { ru: 'сингапурский доллар', en: 'Singapore Dollar' },
  },
  {
    id: 'belarus',
    currency: 'BYN',
    currencyName: { ru: 'белорусский рубль', en: 'Belarusian Ruble' },
    material: 'cotton',
    name: { ru: 'Беларусь', en: 'Belarus' },
    caption: { ru: 'белорусский рубль', en: 'Belarusian Ruble' },
  },
  {
    id: 'scotland',
    currency: 'GBP',
    currencyName: { ru: 'фунт стерлингов', en: 'Pound Sterling' },
    material: 'cotton',
    name: { ru: 'Шотландия', en: 'Scotland' },
    caption: { ru: 'фунт стерлингов', en: 'Pound Sterling' },
  },
  {
    id: 'egypt',
    currency: 'EGP',
    currencyName: { ru: 'египетский фунт', en: 'Egyptian Pound' },
    material: 'cotton',
    name: { ru: 'Египет', en: 'Egypt' },
    caption: { ru: 'египетский фунт', en: 'Egyptian Pound' },
  },
  {
    id: 'saudi-arabia',
    currency: 'SAR',
    currencyName: { ru: 'риял', en: 'Riyal' },
    material: 'cotton',
    name: { ru: 'Саудовская Аравия', en: 'Saudi Arabia' },
    caption: { ru: 'риял', en: 'Riyal' },
  },
  {
    id: 'colombia',
    currency: 'COP',
    currencyName: { ru: 'колумбийское песо', en: 'Colombian Peso' },
    material: 'cotton',
    name: { ru: 'Колумбия', en: 'Colombia' },
    caption: { ru: 'колумбийское песо', en: 'Colombian Peso' },
  },
  {
    id: 'european-union',
    currency: 'EUR',
    currencyName: { ru: 'евро', en: 'Euro' },
    material: 'cotton',
    name: { ru: 'Евросоюз', en: 'European Union' },
    caption: { ru: '5 евро', en: '5 Euro' },
  },
  {
    id: 'uae',
    currency: 'AED',
    currencyName: { ru: 'дирхам', en: 'Dirham' },
    material: 'cotton',
    name: { ru: 'ОАЭ', en: 'United Arab Emirates' },
    caption: { ru: 'дирхам', en: 'Dirham' },
  },
  {
    id: 'tajikistan',
    currency: 'TJS',
    currencyName: { ru: 'сомони', en: 'Somoni' },
    material: 'cotton',
    name: { ru: 'Таджикистан', en: 'Tajikistan' },
    caption: { ru: 'сомони', en: 'Somoni' },
  },
  {
    id: 'bosnia-and-herzegovina',
    currency: 'BAM',
    currencyName: { ru: 'конвертируемая марка', en: 'Convertible Mark' },
    material: 'cotton',
    name: { ru: 'Босния и Герцеговина', en: 'Bosnia and Herzegovina' },
    caption: { ru: 'конвертируемая марка', en: 'Convertible Mark' },
  },
  {
    id: 'romania',
    currency: 'RON',
    currencyName: { ru: 'лей', en: 'Leu' },
    material: 'cotton',
    name: { ru: 'Румыния', en: 'Romania' },
    caption: { ru: 'лей', en: 'Leu' },
  },
  {
    id: 'hong-kong',
    currency: 'HKD',
    currencyName: { ru: 'гонконгский доллар', en: 'Hong Kong Dollar' },
    material: 'cotton',
    name: { ru: 'Гонконг', en: 'Hong Kong' },
    src: 'assets/objects/04.png',
    caption: { ru: '10 гонконгских долларов', en: '10 Hong Kong Dollars' },
    issuer: { ru: 'Правительство САР Гонконг', en: 'Government of the Hong Kong (SAR)' },
  },
  {
    id: 'macau',
    currency: 'MOP',
    currencyName: { ru: 'патака', en: 'Pataca' },
    material: 'cotton',
    name: { ru: 'Макао', en: 'Macau' },
    caption: { ru: 'патака', en: 'Pataca' },
  },
  {
    id: 'south-africa',
    currency: 'ZAR',
    currencyName: { ru: 'рэнд', en: 'Rand' },
    material: 'cotton',
    name: { ru: 'ЮАР', en: 'South Africa' },
    caption: { ru: 'рэнд', en: 'Rand' },
  },
  {
    id: 'poland',
    currency: 'PLN',
    currencyName: { ru: 'злотый', en: 'Złoty' },
    material: 'cotton',
    name: { ru: 'Польша', en: 'Poland' },
    caption: { ru: 'злотый', en: 'Złoty' },
  },
  {
    id: 'russia',
    currency: 'RUB',
    currencyName: { ru: 'рубль', en: 'Ruble' },
    material: 'cotton',
    name: { ru: 'Россия', en: 'Russia' },
    caption: { ru: 'рубль', en: 'Ruble' },
  },
  {
    id: 'china',
    currency: 'CNY',
    currencyName: { ru: 'юань', en: 'Yuan' },
    material: 'cotton',
    name: { ru: 'Китай', en: 'China' },
    caption: { ru: 'юань', en: 'Yuan' },
  },
  {
    id: 'thailand',
    currency: 'THB',
    currencyName: { ru: 'бат', en: 'Baht' },
    material: 'cotton',
    name: { ru: 'Таиланд', en: 'Thailand' },
    src: 'assets/objects/05.png',
    caption: { ru: '100 бат', en: '100 Baht' },
    issuer: { ru: 'Правительство Таиланда', en: 'Government of Thailand' },
  },
  {
    id: 'turkey',
    currency: 'TRY',
    currencyName: { ru: 'турецкая лира', en: 'Turkish Lira' },
    material: 'cotton',
    name: { ru: 'Турция', en: 'Türkiye' },
    caption: { ru: 'турецкая лира', en: 'Turkish Lira' },
  },
  {
    id: 'nepal',
    currency: 'NPR',
    currencyName: { ru: 'непальская рупия', en: 'Nepalese Rupee' },
    material: 'cotton',
    name: { ru: 'Непал', en: 'Nepal' },
    caption: { ru: 'непальская рупия', en: 'Nepalese Rupee' },
  },
  {
    id: 'kyrgyzstan',
    currency: 'KGS',
    currencyName: { ru: 'сом', en: 'Som' },
    material: 'cotton',
    name: { ru: 'Киргизия', en: 'Kyrgyzstan' },
    caption: { ru: 'сом', en: 'Som' },
  },
  {
    id: 'mexico',
    currency: 'MXN',
    currencyName: { ru: 'мексиканское песо', en: 'Mexican Peso' },
    material: 'cotton',
    name: { ru: 'Мексика', en: 'Mexico' },
    caption: { ru: 'мексиканское песо', en: 'Mexican Peso' },
  },
  {
    id: 'georgia',
    currency: 'GEL',
    currencyName: { ru: 'лари', en: 'Lari' },
    material: 'cotton',
    name: { ru: 'Грузия', en: 'Georgia' },
    caption: { ru: 'лари', en: 'Lari' },
  },
  {
    id: 'serbia',
    currency: 'RSD',
    currencyName: { ru: 'сербский динар', en: 'Serbian Dinar' },
    material: 'cotton',
    name: { ru: 'Сербия', en: 'Serbia' },
    caption: { ru: 'сербский динар', en: 'Serbian Dinar' },
  },
  {
    id: 'bangladesh',
    currency: 'BDT',
    currencyName: { ru: 'така', en: 'Taka' },
    material: 'cotton',
    name: { ru: 'Бангладеш', en: 'Bangladesh' },
    src: 'assets/objects/bangladesh-front.webp',
    back: 'assets/objects/bangladesh-back.webp',
    caption: { ru: '50 так', en: '50 Taka' },
    issuer: { ru: 'Банк Бангладеш', en: 'Bangladesh Bank' },
    details: {
      "ru": {
        "title": "Така — Бангладеш",
        "facts": [
          [
            "Эмитент",
            "Банк Бангладеш (Bangladesh Bank)"
          ],
          [
            "Материал",
            "Банкнотная бумага"
          ],
          [
            "Размер",
            "130 × 60 мм"
          ],
          [
            "Образец дизайна",
            "2011 год, введён в обращение в 2012 году."
          ]
        ],
        "summary": [
          "История в одном предложении",
          "Портрет лидера независимости Бангладеш шейха Муджибура Рахмана и картина художника Зайнула Абедина, посвящённая сельскому труду, объединяют политическую историю страны с её художественным и культурным наследием."
        ],
        "sections": [
          {
            "title": "Лицевая сторона — Шейх Муджибур Рахман",
            "text": [
              "На банкноте изображён Шейх Муджибур Рахман (1920–1975) — один из главных деятелей движения за независимость Бангладеш и первый президент страны. За его портретом расположен Национальный мемориал мучеников в Саваре, посвящённый Освободительной войне 1971 года. Строгая треугольная архитектура памятника контрастирует с гравированным портретом, а красно-коричневая гамма, тонкая линейная графика и бенгальская письменность придают композиции национальный характер."
            ]
          },
          {
            "title": "Оборотная сторона — «Мой Дея», картина Зайнула Абедина",
            "text": [
              "Оборотная сторона воспроизводит произведение Moi Deya («Выравнивание вспаханного поля») бангладешского художника Зайнула Абедина. На картине показана сельскохозяйственная работа с участием крестьян и тягловых животных. Выразительная фигуративная композиция превращает повседневную жизнь деревни в часть визуальной истории национальной валюты. В отличие от монументальной архитектуры лицевой стороны, здесь главным становится человеческий труд."
            ]
          },
          {
            "title": "Визуальная концепция — Независимость и повседневная жизнь",
            "text": [
              "Две стороны банкноты противопоставляют образы национального лидерства и исторической памяти сельскохозяйственной жизни Бангладеш. Геометрическая архитектура мемориала, гравированный портрет и репродукция живописного произведения создают разные визуальные повествования. Вместе они формируют образ страны через её независимость, культуру и труд людей, обеспечивающих её существование.",
              "Это обоснованная интерпретация визуальной композиции. Официального подтверждения именно такого авторского замысла не найдено."
            ]
          },
          {
            "title": "Три интересные детали дизайна",
            "list": [
              [
                "Семь пар треугольных стен",
                "Национальный мемориал мучеников спроектировал архитектор Саид Майнул Хоссейн. Семь пар треугольных стен символизируют ключевые этапы борьбы за независимость Бангладеш, завершившейся Освободительной войной 1971 года."
              ],
              [
                "Живопись становится частью валюты",
                "Вместо привычного изображения архитектурного памятника или природного пейзажа дизайнеры использовали произведение одного из наиболее известных художников Бангладеш. Картина превращает традиционный сельский труд в культурный символ, присутствующий на национальных деньгах."
              ],
              [
                "Ошибка в имени художника",
                "В одном из ранних тиражей имя Зайнула Абедина было напечатано с ошибкой. Банк Бангладеш признал неточность, а последующие выпуски содержали исправленную надпись. Это необычный пример того, как авторство художественного произведения стало частью истории производства банкноты."
              ]
            ]
          },
          {
            "title": "Авторы дизайна и участники",
            "people": [
              [
                "Зайнул Абедин (1914–1976)",
                "Художник, чья картина Moi Deya воспроизведена на оборотной стороне банкноты. Его авторство оригинального произведения подтверждено. Однако нет оснований считать его автором всего графического дизайна банкноты."
              ],
              [
                "Саид Майнул Хоссейн (1952–2014)",
                "Архитектор Национального мемориала мучеников, изображённого на лицевой стороне. Его проект победил в национальном архитектурном конкурсе 1978 года. Авторство памятника подтверждено, но участие архитектора в графическом оформлении самой банкноты не установлено."
              ],
              [
                "Банк Бангладеш (Bangladesh Bank)",
                "Эмитент и учреждение, ответственное за выпуск банкноты. Дизайн с изображениями шейха Муджибура Рахмана и произведения Зайнула Абедина был введён в обращение в марте 2012 года."
              ],
              [
                "Дизайнер банкноты / дизайн-студия",
                "Информация об индивидуальных авторах графического дизайна данной банкноты и участвовавшей дизайн-студии не найдена. В публикациях упоминается комитет Банка Бангладеш, участвовавший в подготовке выпуска, однако персональная ответственность за финальную графическую композицию не установлена."
              ]
            ]
          },
          {
            "title": "Исторический контекст",
            "text": [
              "Бангладеш обрёл независимость от Пакистана в 1971 году. Банкнота обращается к этой истории через портрет шейха Муджибура Рахмана и Национальный мемориал мучеников. На оборотной стороне произведение Зайнула Абедина подчёркивает значение художественного наследия страны и сельской жизни.",
              "Дизайн с датой 2011 года был введён в обращение в 2012 году и использовался в последующих выпусках.",
              "В 2025 году Банк Бангладеш представил новый дизайн 50 так с изображением дворца Ахсан-Манзил в Дакке и другой работы Зайнула Абедина — Songram («Борьба»)."
            ]
          }
        ],
        "sources": {
          "title": "Источники и ссылки",
          "groups": [
            {
              "title": "Официальные источники о банкноте",
              "links": [
                [
                  "https://www.bb.org.bd/en/index.php/currency/fiftytaka",
                  "Bangladesh Bank — 50 Taka Banknotes",
                  "официальные описания лицевой и оборотной сторон, даты выпуска и варианты дизайна"
                ],
                [
                  "https://beautifulbangladesh.gov.bd/loc/dhaka/93",
                  "Bangladesh Tourism Board — National Martyrs' Memorial",
                  "историческое значение мемориала, архитектура и автор проекта"
                ]
              ]
            },
            {
              "title": "Художники и история дизайна",
              "links": [
                [
                  "https://www.banknotes.com/bd56.htm",
                  "Banknotes.com — Bangladesh 50 Taka, 2011",
                  "каталог банкноты, описание изображений и характеристики"
                ],
                [
                  "https://bangla.bdnews24.com/business/article529118.bdnews",
                  "bdnews24 — Ошибка в имени художника на банкноте",
                  "публикация об ошибке в имени Абедина и реакции Банка Бангладеш"
                ],
                [
                  "https://www.pmgnotes.com/priceguide/world-note-prices.aspx?deid=1819192&subcat=2011-2019-issue",
                  "PMG — Разновидности банкноты 50 так",
                  "сведения о первоначальной и исправленной надписях"
                ],
                [
                  "https://en.numista.com/208208",
                  "Numista — 50 Taka (2011–2022)",
                  "изображения, основные характеристики и описание банкноты"
                ]
              ]
            }
          ]
        }
      },
      "en": {
        "title": "Taka — Bangladesh",
        "facts": [
          [
            "Issuer",
            "Bangladesh Bank"
          ],
          [
            "Material",
            "Banknote paper"
          ],
          [
            "Size",
            "130 × 60 mm"
          ],
          [
            "Design sample",
            "2011 design, introduced into circulation in 2012."
          ]
        ],
        "summary": [
          "History in one sentence",
          "The portrait of Bangladesh's independence leader Sheikh Mujibur Rahman and a painting by artist Zainul Abedin depicting rural labour bring together the country's political history and its artistic and cultural heritage."
        ],
        "sections": [
          {
            "title": "Front — Sheikh Mujibur Rahman",
            "text": [
              "The banknote features Sheikh Mujibur Rahman (1920–1975), one of the leading figures in Bangladesh's independence movement and the country's first president. Behind his portrait stands the National Martyrs' Memorial in Savar, dedicated to the Liberation War of 1971. The monument's austere triangular architecture contrasts with the engraved portrait, while the reddish-brown palette, fine linework and Bengali script give the composition a distinctly national character."
            ]
          },
          {
            "title": "Back — Moi Deya, a painting by Zainul Abedin",
            "text": [
              "The reverse reproduces Moi Deya (“Levelling the Ploughed Field”) by Bangladeshi artist Zainul Abedin. The painting depicts agricultural work involving farmers and draught animals. Its expressive figurative composition makes everyday village life part of the national currency's visual story. In contrast to the monumental architecture on the front, the focus here is on human labour."
            ]
          },
          {
            "title": "Visual concept — Independence and everyday life",
            "text": [
              "The two sides of the banknote juxtapose images of national leadership and historical memory with Bangladesh's agricultural life. The memorial's geometric architecture, the engraved portrait and the reproduction of a painting create distinct visual narratives. Together, they portray the country through its independence, culture and the labour of the people who sustain it.",
              "This is a reasoned interpretation of the visual composition. No official confirmation of this precise artistic intention was found."
            ]
          },
          {
            "title": "Three interesting design details",
            "list": [
              [
                "Seven pairs of triangular walls",
                "The National Martyrs' Memorial was designed by architect Syed Mainul Hossain. Its seven pairs of triangular walls symbolise key stages in Bangladesh's struggle for independence, which culminated in the Liberation War of 1971."
              ],
              [
                "Painting becomes part of the currency",
                "Instead of the familiar image of an architectural landmark or natural landscape, the designers used a work by one of Bangladesh's best-known artists. The painting turns traditional agricultural labour into a cultural symbol featured on the national currency."
              ],
              [
                "A mistake in the artist's name",
                "In one of the early print runs, Zainul Abedin's name was printed incorrectly. Bangladesh Bank acknowledged the error, and subsequent issues carried the corrected inscription. This is an unusual example of how attribution of an artwork became part of a banknote's production history."
              ]
            ]
          },
          {
            "title": "Design authors and contributors",
            "people": [
              [
                "Zainul Abedin (1914–1976)",
                "The artist whose painting Moi Deya appears on the reverse of the banknote. His authorship of the original work is documented. However, there is no basis for identifying him as the designer of the banknote's entire graphic composition."
              ],
              [
                "Syed Mainul Hossain (1952–2014)",
                "Architect of the National Martyrs' Memorial depicted on the front. His design won a national architectural competition in 1978. His authorship of the memorial is established, but his involvement in the graphic design of the banknote has not been established."
              ],
              [
                "Bangladesh Bank",
                "The issuer and institution responsible for releasing the banknote. The design featuring Sheikh Mujibur Rahman and Zainul Abedin's artwork entered circulation in March 2012."
              ],
              [
                "Banknote designer / design studio",
                "No information was found identifying the individual graphic designers or design studio responsible for this banknote. Published accounts mention a Bangladesh Bank committee involved in preparing the issue, but do not establish who was personally responsible for the final graphic composition."
              ]
            ]
          },
          {
            "title": "Historical context",
            "text": [
              "Bangladesh gained independence from Pakistan in 1971. The banknote refers to this history through Sheikh Mujibur Rahman's portrait and the National Martyrs' Memorial. On the reverse, Zainul Abedin's work emphasises the importance of the country's artistic heritage and rural life.",
              "The 2011-dated design entered circulation in 2012 and was used in subsequent issues.",
              "In 2025, Bangladesh Bank introduced a new 50-taka design featuring Ahsan Manzil palace in Dhaka and another work by Zainul Abedin, Songram (“Struggle”)."
            ]
          }
        ],
        "sources": {
          "title": "Sources and links",
          "groups": [
            {
              "title": "Official sources on the banknote",
              "links": [
                [
                  "https://www.bb.org.bd/en/index.php/currency/fiftytaka",
                  "Bangladesh Bank — 50 Taka Banknotes",
                  "official descriptions of the front and back, dates of issue and design variants"
                ],
                [
                  "https://beautifulbangladesh.gov.bd/loc/dhaka/93",
                  "Bangladesh Tourism Board — National Martyrs' Memorial",
                  "historical significance of the memorial, its architecture and designer"
                ]
              ]
            },
            {
              "title": "Artists and design history",
              "links": [
                [
                  "https://www.banknotes.com/bd56.htm",
                  "Banknotes.com — Bangladesh 50 Taka, 2011",
                  "banknote catalogue entry, description of imagery and specifications"
                ],
                [
                  "https://bangla.bdnews24.com/business/article529118.bdnews",
                  "bdnews24 — Error in the artist's name on the banknote",
                  "reporting on the error in Abedin's name and Bangladesh Bank's response"
                ],
                [
                  "https://www.pmgnotes.com/priceguide/world-note-prices.aspx?deid=1819192&subcat=2011-2019-issue",
                  "PMG — Varieties of the 50-taka banknote",
                  "details of the original and corrected inscriptions"
                ],
                [
                  "https://en.numista.com/208208",
                  "Numista — 50 Taka (2011–2022)",
                  "imagery, specifications and description of the banknote"
                ]
              ]
            }
          ]
        }
      }
    },
  },
  {
    id: 'morocco',
    currency: 'MAD',
    currencyName: { ru: 'марокканский дирхам', en: 'Moroccan Dirham' },
    material: 'cotton',
    name: { ru: 'Марокко', en: 'Morocco' },
    caption: { ru: 'марокканский дирхам', en: 'Moroccan Dirham' },
  },
  {
    id: 'philippines',
    currency: 'PHP',
    currencyName: { ru: 'филиппинское песо', en: 'Philippine Peso' },
    material: 'cotton',
    name: { ru: 'Филиппины', en: 'Philippines' },
    caption: { ru: 'филиппинское песо', en: 'Philippine Peso' },
  },
  {
    id: 'india',
    currency: 'INR',
    currencyName: { ru: 'индийская рупия', en: 'Indian Rupee' },
    material: 'cotton',
    name: { ru: 'Индия', en: 'India' },
    caption: { ru: 'индийская рупия', en: 'Indian Rupee' },
  },
  {
    id: 'czechia',
    currency: 'CZK',
    currencyName: { ru: 'чешская крона', en: 'Czech Koruna' },
    material: 'cotton',
    name: { ru: 'Чехия', en: 'Czechia' },
    caption: { ru: 'чешская крона', en: 'Czech Koruna' },
  },
  {
    id: 'sri-lanka',
    currency: 'LKR',
    currencyName: { ru: 'шри-ланкийская рупия', en: 'Sri Lankan Rupee' },
    material: 'cotton',
    name: { ru: 'Шри-Ланка', en: 'Sri Lanka' },
    caption: { ru: 'шри-ланкийская рупия', en: 'Sri Lankan Rupee' },
  },
  {
    id: 'kazakhstan',
    currency: 'KZT',
    currencyName: { ru: 'тенге', en: 'Tenge' },
    material: 'cotton',
    name: { ru: 'Казахстан', en: 'Kazakhstan' },
    caption: { ru: 'тенге', en: 'Tenge' },
  },
  {
    id: 'cambodia',
    currency: 'KHR',
    currencyName: { ru: 'риель', en: 'Riel' },
    material: 'cotton',
    name: { ru: 'Камбоджа', en: 'Cambodia' },
    caption: { ru: 'риель', en: 'Riel' },
  },
  {
    id: 'mongolia',
    currency: 'MNT',
    currencyName: { ru: 'тугрик', en: 'Tögrög' },
    material: 'cotton',
    name: { ru: 'Монголия', en: 'Mongolia' },
    caption: { ru: 'тугрик', en: 'Tögrög' },
  },
  {
    id: 'south-korea',
    currency: 'KRW',
    currencyName: { ru: 'вона', en: 'Won' },
    material: 'cotton',
    name: { ru: 'Южная Корея', en: 'South Korea' },
    caption: { ru: 'вона', en: 'Won' },
  },
  {
    id: 'armenia',
    currency: 'AMD',
    currencyName: { ru: 'драм', en: 'Dram' },
    material: 'cotton',
    name: { ru: 'Армения', en: 'Armenia' },
    caption: { ru: 'драм', en: 'Dram' },
  },
  {
    id: 'uzbekistan',
    currency: 'UZS',
    currencyName: { ru: 'сум', en: 'Soʻm' },
    material: 'cotton',
    name: { ru: 'Узбекистан', en: 'Uzbekistan' },
    caption: { ru: 'сум', en: 'Soʻm' },
  },
  {
    id: 'vietnam',
    currency: 'VND',
    currencyName: { ru: 'донг', en: 'Dong' },
    material: 'cotton',
    name: { ru: 'Вьетнам', en: 'Vietnam' },
    caption: { ru: 'донг', en: 'Dong' },
  },
  {
    id: 'indonesia',
    currency: 'IDR',
    currencyName: { ru: 'рупия', en: 'Rupiah' },
    material: 'cotton',
    name: { ru: 'Индонезия', en: 'Indonesia' },
    caption: { ru: 'рупия', en: 'Rupiah' },
  },
  {
    id: 'zimbabwe',
    currency: 'ZWG',
    currencyName: { ru: 'зиг', en: 'ZiG' },
    material: 'cotton',
    name: { ru: 'Зимбабве', en: 'Zimbabwe' },
    caption: { ru: 'зиг', en: 'ZiG' },
  },
];

export const UI = {
  ru: {
    modes: 'Вид коллекции',
    wheel: 'Колесо',
    grid: 'Сетка',
    language: 'Язык',
    close: 'Закрыть',
    prev: 'К предыдущей',
    next: 'К следующей',
    prevShort: 'Пред.',
    nextShort: 'След.',
    open: 'Открыть',
    issuer: 'Эмитент',
    denomination: 'Номинал',
    flip: 'Потяните влево или вправо, чтобы перевернуть',
    placeholder: 'Здесь будет описание купюры.',
    lead1: 'Коллекция состоит из {n} банкнот из {n} стран.',
    lead2: '1 страна = 1 банкнота',
    currency: 'Валюта',
    collection: 'Коллекция',
  },
  en: {
    modes: 'Collection view',
    wheel: 'Wheel',
    grid: 'Grid',
    language: 'Language',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
    prevShort: 'Prev',
    nextShort: 'Next',
    open: 'Open',
    issuer: 'Issuer',
    denomination: 'Denomination',
    flip: 'Drag left or right to flip',
    placeholder: 'The description of this note will go here.',
    lead1: 'The collection consists of {n} bills from {n} countries.',
    lead2: '1 country = 1 bill',
    currency: 'Currency',
    collection: 'Collection',
  },
};

export const LANGS = ['ru', 'en'];
