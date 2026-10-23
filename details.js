// Тексты страниц купюр. data.js подключает их к купюрам по id. Формат тот же, что у details в data.js,
// плюс story — текст «Как она ко мне попала»; пока истории нет, плашки на странице нет.
// Собрано из markdown скриптом scripts/details-from-md.py — новые страны удобно добавлять так же.

export const DETAILS = {
  "armenia": {
    "ru": {
      "title": "Драм — Армения",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Республики Армения"
        ],
        [
          "Валюта",
          "армянский драм (AMD)"
        ],
        [
          "Материал",
          "банкнотная бумага"
        ],
        [
          "Размер",
          "136 × 72 мм"
        ],
        [
          "Образец дизайна",
          "2011 год, развитие дизайна 2001 года"
        ],
        [
          "Введена в обращение",
          "30 сентября 2011 года"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Егише Чаренц",
          "text": [
            "На банкноте изображён Егише Чаренц (1897–1937). Справа от портрета размещены строки его стихотворения «Я люблю моей Армении…», а на заднем плане — гора Арарат. Композиция сочетает гравированный портрет, рукописный текст, тонкие геометрические узоры и светлую зелёно-розовую палитру. Перьевая ручка в правой части дополняет литературную тему."
          ]
        },
        {
          "title": "Оборотная сторона — Старый Ереван",
          "text": [
            "На оборотной стороне представлена городская сцена старого Еревана: двухэтажное здание на улице Анрапетутян и фаэтон, запряжённый двумя лошадьми. Архитектурное изображение выполнено в тонкой линейной графике, характерной для банкнотной гравюры. Приглушённые зелёные и серые оттенки подчёркивают исторический характер городского пейзажа."
          ]
        },
        {
          "title": "Визуальная концепция — Поэзия и память города",
          "text": [
            "Банкнота объединяет национальную литературу и городской пейзаж. На лицевой стороне поэзия становится частью графической композиции: строки произведения соседствуют с портретом автора и Араратом. Оборотная сторона переносит внимание к архитектуре исторического Еревана, формируя образ Армении через её культурное наследие.",
            "Связь композиционных элементов — визуальная интерпретация; сами изображения подтверждены Центральным банком Армении."
          ]
        },
        {
          "title": "Три интересные детали дизайна",
          "list": [
            [
              "Поэзия вместо декоративного орнамента",
              "Рядом с портретом напечатаны строки стихотворения Чаренца «Я люблю моей Армении…». Благодаря рукописному начертанию текст становится частью визуального оформления, а не просто информационной надписью."
            ],
            [
              "Голографическая лента с повторяющимися символами",
              "Вертикальная фиолетовая лента слева содержит изображение поэта в профиль, знак драма, декоративный орнамент и число 1000. При изменении угла зрения изображения сменяют друг друга."
            ],
            [
              "Перьевая ручка",
              "В правом нижнем углу расположено перо — предмет, непосредственно связанный с литературной деятельностью Чаренца. В дизайн 2011 года его добавили при обновлении предыдущего образца банкноты."
            ]
          ]
        },
        {
          "title": "Авторы дизайна и участники",
          "people": [
            [
              "Ашот Манукян (Ashot Manukyan)",
              "Художник-дизайнер, указанный Центральным банком Армении как автор проекта первоначальной банкноты 1 000 драмов с Егише Чаренцем, выпущенной в 1999 году. В официальном документе 2011 года говорится, что оформление нового выпуска основано на дизайне предыдущей версии, но персональное авторство изменений 2011 года отдельно не установлено. Манукян указан как автор исходного дизайна, а не всех изменений этого выпуска."
            ],
            [
              "Центральный банк Республики Армения",
              "Эмитент и организация, утвердившая выпуск 2011 года решением совета банка №187-Н от 19 июля 2011 года."
            ],
            [
              "Дизайн-студия выпуска 2011 года",
              "Информация об отдельной дизайн-студии, участвовавшей в разработке данного выпуска, не найдена."
            ]
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.cba.am/en/1000.1999.2001.2011.2015/",
                "Центральный банк Армении — банкноты 1 000 драмов"
              ],
              [
                "https://www.arlis.am/hy/acts/70578",
                "Решение Центрального банка Армении №187-Н"
              ],
              [
                "https://www.cba.am/file_manager/Currency/Programs/Dram-2013.pdf",
                "Центральный банк Армении — каталог банкнот (PDF)"
              ],
              [
                "https://en.numista.com/203549",
                "Numista — 1 000 драмов с голографической лентой"
              ]
            ]
          }
        ]
      },
      "story": "Мой друг и по совместительству одноклубник по баскетбольной сборной университета Паша поделился ею, когда узнал, что я коллекционирую купюры."
    },
    "en": {
      "title": "Dram — Armenia",
      "facts": [
        [
          "Issuer",
          "Central Bank of the Republic of Armenia"
        ],
        [
          "Currency",
          "Armenian dram (AMD)"
        ],
        [
          "Material",
          "banknote paper"
        ],
        [
          "Size",
          "136 × 72 mm"
        ],
        [
          "Design",
          "2011 issue, developed from the 2001 design"
        ],
        [
          "Introduced",
          "30 September 2011"
        ]
      ],
      "sections": [
        {
          "title": "Front — Yeghishe Charents",
          "text": [
            "The banknote depicts Yeghishe Charents (1897–1937). To the right of his portrait are lines from his poem “I Love My Armenia…”, while Mount Ararat appears in the background. The composition combines an engraved portrait, handwritten text, delicate geometric patterns, and a pale green-and-pink palette. A fountain pen on the right reinforces the literary theme."
          ]
        },
        {
          "title": "Back — Old Yerevan",
          "text": [
            "The reverse shows a scene from old Yerevan: a two-storey building on Hanrapetutyan Street and a carriage drawn by two horses. The architecture is rendered in fine linear graphics characteristic of banknote engraving. Muted green and grey tones emphasise the historical atmosphere of the cityscape."
          ]
        },
        {
          "title": "Visual concept — Poetry and urban memory",
          "text": [
            "The design brings together national literature and an urban landscape. On the front, poetry becomes part of the graphic composition: lines of verse sit beside the writer's portrait and Mount Ararat. The back shifts attention to the architecture of historical Yerevan, presenting Armenia through its cultural heritage.",
            "The relationship between these elements is a visual interpretation; the depicted subjects themselves are documented by the Central Bank of Armenia."
          ]
        },
        {
          "title": "Three design details",
          "list": [
            [
              "Poetry instead of conventional ornament",
              "Lines from Charents's poem “I Love My Armenia…” appear beside his portrait. The handwritten lettering makes the text part of the visual design rather than merely an inscription."
            ],
            [
              "Holographic strip with repeated symbols",
              "The vertical purple strip on the left contains a profile of the poet, the dram sign, decorative patterns, and the number 1000. The visible motifs change as the note is tilted."
            ],
            [
              "Fountain pen",
              "A pen in the lower-right corner directly references Charents's work as a writer. It was added to the 2011 design when the earlier banknote was updated."
            ]
          ]
        },
        {
          "title": "Design and contributors",
          "people": [
            [
              "Ashot Manukyan",
              "An artist and designer identified by the Central Bank of Armenia as the creator of the original 1,000-dram banknote design featuring Yeghishe Charents, issued in 1999. The 2011 documentation says the new issue was based on an earlier design, but does not separately identify the creator of each 2011 change. Manukyan is therefore credited with the original design, not every alteration to this issue."
            ],
            [
              "Central Bank of the Republic of Armenia",
              "Issuer and authority that approved the 2011 banknote under Board Decision No. 187-N of 19 July 2011."
            ],
            [
              "Design studio for the 2011 issue",
              "No information about a separately commissioned design studio was found."
            ]
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.cba.am/en/1000.1999.2001.2011.2015/",
                "Central Bank of Armenia — 1,000-dram banknotes"
              ],
              [
                "https://www.arlis.am/hy/acts/70578",
                "Central Bank of Armenia — Decision No. 187-N"
              ],
              [
                "https://www.cba.am/file_manager/Currency/Programs/Dram-2013.pdf",
                "Central Bank of Armenia — banknote catalogue (PDF)"
              ],
              [
                "https://en.numista.com/203549",
                "Numista — 1,000 dram with holographic strip"
              ]
            ]
          }
        ]
      },
      "story": "My friend Pasha, who is also my teammate on the university basketball team, gave it to me when he found out I collect banknotes."
    }
  },
  "azerbaijan": {
    "ru": {
      "title": "Манат — Азербайджан",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Азербайджана (Azərbaycan Milli Bankı)"
        ],
        [
          "Валюта",
          "азербайджанский манат (AZN)"
        ],
        [
          "Материал",
          "специальная банкнотная бумага"
        ],
        [
          "Размер",
          "120 × 70 мм"
        ],
        [
          "Образец дизайна",
          "2005 год; в обращении с 1 января 2006 года"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Музыка и национальные инструменты",
          "text": [
            "На банкноте изображены три традиционных азербайджанских инструмента: тар, кеманча и даф. Их графические силуэты пересекаются с нотными знаками и круговыми композициями, создавая ритмичную структуру. На заднем плане используются узоры старинных азербайджанских ковров. Сочетание тонкой линейной графики, геометрических орнаментов и приглушённых серо-жёлтых оттенков представляет музыкальную культуру через современный дизайн."
          ]
        },
        {
          "title": "Оборотная сторона — Азербайджан и Европа",
          "text": [
            "Оборотная сторона содержит стилизованные карты Азербайджана и Европы, дополненные национальными орнаментами. По официальному описанию Центрального банка, эта композиция символизирует интеграцию Азербайджана в европейское пространство. Географические очертания и традиционные узоры объединены в абстрактной графической системе, где национальная культура сопоставляется с более широким международным контекстом."
          ]
        },
        {
          "title": "Визуальная концепция — Культура и открытость миру",
          "text": [
            "Банкнота входит в серию, разработанную под общей концепцией «Независимый Азербайджан». Её официальная тема — «Культура и искусство». Музыкальные инструменты и ковровые орнаменты представляют национальное наследие, а карты на обороте — европейскую интеграцию. Вместе изображения объединяют культурную самобытность страны с её международными связями."
          ]
        },
        {
          "title": "Три интересные детали дизайна",
          "list": [
            [
              "Три национальных музыкальных инструмента",
              "Тар — струнный щипковый инструмент, кеманча — струнный смычковый, а даф — рамочный ударный. На банкноте они изображены не как музейные экспонаты, а как графические символы музыкальной культуры."
            ],
            [
              "Ковровые орнаменты",
              "В фоновой графике используются мотивы традиционного азербайджанского ковроткачества. Повторяющиеся геометрические элементы создают декоративную структуру, которая перекликается с формами музыкальных инструментов. Конкретное название коврового узора в официальном описании не указано."
            ],
            [
              "Музыкальные знаки как часть композиции",
              "Скрипичные ключи и окружности включены в декоративную систему лицевой стороны. Вместо традиционной рамки вокруг центрального изображения дизайнер использует наложение музыкальной символики и геометрических форм."
            ]
          ]
        },
        {
          "title": "Авторы дизайна и участники",
          "people": [
            [
              "Роберт Калина (Robert Kalina)",
              "Австрийский дизайнер, разработавший первоначальную серию банкнот евро и азербайджанские банкноты нового образца 2005 года. Его авторство серии «Независимый Азербайджан», включающей 1 манат, подтверждено Президентской библиотекой Азербайджана."
            ],
            [
              "Национальный банк Азербайджана",
              "Эмитент и заказчик серии, введённой в рамках денежной реформы 2006 года. Концепция новых денежных знаков формировалась в соответствии с решениями государственного комитета по денежной реформе."
            ],
            [
              "Oesterreichische Banknoten- und Sicherheitsdruck GmbH (OeBS)",
              "Австрийская компания, выполнившая печать банкноты. Производственная роль подтверждается специализированными каталогами; свидетельств её самостоятельного авторства графической концепции не найдено."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "В 2006 году Азербайджан провёл деноминацию национальной валюты: один новый манат заменил 5 000 старых. Для реформы разработали новую серию банкнот, объединённую концепцией «Независимый Азербайджан». Каждый номинал получил собственную тему — от культуры и литературы до истории, образования и экономики.",
            "Одноманатная банкнота была посвящена культуре и искусству, а её оформление объединило традиционную музыку, ковровые орнаменты и европейскую интеграцию."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.cbar.az/moneymarks/banknotes/detail/1?language=en",
                "Центральный банк Азербайджана — 1 манат"
              ],
              [
                "https://www.cbar.az/press-release-2952/information-on-our-national-currency?language=en",
                "Центральный банк Азербайджана — информация о национальной валюте"
              ],
              [
                "https://azerbaijan.az/en/information/109",
                "Государственный портал Azerbaijan.az — национальная валюта"
              ],
              [
                "https://www.preslib.az/en/historical/page/M9pKTz7",
                "Президентская библиотека Азербайджана — История национальной валюты"
              ],
              [
                "https://en.numista.com/213657",
                "Numista — 1 манат, 2005"
              ],
              [
                "https://www.pmgnotes.com/priceguide/world-note-prices.aspx?deid=1816956&subcat=2005-issue",
                "PMG — Azerbaijan 1 Manat, 2005"
              ]
            ]
          }
        ]
      }
    },
    "en": {
      "title": "Manat — Azerbaijan",
      "facts": [
        [
          "Issuer",
          "National Bank of Azerbaijan (Azərbaycan Milli Bankı)"
        ],
        [
          "Currency",
          "Azerbaijani manat (AZN)"
        ],
        [
          "Material",
          "special banknote paper"
        ],
        [
          "Size",
          "120 × 70 mm"
        ],
        [
          "Design",
          "2005; introduced on 1 January 2006"
        ]
      ],
      "sections": [
        {
          "title": "Front — Music and national instruments",
          "text": [
            "The banknote depicts three traditional Azerbaijani instruments: the tar, kamancha, and daf. Their graphic silhouettes intersect with musical notation and circular arrangements, forming a rhythmic structure. Patterns from old Azerbaijani carpets appear in the background. Fine linework, geometric ornaments, and muted grey and yellow tones present the country's musical culture through a contemporary graphic language."
          ]
        },
        {
          "title": "Back — Azerbaijan and Europe",
          "text": [
            "The reverse features stylised maps of Azerbaijan and Europe accompanied by national ornaments. According to the Central Bank's official description, this composition symbolises Azerbaijan's integration into the European sphere. Geographical outlines and traditional patterns form an abstract graphic system in which national culture is placed within a broader international context."
          ]
        },
        {
          "title": "Visual concept — Culture and openness to the world",
          "text": [
            "The banknote belongs to a series developed under the overall concept “Independent Azerbaijan”. Its official theme is “Culture and Art”. Musical instruments and carpet motifs represent national heritage; the maps on the reverse refer to European integration. Together, the images connect the country's distinctive cultural identity with its international relationships."
          ]
        },
        {
          "title": "Three design details",
          "list": [
            [
              "Three traditional instruments",
              "The tar is a plucked string instrument, the kamancha a bowed string instrument, and the daf a frame drum. On the note, they function as graphic symbols of musical culture rather than museum objects."
            ],
            [
              "Carpet ornaments",
              "Background patterns draw on traditional Azerbaijani carpet weaving. Repeated geometric forms create a decorative structure that echoes the outlines of the instruments. The official description does not name a specific carpet motif."
            ],
            [
              "Musical signs as composition",
              "Treble clefs and circles form part of the front's decorative system. Instead of framing a single central image, the designer layers musical notation with geometric shapes."
            ]
          ]
        },
        {
          "title": "Design and contributors",
          "people": [
            [
              "Robert Kalina",
              "The Austrian designer who developed the original euro banknote series and the 2005 Azerbaijani series. His authorship of the “Independent Azerbaijan” series, including the 1-manat note, is documented by the Presidential Library of Azerbaijan."
            ],
            [
              "National Bank of Azerbaijan",
              "Issuer and commissioning institution for the series introduced during the 2006 currency reform. The new currency design concept was developed in accordance with decisions by the state's monetary reform committee."
            ],
            [
              "Oesterreichische Banknoten- und Sicherheitsdruck GmbH (OeBS)",
              "The Austrian security printer that produced the note. Its production role is recorded in specialist catalogues; separate authorship of the graphic concept has not been established."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "In 2006, Azerbaijan redenominated its currency: one new manat replaced 5,000 old manats. The reform introduced a new series united by the “Independent Azerbaijan” concept. Each denomination received a distinct theme, ranging from culture and literature to history, education, and the economy.",
            "The 1-manat note focused on culture and art, combining traditional music, carpet patterns, and the theme of European integration."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.cbar.az/moneymarks/banknotes/detail/1?language=en",
                "Central Bank of Azerbaijan — 1 manat"
              ],
              [
                "https://www.cbar.az/press-release-2952/information-on-our-national-currency?language=en",
                "Central Bank of Azerbaijan — national currency information"
              ],
              [
                "https://azerbaijan.az/en/information/109",
                "Azerbaijan.az — national currency"
              ],
              [
                "https://www.preslib.az/en/historical/page/M9pKTz7",
                "Presidential Library of Azerbaijan — history of the national currency"
              ],
              [
                "https://en.numista.com/213657",
                "Numista — 1 manat, 2005"
              ],
              [
                "https://www.pmgnotes.com/priceguide/world-note-prices.aspx?deid=1816956&subcat=2005-issue",
                "PMG — Azerbaijan 1 Manat, 2005"
              ]
            ]
          }
        ]
      }
    }
  },
  "belarus": {
    "ru": {
      "title": "Белорусский рубль — Беларусь",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Республики Беларусь"
        ],
        [
          "Валюта",
          "белорусский рубль (BYN)"
        ],
        [
          "Материал",
          "банкнотная бумага"
        ],
        [
          "Размер",
          "135 × 72 мм"
        ],
        [
          "Образец дизайна",
          "2009 год; обновлённый выпуск 2019 года"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Каменецкая башня",
          "text": [
            "На банкноте изображена Каменецкая башня — оборонительное сооружение конца XIII века, известное также как Белая вежа. Архитектура представлена крупным фрагментом кирпичной кладки с башней, арочными проёмами и характерными декоративными нишами. Красно-коричневая палитра перекликается с цветом кирпича, а геометрический микрорисунок и большие цифры номинала создают контраст исторической архитектуры с современной типографикой."
          ]
        },
        {
          "title": "Оборотная сторона — Древнее Берестье",
          "text": [
            "Оборотная сторона представляет коллаж, посвящённый ранним славянским поселениям на территории современной Брестской области. В композиции объединены деревянное колесо, фрагмент кожаного пояса и реконструкция древнего городища Берестье. Вместо одного монументального объекта дизайнер использует несколько археологических образов, позволяющих показать материальную культуру средневекового поселения: его деревянную архитектуру, ремесло и предметы повседневной жизни."
          ]
        },
        {
          "title": "Визуальная концепция — Архитектура и историческая память",
          "text": [
            "Дизайн входит в серию под девизом «Мая краіна — Беларусь», посвящённую архитектурным памятникам разных регионов страны. Пять рублей представляют Брестскую область. Каменецкая башня показывает её оборонительное наследие, а археологический коллаж на обороте — раннюю городскую культуру. Обе стороны объединяет тема средневековой истории региона."
          ]
        },
        {
          "title": "Три интересные детали дизайна",
          "list": [
            [
              "Кирпичная архитектура как графический орнамент",
              "Кирпичная кладка башни превращается в повторяющийся геометрический рисунок. Дизайнер использует текстуру настоящего исторического сооружения как основу визуального ритма — ряды кирпичей, арки и узкие ниши создают декоративную структуру без необходимости добавлять отдельный национальный узор."
            ],
            [
              "Археологический памятник вместо дворца",
              "Берестье известно сохранившимися остатками деревянных строений средневекового города. На банкноте реконструкция городища сочетается с предметами быта, благодаря чему оборотная сторона рассказывает не только об архитектуре, но и о жизни людей."
            ],
            [
              "Обновление дизайна в 2019 году",
              "В версии 2019 года убрали подпись председателя Национального банка, добавили название архитектурного памятника и обновили его изображение. Основная композиция осталась узнаваемой, а изменения сделали визуальную информацию точнее."
            ]
          ]
        },
        {
          "title": "Авторы дизайна и участники",
          "people": [
            [
              "Светлана Некрасова (Svetlana Nekrasova)",
              "Художница Национального банка Республики Беларусь, участвовавшая в создании серии банкнот образца 2009 года. В интервью 2015 года Некрасова подтвердила участие в разработке новых банкнот и объяснила выбор архитектурной тематики. Каталог Numista указывает её как дизайнера обеих сторон 5-рублёвой банкноты; отдельная роль в корректировках 2019 года документально не установлена."
            ],
            [
              "Национальный банк Республики Беларусь",
              "Эмитент и заказчик серии «Мая краіна — Беларусь», охватывающей архитектурные памятники разных эпох."
            ],
            [
              "Гознак (Россия)",
              "Предприятие, изготовившее обновлённую банкноту 2019 года. Производственная роль не означает подтверждённого авторства графического дизайна."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "После деноминации 2016 года Беларусь ввела новую серию банкнот с архитектурными памятниками разных регионов страны. Пять рублей получили тему Брестской области и раннесредневековой истории.",
            "В 2019 году Национальный банк обновил оформление номиналов 5 и 10 рублей, сохранив композиционную систему с архитектурой на лицевой стороне и тематическим коллажем на обороте."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://static.nbp.pl/publikacje/album-walut/bialorus-www.pdf",
                "Национальный банк Польши — альбом банкнот Беларуси (PDF)"
              ],
              [
                "https://balance-in-hand.by/obzor_aktualnyh_npa_oficialno_opublikovannyh_na_nacionalnom_pravovom_internet-portale_1_maya_133",
                "Обзор постановления о выпуске 2019 года"
              ],
              [
                "https://sputnik.by/20190520/V-Natsbanke-rasskazali-zachem-napechatali-novye-5-i-10-rubley-1041234923.html",
                "Sputnik — комментарии Нацбанка об обновлении 5 и 10 рублей"
              ],
              [
                "https://sputnik.by/20151110/1018367255.html",
                "Sputnik — интервью со Светланой Некрасовой, 2015"
              ],
              [
                "https://en.numista.com/353522",
                "Numista — 5 рублей, выпуск 2019 года"
              ],
              [
                "https://www.banknotes.com/by37.htm",
                "Banknotes.com — 5 рублей образца 2009 года"
              ],
              [
                "https://en.numista.com/211973",
                "Numista — 5 рублей образца 2009 года"
              ]
            ]
          }
        ]
      }
    },
    "en": {
      "title": "Belarusian Ruble — Belarus",
      "facts": [
        [
          "Issuer",
          "National Bank of the Republic of Belarus"
        ],
        [
          "Currency",
          "Belarusian ruble (BYN)"
        ],
        [
          "Material",
          "banknote paper"
        ],
        [
          "Size",
          "135 × 72 mm"
        ],
        [
          "Design",
          "2009 design, updated 2019 issue"
        ]
      ],
      "sections": [
        {
          "title": "Front — Kamyenyets Tower",
          "text": [
            "The banknote depicts Kamyenyets Tower, a defensive structure dating from the late thirteenth century, also known as the White Tower. The architecture appears as a large fragment of brickwork, with the tower, arched openings, and distinctive decorative niches. Reddish-brown colours echo the bricks, while geometric micro-patterns and large denomination numerals contrast the historic building with contemporary typography."
          ]
        },
        {
          "title": "Back — Ancient Berestye",
          "text": [
            "The reverse presents a collage devoted to early Slavic settlements in the territory of today's Brest Region. The composition brings together a wooden wheel, a fragment of a leather belt, and a reconstruction of ancient Berestye. Rather than a single monument, several archaeological subjects evoke the material culture of a medieval settlement: timber architecture, crafts, and objects of everyday life."
          ]
        },
        {
          "title": "Visual concept — Architecture and historical memory",
          "text": [
            "The design belongs to the “My Country — Belarus” series, featuring architectural landmarks from different regions. The 5-ruble note represents Brest Region. Kamyenyets Tower recalls its defensive heritage, while the archaeological collage shows early urban culture. Both sides are linked by the medieval history of the region."
          ]
        },
        {
          "title": "Three design details",
          "list": [
            [
              "Brickwork as graphic ornament",
              "The tower's brickwork becomes a repeated geometric pattern. Rows of bricks, arches, and narrow niches establish visual rhythm without introducing an unrelated national motif."
            ],
            [
              "An archaeological site instead of a palace",
              "Berestye is known for preserved remains of medieval timber buildings. The reverse pairs a reconstruction of the settlement with everyday objects, extending the subject beyond architecture to the lives of its inhabitants."
            ],
            [
              "The 2019 update",
              "The 2019 version removed the National Bank governor's signature, added the landmark's name, and updated its illustration. The overall composition remained recognisable while the information became more precise."
            ]
          ]
        },
        {
          "title": "Design and contributors",
          "people": [
            [
              "Svetlana Nekrasova",
              "An artist at the National Bank of Belarus who worked on the 2009 banknote series. In a 2015 interview she confirmed her involvement and discussed the architectural theme. Numista identifies her as designer of both sides of the 5-ruble note; her specific role in the 2019 revisions has not been established."
            ],
            [
              "National Bank of the Republic of Belarus",
              "Issuer and commissioner of the “My Country — Belarus” series, which spans architecture from multiple historical periods."
            ],
            [
              "Goznak (Russia)",
              "The producer of the updated 2019 note. Production does not establish authorship of its graphic design."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "Following the 2016 redenomination, Belarus introduced a banknote series featuring landmarks from different regions. The 5-ruble note focused on Brest Region and early medieval history.",
            "In 2019, the National Bank updated the 5- and 10-ruble notes while retaining the system of architecture on the front and a thematic collage on the back."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://static.nbp.pl/publikacje/album-walut/bialorus-www.pdf",
                "National Bank of Poland — album of Belarusian banknotes (PDF)"
              ],
              [
                "https://balance-in-hand.by/obzor_aktualnyh_npa_oficialno_opublikovannyh_na_nacionalnom_pravovom_internet-portale_1_maya_133",
                "Overview of the regulation on the 2019 issue"
              ],
              [
                "https://sputnik.by/20190520/V-Natsbanke-rasskazali-zachem-napechatali-novye-5-i-10-rubley-1041234923.html",
                "Sputnik — National Bank on updated 5- and 10-ruble notes"
              ],
              [
                "https://sputnik.by/20151110/1018367255.html",
                "Sputnik — interview with Svetlana Nekrasova, 2015"
              ],
              [
                "https://en.numista.com/353522",
                "Numista — 5 rubles, 2019 issue"
              ],
              [
                "https://www.banknotes.com/by37.htm",
                "Banknotes.com — 5 rubles, 2009 design"
              ],
              [
                "https://en.numista.com/211973",
                "Numista — 5 rubles, 2009 design"
              ]
            ]
          }
        ]
      }
    }
  },
  "bosnia-and-herzegovina": {
    "ru": {
      "title": "Конвертируемая марка — Босния и Герцеговина",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Боснии и Герцеговины"
        ],
        [
          "Валюта",
          "конвертируемая марка (BAM)"
        ],
        [
          "Материал",
          "банкнотная бумага"
        ],
        [
          "Размер",
          "130 × 65 мм"
        ],
        [
          "Образец дизайна",
          "1998 год, вариант Республики Сербской"
        ],
        [
          "Год конкретного экземпляра",
          "не установлен"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Алекса Шантич",
          "text": [
            "На банкноте изображён Алекса Шантич (1868–1924) — поэт, связанный с культурной историей Мостара. Его портрет расположен справа и окружён сложной геометрической розеткой из переплетающихся линий. Оранжево-коричневая гравюра контрастирует с холодным серо-голубым фоном. Крупный номинал и надписи кириллицей и латиницей формируют строгую типографическую структуру."
          ]
        },
        {
          "title": "Оборотная сторона — Хлеб",
          "text": [
            "Центральным изображением оборотной стороны служит буханка хлеба. В отличие от портретов и монументальной архитектуры, часто используемых на банкнотах, здесь выбран повседневный предмет. Изображение помещено внутри орнаментальной розетки, образованной многочисленными пересекающимися линиями. Оранжевые оттенки и геометрическая рамка связывают оборот с лицевой стороной, сохраняя единство оформления."
          ]
        },
        {
          "title": "Визуальная концепция — Литература и повседневная жизнь",
          "text": [
            "Композиция объединяет портрет поэта с изображением хлеба — предмета, который можно воспринимать как символ жизни и человеческого труда. Графическая система строится на контрасте реалистичных изображений и абстрактных геометрических розеток. Повторяющиеся орнаменты и общая цветовая палитра делают обе стороны частью единого визуального повествования.",
            "Связь хлеба с жизнью и трудом — визуальная интерпретация. Официальное объяснение причины выбора именно этого изображения в изученных материалах не найдено."
          ]
        },
        {
          "title": "Три интересные детали дизайна",
          "list": [
            [
              "Геометрическая розетка вокруг портрета",
              "Изображение Шантича обрамлено сложным переплетением тонких линий — гильошем. Эта техника используется в защищённой полиграфии и одновременно выполняет декоративную роль, создавая ритм и визуальную глубину."
            ],
            [
              "Хлеб вместо национального монумента",
              "Выбор повседневного предмета отличает эту банкноту от многих денежных знаков, посвящённых зданиям, историческим событиям или известным личностям. Изображение хлеба становится главным самостоятельным сюжетом оборота."
            ],
            [
              "Две версии одной валюты",
              "Для 10 конвертируемых марок существуют две равноценные версии: с Алексой Шантичем и хлебом — для Республики Сербской, с Маком Диздаром и средневековым надгробием — для Федерации Боснии и Герцеговины. Они используют одинаковые размеры, цветовую систему и элементы защиты, но различаются сюжетами и порядком латинских и кириллических надписей."
            ]
          ]
        },
        {
          "title": "Авторы дизайна и участники",
          "people": [
            [
              "Центральный банк Боснии и Герцеговины",
              "Эмитент банкноты. Первые 10 конвертируемых марок поступили в обращение 22 июня 1998 года. Решения об оформлении принимались в рамках создания единой национальной валюты."
            ],
            [
              "Графический дизайнер / дизайн-студия",
              "Информация об индивидуальных авторах графического дизайна этой конкретной банкноты не найдена."
            ],
            [
              "François-Charles Oberthur Fiduciaire",
              "Французская защищённая типография, изготовившая первый выпуск банкнот 1998 года. Её производственное участие подтверждено Центральным банком, но авторство графического оформления за компанией не установлено."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "После Дейтонского мирного соглашения в Боснии и Герцеговине была создана единая денежная система. В 1998 году в обращение поступила конвертируемая марка.",
            "Особенностью новой валюты стали две версии дизайна большинства номиналов, отражающие культурные традиции Федерации Боснии и Герцеговины и Республики Сербской. Обе версии использовались на равных основаниях по всей стране."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.cbbh.ba/Content/Read/79?lang=en",
                "Центральный банк Боснии и Герцеговины — 10 марок, Республика Сербская"
              ],
              [
                "https://www.cbbh.ba/content/read/1075",
                "Центральный банк — банкноты 10 марок, выпуски 2012–2024 годов"
              ],
              [
                "https://cbbh.ba/press/ShowNews/1521?lang=en",
                "Центральный банк — 25 лет конвертируемой марке"
              ],
              [
                "https://cbbh.ba/Content/Read/1261",
                "Центральный банк — изъятые банкноты"
              ],
              [
                "https://www.banknotes.com/ba64a.htm",
                "Banknotes.com — 10 марок, 1998"
              ],
              [
                "https://www.banknotes.com/ba64b.htm",
                "Banknotes.com — 10 марок, 2008"
              ],
              [
                "https://www.banknoteworld.com/bosnia-and-herzegovina-10-convertible-maraka-banknote-2019-p-81a-3-unc.html",
                "Banknote World — 10 марок, 2019"
              ]
            ]
          }
        ]
      }
    },
    "en": {
      "title": "Convertible Mark — Bosnia and Herzegovina",
      "facts": [
        [
          "Issuer",
          "Central Bank of Bosnia and Herzegovina"
        ],
        [
          "Currency",
          "convertible mark (BAM)"
        ],
        [
          "Material",
          "banknote paper"
        ],
        [
          "Size",
          "130 × 65 mm"
        ],
        [
          "Design",
          "1998 series, Republika Srpska variant"
        ],
        [
          "Year of the particular banknote",
          "not established"
        ]
      ],
      "sections": [
        {
          "title": "Front — Aleksa Šantić",
          "text": [
            "The banknote shows Aleksa Šantić (1868–1924), a poet associated with the cultural history of Mostar. His portrait sits on the right within an elaborate geometric rosette of interlacing lines. Orange-brown engraving contrasts with a cool grey-blue background. Large numerals and inscriptions in Cyrillic and Latin scripts form a disciplined typographic structure."
          ]
        },
        {
          "title": "Back — Bread",
          "text": [
            "A loaf of bread is the central subject on the reverse. Rather than the portraits or monumental architecture commonly found on banknotes, the design features an everyday object. It sits within an ornamental rosette built from numerous crossing lines. Orange tones and the geometric frame tie the reverse to the front and maintain a consistent visual language."
          ]
        },
        {
          "title": "Visual concept — Literature and everyday life",
          "text": [
            "The composition brings together a poet's portrait and bread, which may be interpreted as a symbol of life and human labour. The graphic system contrasts realistic imagery with abstract geometric rosettes. Repeated ornaments and a shared palette integrate the two sides into a single visual narrative.",
            "The association of bread with life and labour is an interpretation. No official explanation of why this particular image was chosen was found in the consulted materials."
          ]
        },
        {
          "title": "Three design details",
          "list": [
            [
              "Geometric rosette around the portrait",
              "Šantić is framed by guilloché, an intricate pattern of fine interlaced lines. Widely used in security printing, it also creates decorative rhythm and depth."
            ],
            [
              "Bread instead of a national monument",
              "An everyday object occupies the main subject position usually reserved for a building, historical event, or prominent figure on many other banknotes."
            ],
            [
              "Two versions of the same currency",
              "There are two equally valid 10-mark designs: Aleksa Šantić with bread for Republika Srpska, and Mak Dizdar with a medieval tombstone for the Federation of Bosnia and Herzegovina. They share dimensions, colour systems, and security features, but differ in their subjects and the order of Latin and Cyrillic inscriptions."
            ]
          ]
        },
        {
          "title": "Design and contributors",
          "people": [
            [
              "Central Bank of Bosnia and Herzegovina",
              "Issuer. The first 10-mark banknotes entered circulation on 22 June 1998 as part of the establishment of a common national currency."
            ],
            [
              "Graphic designer / design studio",
              "No information about the individual graphic designers of this specific note was found."
            ],
            [
              "François-Charles Oberthur Fiduciaire",
              "The French security printer that produced the first issue in 1998. The Central Bank documents its manufacturing role, but graphic design authorship has not been established."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "After the Dayton Peace Agreement, Bosnia and Herzegovina established a single monetary system. The convertible mark entered circulation in 1998.",
            "A distinctive feature was the use of two designs for most denominations, reflecting cultural traditions in the Federation of Bosnia and Herzegovina and Republika Srpska. Both variants had equal validity throughout the country."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.cbbh.ba/Content/Read/79?lang=en",
                "Central Bank of Bosnia and Herzegovina — 10 marks, Republika Srpska"
              ],
              [
                "https://www.cbbh.ba/content/read/1075",
                "Central Bank — 10-mark issues, 2012–2024"
              ],
              [
                "https://cbbh.ba/press/ShowNews/1521?lang=en",
                "Central Bank — 25 years of the convertible mark"
              ],
              [
                "https://cbbh.ba/Content/Read/1261",
                "Central Bank — withdrawn banknotes"
              ],
              [
                "https://www.banknotes.com/ba64a.htm",
                "Banknotes.com — 10 marks, 1998"
              ],
              [
                "https://www.banknotes.com/ba64b.htm",
                "Banknotes.com — 10 marks, 2008"
              ],
              [
                "https://www.banknoteworld.com/bosnia-and-herzegovina-10-convertible-maraka-banknote-2019-p-81a-3-unc.html",
                "Banknote World — 10 marks, 2019"
              ]
            ]
          }
        ]
      }
    }
  },
  "brazil": {
    "ru": {
      "title": "Реал — Бразилия",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Бразилии (Banco Central do Brasil)"
        ],
        [
          "Валюта",
          "бразильский реал (BRL)"
        ],
        [
          "Материал",
          "специальная банкнотная бумага"
        ],
        [
          "Размер",
          "121 × 65 мм"
        ],
        [
          "Образец дизайна",
          "2010 год; введён в обращение 29 июля 2013 года"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Аллегория Республики",
          "text": [
            "Лицевую сторону украшает женский профиль — аллегорическое олицетворение Бразильской Республики, а не портрет исторической личности. Классический скульптурный образ выполнен в тонкой гравированной графике. Крупная цифра номинала, геометрические линии и светлый фон подчёркивают его центральное положение. Единый образ Республики повторяется на банкнотах всей серии, создавая узнаваемую визуальную систему национальной валюты."
          ]
        },
        {
          "title": "Оборотная сторона — Морская черепаха",
          "text": [
            "Главный герой оборота — бисса (Eretmochelys imbricata), вид морской черепахи, встречающийся у побережья Бразилии. Животное изображено в движении среди морских растений, кораллов и морских звёзд. Голубые оттенки и прозрачные наложения создают ощущение подводной среды, а тонкая графическая штриховка передаёт фактуру панциря и плавников."
          ]
        },
        {
          "title": "Визуальная концепция — Государство и природа",
          "text": [
            "Вторая серия реала построена на едином принципе: аллегория Республики на лицевой стороне и представители бразильской фауны на оборотной. Для двух реалов выбрали морскую черепаху. Её изображение связывает валюту с природным наследием страны, тогда как голубая палитра и текучие линии подчёркивают морскую тематику."
          ]
        },
        {
          "title": "Три интересные детали дизайна",
          "list": [
            [
              "Черепаху выбрали жители страны",
              "В 2001 году Центральный банк Бразилии провёл исследование общественных предпочтений для выбора животных на новые номиналы. Морская черепаха оказалась среди двух самых популярных вариантов и была использована на банкноте в 2 реала."
            ],
            [
              "Разные размеры банкнот",
              "Во второй серии реала длина банкнот увеличивается вместе с номиналом. Два реала — самый короткий вариант серии, размером 121 × 65 мм. Это решение помогает различать номиналы, в том числе людям с нарушениями зрения."
            ],
            [
              "Морской образ повторяется в водяном знаке",
              "На светлом участке бумаги при просмотре на просвет проявляется черепаха рядом с цифрой 2. Таким образом, изображение животного становится не только основным художественным сюжетом оборота, но и частью системы защиты банкноты."
            ]
          ]
        },
        {
          "title": "Авторы дизайна и участники",
          "people": [
            [
              "Banco Central do Brasil",
              "Центральный банк Бразилии — эмитент и участник разработки общей визуальной системы второй серии реала."
            ],
            [
              "Casa da Moeda do Brasil",
              "Бразильский монетный двор участвовал в разработке дизайна серии совместно с Центральным банком и отвечает за производство банкнот. Это подтверждено самим Центральным банком."
            ],
            [
              "Индивидуальные художники и дизайнеры",
              "Информация о персональных авторах графического оформления именно банкноты 2 реала этого выпуска не найдена."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Реал стал национальной валютой Бразилии в 1994 году. Вторая серия банкнот начала поступать в обращение в 2010 году, сохранив сочетание Республики и бразильской фауны, но получив обновлённую графику, размеры и защитные элементы.",
            "Банкнота в 2 реала новой серии появилась 29 июля 2013 года."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.bcb.gov.br/novasnotas/nota-2-reais.html",
                "Центральный банк Бразилии — 2 реала, вторая серия"
              ],
              [
                "https://www.bcb.gov.br/cedulasemoedas/cedulasemitidas",
                "Центральный банк Бразилии — каталог выпущенных банкнот"
              ],
              [
                "https://bcb.gov.br/cedulasemoedas/notadeduzentos",
                "Центральный банк Бразилии — описание концепции серии и авторства"
              ],
              [
                "https://www.bcb.gov.br/novasnotas/assets/downloads/material-apoio/2e5/cartilha.pdf",
                "Центральный банк Бразилии — руководство по второй серии реала (PDF)"
              ]
            ]
          }
        ]
      }
    },
    "en": {
      "title": "Real — Brazil",
      "facts": [
        [
          "Issuer",
          "Central Bank of Brazil (Banco Central do Brasil)"
        ],
        [
          "Currency",
          "Brazilian real (BRL)"
        ],
        [
          "Material",
          "special banknote paper"
        ],
        [
          "Size",
          "121 × 65 mm"
        ],
        [
          "Design",
          "second real series, 2010 design; introduced on 29 July 2013"
        ]
      ],
      "sections": [
        {
          "title": "Front — Allegory of the Republic",
          "text": [
            "The front features a female profile representing the Brazilian Republic, rather than a portrait of a historical person. The classical sculptural image is rendered in fine engraved lines. A large denomination numeral, geometric lines, and a light background reinforce its central position. The same allegory appears throughout the banknote series, providing the currency with a recognisable visual identity."
          ]
        },
        {
          "title": "Back — Sea turtle",
          "text": [
            "The main subject of the reverse is a hawksbill sea turtle (Eretmochelys imbricata), a species found off the Brazilian coast. The animal swims among marine plants, coral, and starfish. Blue tones and translucent overlays evoke the underwater environment, while fine linework captures the texture of the shell and flippers."
          ]
        },
        {
          "title": "Visual concept — State and nature",
          "text": [
            "The second real series follows a consistent principle: the allegory of the Republic on the front and Brazilian fauna on the back. The sea turtle was chosen for the 2-real note. Its image connects the currency to the country's natural heritage, while the blue palette and flowing lines reinforce the maritime theme."
          ]
        },
        {
          "title": "Three design details",
          "list": [
            [
              "A turtle chosen by the public",
              "In 2001, the Central Bank of Brazil surveyed public preferences for animals to appear on new denominations. The sea turtle was among the two most popular choices and appeared on the 2-real note."
            ],
            [
              "Different banknote sizes",
              "In the second series, note length increases with denomination. The 2-real banknote is the shortest, at 121 × 65 mm. This assists denomination recognition, including for people with visual impairments."
            ],
            [
              "The sea turtle reappears as a watermark",
              "When held up to the light, a turtle and the number 2 appear in the lighter area of the paper. The animal is therefore both the main artistic subject on the back and part of the note's security design."
            ]
          ]
        },
        {
          "title": "Design and contributors",
          "people": [
            [
              "Banco Central do Brasil",
              "Issuer and participant in the development of the second real series' overall visual system."
            ],
            [
              "Casa da Moeda do Brasil",
              "The Brazilian Mint collaborated with the Central Bank in developing the series' design and is responsible for printing the notes, according to the Central Bank."
            ],
            [
              "Individual artists and designers",
              "No information was found identifying the individual graphic designers of this particular 2-real issue."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The real became Brazil's national currency in 1994. The second series began entering circulation in 2010, retaining the pairing of the Republic and Brazilian fauna while updating graphic design, sizes, and security features.",
            "The new-series 2-real note was introduced on 29 July 2013."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.bcb.gov.br/novasnotas/nota-2-reais.html",
                "Central Bank of Brazil — 2 reais, second series"
              ],
              [
                "https://www.bcb.gov.br/cedulasemoedas/cedulasemitidas",
                "Central Bank of Brazil — issued banknotes"
              ],
              [
                "https://bcb.gov.br/cedulasemoedas/notadeduzentos",
                "Central Bank of Brazil — series concept and authorship"
              ],
              [
                "https://www.bcb.gov.br/novasnotas/assets/downloads/material-apoio/2e5/cartilha.pdf",
                "Central Bank of Brazil — second-series guide (PDF)"
              ]
            ]
          }
        ]
      }
    }
  }
};
