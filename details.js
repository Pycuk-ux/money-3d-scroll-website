// Тексты страниц купюр, которые пишутся коротко и от первого лица коллекции.
// data.js подключает их к купюрам по id. Формат тот же, что у details в data.js, плюс
// story — «Как она ко мне попала»: [заголовок, текст]. Пока истории нет, плашки на странице нет.

export const DETAILS = {
  armenia: {
    ru: {
      title: 'Драм — Армения',
      facts: [
        ['Эмитент', 'Центральный банк Армении'],
        ['Номинал', '1 000 драмов (AMD)'],
        ['Материал', 'бумага'],
        ['Размер', '136 × 72 мм'],
        ['Выпуск', '2011, на основе банкноты 1999 года'],
      ],
      story: ['Паша из сборной', 'Мой друг и по совместительству одноклубник по баскетбольной сборной университета Паша поделился ею, когда узнал, что я коллекционирую купюры.'],
      sections: [
        {
          title: 'Поэт, который подписал купюру',
          text: ['Егише Чаренц (1897–1937) — один из главных армянских поэтов XX века. Рядом с портретом его стихи «Я люблю моей Армении…», написанные от руки, а за спиной Арарат. Купюра буквально цитирует поэта.'],
        },
        {
          title: 'Ереван, которого больше нет',
          text: ['На обороте двухэтажный дом на улице Анрапетутян и фаэтон с парой лошадей. Это город времён Чаренца, а не сегодняшний.'],
        },
        {
          title: 'Три детали',
          list: [
            ['Стихи вместо орнамента', 'Там, где на других купюрах завитушки, здесь строчки Чаренца его почерком.'],
            ['Лента, которая меняется', 'Наклоните купюру: в фиолетовой полосе слева по очереди появляются профиль поэта, знак драма и число 1000.'],
            ['Перо появилось в 2011-м', 'На старой версии его не было. Добавили при обновлении, чтобы литературная тема читалась ещё быстрее.'],
          ],
        },
        {
          title: 'Кто рисовал',
          people: [['Ашот Манукян', 'автор первой версии 1999 года. Кто дорабатывал её в 2011-м, банк не пишет.']],
        },
      ],
      sources: {
        title: 'Источники',
        groups: [{
          links: [
            ['https://www.cba.am/en/1000.1999.2001.2011.2015/', 'Центральный банк Армении — банкноты 1 000 драмов'],
            ['https://www.arlis.am/hy/acts/70578', 'Решение Центрального банка Армении №187-Н'],
            ['https://www.cba.am/file_manager/Currency/Programs/Dram-2013.pdf', 'Центральный банк Армении — каталог банкнот (PDF)'],
            ['https://en.numista.com/203549', 'Numista — 1 000 драмов с голографической лентой'],
          ],
        }],
      },
    },
    en: {
      title: 'Dram — Armenia',
      facts: [
        ['Issuer', 'Central Bank of Armenia'],
        ['Denomination', '1,000 dram (AMD)'],
        ['Material', 'paper'],
        ['Size', '136 × 72 mm'],
        ['Issue', '2011, based on the 1999 note'],
      ],
      story: ['Pasha from the team', 'My friend Pasha, who is also my teammate on the university basketball team, gave it to me when he found out I collect banknotes.'],
      sections: [
        {
          title: 'The poet who signed the note',
          text: ['Yeghishe Charents (1897–1937) is one of the great Armenian poets of the 20th century. Next to his portrait are lines from his poem “I Love My Armenia…” in his own handwriting, with Mount Ararat behind him. The note literally quotes the poet.'],
        },
        {
          title: 'A Yerevan that is gone',
          text: ['On the back: a two-storey house on Hanrapetutyan Street and a carriage pulled by two horses. This is the city of Charents’s time, not today’s.'],
        },
        {
          title: 'Three details',
          list: [
            ['Poetry instead of ornament', 'Where other notes have flourishes, this one has lines by Charents in his own hand.'],
            ['A strip that changes', 'Tilt the note: the purple strip on the left shows the poet’s profile, the dram sign and the number 1000 in turn.'],
            ['The pen arrived in 2011', 'The older version didn’t have it. It was added in the update to make the literary theme read even faster.'],
          ],
        },
        {
          title: 'Who drew it',
          people: [['Ashot Manukyan', 'designed the first version in 1999. The bank doesn’t say who reworked it in 2011.']],
        },
      ],
      sources: {
        title: 'Sources',
        groups: [{
          links: [
            ['https://www.cba.am/en/1000.1999.2001.2011.2015/', 'Central Bank of Armenia — 1,000-dram banknotes'],
            ['https://www.arlis.am/hy/acts/70578', 'Central Bank of Armenia — Decision No. 187-N'],
            ['https://www.cba.am/file_manager/Currency/Programs/Dram-2013.pdf', 'Central Bank of Armenia — banknote catalogue (PDF)'],
            ['https://en.numista.com/203549', 'Numista — 1,000 dram with holographic strip'],
          ],
        }],
      },
    },
  },

  azerbaijan: {
    ru: {
      title: 'Манат — Азербайджан',
      facts: [
        ['Эмитент', 'Центральный банк Азербайджана'],
        ['Номинал', '1 манат (AZN)'],
        ['Материал', 'бумага'],
        ['Размер', '120 × 70 мм'],
        ['Выпуск', '2005, в обращении с 2006 года'],
      ],
      sections: [
        {
          title: 'От автора евро',
          text: ['Этот манат нарисовал тот же человек, что и банкноты евро, — австриец Роберт Калина. Только вместо мостов и окон у него тар, кеманча и даф: струнный, смычковый и ударный. Инструменты переплетаются со скрипичными ключами и узорами старых азербайджанских ковров.'],
        },
        {
          title: 'Азербайджан на карте Европы',
          text: ['На обороте Азербайджан нарисован на одной карте с Европой. По официальному описанию банка, это символ европейской интеграции страны.'],
        },
        {
          title: 'Три детали',
          list: [
            ['Музыка вместо портрета', 'На купюре нет ни одного человека. Главные герои — три инструмента, причём как графические знаки, а не музейные экспонаты.'],
            ['Ковёр в фоне', 'Фон собран из мотивов азербайджанского ковроткачества. Какой именно узор, банк не уточняет.'],
            ['Ноты вместо рамки', 'Центральное изображение не обрамлено, вокруг него скрипичные ключи и окружности.'],
          ],
        },
        {
          title: 'Кто рисовал',
          people: [
            ['Роберт Калина', 'автор всей серии «Независимый Азербайджан» 2005 года и первой серии евро.'],
            ['OeBS', 'австрийская типография, которая её напечатала.'],
          ],
        },
        {
          title: 'Немного истории',
          text: ['В 2006 году Азербайджан убрал из денег три нуля: один новый манат заменил 5 000 старых. У каждого номинала новой серии своя тема, у одного маната — «Культура и искусство».'],
        },
      ],
      sources: {
        title: 'Источники',
        groups: [{
          links: [
            ['https://www.cbar.az/moneymarks/banknotes/detail/1?language=en', 'Центральный банк Азербайджана — 1 манат'],
            ['https://www.cbar.az/press-release-2952/information-on-our-national-currency?language=en', 'Центральный банк Азербайджана — информация о национальной валюте'],
            ['https://azerbaijan.az/en/information/109', 'Azerbaijan.az — национальная валюта'],
            ['https://www.preslib.az/en/historical/page/M9pKTz7', 'Президентская библиотека Азербайджана — история национальной валюты'],
            ['https://en.numista.com/213657', 'Numista — 1 манат, 2005'],
            ['https://www.pmgnotes.com/priceguide/world-note-prices.aspx?deid=1816956&subcat=2005-issue', 'PMG — Azerbaijan 1 Manat, 2005'],
          ],
        }],
      },
    },
    en: {
      title: 'Manat — Azerbaijan',
      facts: [
        ['Issuer', 'Central Bank of Azerbaijan'],
        ['Denomination', '1 manat (AZN)'],
        ['Material', 'paper'],
        ['Size', '120 × 70 mm'],
        ['Issue', '2005, in circulation since 2006'],
      ],
      sections: [
        {
          title: 'From the designer of the euro',
          text: ['This manat was drawn by the same person as the euro notes, Austrian designer Robert Kalina. Instead of bridges and windows, he gave it a tar, a kamancha and a daf: plucked, bowed and percussion. The instruments weave through treble clefs and patterns from old Azerbaijani carpets.'],
        },
        {
          title: 'Azerbaijan on the map of Europe',
          text: ['On the back, Azerbaijan shares one map with Europe. According to the bank’s official description, it stands for the country’s European integration.'],
        },
        {
          title: 'Three details',
          list: [
            ['Music instead of a portrait', 'There isn’t a single person on the note. The heroes are three instruments, drawn as graphic signs rather than museum pieces.'],
            ['A carpet in the background', 'The background is built from Azerbaijani carpet motifs. The bank doesn’t say which pattern exactly.'],
            ['Notes instead of a frame', 'The central image has no border; treble clefs and circles surround it instead.'],
          ],
        },
        {
          title: 'Who drew it',
          people: [
            ['Robert Kalina', 'designed the whole 2005 “Independent Azerbaijan” series and the first euro series.'],
            ['OeBS', 'the Austrian printer that produced it.'],
          ],
        },
        {
          title: 'A bit of history',
          text: ['In 2006 Azerbaijan dropped three zeros from its money: one new manat replaced 5,000 old ones. Each note in the new series got its own theme; the 1 manat got “Culture and Art”.'],
        },
      ],
      sources: {
        title: 'Sources',
        groups: [{
          links: [
            ['https://www.cbar.az/moneymarks/banknotes/detail/1?language=en', 'Central Bank of Azerbaijan — 1 manat'],
            ['https://www.cbar.az/press-release-2952/information-on-our-national-currency?language=en', 'Central Bank of Azerbaijan — national currency information'],
            ['https://azerbaijan.az/en/information/109', 'Azerbaijan.az — national currency'],
            ['https://www.preslib.az/en/historical/page/M9pKTz7', 'Presidential Library of Azerbaijan — history of the national currency'],
            ['https://en.numista.com/213657', 'Numista — 1 manat, 2005'],
            ['https://www.pmgnotes.com/priceguide/world-note-prices.aspx?deid=1816956&subcat=2005-issue', 'PMG — Azerbaijan 1 Manat, 2005'],
          ],
        }],
      },
    },
  },

  belarus: {
    ru: {
      title: 'Рубль — Беларусь',
      facts: [
        ['Эмитент', 'Национальный банк Беларуси'],
        ['Номинал', '5 рублей (BYN)'],
        ['Материал', 'бумага'],
        ['Размер', '135 × 72 мм'],
        ['Выпуск', 'дизайн 2009 года, обновление 2019 года'],
      ],
      sections: [
        {
          title: 'Белая вежа, которая красная',
          text: ['Каменецкая башня конца XIII века известна как Белая вежа, хотя сложена из красного кирпича. На купюре от неё крупный фрагмент: кладка, арки и узкие ниши. Рядом большие цифры номинала, современный шрифт против средневековой стены.'],
        },
        {
          title: 'Колесо, пояс и город из дерева',
          text: ['На обороте не дворец, а находки археологов из древнего Берестья: деревянное колесо, кусок кожаного пояса и реконструкция городища. Купюра рассказывает, как жили обычные люди, а не только как они оборонялись.'],
        },
        {
          title: 'Три детали',
          list: [
            ['Кирпич вместо орнамента', 'Национальный узор не понадобился: ритм создают ряды кирпичей, арки и ниши настоящей башни.'],
            ['Археология вместо дворца', 'Берестье знаменито сохранившимися деревянными постройками средневекового города, а не парадной архитектурой.'],
            ['Обновление 2019 года', 'Убрали подпись председателя Нацбанка, добавили название памятника и перерисовали башню. Композиция осталась прежней.'],
          ],
        },
        {
          title: 'Кто рисовал',
          people: [
            ['Светлана Некрасова', 'художница Нацбанка, автор обеих сторон по каталогу Numista. Её роль в обновлении 2019 года не известна.'],
            ['Гознак', 'российское предприятие, которое напечатало выпуск 2019 года.'],
          ],
        },
        {
          title: 'Немного истории',
          text: ['Серия «Мая краіна — Беларусь» посвящена памятникам разных областей страны, пятёрке досталась Брестская. В обращение купюры вошли после деноминации 2016 года.'],
        },
      ],
      sources: {
        title: 'Источники',
        groups: [{
          links: [
            ['https://static.nbp.pl/publikacje/album-walut/bialorus-www.pdf', 'Национальный банк Польши — альбом банкнот Беларуси (PDF)'],
            ['https://balance-in-hand.by/obzor_aktualnyh_npa_oficialno_opublikovannyh_na_nacionalnom_pravovom_internet-portale_1_maya_133', 'Обзор постановления о выпуске 2019 года'],
            ['https://sputnik.by/20190520/V-Natsbanke-rasskazali-zachem-napechatali-novye-5-i-10-rubley-1041234923.html', 'Sputnik — Нацбанк об обновлении 5 и 10 рублей'],
            ['https://sputnik.by/20151110/1018367255.html', 'Sputnik — интервью со Светланой Некрасовой, 2015'],
            ['https://en.numista.com/353522', 'Numista — 5 рублей, выпуск 2019 года'],
            ['https://www.banknotes.com/by37.htm', 'Banknotes.com — 5 рублей образца 2009 года'],
            ['https://en.numista.com/211973', 'Numista — 5 рублей образца 2009 года'],
          ],
        }],
      },
    },
    en: {
      title: 'Ruble — Belarus',
      facts: [
        ['Issuer', 'National Bank of Belarus'],
        ['Denomination', '5 rubles (BYN)'],
        ['Material', 'paper'],
        ['Size', '135 × 72 mm'],
        ['Issue', '2009 design, 2019 update'],
      ],
      sections: [
        {
          title: 'The White Tower that is red',
          text: ['The late-13th-century Kamyenyets Tower is known as the White Tower, even though it is built of red brick. The note shows a large piece of it: brickwork, arches and narrow niches. Next to it are big denomination numerals, modern type against a medieval wall.'],
        },
        {
          title: 'A wheel, a belt and a wooden town',
          text: ['The back shows archaeological finds from ancient Berestye rather than a palace: a wooden wheel, a piece of a leather belt and a reconstruction of the settlement. The note tells how ordinary people lived, not only how they defended themselves.'],
        },
        {
          title: 'Three details',
          list: [
            ['Brick instead of ornament', 'No national pattern needed: the rhythm comes from the rows of bricks, arches and niches of the real tower.'],
            ['Archaeology instead of a palace', 'Berestye is famous for its surviving timber buildings of a medieval town, not for grand architecture.'],
            ['The 2019 update', 'The governor’s signature was removed, the landmark’s name was added and the tower was redrawn. The layout stayed the same.'],
          ],
        },
        {
          title: 'Who drew it',
          people: [
            ['Svetlana Nekrasova', 'an artist at the National Bank, credited with both sides by Numista. Her role in the 2019 update isn’t known.'],
            ['Goznak', 'the Russian printer that produced the 2019 issue.'],
          ],
        },
        {
          title: 'A bit of history',
          text: ['The “My Country — Belarus” series features landmarks from different regions; the 5 rubles got Brest Region. The notes entered circulation after the 2016 redenomination.'],
        },
      ],
      sources: {
        title: 'Sources',
        groups: [{
          links: [
            ['https://static.nbp.pl/publikacje/album-walut/bialorus-www.pdf', 'National Bank of Poland — album of Belarusian banknotes (PDF)'],
            ['https://balance-in-hand.by/obzor_aktualnyh_npa_oficialno_opublikovannyh_na_nacionalnom_pravovom_internet-portale_1_maya_133', 'Overview of the regulation on the 2019 issue'],
            ['https://sputnik.by/20190520/V-Natsbanke-rasskazali-zachem-napechatali-novye-5-i-10-rubley-1041234923.html', 'Sputnik — National Bank on the updated 5 and 10 rubles'],
            ['https://sputnik.by/20151110/1018367255.html', 'Sputnik — interview with Svetlana Nekrasova, 2015'],
            ['https://en.numista.com/353522', 'Numista — 5 rubles, 2019 issue'],
            ['https://www.banknotes.com/by37.htm', 'Banknotes.com — 5 rubles, 2009 design'],
            ['https://en.numista.com/211973', 'Numista — 5 rubles, 2009 design'],
          ],
        }],
      },
    },
  },

  'bosnia-and-herzegovina': {
    ru: {
      title: 'Марка — Босния и Герцеговина',
      facts: [
        ['Эмитент', 'Центральный банк Боснии и Герцеговины'],
        ['Номинал', '10 конвертируемых марок (BAM)'],
        ['Материал', 'бумага'],
        ['Размер', '130 × 65 мм'],
        ['Выпуск', 'серия 1998 года, версия Республики Сербской'],
      ],
      sections: [
        {
          title: 'Одна купюра, две версии',
          text: ['У этой десятки есть близнец. В Республике Сербской на ней поэт Алекса Шантич и хлеб, в Федерации Боснии и Герцеговины — поэт Мак Диздар и средневековое надгробие. Размер, цвета и защита одинаковые, ходят обе по всей стране. У меня сербская.'],
        },
        {
          title: 'Поэт из Мостара',
          text: ['Алекса Шантич (1868–1924) — поэт, связанный с культурной историей Мостара. Его портрет окружён розеткой из тонких переплетающихся линий, надписи идут кириллицей и латиницей.'],
        },
        {
          title: 'Просто хлеб',
          text: ['На обороте буханка хлеба. Не дворец, не мост, не битва. Почему выбрали именно его, банк не объясняет, но редкая купюра настолько про обычную жизнь.'],
        },
        {
          title: 'Три детали',
          list: [
            ['Гильош вокруг портрета', 'Розетка из тонких линий защищает от подделки и одновременно работает как украшение.'],
            ['Хлеб на месте памятника', 'Там, где обычно здание или известный человек, — предмет с кухонного стола.'],
            ['Порядок алфавитов', 'У двух версий отличается не только сюжет, но и то, какой алфавит идёт первым, кириллица или латиница.'],
          ],
        },
        {
          title: 'Кто рисовал',
          people: [['François-Charles Oberthur Fiduciaire', 'французская типография, напечатавшая первый выпуск 1998 года. Кто автор рисунка, банк не указывает.']],
        },
        {
          title: 'Немного истории',
          text: ['Конвертируемая марка появилась в 1998 году, через три года после Дейтонского соглашения. Две версии большинства номиналов отражают традиции двух частей страны и равноправны везде.'],
        },
      ],
      sources: {
        title: 'Источники',
        groups: [{
          links: [
            ['https://www.cbbh.ba/Content/Read/79?lang=en', 'Центральный банк Боснии и Герцеговины — 10 марок, Республика Сербская'],
            ['https://www.cbbh.ba/content/read/1075', 'Центральный банк — банкноты 10 марок, выпуски 2012–2024 годов'],
            ['https://cbbh.ba/press/ShowNews/1521?lang=en', 'Центральный банк — 25 лет конвертируемой марке'],
            ['https://cbbh.ba/Content/Read/1261', 'Центральный банк — изъятые банкноты'],
            ['https://www.banknotes.com/ba64a.htm', 'Banknotes.com — 10 марок, 1998'],
            ['https://www.banknotes.com/ba64b.htm', 'Banknotes.com — 10 марок, 2008'],
            ['https://www.banknoteworld.com/bosnia-and-herzegovina-10-convertible-maraka-banknote-2019-p-81a-3-unc.html', 'Banknote World — 10 марок, 2019'],
          ],
        }],
      },
    },
    en: {
      title: 'Mark — Bosnia and Herzegovina',
      facts: [
        ['Issuer', 'Central Bank of Bosnia and Herzegovina'],
        ['Denomination', '10 convertible marks (BAM)'],
        ['Material', 'paper'],
        ['Size', '130 × 65 mm'],
        ['Issue', '1998 series, Republika Srpska version'],
      ],
      sections: [
        {
          title: 'One note, two versions',
          text: ['This 10-mark note has a twin. The Republika Srpska version shows poet Aleksa Šantić and bread; the Federation version shows poet Mak Dizdar and a medieval tombstone. Same size, colours and security features, and both are valid across the whole country. Mine is the Srpska one.'],
        },
        {
          title: 'A poet from Mostar',
          text: ['Aleksa Šantić (1868–1924) is a poet tied to the cultural history of Mostar. His portrait sits inside a rosette of fine interlacing lines, with inscriptions in both Cyrillic and Latin.'],
        },
        {
          title: 'Just bread',
          text: ['The back shows a loaf of bread. Not a palace, not a bridge, not a battle. The bank never explains the choice, but few notes are this much about everyday life.'],
        },
        {
          title: 'Three details',
          list: [
            ['Guilloché around the portrait', 'The rosette of fine lines protects against forgery and works as decoration at the same time.'],
            ['Bread where a monument would be', 'Where you’d expect a building or a famous person, there’s something from the kitchen table.'],
            ['Order of the alphabets', 'The two versions differ not only in subject but also in which alphabet comes first, Cyrillic or Latin.'],
          ],
        },
        {
          title: 'Who drew it',
          people: [['François-Charles Oberthur Fiduciaire', 'the French printer of the first 1998 issue. The bank doesn’t name the artist.']],
        },
        {
          title: 'A bit of history',
          text: ['The convertible mark appeared in 1998, three years after the Dayton Agreement. Most denominations have two versions reflecting the traditions of the country’s two parts, and both are equally valid everywhere.'],
        },
      ],
      sources: {
        title: 'Sources',
        groups: [{
          links: [
            ['https://www.cbbh.ba/Content/Read/79?lang=en', 'Central Bank of Bosnia and Herzegovina — 10 marks, Republika Srpska'],
            ['https://www.cbbh.ba/content/read/1075', 'Central Bank — 10-mark issues, 2012–2024'],
            ['https://cbbh.ba/press/ShowNews/1521?lang=en', 'Central Bank — 25 years of the convertible mark'],
            ['https://cbbh.ba/Content/Read/1261', 'Central Bank — withdrawn banknotes'],
            ['https://www.banknotes.com/ba64a.htm', 'Banknotes.com — 10 marks, 1998'],
            ['https://www.banknotes.com/ba64b.htm', 'Banknotes.com — 10 marks, 2008'],
            ['https://www.banknoteworld.com/bosnia-and-herzegovina-10-convertible-maraka-banknote-2019-p-81a-3-unc.html', 'Banknote World — 10 marks, 2019'],
          ],
        }],
      },
    },
  },

  brazil: {
    ru: {
      title: 'Реал — Бразилия',
      facts: [
        ['Эмитент', 'Центральный банк Бразилии'],
        ['Номинал', '2 реала (BRL)'],
        ['Материал', 'бумага'],
        ['Размер', '121 × 65 мм'],
        ['Выпуск', 'вторая серия, в обращении с 2013 года'],
      ],
      sections: [
        {
          title: 'Черепаху выбрали люди',
          text: ['В 2001 году Центральный банк Бразилии спросил жителей, каких животных они хотят видеть на новых купюрах. Морская черепаха вошла в двойку самых популярных и попала на два реала. Это бисса, она живёт у бразильского побережья и плывёт тут среди кораллов и морских звёзд.'],
        },
        {
          title: 'Республика без лица',
          text: ['На лицевой стороне не историческая личность, а женский профиль — аллегория Бразильской Республики. Он одинаковый на всех купюрах серии, отличаются только животные на обороте.'],
        },
        {
          title: 'Три детали',
          list: [
            ['Черепаха на просвет', 'Поднимите купюру к свету: рядом с цифрой 2 проявится та же черепаха.'],
            ['Самая короткая в серии', 'Чем больше номинал, тем длиннее купюра. Два реала — самые маленькие, 121 мм. Так номиналы легче различать, в том числе людям с плохим зрением.'],
            ['Вода из графики', 'Голубые полупрозрачные слои и тонкая штриховка создают ощущение, что смотришь под воду.'],
          ],
        },
        {
          title: 'Кто рисовал',
          people: [
            ['Banco Central do Brasil и Casa da Moeda do Brasil', 'центральный банк и монетный двор разработали серию вместе, монетный двор её и печатает. Имена художников не публикуются.'],
          ],
        },
        {
          title: 'Немного истории',
          text: ['Реал стал валютой Бразилии в 1994 году. Вторая серия появилась в 2010-м с новыми размерами и защитой, а два реала — 29 июля 2013 года.'],
        },
      ],
      sources: {
        title: 'Источники',
        groups: [{
          links: [
            ['https://www.bcb.gov.br/novasnotas/nota-2-reais.html', 'Центральный банк Бразилии — 2 реала, вторая серия'],
            ['https://www.bcb.gov.br/cedulasemoedas/cedulasemitidas', 'Центральный банк Бразилии — каталог выпущенных банкнот'],
            ['https://bcb.gov.br/cedulasemoedas/notadeduzentos', 'Центральный банк Бразилии — концепция серии и авторство'],
            ['https://www.bcb.gov.br/novasnotas/assets/downloads/material-apoio/2e5/cartilha.pdf', 'Центральный банк Бразилии — руководство по второй серии (PDF)'],
          ],
        }],
      },
    },
    en: {
      title: 'Real — Brazil',
      facts: [
        ['Issuer', 'Central Bank of Brazil'],
        ['Denomination', '2 reais (BRL)'],
        ['Material', 'paper'],
        ['Size', '121 × 65 mm'],
        ['Issue', 'second series, in circulation since 2013'],
      ],
      sections: [
        {
          title: 'The turtle was the people’s choice',
          text: ['In 2001 the Central Bank of Brazil asked people which animals they wanted on the new notes. The sea turtle made the top two and landed on the 2 reais. It’s a hawksbill, which lives off the Brazilian coast and swims here among coral and starfish.'],
        },
        {
          title: 'A Republic without a face',
          text: ['The front shows a female profile, an allegory of the Brazilian Republic, rather than a historical figure. She is the same on every note in the series; only the animal on the back changes.'],
        },
        {
          title: 'Three details',
          list: [
            ['A turtle in the light', 'Hold the note up to the light and the same turtle appears next to the number 2.'],
            ['The shortest in the series', 'The higher the value, the longer the note. The 2 reais is the smallest, at 121 mm, which makes values easier to tell apart, including for people with poor eyesight.'],
            ['Water made of lines', 'Translucent blue layers and fine hatching make it feel like you’re looking underwater.'],
          ],
        },
        {
          title: 'Who drew it',
          people: [
            ['Banco Central do Brasil and Casa da Moeda do Brasil', 'the central bank and the mint developed the series together, and the mint prints it. The artists’ names aren’t published.'],
          ],
        },
        {
          title: 'A bit of history',
          text: ['The real became Brazil’s currency in 1994. The second series arrived in 2010 with new sizes and security features, and the 2 reais followed on 29 July 2013.'],
        },
      ],
      sources: {
        title: 'Sources',
        groups: [{
          links: [
            ['https://www.bcb.gov.br/novasnotas/nota-2-reais.html', 'Central Bank of Brazil — 2 reais, second series'],
            ['https://www.bcb.gov.br/cedulasemoedas/cedulasemitidas', 'Central Bank of Brazil — issued banknotes'],
            ['https://bcb.gov.br/cedulasemoedas/notadeduzentos', 'Central Bank of Brazil — series concept and authorship'],
            ['https://www.bcb.gov.br/novasnotas/assets/downloads/material-apoio/2e5/cartilha.pdf', 'Central Bank of Brazil — second-series guide (PDF)'],
          ],
        }],
      },
    },
  },
};
