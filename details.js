// Тексты страниц купюр, все в одном месте: data.js подключает их к купюрам по id.
// facts — эмитент, валюта, материал, размер; story — «Как купюра оказалась у меня» (пока её нет,
// блока на странице нет); sections — стороны, концепция, факты о дизайне, авторы, история; sources.
// Собирается скриптом scripts/details-from-md.py: python3 scripts/details-from-md.py <file.md> details.js
// добавляет страны из markdown, а с «-» вместо файла только приводит всё к единому виду.

export const DETAILS = {
  "ukraine": {
    "ru": {
      "title": "Гривна — Украина",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Украины"
        ],
        [
          "Валюта",
          "Украинская гривна (UAH)"
        ],
        [
          "Материал",
          "Специальная банкнотная бумага"
        ],
        [
          "Размер",
          "118 × 63 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Владимир Великий",
          "text": [
            "На банкноте изображён Владимир Великий — киевский князь конца X — начала XI века, при котором произошло крещение Руси. Его портрет соседствует с фигурами святых, государственным трезубцем и орнаментами, отсылающими к средневековому наследию. Жёлто-голубая палитра и крупная цифра «1» придают композиции узнаваемый национальный характер. Портрет — современный художественный образ исторического правителя, а не прижизненное изображение."
          ]
        },
        {
          "title": "Оборотная сторона — Град Владимира в Киеве",
          "text": [
            "Главный сюжет оборота — Град Владимира, укреплённая часть древнего Киева, развивавшаяся при князе Владимире. Это не фотография сохранившегося города, а историческая реконструкция. Справа от городского пейзажа изображена декоративная композиция с военным снаряжением, крестом и мотивами искусства той эпохи. Вместе обе стороны превращают банкноту в небольшую иллюстрированную историю раннесредневекового Киева."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Портрет как водяной знак",
              "На светлом поле слева от основного портрета есть его повторение, видимое на просвет."
            ],
            [
              "Символ старинной гривны",
              "Небольшие изображения на двух сторонах совмещаются при просмотре банкноты на свет; в них проявляется буква «У»."
            ],
            [
              "Семицветная печать",
              "На обороте использована специальная орловская офсетная печать, позволяющая получать точные стыки красок в защитных узорах."
            ]
          ]
        },
        {
          "title": "Дизайн, авторы, художники",
          "people": [
            [
              "Национальный банк Украины",
              "Эмитент, заказчик и орган, утвердивший выпуск банкноты данного образца. Образец 2006 года введён в обращение 22 мая 2006 года. Экземпляр 2011 года сохраняет дизайн этого образца; изменения касались года выпуска и подписи главы НБУ."
            ],
            [
              "Василий Лопата",
              "Художник-график, соавтор первых эскизов гривны начала 1990-х годов; создавал портреты и пейзажи для первоначальной серии банкнот."
            ],
            [
              "Борис Максимов",
              "Художник-дизайнер, соавтор первоначального оформления гривны, работавший над общей графической концепцией, орнаментами, цветами и шрифтами."
            ]
          ],
          "text": [
            "Важно об авторстве: подтверждена роль Лопаты и Максимова в становлении визуальной системы гривны, но найденные источники не позволяют надёжно установить персональное авторство всех элементов именно редизайна 2006 года. В материалах об этом образце также упоминается коллектив художников НБУ. Отдельная дизайн-студия по аналогии с O Street для данной версии не подтверждена.",
            "Производство: Банкнотно-монетный двор Национального банка Украины — профильный национальный производственный комплекс. Авторство творческого дизайна и производство банкнот следует учитывать отдельно."
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Первоначальные бумажные гривны появились после восстановления независимости Украины и начала денежной реформы 1990-х годов. В ранних версиях одногривневой банкноты Владимир Великий уже был главным персонажем, но на обороте изображались руины Херсонеса. В последующих вариантах сюжет заменили на Град Владимира в Киеве: акцент сместился к столице и её средневековой истории."
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
                "https://www.otpbank.com.ua/pdf/privateclients/documents/exchange-banknote/bn11.pdf",
                "Национальный банк Украины — техническое описание банкноты 1 гривна образца 2006 года (PDF, копия)",
                "описание сюжетов, орнаментов и защитных элементов"
              ],
              [
                "https://bank.gov.ua/admin_uploads/banknote/f48a06b1252f484c9d009d9758483a8a/Poster_1_2006.pdf",
                "НБУ — официальный плакат с защитными признаками банкноты (PDF)",
                "водяной знак, защитная нить, микротекст"
              ],
              [
                "https://visnyk.bank.gov.ua/archive/2006/5.pdf",
                "Вестник НБУ, май 2006 (PDF)",
                "введение образца в обращение 22 мая 2006 года"
              ],
              [
                "https://visnyk.bank.gov.ua/archive/2011/8.pdf",
                "Вестник НБУ, август 2011 (PDF)",
                "выпуск 2011 года без смены основного дизайна"
              ],
              [
                "https://talan.bank.gov.ua/uploads/navchalni_materialy/210kh297-putivnik-istoriia-grivni-vulitsiami-kiieva.pdf?v=2",
                "НБУ — путеводитель по истории гривны (PDF)",
                "историческое объяснение Града Владимира"
              ]
            ]
          },
          {
            "title": "Художники и история графического дизайна",
            "links": [
              [
                "https://www.gallery.pl.ua/batko-ukra%D1%97nsko%D1%97-grivni.html",
                "Полтавский художественный музей — «Батько української гривні»",
                "роли Василия Лопаты и Бориса Максимова в первоначальном дизайне"
              ],
              [
                "https://podrobnosti.ua/345056-utochnenie-avtorami-grivny-javljajutsja-boris-maksimov-i-vasilij-lopata.html",
                "Podrobnosti — уточнение об авторах гривны (2006)",
                "разделение функций дизайнеров"
              ],
              [
                "https://myfinance.co.ua/spetsproekty/hryvnia/istoriia-banknoty-v-odnu-hryvniu-sto-tysiach-za-odnu-5785/",
                "MyFinance — история одногривневой банкноты",
                "сравнение версий оформления"
              ]
            ]
          }
        ]
      },
      "story": "Когда я был волонтёром на чемпионате мира по футболу 2018 года в Калининграде, моим соседом по комнате был Вова из Украины. Он и поделился со мной этой купюрой."
    },
    "en": {
      "title": "Hryvnia — Ukraine",
      "facts": [
        [
          "Issuer",
          "National Bank of Ukraine"
        ],
        [
          "Currency",
          "Ukrainian hryvnia (UAH)"
        ],
        [
          "Material",
          "Special banknote paper"
        ],
        [
          "Size",
          "118 × 63 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Volodymyr the Great",
          "text": [
            "The note shows Volodymyr the Great, Prince of Kyiv in the late 10th and early 11th centuries, under whom Rus was baptised. His portrait sits beside figures of saints, the state trident and ornaments that refer to the medieval heritage. The yellow and blue palette and the large “1” give the composition a recognisable national character. The portrait is a modern artistic image of a historical ruler, not a likeness made in his lifetime."
          ]
        },
        {
          "title": "Back — Volodymyr’s City in Kyiv",
          "text": [
            "The main subject of the back is Volodymyr’s City, the fortified part of ancient Kyiv that grew under Prince Volodymyr. It is not a photograph of a surviving city but a historical reconstruction. To the right of the cityscape is a decorative composition with military equipment, a cross and motifs from the art of the period. Together the two sides turn the note into a small illustrated history of early medieval Kyiv."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "Portrait as a watermark",
              "On the light field to the left of the main portrait there is a repeat of it, visible against the light."
            ],
            [
              "The old hryvnia symbol",
              "Small images on the two sides line up when the note is held to the light, revealing the letter “У”."
            ],
            [
              "Seven-colour printing",
              "The back uses special Orlov offset printing, which gives exact colour joins in the security patterns."
            ]
          ]
        },
        {
          "title": "Design, authors, artists",
          "people": [
            [
              "National Bank of Ukraine",
              "Issuer, client and the body that approved this design. The 2006 design entered circulation on 22 May 2006. The 2011 note keeps this design; only the year of issue and the governor’s signature changed."
            ],
            [
              "Vasyl Lopata",
              "Graphic artist and co-author of the first hryvnia sketches in the early 1990s; drew portraits and landscapes for the original series."
            ],
            [
              "Borys Maksymov",
              "Designer and co-author of the original hryvnia look, who worked on the overall graphic concept, ornaments, colours and lettering."
            ]
          ],
          "text": [
            "A note on authorship: the role of Lopata and Maksymov in shaping the hryvnia’s visual system is confirmed, but the sources found do not reliably attribute every element of the 2006 redesign to individual artists. Materials about this design also mention a team of NBU artists. No separate design studio, like O Street, is confirmed for this version.",
            "Production: the Banknote Printing and Minting Works of the National Bank of Ukraine, the country’s dedicated production plant. Creative authorship and production should be considered separately."
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The first paper hryvnias appeared after Ukraine restored its independence and began the currency reform of the 1990s. Volodymyr the Great was already the main figure on early one-hryvnia notes, but their back showed the ruins of Chersonesus. Later versions replaced it with Volodymyr’s City in Kyiv, shifting the focus to the capital and its medieval history."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "title": "Official sources on the note",
            "links": [
              [
                "https://www.otpbank.com.ua/pdf/privateclients/documents/exchange-banknote/bn11.pdf",
                "National Bank of Ukraine — technical description of the 1 hryvnia note, 2006 design (PDF, copy)",
                "subjects, ornaments and security features"
              ],
              [
                "https://bank.gov.ua/admin_uploads/banknote/f48a06b1252f484c9d009d9758483a8a/Poster_1_2006.pdf",
                "NBU — official poster with the note’s security features (PDF)",
                "watermark, security thread, microtext"
              ],
              [
                "https://visnyk.bank.gov.ua/archive/2006/5.pdf",
                "NBU Herald, May 2006 (PDF)",
                "the design entering circulation on 22 May 2006"
              ],
              [
                "https://visnyk.bank.gov.ua/archive/2011/8.pdf",
                "NBU Herald, August 2011 (PDF)",
                "the 2011 issue without a change of design"
              ],
              [
                "https://talan.bank.gov.ua/uploads/navchalni_materialy/210kh297-putivnik-istoriia-grivni-vulitsiami-kiieva.pdf?v=2",
                "NBU — guide to the history of the hryvnia (PDF)",
                "historical background of Volodymyr’s City"
              ]
            ]
          },
          {
            "title": "Artists and graphic design history",
            "links": [
              [
                "https://www.gallery.pl.ua/batko-ukra%D1%97nsko%D1%97-grivni.html",
                "Poltava Art Museum — “Father of the Ukrainian hryvnia”",
                "the roles of Vasyl Lopata and Borys Maksymov in the original design"
              ],
              [
                "https://podrobnosti.ua/345056-utochnenie-avtorami-grivny-javljajutsja-boris-maksimov-i-vasilij-lopata.html",
                "Podrobnosti — clarification on the hryvnia’s authors (2006)",
                "how the designers split the work"
              ],
              [
                "https://myfinance.co.ua/spetsproekty/hryvnia/istoriia-banknoty-v-odnu-hryvniu-sto-tysiach-za-odnu-5785/",
                "MyFinance — history of the one-hryvnia note",
                "comparison of design versions"
              ]
            ]
          }
        ]
      },
      "story": "When I was volunteering at the 2018 FIFA World Cup in Kaliningrad, my roommate was Vova from Ukraine. He was the one who shared this note with me."
    }
  },
  "bangladesh": {
    "ru": {
      "title": "Така — Бангладеш",
      "facts": [
        [
          "Эмитент",
          "Банк Бангладеш"
        ],
        [
          "Валюта",
          "Бангладешская така (BDT)"
        ],
        [
          "Материал",
          "Банкнотная бумага"
        ],
        [
          "Размер",
          "130 × 60 мм"
        ]
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
          "title": "Три интересных факта про дизайн",
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
          "title": "Дизайн, авторы, художники",
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
                "Банк Бангладеш — банкноты 50 так",
                "официальные описания лицевой и оборотной сторон, даты выпуска и варианты дизайна"
              ],
              [
                "https://beautifulbangladesh.gov.bd/loc/dhaka/93",
                "Туристический совет Бангладеш — Национальный мемориал мучеников",
                "историческое значение мемориала, архитектура и автор проекта"
              ]
            ]
          },
          {
            "title": "Художники и история дизайна",
            "links": [
              [
                "https://www.banknotes.com/bd56.htm",
                "Banknotes.com — Бангладеш, 50 так, 2011",
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
                "Numista — 50 так (2011–2022)",
                "изображения, основные характеристики и описание банкноты"
              ]
            ]
          }
        ]
      },
      "story": "Мой друг привёз её после поездки в эту страну."
    },
    "en": {
      "title": "Taka — Bangladesh",
      "facts": [
        [
          "Issuer",
          "Bangladesh Bank"
        ],
        [
          "Currency",
          "Bangladeshi taka (BDT)"
        ],
        [
          "Material",
          "Banknote paper"
        ],
        [
          "Size",
          "130 × 60 mm"
        ]
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
          "title": "Three interesting design facts",
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
          "title": "Design, authors, artists",
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
      },
      "story": "A friend of mine brought it back from a trip to the country."
    }
  },
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
          "Армянский драм (AMD)"
        ],
        [
          "Материал",
          "Банкнотная бумага"
        ],
        [
          "Размер",
          "136 × 72 мм"
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
          "title": "Три интересных факта про дизайн",
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
          "title": "Дизайн, авторы, художники",
          "people": [
            [
              "Ашот Манукян (Ashot Manukyan)",
              "Художник-дизайнер, указанный Центральным банком Армении как автор проекта первоначальной банкноты 1 000 драмов с Егише Чаренцем, выпущенной в 1999 году. В официальном документе 2011 года говорится, что оформление нового выпуска основано на дизайне предыдущей версии, но персональное авторство изменений 2011 года отдельно не установлено. Манукян указан как автор исходного дизайна, а не всех изменений этого выпуска."
            ],
            [
              "Центральный банк Республики Армения",
              "Эмитент и организация, утвердившая выпуск 2011 года решением совета банка №187-Н от 19 июля 2011 года."
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
          "Banknote paper"
        ],
        [
          "Size",
          "136 × 72 mm"
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
          "title": "Three interesting design facts",
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
          "title": "Design, authors, artists",
          "people": [
            [
              "Ashot Manukyan",
              "An artist and designer identified by the Central Bank of Armenia as the creator of the original 1,000-dram banknote design featuring Yeghishe Charents, issued in 1999. The 2011 documentation says the new issue was based on an earlier design, but does not separately identify the creator of each 2011 change. Manukyan is therefore credited with the original design, not every alteration to this issue."
            ],
            [
              "Central Bank of the Republic of Armenia",
              "Issuer and authority that approved the 2011 banknote under Board Decision No. 187-N of 19 July 2011."
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
          "Национальный банк Азербайджана"
        ],
        [
          "Валюта",
          "Азербайджанский манат (AZN)"
        ],
        [
          "Материал",
          "Специальная банкнотная бумага"
        ],
        [
          "Размер",
          "120 × 70 мм"
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
          "title": "Три интересных факта про дизайн",
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
          "title": "Дизайн, авторы, художники",
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
                "PMG — Азербайджан, 1 манат, 2005"
              ]
            ]
          }
        ]
      },
      "story": "Блин, я уже не помню."
    },
    "en": {
      "title": "Manat — Azerbaijan",
      "facts": [
        [
          "Issuer",
          "National Bank of Azerbaijan"
        ],
        [
          "Currency",
          "Azerbaijani manat (AZN)"
        ],
        [
          "Material",
          "Special banknote paper"
        ],
        [
          "Size",
          "120 × 70 mm"
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
          "title": "Three interesting design facts",
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
          "title": "Design, authors, artists",
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
      },
      "story": "Damn, I honestly don't remember anymore."
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
          "Белорусский рубль (BYN)"
        ],
        [
          "Материал",
          "Банкнотная бумага"
        ],
        [
          "Размер",
          "135 × 72 мм"
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
          "title": "Три интересных факта про дизайн",
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
          "title": "Дизайн, авторы, художники",
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
      },
      "story": "Блин, я уже не помню."
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
          "Banknote paper"
        ],
        [
          "Size",
          "135 × 72 mm"
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
          "title": "Three interesting design facts",
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
          "title": "Design, authors, artists",
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
      },
      "story": "Damn, I honestly don't remember anymore."
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
          "Конвертируемая марка (BAM)"
        ],
        [
          "Материал",
          "Банкнотная бумага"
        ],
        [
          "Размер",
          "130 × 65 мм"
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
          "title": "Три интересных факта про дизайн",
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
          "title": "Дизайн, авторы, художники",
          "people": [
            [
              "Центральный банк Боснии и Герцеговины",
              "Эмитент банкноты. Первые 10 конвертируемых марок поступили в обращение 22 июня 1998 года. Решения об оформлении принимались в рамках создания единой национальной валюты."
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
      },
      "story": "Увидел купюру в одном из баров и обменял её на чаевые."
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
          "Convertible mark (BAM)"
        ],
        [
          "Material",
          "Banknote paper"
        ],
        [
          "Size",
          "130 × 65 mm"
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
          "title": "Three interesting design facts",
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
          "title": "Design, authors, artists",
          "people": [
            [
              "Central Bank of Bosnia and Herzegovina",
              "Issuer. The first 10-mark banknotes entered circulation on 22 June 1998 as part of the establishment of a common national currency."
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
      },
      "story": "I spotted this note in a bar and swapped it for a tip."
    }
  },
  "brazil": {
    "ru": {
      "title": "Реал — Бразилия",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Бразилии"
        ],
        [
          "Валюта",
          "Бразильский реал (BRL)"
        ],
        [
          "Материал",
          "Специальная банкнотная бумага"
        ],
        [
          "Размер",
          "121 × 65 мм"
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
          "title": "Три интересных факта про дизайн",
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
          "title": "Дизайн, авторы, художники",
          "people": [
            [
              "Banco Central do Brasil",
              "Центральный банк Бразилии — эмитент и участник разработки общей визуальной системы второй серии реала."
            ],
            [
              "Casa da Moeda do Brasil",
              "Бразильский монетный двор участвовал в разработке дизайна серии совместно с Центральным банком и отвечает за производство банкнот. Это подтверждено самим Центральным банком."
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
      },
      "story": "В Новосибирске я работал переводчиком на семинарах чёрного пояса Маркуса Винисиуса — основателя Beverly Hills Jiu-Jitsu Club. Во время одного из его приездов мы разговорились о коллекционировании, и он подарил мне эту купюру. Кстати, сам он коллекционирует матрёшки."
    },
    "en": {
      "title": "Real — Brazil",
      "facts": [
        [
          "Issuer",
          "Central Bank of Brazil"
        ],
        [
          "Currency",
          "Brazilian real (BRL)"
        ],
        [
          "Material",
          "Special banknote paper"
        ],
        [
          "Size",
          "121 × 65 mm"
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
          "title": "Three interesting design facts",
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
          "title": "Design, authors, artists",
          "people": [
            [
              "Banco Central do Brasil",
              "Issuer and participant in the development of the second real series' overall visual system."
            ],
            [
              "Casa da Moeda do Brasil",
              "The Brazilian Mint collaborated with the Central Bank in developing the series' design and is responsible for printing the notes, according to the Central Bank."
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
      },
      "story": "In Novosibirsk I worked as an interpreter at black-belt seminars run by Marcus Vinicius, the founder of Beverly Hills Jiu-Jitsu Club. During one of his visits we got talking about collecting, and he gave me this note. Funnily enough, he collects matryoshka dolls himself."
    }
  },
  "brunei": {
    "ru": {
      "title": "Брунейский доллар — Бруней",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Брунея-Даруссалама"
        ],
        [
          "Валюта",
          "Брунейский доллар (BND)"
        ],
        [
          "Материал",
          "Полимер"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — султан Хассанал Болкиах",
          "text": [
            "Справа — портрет султана Хассанала Болкиаха в форме и головном уборе; насыщенный оранжевый фон дополнен крупным рисунком цветка ранчах-ранчах (Cosmos caudatus). Цветочные формы и ритмические полосы смягчают строгий официальный портрет, а слева прозрачное окно с изображением мечети просвечивает насквозь."
          ]
        },
        {
          "title": "Оборотная сторона — мечеть Джаме Аср Хассанил Болкиах",
          "text": [
            "На обороте — вид сверху на мечеть Джаме Аср Хассанил Болкиах в Бандар-Сери-Бегаване с куполами и минаретами, окружённую жилыми кварталами. Изображение выполнено в тёплых красно-коричневых тонах."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Мечеть в прозрачном окне",
              "Большое прозрачное окно купюры содержит камею мечети Джаме Аср Хассанил Болкиах и теневое изображение цифры 10; белая и золотая печать в окне не должна легко стираться."
            ],
            [
              "Малое окно-цветок",
              "Кроме большого окна, на банкноте есть малое прозрачное окошко в форме цветка бунга табор."
            ],
            [
              "Скрытое в ультрафиолете",
              "Под ультрафиолетовым светом серийный номер светится синим, а государственный герб — красным."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Полимерная серия, к которой относится купюра, выпущена в 2011 году — в год, когда начало работу Денежно-кредитное управление Брунея-Даруссалама. В 2021 году оно было переименовано в Центральный банк Брунея-Даруссалама."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.bdcb.gov.bn/currency/security-features",
                "Центральный банк Брунея-Даруссалама — защитные признаки"
              ],
              [
                "https://ambd.gov.bn/security-features-of-brunei-darussalam-polymer-bank-notes",
                "Денежно-кредитное управление Брунея-Даруссалама — защитные признаки полимерных банкнот Брунея-Даруссалама"
              ],
              [
                "https://www.bdcb.gov.bn/consumer/financial-education/central-bank/10-years-in-review",
                "Центральный банк Брунея-Даруссалама — обзор за 10 лет"
              ],
              [
                "https://www.seacen.org/brunei-darussalam-establishes-the-autoriti-monetari-brunei-darussalam-ambd/",
                "SEACEN — в Брунее-Даруссаламе создано Денежно-кредитное управление Брунея-Даруссалама"
              ],
              [
                "https://en.numista.com/catalogue/note203614.html",
                "Numista — 10 ринггитов (Бруней)"
              ]
            ]
          }
        ]
      },
      "story": "Блин, я уже не помню."
    },
    "en": {
      "title": "Brunei Dollar — Brunei",
      "facts": [
        [
          "Issuer",
          "Brunei Darussalam Central Bank"
        ],
        [
          "Currency",
          "Brunei dollar (BND)"
        ],
        [
          "Material",
          "Polymer"
        ]
      ],
      "sections": [
        {
          "title": "Front — Sultan Hassanal Bolkiah",
          "text": [
            "On the right is a portrait of Sultan Hassanal Bolkiah in uniform and headdress; the rich orange background is complemented by a large image of the ranchah-ranchah flower (Cosmos caudatus). The floral shapes and rhythmic stripes soften the formal official portrait, and on the left a clear window with an image of a mosque can be seen right through the note."
          ]
        },
        {
          "title": "Back — Jame' Asr Hassanil Bolkiah Mosque",
          "text": [
            "The back shows an aerial view of the Jame' Asr Hassanil Bolkiah Mosque in Bandar Seri Begawan, with its domes and minarets, surrounded by residential neighbourhoods. The image is rendered in warm reddish-brown tones."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A mosque in the clear window",
              "The note's large clear window contains a cameo of the Jame' Asr Hassanil Bolkiah Mosque and a shadow image of the numeral 10; the white and gold print in the window should not rub off easily."
            ],
            [
              "A small flower-shaped window",
              "In addition to the large window, the banknote has a small clear window in the shape of a bunga tabor flower."
            ],
            [
              "Hidden under ultraviolet",
              "Under ultraviolet light the serial number glows blue and the national emblem glows red."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The polymer series to which this note belongs was issued in 2011 — the year Autoriti Monetari Brunei Darussalam began operating. In 2021 it was renamed Brunei Darussalam Central Bank."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.bdcb.gov.bn/currency/security-features",
                "Brunei Darussalam Central Bank — Security Features"
              ],
              [
                "https://ambd.gov.bn/security-features-of-brunei-darussalam-polymer-bank-notes",
                "Autoriti Monetari Brunei Darussalam — Security Features of Brunei Darussalam Polymer Bank Notes"
              ],
              [
                "https://www.bdcb.gov.bn/consumer/financial-education/central-bank/10-years-in-review",
                "Brunei Darussalam Central Bank — 10 Years in Review"
              ],
              [
                "https://www.seacen.org/brunei-darussalam-establishes-the-autoriti-monetari-brunei-darussalam-ambd/",
                "SEACEN — Brunei Darussalam Establishes the Autoriti Monetari Brunei Darussalam"
              ],
              [
                "https://en.numista.com/catalogue/note203614.html",
                "Numista — 10 Ringgit (Brunei)"
              ]
            ]
          }
        ]
      },
      "story": "Damn, I honestly don't remember anymore."
    }
  },
  "cambodia": {
    "ru": {
      "title": "Риель — Камбоджа",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Камбоджи"
        ],
        [
          "Валюта",
          "Камбоджийский риель (KHR)"
        ],
        [
          "Размер",
          "146 × 68 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — король Нородом Сианук",
          "text": [
            "На фиолетово-коричневой лицевой стороне — портрет короля Нородома Сианука с широкими декоративными полосами. Число 10 000 и традиционная кхмерская письменность образуют контраст с тонкой гравированной фактурой; слева номинал обрамляет фигура многоголового нага."
          ]
        },
        {
          "title": "Оборотная сторона — Королевский дворец и гонки лодок",
          "text": [
            "На обороте изображён Королевский дворец в Пномпене, а перед ним на реке — длинные лодки с гребцами, как во время праздника воды. Длинные горизонтали дворцовой ограды и лодок подчёркнуты плоской линией берега, а декоративные орнаменты связывают изображение с лицевой стороной."
          ]
        },
        {
          "title": "Визуальная концепция — монархия и праздник",
          "text": [
            "Обе стороны посвящены королевской теме: портрет монарха на лицевой стороне и его резиденция на обороте. Сцена с лодками добавляет в официальный сюжет живое движение народного праздника."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.nbc.gov.kh/english/about_the_bank/banknotes_in_circulation.php",
                "Национальный банк Камбоджи — банкноты в обращении"
              ],
              [
                "https://www.realbanknotes.com/banknote/2755-Cambodia-p56a-10000-Riels-from-2001",
                "RealBanknotes — Cambodia P56 10000 Riels (каталог)"
              ],
              [
                "https://en.numista.com/205860",
                "Numista — 10 000 риелей (каталог)"
              ]
            ]
          }
        ]
      },
      "story": "Осталась после поездки, когда я путешествовал с рюкзаком по Азии — из Сибири до Таиланда на поездах и автобусах."
    },
    "en": {
      "title": "Riel — Cambodia",
      "facts": [
        [
          "Issuer",
          "National Bank of Cambodia"
        ],
        [
          "Currency",
          "Cambodian riel (KHR)"
        ],
        [
          "Size",
          "146 × 68 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — King Norodom Sihanouk",
          "text": [
            "The purple-brown front carries a portrait of King Norodom Sihanouk with wide decorative bands. The number 10,000 and traditional Khmer script contrast with the fine engraved texture; on the left, the denomination is framed by the figure of a multi-headed naga."
          ]
        },
        {
          "title": "Back — The Royal Palace and boat races",
          "text": [
            "The back depicts the Royal Palace in Phnom Penh, and in front of it on the river, long boats with rowers, as during the Water Festival. The long horizontals of the palace wall and the boats are emphasised by the flat line of the riverbank, and decorative ornaments link the image to the front."
          ]
        },
        {
          "title": "Visual concept — Monarchy and festival",
          "text": [
            "Both sides are devoted to a royal theme: the monarch's portrait on the front and his residence on the back. The boat scene adds the lively movement of a popular festival to the official subject."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.nbc.gov.kh/english/about_the_bank/banknotes_in_circulation.php",
                "National Bank of Cambodia — Banknotes in Circulation"
              ],
              [
                "https://www.realbanknotes.com/banknote/2755-Cambodia-p56a-10000-Riels-from-2001",
                "RealBanknotes — Cambodia P56 10000 Riels (catalogue)"
              ],
              [
                "https://en.numista.com/205860",
                "Numista — 10,000 riels (catalogue)"
              ]
            ]
          }
        ]
      },
      "story": "It was left over from a trip when I was backpacking around Asia — from Siberia to Thailand by train and bus."
    }
  },
  "china": {
    "ru": {
      "title": "Юань — Китай",
      "facts": [
        [
          "Эмитент",
          "Народный банк Китая"
        ],
        [
          "Валюта",
          "Китайский юань (CNY)"
        ],
        [
          "Размер",
          "145 × 70 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Мао Цзэдун",
          "text": [
            "Портрет Мао Цзэдуна соседствует с названием банка, государственным гербом, цветочным орнаментом и крупным числом 20. Фон постепенно переходит из коричнево-оранжевого в зелёный, а гравированная штриховка портрета контрастирует с мягкими цветовыми растяжками."
          ]
        },
        {
          "title": "Оборотная сторона — пейзаж Гуйлиня",
          "text": [
            "На обороте изображены карстовые горы и река в районе Гуйлиня, лодка с рыбаком на воде. Панорама построена горизонтально: горы ритмично поднимаются над водой, как на традиционной пейзажной живописи. Справа вверху — название банка в пиньине и на монгольском, тибетском, уйгурском и чжуанском языках, внизу — год «2005»."
          ]
        },
        {
          "title": "Визуальная концепция — портрет и пейзаж",
          "text": [
            "Строгий гравированный портрет на лицевой стороне уравновешен спокойным пейзажем на обороте: пейзаж Гуйлиня построен на повторении силуэтов карстовых гор и их отражений в воде."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Пейзаж, который чувствуется на ощупь",
              "В версии 2005 года пейзаж Гуйлиня, цифры номинала, название банка в пиньине, надписи на языках национальностей, год и печать на обороте выполнены глубокой (металлографской) печатью — рельеф ощутим пальцами."
            ],
            [
              "Голографическая нить",
              "Защитная нить стала голографической магнитной с окнами: в окошках видны микросимволы «¥20»."
            ],
            [
              "Монета из двух половин",
              "Фрагменты узора на лицевой и оборотной сторонах при просвете складываются в изображение старинной монеты; также в версии 2005 года добавлен белый водяной знак «20»."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Купюра относится к пятой серии жэньминьби. Банкнота 20 юаней образца 1999 года была выпущена в обращение 16 октября 2000 года; версия 2005 года сохранила размеры и основные элементы дизайна, но получила обновлённые защитные признаки. В 2019 году выпущена следующая версия этой банкноты."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.pbc.gov.cn/huobijinyinju/147948/147954/148021/176764/2820787/index.html",
                "Народный банк Китая — образец 20 юаней версии 2005 года"
              ],
              [
                "https://www.pbc.gov.cn/huobijinyinju/147948/161763/2884108/index.html",
                "Народный банк Китая — ответы на вопросы о выпуске версии 2005 года пятой серии"
              ],
              [
                "https://www.pbc.gov.cn/huobijinyinju/147948/147954/148021/176741/2820932/index.html",
                "Народный банк Китая — защитные признаки 20 юаней пятой серии"
              ],
              [
                "https://guiyang.pbc.gov.cn/guiyang/113337/114087/2263894/index.html",
                "Народный банк Китая, отделение в Гуйчжоу — защитные признаки 20 юаней версии 2005 года"
              ],
              [
                "https://wuhan.pbc.gov.cn/wuhan/123537/125065/125092/2738351/index.html",
                "Народный банк Китая, отделение в Ухане — 20 юаней версии 2005 года"
              ]
            ]
          }
        ]
      },
      "story": "Осталась после поездки, когда я путешествовал с рюкзаком по Азии — из Сибири до Таиланда на поездах и автобусах."
    },
    "en": {
      "title": "Yuan — China",
      "facts": [
        [
          "Issuer",
          "People's Bank of China"
        ],
        [
          "Currency",
          "Chinese yuan (CNY)"
        ],
        [
          "Size",
          "145 × 70 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Mao Zedong",
          "text": [
            "The portrait of Mao Zedong sits alongside the bank's name, the national emblem, a floral ornament and a large numeral 20. The background shifts gradually from brownish orange to green, and the engraved hatching of the portrait contrasts with the soft colour gradients."
          ]
        },
        {
          "title": "Back — Guilin landscape",
          "text": [
            "The back shows the karst hills and river around Guilin, with a fisherman's boat on the water. The panorama is built horizontally: the hills rise rhythmically above the water, as in traditional landscape painting. At the top right is the bank's name in pinyin and in Mongolian, Tibetan, Uyghur and Zhuang; at the bottom is the year “2005”."
          ]
        },
        {
          "title": "Visual concept — portrait and landscape",
          "text": [
            "The austere engraved portrait on the front is balanced by a calm landscape on the back: the Guilin scene is built on repeated silhouettes of karst hills and their reflections in the water."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A landscape you can feel",
              "In the 2005 version, the Guilin landscape, the denomination numerals, the bank's name in pinyin, the inscriptions in minority languages, the year and the seal on the back are printed by intaglio — the relief can be felt with your fingers."
            ],
            [
              "Holographic thread",
              "The security thread became a windowed holographic magnetic thread: the micro-symbols “¥20” are visible in the windows."
            ],
            [
              "A coin in two halves",
              "Held up to the light, fragments of the pattern on the front and back combine into the image of an ancient coin; the 2005 version also added a white “20” watermark."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The note belongs to the fifth series of the renminbi. The 1999 20-yuan banknote was put into circulation on 16 October 2000; the 2005 version kept the dimensions and main design elements but received updated security features. A further version of this banknote was issued in 2019."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.pbc.gov.cn/huobijinyinju/147948/147954/148021/176764/2820787/index.html",
                "People's Bank of China — 2005 version 20-yuan specimen"
              ],
              [
                "https://www.pbc.gov.cn/huobijinyinju/147948/161763/2884108/index.html",
                "People's Bank of China — Q&A on the issue of the 2005 version of the fifth series"
              ],
              [
                "https://www.pbc.gov.cn/huobijinyinju/147948/147954/148021/176741/2820932/index.html",
                "People's Bank of China — security features of the fifth-series 20 yuan"
              ],
              [
                "https://guiyang.pbc.gov.cn/guiyang/113337/114087/2263894/index.html",
                "People's Bank of China, Guizhou branch — security features of the 2005 version 20 yuan"
              ],
              [
                "https://wuhan.pbc.gov.cn/wuhan/123537/125065/125092/2738351/index.html",
                "People's Bank of China, Wuhan branch — 2005 version 20 yuan"
              ]
            ]
          }
        ]
      },
      "story": "Left over from a trip when I was backpacking around Asia — from Siberia to Thailand by train and bus."
    }
  },
  "czechia": {
    "ru": {
      "title": "Чешская крона — Чехия",
      "facts": [
        [
          "Эмитент",
          "Чешский национальный банк"
        ],
        [
          "Валюта",
          "Чешская крона (CZK)"
        ],
        [
          "Материал",
          "Банкнотная бумага"
        ],
        [
          "Размер",
          "140 × 69 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — король Карл IV",
          "text": [
            "Портрет короля Карла IV занимает правую половину банкноты; гравюра выполнена металлографией в двух оттенках зелёного, над портретом — подпись KAREL IV. Рядом — крупный номинал, надпись «STO KORUN ČESKÝCH», готические нервюры и сложные переплетения цветных линий. Зелёно-розовая графика создаёт ощущение многослойной исторической гравюры."
          ]
        },
        {
          "title": "Оборотная сторона — печать Карлова университета",
          "text": [
            "В центре помещена историческая печать Карлова университета с коленопреклонённым правителем перед святым воином. Справа — большой государственный герб Чешской Республики с чешскими львами и моравской и силезской орлицами, слева — декоративный инициал «B». Большая круглая форма печати противопоставлена геометрическим узорам и цифрам номинала."
          ]
        },
        {
          "title": "Визуальная концепция — символы королевской власти",
          "text": [
            "Средневековая печать и геральдика продолжают сюжет королевского портрета: обе стороны говорят о символах власти и об основании университета Карлом IV, но разными графическими средствами — гравюрой портрета на лицевой стороне и плоской, почти печатной графикой на обороте."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Король в водяном знаке",
              "На широком незапечатанном поле (купоне) — ступенчатый водяной знак с портретом Карла IV, хорошо заметный на просвет."
            ],
            [
              "Скрытая «100» в плече",
              "В плече портрета есть орнаментальное поле со скрытым изображением: под определённым углом света в нём проступает тёмное или светлое число «100»."
            ],
            [
              "Метка «ČR» образца 1997 года",
              "Образец 1997 года отличается от образца 1995 года бумагой, годом, подписью и совмещающейся на просвет меткой: вместо букв «C» и «S» в кольце складываются буквы «ČR»."
            ]
          ]
        },
        {
          "title": "Дизайн, авторы, художники",
          "people": [
            [
              "Ольдржих Кулганек (Oldřich Kulhánek)",
              "автор художественного проекта банкноты"
            ],
            [
              "Милош Ондрачек (Miloš Ondráček)",
              "гравёр лицевой стороны"
            ],
            [
              "Вацлав Файт (Václav Fajt)",
              "гравёр оборотной стороны"
            ],
            [
              "Государственная типография ценных бумаг, Прага (Státní tiskárna cenin)",
              "печать банкноты"
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Сотенная купюра с Карлом IV появилась в 1993 году; образец 1997 года находился в обращении с 15 октября 1997 года. С 1 июля 2022 года купюры 100–2000 крон образцов 1995–1999 годов (с узкой защитной нитью) перестали быть платёжным средством; до 30 июня 2024 года их меняли банки, а теперь — без ограничения срока только кассы ЧНБ. Сюжет сохранился и на новом образце 2018 года."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.cnb.cz/en/banknotes-and-coins/banknotes/100-czk-version-1997/",
                "Чешский национальный банк — 100 крон образца 1997 года"
              ],
              [
                "https://www.cnb.cz/en/banknotes-and-coins/banknotes/protective-elements-czk-100-1997-and-1995-version/",
                "Чешский национальный банк — защитные элементы банкноты 100 крон (образцы 1997 и 1995 годов)"
              ],
              [
                "https://www.cnb.cz/en/cnb-news/press-releases/CZK-100-to-CZK-2000-banknotes-with-thin-silvery-thread-no-longer-valid",
                "Чешский национальный банк — банкноты от 100 до 2 000 крон с тонкой серебристой нитью больше не действительны"
              ],
              [
                "https://www.cnb.cz/cs/cnb-news/tiskove-zpravy/CNB-vydava-nove-vzory-bankovek-100-Kc-a-200-Kc/",
                "ЧНБ — ЧНБ выпускает новые образцы банкнот 100 и 200 крон"
              ],
              [
                "https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/1993/158",
                "Vyhláška ČNB č. 158/1993 Sb. o vydání bankovek po 100 Kč (текст Сборника законов)"
              ],
              [
                "https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/1997/236",
                "Постановление ЧНБ № 236/1997 Сб. о выпуске банкнот 100 крон образца 1997 года"
              ]
            ]
          }
        ]
      },
      "story": "Мой друг привёз её после поездки в эту страну."
    },
    "en": {
      "title": "Czech Koruna — Czechia",
      "facts": [
        [
          "Issuer",
          "Czech National Bank"
        ],
        [
          "Currency",
          "Czech koruna (CZK)"
        ],
        [
          "Material",
          "Banknote paper"
        ],
        [
          "Size",
          "140 × 69 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — King Charles IV",
          "text": [
            "The portrait of King Charles IV occupies the right half of the note; the engraving is printed in intaglio in two shades of green, with the inscription KAREL IV above the portrait. Next to it are a large denomination, the inscription “STO KORUN ČESKÝCH”, Gothic ribs and intricate interlacing coloured lines. The green and pink graphics create the feel of a multi-layered historical engraving."
          ]
        },
        {
          "title": "Back — The seal of Charles University",
          "text": [
            "At the centre is the historical seal of Charles University, showing a kneeling ruler before a warrior saint. On the right is the large state coat of arms of the Czech Republic with the Czech lions and the Moravian and Silesian eagles; on the left, a decorative initial “B”. The large round shape of the seal contrasts with the geometric patterns and the denomination numerals."
          ]
        },
        {
          "title": "Visual concept — Symbols of royal power",
          "text": [
            "The medieval seal and heraldry continue the theme of the royal portrait: both sides speak of the symbols of power and of the founding of the university by Charles IV, but by different graphic means — the engraved portrait on the front and flat, almost print-like graphics on the back."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "The king in the watermark",
              "On the wide unprinted field (the coupon) there is a multi-tone watermark with the portrait of Charles IV, clearly visible against the light."
            ],
            [
              "A hidden “100” in the shoulder",
              "In the shoulder of the portrait there is an ornamental field with a latent image: at a certain angle of light, a dark or light number “100” appears in it."
            ],
            [
              "The “ČR” mark of the 1997 version",
              "The 1997 version differs from the 1995 version in its paper, year, signature and see-through register mark: instead of the letters “C” and “S”, the letters “ČR” come together in the ring."
            ]
          ]
        },
        {
          "title": "Design, authors, artists",
          "people": [
            [
              "Oldřich Kulhánek",
              "designer of the banknote's artwork"
            ],
            [
              "Miloš Ondráček",
              "engraver of the front"
            ],
            [
              "Václav Fajt",
              "engraver of the back"
            ],
            [
              "State Printing Works of Securities, Prague (Státní tiskárna cenin)",
              "printing of the banknote"
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The hundred-koruna note featuring Charles IV appeared in 1993; the 1997 version was in circulation from 15 October 1997. From 1 July 2022, the 100–2,000-koruna notes of the 1995–1999 versions (with a narrow security thread) ceased to be legal tender; until 30 June 2024 they were exchanged by banks, and now only by the CNB cash offices, without a time limit. The design was retained on the new 2018 version as well."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.cnb.cz/en/banknotes-and-coins/banknotes/100-czk-version-1997/",
                "Czech National Bank — 100 CZK version 1997"
              ],
              [
                "https://www.cnb.cz/en/banknotes-and-coins/banknotes/protective-elements-czk-100-1997-and-1995-version/",
                "Czech National Bank — Protective elements, CZK 100 (1997 and 1995 versions)"
              ],
              [
                "https://www.cnb.cz/en/cnb-news/press-releases/CZK-100-to-CZK-2000-banknotes-with-thin-silvery-thread-no-longer-valid",
                "Czech National Bank — CZK 100 to CZK 2,000 banknotes with thin silvery thread no longer valid"
              ],
              [
                "https://www.cnb.cz/cs/cnb-news/tiskove-zpravy/CNB-vydava-nove-vzory-bankovek-100-Kc-a-200-Kc/",
                "ČNB — ČNB vydává nové vzory bankovek 100 Kč a 200 Kč"
              ],
              [
                "https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/1993/158",
                "Vyhláška ČNB č. 158/1993 Sb. o vydání bankovek po 100 Kč (text from the Collection of Laws)"
              ],
              [
                "https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/1997/236",
                "Vyhláška ČNB č. 236/1997 Sb. o vydání bankovek po 100 Kč vzoru 1997"
              ]
            ]
          }
        ]
      },
      "story": "A friend of mine brought it back from a trip to this country."
    }
  },
  "egypt": {
    "ru": {
      "title": "Египетский фунт — Египет",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Египта"
        ],
        [
          "Валюта",
          "Египетский фунт (EGP)"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — мечеть Ахмада ибн Тулуна",
          "text": [
            "На зелёной лицевой стороне изображена мечеть Ахмада ибн Тулуна в Каире (IX век; подпись с её названием напечатана под рисунком) — с высоким минаретом и аркадами двора. Композиция выстроена из фронтальной архитектуры и арабской каллиграфии, подчёркнутых тонкой узорной сеткой; справа — название банка, номинал «пять фунтов» и подпись управляющего Фарука эль-Окды, слева — дата 16.2.2009."
          ]
        },
        {
          "title": "Оборотная сторона — фараоновские рельефы",
          "text": [
            "На обороте показаны древнеегипетские художественные мотивы: в центре — рельеф с фигурой, несущей подношения, с иероглифами, а внизу — фризы со сценами земледелия и рыбной ловли. Контраст исламской архитектуры и более раннего, фараоновского исторического слоя — центральный приём композиции."
          ]
        },
        {
          "title": "Визуальная концепция — два слоя египетской истории",
          "text": [
            "Купюра соединяет две эпохи: средневековый исламский Каир на лицевой стороне и Древний Египет с его зависимостью от Нила и земледелия — на обороте."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Водяной знак с номиналом",
              "Если посмотреть на просвет, проявляется водяной знак с номиналом купюры."
            ],
            [
              "Нить с цифрой",
              "Номинал написан и на защитной нити, вплетённой в бумагу."
            ],
            [
              "Рельеф на ощупь",
              "Металлографская (глубокая) печать даёт выпуклый, шероховатый на ощупь рисунок — один из признаков подлинности, которые ЦБ Египта рекомендует проверять."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Египетские банкноты печатает в самой стране типография Центрального банка, созданная в 1960-х годах и начавшая выпуск в 1967 году."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.cbe.org.eg/en/banknote/printing-house/current-denominations",
                "ЦБ Египта — Current Denominations"
              ],
              [
                "https://www.cbe.org.eg/en/banknote/printing-house/identifying-legitimate-banknote-by-public",
                "ЦБ Египта — Identifying Legitimate Banknote by Public"
              ],
              [
                "https://www.cbe.org.eg/en/banknote/printing-house/history-brief",
                "ЦБ Египта — History Brief"
              ],
              [
                "https://www.koguja.ee/en/banknotes/5-pounds-2006-rdti",
                "Koguja — 5 фунтов, Pick 63 (каталог)"
              ]
            ]
          }
        ]
      },
      "story": "Когда я был волонтёром на чемпионате мира по футболу 2018 года в Калининграде, волонтёр из Египта подарил мне эту купюру на память."
    },
    "en": {
      "title": "Egyptian Pound — Egypt",
      "facts": [
        [
          "Issuer",
          "Central Bank of Egypt"
        ],
        [
          "Currency",
          "Egyptian pound (EGP)"
        ]
      ],
      "sections": [
        {
          "title": "Front — the Mosque of Ahmad ibn Tulun",
          "text": [
            "The green front shows the Mosque of Ahmad ibn Tulun in Cairo (9th century; a caption with its name is printed below the image), with its tall minaret and courtyard arcades. The composition is built from frontal architecture and Arabic calligraphy, set off by a fine patterned grid; on the right are the bank's name, the denomination \"five pounds\" and the signature of Governor Farouk El-Okdah, and on the left the date 16.2.2009."
          ]
        },
        {
          "title": "Back — Pharaonic reliefs",
          "text": [
            "The back shows ancient Egyptian artistic motifs: in the centre is a relief of a figure carrying offerings, with hieroglyphs, and below are friezes with scenes of farming and fishing. The contrast between Islamic architecture and the earlier, Pharaonic historical layer is the central device of the composition."
          ]
        },
        {
          "title": "Visual concept — two layers of Egyptian history",
          "text": [
            "The note brings together two eras: medieval Islamic Cairo on the front, and Ancient Egypt, with its dependence on the Nile and farming, on the back."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A watermark with the denomination",
              "Hold the note up to the light and a watermark with the note's denomination appears."
            ],
            [
              "A thread with a number",
              "The denomination is also written on the security thread woven into the paper."
            ],
            [
              "Relief you can feel",
              "Intaglio printing produces a raised design that feels rough to the touch — one of the signs of authenticity that the Central Bank of Egypt recommends checking."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "Egyptian banknotes are printed in the country itself by the Central Bank's printing house, set up in the 1960s, which began production in 1967."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.cbe.org.eg/en/banknote/printing-house/current-denominations",
                "Central Bank of Egypt — Current Denominations"
              ],
              [
                "https://www.cbe.org.eg/en/banknote/printing-house/identifying-legitimate-banknote-by-public",
                "Central Bank of Egypt — Identifying Legitimate Banknote by Public"
              ],
              [
                "https://www.cbe.org.eg/en/banknote/printing-house/history-brief",
                "Central Bank of Egypt — History Brief"
              ],
              [
                "https://www.koguja.ee/en/banknotes/5-pounds-2006-rdti",
                "Koguja — 5 Pounds, Pick 63 (catalogue)"
              ]
            ]
          }
        ]
      },
      "story": "When I was volunteering at the 2018 FIFA World Cup in Kaliningrad, a volunteer from Egypt gave me this note as a keepsake."
    }
  },
  "european-union": {
    "ru": {
      "title": "Евро — Евросоюз",
      "facts": [
        [
          "Эмитент",
          "Европейский центральный банк / Евросистема"
        ],
        [
          "Валюта",
          "Евро (EUR)"
        ],
        [
          "Материал",
          "Хлопковая бумага"
        ],
        [
          "Размер",
          "120 × 62 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — классический портал",
          "text": [
            "Главный мотив — арка-портал в классическом стиле, но не конкретное существующее здание. Геометрическая рамка портала и звёзды европейского флага помещены на серый фон; слева вверху — флаг ЕС, аббревиатуры банка на пяти языках (BCE ECB EZB EKT EKP), год 2002 и подпись президента ЕЦБ, справа — вертикальная голографическая полоса. Официальная концепция поясняет: окна и проходы символизируют дух открытости и сотрудничества в Европе."
          ]
        },
        {
          "title": "Оборотная сторона — римский мост и карта Европы",
          "text": [
            "На обороте — условный мост-акведук в классическом стиле и карта Европы. Эскиз моста не копирует реальное сооружение; он обозначает связь между народами Европы и между Европой и остальным миром. Широкая горизонталь пролётов подчёркивает идею соединения берегов."
          ]
        },
        {
          "title": "Визуальная концепция — «Эпохи и стили Европы»",
          "text": [
            "Вся первая серия евро построена на теме «Эпохи и стили Европы»: каждый номинал посвящён своему архитектурному периоду, и купюра в 5 евро открывает ряд античной, классической архитектурой. На каждой банкноте повторяются три элемента — окна, порталы и мосты."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Вымышленная архитектура",
              "Ни одна банкнота серии не изображает реальные здания или памятники: арки и мосты — стилизованные образцы архитектуры своей эпохи."
            ],
            [
              "Мосты стали настоящими",
              "Мосты с банкнот задумывались как условные, но позже нидерландский город Спейкениссе построил их полноразмерные копии."
            ],
            [
              "Голограмма и хлопок",
              "На купюре в 5 евро при наклоне голографической полосы изображение меняется между номиналом и знаком € на радужном фоне. Бумага сделана из чистого хлопка и в ультрафиолете не светится — видны лишь красные, синие и зелёные волокна."
            ]
          ]
        },
        {
          "title": "Дизайн, авторы, художники",
          "people": [
            [
              "Роберт Калина (Robert Kalina)",
              "дизайнер первой серии банкнот евро, Национальный банк Австрии"
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Проект Роберта Калины Совет Европейского валютного института выбрал в декабре 1996 года по итогам конкурса, опроса общественности и рекомендации экспертов. Первая серия из семи номиналов вошла в обращение в 2002 году; 2 мая 2013 года её сменила купюра в 5 евро серии «Европа». Банкноты первой серии сохраняют стоимость бессрочно и обмениваются в национальных центральных банках еврозоны."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.ecb.europa.eu/euro/banknotes/current/design/html/index.en.html",
                "ЕЦБ — Design elements"
              ],
              [
                "https://www.ecb.europa.eu/euro/banknotes/current/html/index.en.html",
                "ЕЦБ — Current banknotes"
              ],
              [
                "https://www.ecb.europa.eu/pub/pdf/other/eurobren.pdf",
                "ЕЦБ — The Euro. Our money (PDF)"
              ],
              [
                "https://www.ecb.europa.eu/euro/pdf/material/Quick_Guide_EN_Specimen.pdf",
                "ЕЦБ — Quick guide to the security features of euro banknotes (PDF)"
              ],
              [
                "https://www.ecb.europa.eu/press/pr/date/2013/html/pr130110_1.en.html",
                "ЕЦБ — Eurosystem unveils the Europa series €5 banknote"
              ]
            ]
          }
        ]
      },
      "story": "Блин, я уже не помню."
    },
    "en": {
      "title": "Euro — European Union",
      "facts": [
        [
          "Issuer",
          "European Central Bank / Eurosystem"
        ],
        [
          "Currency",
          "Euro (EUR)"
        ],
        [
          "Material",
          "Cotton paper"
        ],
        [
          "Size",
          "120 × 62 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — a classical gateway",
          "text": [
            "The main motif is an arched gateway in the classical style, though not any specific existing building. The gateway's geometric frame and the stars of the European flag sit on a grey background; at the top left are the EU flag, the bank's abbreviations in five languages (BCE ECB EZB EKT EKP), the year 2002 and the signature of the ECB President, and on the right is a vertical holographic stripe. The official concept explains that the windows and gateways symbolise the spirit of openness and cooperation in Europe."
          ]
        },
        {
          "title": "Back — a Roman bridge and a map of Europe",
          "text": [
            "The back shows a stylised aqueduct-like bridge in the classical style and a map of Europe. The bridge design does not copy a real structure; it represents the connection between the peoples of Europe and between Europe and the rest of the world. The broad horizontal line of the spans emphasises the idea of joining two banks."
          ]
        },
        {
          "title": "Visual concept — \"Ages and styles of Europe\"",
          "text": [
            "The entire first euro series is built on the theme \"Ages and styles of Europe\": each denomination is devoted to its own architectural period, and the 5-euro note opens the sequence with classical architecture of antiquity. Three elements recur on every note: windows, gateways and bridges."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "Imaginary architecture",
              "None of the notes in the series depicts real buildings or monuments: the arches and bridges are stylised examples of the architecture of their era."
            ],
            [
              "The bridges became real",
              "The bridges on the notes were meant to be imaginary, but the Dutch town of Spijkenisse later built full-size replicas of them."
            ],
            [
              "Hologram and cotton",
              "On the 5-euro note, tilting the holographic stripe makes the image switch between the denomination and the € symbol on a rainbow background. The paper is made of pure cotton and does not glow under ultraviolet light; only red, blue and green fibres become visible."
            ]
          ]
        },
        {
          "title": "Design, authors, artists",
          "people": [
            [
              "Robert Kalina",
              "designer of the first series of euro banknotes, Oesterreichische Nationalbank"
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "Robert Kalina's design was chosen by the Council of the European Monetary Institute in December 1996, following a competition, a public survey and an expert recommendation. The first series of seven denominations entered circulation in 2002; on 2 May 2013 its 5-euro note was replaced by the Europa series note. First-series notes keep their value indefinitely and can be exchanged at the national central banks of the euro area."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.ecb.europa.eu/euro/banknotes/current/design/html/index.en.html",
                "ECB — Design elements"
              ],
              [
                "https://www.ecb.europa.eu/euro/banknotes/current/html/index.en.html",
                "ECB — Current banknotes"
              ],
              [
                "https://www.ecb.europa.eu/pub/pdf/other/eurobren.pdf",
                "ECB — The Euro. Our money (PDF)"
              ],
              [
                "https://www.ecb.europa.eu/euro/pdf/material/Quick_Guide_EN_Specimen.pdf",
                "ECB — Quick guide to the security features of euro banknotes (PDF)"
              ],
              [
                "https://www.ecb.europa.eu/press/pr/date/2013/html/pr130110_1.en.html",
                "ECB — Eurosystem unveils the Europa series €5 banknote"
              ]
            ]
          }
        ]
      },
      "story": "Damn, I honestly don't remember anymore."
    }
  },
  "georgia": {
    "ru": {
      "title": "Лари — Грузия",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Грузии"
        ],
        [
          "Валюта",
          "Грузинский лари (GEL)"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Илья Чавчавадзе",
          "text": [
            "Справа — портрет писателя и общественного деятеля Ильи Чавчавадзе, слева — архитектурно-исторические мотивы: здание старого Тбилиси с фаэтоном, газета и журнал, основанные Чавчавадзе, и его личные вещи, выполненные красновато-фиолетовыми линиями. Фигуру поддерживает орнаментальная сетка фона."
          ]
        },
        {
          "title": "Оборотная сторона — памятник Вахтангу Горгасали",
          "text": [
            "Оборот показывает конную статую основателя Тбилиси царя Вахтанга Горгасали на фоне панорамы старого города со скалами и крепостью Нарикала. Тёплые терракотовые тона создают ощущение исторической гравюры."
          ]
        },
        {
          "title": "Визуальная концепция — просветитель и город",
          "text": [
            "Лицевая сторона посвящена литературной и издательской деятельности Чавчавадзе, оборотная — Тбилиси и его основателю. Вместе они складываются в рассказ о национальной культуре и столице."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Принцип роста размеров",
              "При обновлении лари Национальный банк изменил размеры купюр: для номиналов применён принцип диагонального и симметричного роста."
            ],
            [
              "Банкнота года",
              "Обновлённые купюры 20, 50 и 100 лари стали победителями в номинации «Региональная банкнота 2016 года» на конференции HSP Europe."
            ],
            [
              "Выпуск 2021 года",
              "Купюры эмиссии 2021 года напечатаны с тем же дизайном и защитными элементами, отличаются годом «2021» и подписью действующего президента Национального банка."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Обновлённые купюры 20 и 50 лари стали первыми в новой серии и находятся в обращении с 1 февраля 2016 года; при обновлении сохранены прежние темы лари, дополненные новыми элементами. Купюры 20 лари эмиссии 2021 года поступили в обращение 1 июля 2021 года."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://nbg.gov.ge/en/georgian-money",
                "Национальный банк Грузии — грузинские деньги"
              ],
              [
                "https://nbg.gov.ge/en/media/news/national-bank-of-georgia-starts-releasing-upgraded-lari-banknotes-in-circulation",
                "NBG — начало выпуска обновлённых купюр лари"
              ],
              [
                "https://nbg.gov.ge/en/media/news/upgraded-lari-banknotes-win-international-award",
                "НБГ — обновлённые банкноты лари получили международную награду"
              ],
              [
                "https://nbg.gov.ge/en/media/news/on-the-issuance-of-5-and-20-lari-banknotes-of-2021-emission-in-circulation",
                "NBG — о выпуске купюр 5 и 20 лари эмиссии 2021 года"
              ]
            ]
          }
        ]
      },
      "story": "Один из поваров, с которым я работал в ресторане, побывал в Грузии и привёз её в Новосибирск."
    },
    "en": {
      "title": "Lari — Georgia",
      "facts": [
        [
          "Issuer",
          "National Bank of Georgia"
        ],
        [
          "Currency",
          "Georgian lari (GEL)"
        ]
      ],
      "sections": [
        {
          "title": "Front — Ilia Chavchavadze",
          "text": [
            "On the right is a portrait of the writer and public figure Ilia Chavchavadze; on the left are architectural and historical motifs: an Old Tbilisi building with a phaeton, the newspaper and magazine founded by Chavchavadze, and his personal belongings, drawn in reddish-purple lines. The figure is supported by an ornamental background grid."
          ]
        },
        {
          "title": "Back — monument to Vakhtang Gorgasali",
          "text": [
            "The back shows the equestrian statue of King Vakhtang Gorgasali, the founder of Tbilisi, against a panorama of the old town with its cliffs and Narikala Fortress. Warm terracotta tones give the feel of a historical engraving."
          ]
        },
        {
          "title": "Visual concept — the enlightener and the city",
          "text": [
            "The front is dedicated to Chavchavadze's literary and publishing work, the back to Tbilisi and its founder. Together they tell a story of national culture and the capital."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "The principle of increasing size",
              "When the lari was upgraded, the National Bank changed the sizes of the notes, applying a principle of diagonal and symmetrical growth across denominations."
            ],
            [
              "Banknote of the year",
              "The upgraded 20, 50 and 100 lari notes won the “Regional Banknote of the Year 2016” category at the HSP Europe conference."
            ],
            [
              "The 2021 issue",
              "Notes of the 2021 emission are printed with the same design and security features, differing only in the year “2021” and the signature of the current President of the National Bank."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The upgraded 20 and 50 lari notes were the first in the new series and have been in circulation since 1 February 2016; the upgrade kept the existing lari themes, adding new elements to them. The 20 lari notes of the 2021 emission entered circulation on 1 July 2021."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://nbg.gov.ge/en/georgian-money",
                "National Bank of Georgia — Georgian Money"
              ],
              [
                "https://nbg.gov.ge/en/media/news/national-bank-of-georgia-starts-releasing-upgraded-lari-banknotes-in-circulation",
                "NBG — start of the release of upgraded lari banknotes"
              ],
              [
                "https://nbg.gov.ge/en/media/news/upgraded-lari-banknotes-win-international-award",
                "NBG — Upgraded Lari Banknotes Win International Award"
              ],
              [
                "https://nbg.gov.ge/en/media/news/on-the-issuance-of-5-and-20-lari-banknotes-of-2021-emission-in-circulation",
                "NBG — on the issuance of 5 and 20 lari banknotes of the 2021 emission"
              ]
            ]
          }
        ]
      },
      "story": "One of the cooks I worked with at a restaurant visited Georgia and brought it back to Novosibirsk."
    }
  },
  "ghana": {
    "ru": {
      "title": "Седи — Гана",
      "facts": [
        [
          "Эмитент",
          "Банк Ганы"
        ],
        [
          "Валюта",
          "Ганский седи (GHS)"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Кваме Нкрума",
          "text": [
            "Справа — портрет Кваме Нкрумы (1909–1972) в тёплой оранжево-коричневой гамме, в центре — герб Ганы, слева — золотистое изображение памятника и большая цифра номинала. В портретной зоне заметна традиционная банкнотная линейная штриховка, а оранжевые лучи за портретом расширяют композицию вправо."
          ]
        },
        {
          "title": "Оборотная сторона — старое и новое здания парламента",
          "text": [
            "На обороте изображены старое и новое здания парламента Ганы. Их горизонтальная архитектура помещена в широкую панорамную полосу; тёплые охристые оттенки повторяют цвета портрета. Номинал вынесен в отдельные контрастные зоны."
          ]
        },
        {
          "title": "Визуальная концепция — независимость и демократия",
          "text": [
            "Лицевая сторона посвящена лидеру борьбы за независимость, оборотная — институтам государства: по словам Банка Ганы, два здания парламента символизируют углубление демократии в стране."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Купюра к столетию Нкрумы",
              "Двухседиевая банкнота появилась в 2010 году как памятная — к 100-летию со дня рождения Кваме Нкрумы; на самых первых экземплярах была надпись о юбилее, на последующих выпусках, как этот, её нет."
            ],
            [
              "Один из «Большой шестёрки»",
              "На лицевой стороне банкнот Ганы помещают портреты «Большой шестёрки» — шести деятелей, приведших страну к независимости в 1957 году; Кваме Нкрума — один из них."
            ],
            [
              "Два парламента на обороте",
              "Сочетание старого и нового зданий парламента Банк Ганы объяснил как символ углубляющейся демократии."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Банк Ганы ввёл купюру в 2 седи 14 мая 2010 года, чтобы снять нагрузку с купюры в 1 седи: после деноминации 2007 года она выполняла роль сразу трёх старых номиналов и быстро изнашивалась. В 2019 году банк выпустил монету в 2 седи, а купюру этого номинала стал выводить из обращения. Этот экземпляр датирован 4 августа 2017 года и подписан управляющим Эрнестом Аддисоном."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.bog.gov.gh/bank-notes-coins/features-of-currency-notes/",
                "Банк Ганы — особенности денежных знаков"
              ],
              [
                "https://www.modernghana.com/news/270290/bank-of-ghana-to-introduce-gh2-note.html",
                "Modern Ghana — Банк Ганы введёт банкноту 2 седи (2010)"
              ],
              [
                "https://www.modernghana.com/news/275386/new-gh2-cedi-note-out-on-friday.html",
                "Modern Ghana — новая банкнота 2 седи выходит в пятницу (2010)"
              ],
              [
                "https://globalvoices.org/2010/05/18/ghana-new-two-ghana-cedis-notes-unveiled/",
                "Global Voices — Гана: представлены новые банкноты 2 седи"
              ],
              [
                "https://citinewsroom.com/2021/09/bank-of-ghana-to-phase-out-gh%c2%a21-and-gh%c2%a22-notes-soon/",
                "Citi Newsroom — Банк Ганы выведет из обращения банкноты 1 и 2 седи (2021)"
              ],
              [
                "https://en.numista.com/203462",
                "Numista — 2 седи (Гана)"
              ]
            ]
          }
        ]
      },
      "story": "Блин, я уже не помню."
    },
    "en": {
      "title": "Cedi — Ghana",
      "facts": [
        [
          "Issuer",
          "Bank of Ghana"
        ],
        [
          "Currency",
          "Ghanaian cedi (GHS)"
        ]
      ],
      "sections": [
        {
          "title": "Front — Kwame Nkrumah",
          "text": [
            "On the right is a portrait of Kwame Nkrumah (1909–1972) in warm orange-brown tones, in the centre the coat of arms of Ghana, and on the left a golden image of a monument and a large denomination numeral. Traditional banknote line hatching is visible in the portrait area, and orange rays behind the portrait extend the composition to the right."
          ]
        },
        {
          "title": "Back — the old and new Parliament buildings",
          "text": [
            "The back shows the old and new buildings of the Parliament of Ghana. Their horizontal architecture is placed in a wide panoramic band; warm ochre shades echo the colours of the portrait. The denomination is set apart in separate high-contrast areas."
          ]
        },
        {
          "title": "Visual concept — independence and democracy",
          "text": [
            "The front is dedicated to the leader of the struggle for independence, the back to the institutions of the state: according to the Bank of Ghana, the two Parliament buildings symbolise the deepening of democracy in the country."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A note for Nkrumah's centenary",
              "The two-cedi note appeared in 2010 as a commemorative issue marking the 100th anniversary of Kwame Nkrumah's birth; the very first notes carried an inscription about the anniversary, while later issues, like this one, do not."
            ],
            [
              "One of the \"Big Six\"",
              "The fronts of Ghana's banknotes feature portraits of the \"Big Six\" — the six figures who led the country to independence in 1957; Kwame Nkrumah is one of them."
            ],
            [
              "Two parliaments on the back",
              "The Bank of Ghana explained the pairing of the old and new Parliament buildings as a symbol of deepening democracy."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The Bank of Ghana introduced the 2-cedi note on 14 May 2010 to take the pressure off the 1-cedi note: after the 2007 redenomination it was doing the job of three old denominations at once and wore out quickly. In 2019 the bank issued a 2-cedi coin and began withdrawing the note of this denomination from circulation. This note is dated 4 August 2017 and signed by Governor Ernest Addison."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.bog.gov.gh/bank-notes-coins/features-of-currency-notes/",
                "Bank of Ghana — Features of Currency Notes"
              ],
              [
                "https://www.modernghana.com/news/270290/bank-of-ghana-to-introduce-gh2-note.html",
                "Modern Ghana — Bank of Ghana to introduce GH¢2 note (2010)"
              ],
              [
                "https://www.modernghana.com/news/275386/new-gh2-cedi-note-out-on-friday.html",
                "Modern Ghana — New GH¢2 cedi note out on Friday (2010)"
              ],
              [
                "https://globalvoices.org/2010/05/18/ghana-new-two-ghana-cedis-notes-unveiled/",
                "Global Voices — Ghana: New Two Ghana Cedis Notes Unveiled"
              ],
              [
                "https://citinewsroom.com/2021/09/bank-of-ghana-to-phase-out-gh%c2%a21-and-gh%c2%a22-notes-soon/",
                "Citi Newsroom — Bank of Ghana to phase out GH¢1 and GH¢2 notes (2021)"
              ],
              [
                "https://en.numista.com/203462",
                "Numista — 2 Cedis (Ghana)"
              ]
            ]
          }
        ]
      },
      "story": "Damn, I honestly don't remember anymore."
    }
  },
  "hong-kong": {
    "ru": {
      "title": "Гонконгский доллар — Гонконг",
      "facts": [
        [
          "Эмитент",
          "Правительство Специального административного района Гонконг"
        ],
        [
          "Валюта",
          "Гонконгский доллар (HKD)"
        ],
        [
          "Материал",
          "Банкнотная бумага"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — абстрактная композиция",
          "text": [
            "Лицевая сторона — насыщенная розово-лиловая геометрическая композиция без традиционного портретного центра. Крупная цифра 10, надпись «Government of the Hong Kong Special Administrative Region» и подписи финансового секретаря и главы Управления денежного обращения сочетаются с динамическими полосами, формирующими современную диагональную структуру. Внизу — дата «1st January 2003»."
          ]
        },
        {
          "title": "Оборотная сторона — абстрактная композиция",
          "text": [
            "Оборот развивает абстрактные формы: переплетённые линии-решётки, летящая жёлтая лента и концентрические круги складываются в яркую многослойную композицию с контрастными переходами розового и синего."
          ]
        },
        {
          "title": "Визуальная концепция — город и праздник",
          "text": [
            "Отсутствие портрета позволяет сделать цвет, линию и геометрию главными героями. Глава HKMA Джозеф Ям описывал дизайн как абстрактный, с импрессионистскими отсылками к духу современной гонконгской архитектуры и к праздничным и культурным традициям Гонконга и Китая."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Лошадь на просвет",
              "В шестиугольнике на обеих сторонах напечатаны части рисунка, которые на просвет совпадают и складываются в изображение лошади."
            ],
            [
              "Отражающая полоса",
              "Новинкой купюры стала отражающая полоса с цветками баухинии и надписью «HK10»."
            ],
            [
              "Водяной знак",
              "В водяном знаке — цифра 10 и цветок баухинии, эмблема Гонконга."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Купюру в 10 долларов правительство САР выпустило в 2002 году в ответ на спрос на «десятку» для повседневных расчётов, особенно к Лунному Новому году; первые экземпляры датировались 1 июля 2002 года — к 5-летию образования САР. Позднее бумагу сделали прочнее, а с 2007 года правительство выпускает 10 долларов на полимере; бумажные купюры остаются законным платёжным средством."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.hkma.gov.hk/eng/key-functions/money/hong-kong-currency/notes/design-security-features-of-ten-dollar-paper-note/",
                "Валютное управление Гонконга — бумажная банкнота 10 долларов"
              ],
              [
                "https://www.hkma.gov.hk/eng/news-and-media/press-releases/2002/06/20020628-3/",
                "Валютное управление Гонконга — новая банкнота Гонконга 10 долларов (28.06.2002)"
              ],
              [
                "https://www.info.gov.hk/gia/general/200206/28/0628187.htm",
                "Правительство САР Гонконг — Hong Kong's new $10 note"
              ],
              [
                "https://www.hkma.gov.hk/eng/key-functions/money/hong-kong-currency/notes/",
                "Валютное управление Гонконга — банкноты"
              ],
              [
                "https://en.numista.com/catalogue/note203464.html",
                "Numista — 10 Dollars 2002 (каталог)"
              ]
            ]
          }
        ]
      },
      "story": "Мой друг привёз её после поездки в эту страну."
    },
    "en": {
      "title": "Hong Kong Dollar — Hong Kong",
      "facts": [
        [
          "Issuer",
          "Government of the Hong Kong SAR"
        ],
        [
          "Currency",
          "Hong Kong dollar (HKD)"
        ],
        [
          "Material",
          "Banknote paper"
        ]
      ],
      "sections": [
        {
          "title": "Front — an abstract composition",
          "text": [
            "The front is a rich pink-and-lilac geometric composition with no traditional central portrait. A large numeral 10, the inscription \"Government of the Hong Kong Special Administrative Region\" and the signatures of the Financial Secretary and the Chief Executive of the Monetary Authority are combined with dynamic stripes that form a modern diagonal structure. At the bottom is the date \"1st January 2003\"."
          ]
        },
        {
          "title": "Back — an abstract composition",
          "text": [
            "The back develops the abstract forms: interwoven lattice lines, a flying yellow ribbon and concentric circles come together in a bright, multi-layered composition with contrasting transitions between pink and blue."
          ]
        },
        {
          "title": "Visual concept — the city and celebration",
          "text": [
            "Without a portrait, colour, line and geometry become the main characters. HKMA Chief Executive Joseph Yam described the design as abstract, with impressionistic references to the spirit of modern Hong Kong architecture and to the festive and cultural traditions of Hong Kong and China."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A horse against the light",
              "Inside a hexagon on both sides are printed parts of an image that line up against the light to form a picture of a horse."
            ],
            [
              "A reflective stripe",
              "A new feature of the note was a reflective stripe with bauhinia flowers and the inscription \"HK10\"."
            ],
            [
              "Watermark",
              "The watermark shows the numeral 10 and a bauhinia flower, the emblem of Hong Kong."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The SAR Government issued the $10 note in 2002 in response to demand for a \"tenner\" for everyday transactions, especially around Lunar New Year; the first notes were dated 1 July 2002, marking the 5th anniversary of the establishment of the SAR. The paper was later made more durable, and since 2007 the government has issued the $10 note on polymer; paper notes remain legal tender."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.hkma.gov.hk/eng/key-functions/money/hong-kong-currency/notes/design-security-features-of-ten-dollar-paper-note/",
                "HKMA — Ten-Dollar Paper Note"
              ],
              [
                "https://www.hkma.gov.hk/eng/news-and-media/press-releases/2002/06/20020628-3/",
                "HKMA — Hong Kong's new $10 note (28.06.2002)"
              ],
              [
                "https://www.info.gov.hk/gia/general/200206/28/0628187.htm",
                "Hong Kong SAR Government — Hong Kong's new $10 note"
              ],
              [
                "https://www.hkma.gov.hk/eng/key-functions/money/hong-kong-currency/notes/",
                "HKMA — Notes"
              ],
              [
                "https://en.numista.com/catalogue/note203464.html",
                "Numista — 10 Dollars 2002 (catalogue)"
              ]
            ]
          }
        ]
      },
      "story": "A friend of mine brought it back from a trip to this country."
    }
  },
  "india": {
    "ru": {
      "title": "Индийская рупия — Индия",
      "facts": [
        [
          "Эмитент",
          "Резервный банк Индии"
        ],
        [
          "Валюта",
          "Индийская рупия (INR)"
        ],
        [
          "Материал",
          "Хлопковая бумага"
        ],
        [
          "Размер",
          "142 × 66 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Махатма Ганди",
          "text": [
            "Портрет Махатмы Ганди расположен в центре лавандового банкнотного поля. Рядом — национальная символика (капитель колонны Ашоки), печать Резервного банка, номинал со знаком ₹ и надписи на хинди и английском с подписью управляющего; тонкие геометрические линии дополняют реалистичную гравюру."
          ]
        },
        {
          "title": "Оборотная сторона — ступенчатый колодец Рани-ки-Вав",
          "text": [
            "На обороте — Рани-ки-Вав, ступенчатый колодец в Патане (Гуджарат) с ритмичными ярусами колонн, выполненный в лиловых тонах. Слева — год печати 2019 и логотип «Swachh Bharat» со слоганом, рядом — панель с названием номинала на языках Индии. Пустые светлые участки дают баланс детальной архитектуре."
          ]
        },
        {
          "title": "Визуальная концепция — портрет и наследие",
          "text": [
            "Лицевая сторона посвящена человеку, оборотная — памятнику: Резервный банк выбрал для новой серии мотивы культурного наследия страны, и сто рупий получили один из самых сложных архитектурных сюжетов. Единый лавандовый тон связывает гравюру портрета и тонкую графику колодца."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Наследие на обороте",
              "По словам Резервного банка, мотив Рани-ки-Вав на обороте изображает культурное наследие страны; это часть серии Mahatma Gandhi (New), где у каждого номинала свой памятник."
            ],
            [
              "Нить, меняющая цвет",
              "В купюре — оконная защитная нить с надписями «भारत» и RBI: при наклоне её цвет меняется с зелёного на синий. Рядом с портретом есть скрытое изображение номинала, которое видно, если держать купюру горизонтально на уровне глаз."
            ],
            [
              "Метки для незрячих",
              "Портрет Ганди, эмблема Ашоки, печать и подпись напечатаны металлографией и ощущаются на ощупь; по краям нанесены рельефные угловые линии (по четыре с каждой стороны) и треугольная метка с микротекстом «100»."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "О новой купюре в 100 рупий Резервный банк объявил 19 июля 2018 года: она вошла в серию Mahatma Gandhi (New), стала меньше прежних 100 рупий (66 × 142 мм), а все ранее выпущенные купюры в 100 рупий остались законным платёжным средством. В феврале 2019 года банк сообщил о выпуске тех же 100 рупий с подписью нового управляющего Шактиканты Даса — именно такой экземпляр в коллекции.",
            "Сам Рани-ки-Вав построен в XI веке как мемориал и задуман как «перевёрнутый храм», прославляющий воду; почти семь веков он был погребён под речными наносами, а в 2014 году включён ЮНЕСКО в список Всемирного наследия."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=44533",
                "Резервный банк Индии — РБИ выпустит банкноту ₹100 нового дизайна (19.07.2018)"
              ],
              [
                "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=46387",
                "Резервный банк Индии — выпуск банкнот ₹100 с подписью Шактиканты Даса (26.02.2019)"
              ],
              [
                "https://paisaboltahai.rbi.org.in/rupees-one-hundred.aspx",
                "Reserve Bank of India (Paisa Bolta Hai) — ₹100: признаки подлинности"
              ],
              [
                "https://www.rbi.org.in/commonman/Upload/English/FAQs/PDFs/INDIANCURRENCY15042025.pdf",
                "Резервный банк Индии — вопросы и ответы об индийской валюте (2025)"
              ],
              [
                "https://whc.unesco.org/en/decisions/6111/",
                "Центр всемирного наследия ЮНЕСКО — решение 38 COM 8B.25: Рани-ки-Вав"
              ]
            ]
          }
        ]
      },
      "story": "Блин, я уже не помню."
    },
    "en": {
      "title": "Indian Rupee — India",
      "facts": [
        [
          "Issuer",
          "Reserve Bank of India"
        ],
        [
          "Currency",
          "Indian rupee (INR)"
        ],
        [
          "Material",
          "Cotton paper"
        ],
        [
          "Size",
          "142 × 66 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Mahatma Gandhi",
          "text": [
            "The portrait of Mahatma Gandhi sits at the centre of the lavender field of the note. Next to it are the national emblem (the Lion Capital of Ashoka), the Reserve Bank seal, the denomination with the ₹ sign, and inscriptions in Hindi and English with the Governor's signature; fine geometric lines complement the realistic engraving."
          ]
        },
        {
          "title": "Back — Rani ki Vav stepwell",
          "text": [
            "The back shows Rani ki Vav, a stepwell in Patan (Gujarat) with rhythmic tiers of columns, rendered in lilac tones. On the left are the year of printing, 2019, and the “Swachh Bharat” logo with its slogan, next to a panel with the denomination written in the languages of India. Empty light areas balance the detailed architecture."
          ]
        },
        {
          "title": "Visual concept — Portrait and heritage",
          "text": [
            "The front is devoted to a person, the back to a monument: the Reserve Bank chose motifs of the country's cultural heritage for the new series, and the hundred rupees received one of the most intricate architectural subjects. A single lavender tone links the engraved portrait and the fine graphics of the stepwell."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "Heritage on the back",
              "According to the Reserve Bank, the Rani ki Vav motif on the back depicts the country's cultural heritage; it is part of the Mahatma Gandhi (New) series, in which each denomination has its own monument."
            ],
            [
              "A colour-shifting thread",
              "The note has a windowed security thread with the inscriptions “भारत” and RBI: when tilted, its colour changes from green to blue. Next to the portrait is a latent image of the denomination, visible when the note is held horizontally at eye level."
            ],
            [
              "Marks for the visually impaired",
              "Gandhi's portrait, the Ashoka emblem, the seal and the signature are printed in intaglio and can be felt by touch; along the edges there are raised angular bleed lines (four on each side) and a triangular identification mark with the micro-text “100”."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The Reserve Bank announced the new 100-rupee note on 19 July 2018: it became part of the Mahatma Gandhi (New) series and was smaller than the previous 100 rupees (66 × 142 mm), while all previously issued 100-rupee notes remained legal tender. In February 2019 the bank announced the issue of the same 100 rupees bearing the signature of the new Governor, Shaktikanta Das — and that is the note in the collection.",
            "Rani ki Vav itself was built in the 11th century as a memorial and conceived as an “inverted temple” glorifying water; for almost seven centuries it lay buried under river silt, and in 2014 UNESCO inscribed it on the World Heritage List."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=44533",
                "Reserve Bank of India — RBI to Issue New Design ₹100 Denomination Banknote (19.07.2018)"
              ],
              [
                "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=46387",
                "Reserve Bank of India — Issue of ₹100 banknotes bearing the signature of Shri Shaktikanta Das (26.02.2019)"
              ],
              [
                "https://paisaboltahai.rbi.org.in/rupees-one-hundred.aspx",
                "Reserve Bank of India (Paisa Bolta Hai) — ₹100: security features"
              ],
              [
                "https://www.rbi.org.in/commonman/Upload/English/FAQs/PDFs/INDIANCURRENCY15042025.pdf",
                "Reserve Bank of India — Indian Currency FAQ (2025)"
              ],
              [
                "https://whc.unesco.org/en/decisions/6111/",
                "UNESCO World Heritage Centre — Decision 38 COM 8B.25: Rani-ki-Vav"
              ]
            ]
          }
        ]
      },
      "story": "Damn, I honestly don't remember anymore."
    }
  },
  "indonesia": {
    "ru": {
      "title": "Рупия — Индонезия",
      "facts": [
        [
          "Эмитент",
          "Банк Индонезии"
        ],
        [
          "Валюта",
          "Индонезийская рупия (IDR)"
        ],
        [
          "Материал",
          "Хлопковая бумага"
        ],
        [
          "Размер",
          "145 × 65 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Франс Кайсиепо",
          "text": [
            "Пурпурная лицевая сторона включает портрет национального героя Франса Кайсиепо и развитый орнаментальный фон, выполненный тонкими криволинейными штрихами. Справа — герб Гаруда Панчасила, карта архипелага и надпись «Emisi 2016». Крупная цифра 10000 служит контрастной типографической доминантой."
          ]
        },
        {
          "title": "Оборотная сторона — танец пакарена",
          "text": [
            "На обороте — исполнительница танца пакарена с веером, пейзаж национального парка Вакатоби и цветы — цемпака хутан касар. Сцена окружена геометрическими элементами, сочетающими традиционный сюжет с современными цветными защитными узорами."
          ]
        },
        {
          "title": "Визуальная концепция — герой, танец и природа",
          "text": [
            "Купюра соединяет три темы серии 2016 года: человека, который олицетворяет одну из провинций страны, традиционный танец и природный пейзаж. Пурпурный тон объединяет гравюру портрета с полупрозрачными цветами и картой на обороте."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Двенадцать героев и танцы нусантары",
              "По данным Банка Индонезии, на лицевых сторонах серии 2016 года — 12 национальных героев, представляющих все регионы страны, а на оборотах — танцы нусантары и пейзажи Индонезии, чтобы показать искусство, культуру и природное богатство."
            ],
            [
              "Другой герой в водяном знаке",
              "Водяным знаком этой купюры служит портрет другого национального героя — султана Махмуда Бадаруддина II; рядом расположен электротипный орнамент. Оба элемента видны на просвет."
            ],
            [
              "Цветок провинции",
              "Цемпака хутан касар на обороте — символ флоры провинции Западный Сулавеси; это дерево может вырастать до 45 метров."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Серия «Национальные герои» эмиссии 2016 года выпущена 19 декабря 2016 года. Франс Кайсиепо, уроженец острова Биак и губернатор Ириан-Джаи, получил звание национального героя в 1993 году. В 2022 году вышла обновлённая купюра в 10 000 рупий, но эмиссия 2016 года остаётся законным платёжным средством, пока её не изымут из обращения."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.bi.go.id/id/rupiah/gambar-uang/Detail-Uang.aspx?Bahan=Kertas&ID=14",
                "Bank Indonesia — Rp10.000, Tahun Emisi 2016 (описание купюры)"
              ],
              [
                "https://www.bi.go.id/id/publikasi/laporan/Documents/5_LPI2016-Bagian-III.pdf",
                "Банк Индонезии — доклад об экономике Индонезии за 2016 год, часть III"
              ],
              [
                "https://www.bi.go.id/id/publikasi/peraturan/Pages/PBI_241122.aspx",
                "Bank Indonesia — PBI No. 24/11/PBI/2022 о выпуске Rp10.000 эмиссии 2022"
              ],
              [
                "https://cdn.setneg.go.id/_multimedia/document/20171205/1147Penerima_Gelar_Pahlawan_Nasional_1959-2017.pdf",
                "Министерство государственного секретариата Индонезии — лауреаты звания «Национальный герой» 1959–2017"
              ],
              [
                "https://www.bi.go.id/id/rupiah/gambar-uang/Detail-Uang.aspx?Bahan=Kertas&ID=4",
                "Bank Indonesia — Rp10.000, Tahun Emisi 2022 (для сравнения)"
              ]
            ]
          }
        ]
      },
      "story": "Блин, я уже не помню."
    },
    "en": {
      "title": "Rupiah — Indonesia",
      "facts": [
        [
          "Issuer",
          "Bank Indonesia"
        ],
        [
          "Currency",
          "Indonesian rupiah (IDR)"
        ],
        [
          "Material",
          "Cotton paper"
        ],
        [
          "Size",
          "145 × 65 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Frans Kaisiepo",
          "text": [
            "The purple front features a portrait of the national hero Frans Kaisiepo and an elaborate ornamental background made of fine curving lines. On the right are the Garuda Pancasila emblem, a map of the archipelago and the inscription “Emisi 2016”. The large numeral 10000 acts as the contrasting typographic focal point."
          ]
        },
        {
          "title": "Back — the Pakarena dance",
          "text": [
            "The back shows a Pakarena dancer with a fan, a landscape of Wakatobi National Park and flowers of the cempaka hutan kasar. The scene is surrounded by geometric elements that combine the traditional subject with modern coloured security patterns."
          ]
        },
        {
          "title": "Visual concept — hero, dance and nature",
          "text": [
            "The note brings together the three themes of the 2016 series: a person who represents one of the country’s provinces, a traditional dance and a natural landscape. The purple tone unites the engraved portrait with the translucent flowers and the map on the back."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "Twelve heroes and the dances of Nusantara",
              "According to Bank Indonesia, the fronts of the 2016 series show 12 national heroes representing all regions of the country, and the backs show dances of Nusantara and Indonesian landscapes, to showcase the country’s art, culture and natural wealth."
            ],
            [
              "A different hero in the watermark",
              "The watermark of this note is a portrait of another national hero, Sultan Mahmud Badaruddin II, with an electrotype ornament next to it. Both elements are visible when the note is held up to the light."
            ],
            [
              "The province’s flower",
              "The cempaka hutan kasar on the back is the floral symbol of West Sulawesi province; the tree can grow up to 45 metres tall."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The “National Heroes” series of the 2016 emission was issued on 19 December 2016. Frans Kaisiepo, a native of the island of Biak and governor of Irian Jaya, was named a national hero in 1993. An updated 10,000 rupiah note was released in 2022, but the 2016 emission remains legal tender until it is withdrawn from circulation."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.bi.go.id/id/rupiah/gambar-uang/Detail-Uang.aspx?Bahan=Kertas&ID=14",
                "Bank Indonesia — Rp10.000, Tahun Emisi 2016 (banknote description)"
              ],
              [
                "https://www.bi.go.id/id/publikasi/laporan/Documents/5_LPI2016-Bagian-III.pdf",
                "Bank Indonesia — Laporan Perekonomian Indonesia 2016, Bagian III"
              ],
              [
                "https://www.bi.go.id/id/publikasi/peraturan/Pages/PBI_241122.aspx",
                "Bank Indonesia — PBI No. 24/11/PBI/2022 on the issue of the 2022 Rp10.000 emission"
              ],
              [
                "https://cdn.setneg.go.id/_multimedia/document/20171205/1147Penerima_Gelar_Pahlawan_Nasional_1959-2017.pdf",
                "Kementerian Sekretariat Negara RI — Penerima Gelar Pahlawan Nasional 1959–2017"
              ],
              [
                "https://www.bi.go.id/id/rupiah/gambar-uang/Detail-Uang.aspx?Bahan=Kertas&ID=4",
                "Bank Indonesia — Rp10.000, Tahun Emisi 2022 (for comparison)"
              ]
            ]
          }
        ]
      },
      "story": "Damn, I honestly don't remember anymore."
    }
  },
  "kazakhstan": {
    "ru": {
      "title": "Тенге — Казахстан",
      "facts": [
        [
          "Эмитент",
          "Национальный Банк Республики Казахстан"
        ],
        [
          "Валюта",
          "Казахстанский тенге (KZT)"
        ],
        [
          "Размер",
          "126 × 64 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — монумент «Байтерек»",
          "text": [
            "Сторона выполнена в насыщенной бирюзовой и жёлто-зелёной гамме с крупными вертикальными графическими элементами и государственными символами — флагом и гербом. В композиции заметны геометрические полосы, монумент «Байтерек» в Астане, открытая ладонь, наскальное изображение и фрагменты нот государственного гимна."
          ]
        },
        {
          "title": "Оборотная сторона — карта Казахстана и Астана",
          "text": [
            "На обороте контур карты Казахстана объединён с пейзажем и зданиями Министерства транспорта и коммуникаций и Министерства обороны в Астане. Композиция асимметрична и использует несколько разноцветных плоскостей."
          ]
        },
        {
          "title": "Визуальная концепция — новая столица",
          "text": [
            "Обе стороны посвящены Астане: на лицевой — её символ, «Байтерек», на обороте — новые здания столицы, вписанные в карту страны. Ладонь, древний рисунок и ноты гимна соединяют современную архитектуру с историей и государственностью."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Общие мотивы серии",
              "Монумент «Байтерек», открытая ладонь, наскальное изображение, ноты гимна, флаг и герб — общие элементы лицевой стороны банкнот образца 2006 года."
            ],
            [
              "Наскальный рисунок",
              "По описанию Национального банка, на лицевой стороне помещено наскальное изображение бронзового века."
            ],
            [
              "Дизайн против подделок",
              "Национальный банк указывал, что одновременно с обновлением защитных элементов менялся и художественный дизайн банкнот — как эффективный способ борьбы с подделками."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Банкноты образца 2006 года поступили в обращение 15 ноября 2006 года. Новые купюры номиналом 200 тенге Национальный банк больше не выпускает: находящиеся в обращении остаются законным платёжным средством без срока окончания хождения и по мере износа замещаются монетами 200 тенге."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://nationalbank.kz/ru/news/banknoty/6786",
                "Национальный Банк РК — 200 теңге"
              ],
              [
                "https://nationalbank.kz/ru/news/informacionnye-soobshcheniya/15791",
                "Национальный Банк РК — О банкноте и монете номиналом 200 тенге"
              ],
              [
                "https://nationalbank.kz/file/download/5336",
                "Национальный Банк РК — пресс-релиз о банкнотах образца 2006 года"
              ],
              [
                "https://nationalbank.kz/ru/page/currency-history",
                "Национальный Банк РК — История национальной валюты"
              ]
            ]
          }
        ]
      },
      "story": "Блин, я уже не помню."
    },
    "en": {
      "title": "Tenge — Kazakhstan",
      "facts": [
        [
          "Issuer",
          "National Bank of the Republic of Kazakhstan"
        ],
        [
          "Currency",
          "Kazakhstani tenge (KZT)"
        ],
        [
          "Size",
          "126 × 64 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — The Baiterek monument",
          "text": [
            "This side is done in a rich turquoise and yellow-green palette, with large vertical graphic elements and state symbols — the flag and the coat of arms. The composition features geometric stripes, the Baiterek monument in Astana, an open palm, a rock carving and fragments of the score of the national anthem."
          ]
        },
        {
          "title": "Back — Map of Kazakhstan and Astana",
          "text": [
            "On the back, the outline of the map of Kazakhstan is combined with a landscape and the buildings of the Ministry of Transport and Communications and the Ministry of Defence in Astana. The composition is asymmetrical and uses several planes of different colours."
          ]
        },
        {
          "title": "Visual concept — The new capital",
          "text": [
            "Both sides are devoted to Astana: the front shows its symbol, Baiterek, and the back the capital's new buildings set into the map of the country. The palm, the ancient carving and the anthem score connect modern architecture with history and statehood."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "Shared motifs of the series",
              "The Baiterek monument, the open palm, the rock carving, the anthem score, the flag and the coat of arms are common elements on the front of the 2006-series banknotes."
            ],
            [
              "The rock carving",
              "According to the National Bank's description, the front features a Bronze Age rock carving."
            ],
            [
              "Design against counterfeiting",
              "The National Bank noted that, along with updating the security features, the artistic design of the banknotes was also changed, as an effective way to combat counterfeiting."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The 2006-series banknotes entered circulation on 15 November 2006. The National Bank no longer issues new 200-tenge notes: those in circulation remain legal tender with no end date and are being replaced by 200-tenge coins as they wear out."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://nationalbank.kz/ru/news/banknoty/6786",
                "National Bank of Kazakhstan — 200 теңге"
              ],
              [
                "https://nationalbank.kz/ru/news/informacionnye-soobshcheniya/15791",
                "National Bank of Kazakhstan — On the 200-tenge banknote and coin"
              ],
              [
                "https://nationalbank.kz/file/download/5336",
                "National Bank of Kazakhstan — Press release on the 2006-series banknotes"
              ],
              [
                "https://nationalbank.kz/ru/page/currency-history",
                "National Bank of Kazakhstan — History of the national currency"
              ]
            ]
          }
        ]
      },
      "story": "Damn, I honestly don't remember anymore."
    }
  },
  "kyrgyzstan": {
    "ru": {
      "title": "Сом — Кыргызстан",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Кыргызской Республики"
        ],
        [
          "Валюта",
          "Киргизский сом (KGS)"
        ],
        [
          "Материал",
          "Бумага"
        ],
        [
          "Размер",
          "120 × 58 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Тоголок Молдо",
          "text": [
            "Красная портретная сторона содержит изображение акына, поэта и просветителя Тоголока Молдо (1860–1942) в меховом головном уборе; под портретом — надпись «ЖЫЙЫРМА СОМ». Справа от портрета изображён комуз. Портрет вписан в строгие вертикальные орнаментальные границы, а светлый участок подчёркивает номинал."
          ]
        },
        {
          "title": "Оборотная сторона — Таш-Рабат",
          "text": [
            "Оборот выполнен красным; в центре — Таш-Рабат, одно из древнейших сооружений Великого шёлкового пути на территории Кыргызстана, справа — горный пейзаж. Каменная постройка с порталом контрастирует с округлостью декоративного обрамления; внизу указан год выпуска — «2009»."
          ]
        },
        {
          "title": "Визуальная концепция — слово и дорога",
          "text": [
            "Банкнота соединяет народного поэта-акына и комуз — символы устной культуры — с каменным караван-сараем Великого шёлкового пути, напоминающим о древних торговых маршрутах через горы Кыргызстана."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Портрет из слов",
              "Портрет Тоголока Молдо выполнен микрошрифтом — многократно повторённой надписью «Тоголок Молдо», различимой только при увеличении."
            ],
            [
              "Двойной водяной знак",
              "Локальный водяной знак повторяет портрет с лицевой стороны; рядом есть водяной знак в виде номинала."
            ],
            [
              "Нить с номиналом",
              "В бумагу внедрена оконная металлизированная защитная нить с микротекстом «20 СОМ»; для незрячих на белом купонном поле есть рельефный тактильный знак."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Банкнота 20 сомов образца 2009 года выпущена в обращение 1 июля 2009 года. Позднее Национальный банк выпускал модифицированные варианты этого номинала, а в 2023 году — новую банкноту 20 сомов."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.nbkr.kg/index1.jsp?item=1289&lang=RUS",
                "Национальный банк Кыргызской Республики — банкноты"
              ],
              [
                "https://www.nbkr.kg/index1.jsp?item=1289&lang=eng",
                "National Bank of the Kyrgyz Republic — banknotes (англ.)"
              ],
              [
                "https://nbkr.kg/index1.jsp?item=3633&lang=RUS",
                "Национальный банк Кыргызской Республики — Тоголок Молдо"
              ],
              [
                "https://www.nbkr.kg/DOC/10092013/000000000023435.pdf",
                "НБКР — История становления валюты Кыргызстана — сома (хронология), PDF"
              ]
            ]
          }
        ]
      },
      "story": "Подруга моего брата узнала, что я коллекционирую купюры, и поделилась со мной."
    },
    "en": {
      "title": "Som — Kyrgyzstan",
      "facts": [
        [
          "Issuer",
          "National Bank of the Kyrgyz Republic"
        ],
        [
          "Currency",
          "Kyrgyzstani som (KGS)"
        ],
        [
          "Material",
          "Paper"
        ],
        [
          "Size",
          "120 × 58 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Togolok Moldo",
          "text": [
            "The red portrait side shows the akyn, poet and educator Togolok Moldo (1860–1942) in a fur hat; beneath the portrait is the inscription “ЖЫЙЫРМА СОМ”. To the right of the portrait is a komuz. The portrait is set within strict vertical ornamental borders, and a light area highlights the denomination."
          ]
        },
        {
          "title": "Back — Tash Rabat",
          "text": [
            "The back is printed in red; in the centre is Tash Rabat, one of the oldest structures of the Great Silk Road in Kyrgyzstan, and on the right a mountain landscape. The stone building with its portal contrasts with the rounded decorative frame; the year of issue, “2009”, is given at the bottom."
          ]
        },
        {
          "title": "Visual concept — the word and the road",
          "text": [
            "The banknote brings together the folk poet-akyn and the komuz — symbols of oral culture — with the stone caravanserai of the Great Silk Road, a reminder of the ancient trade routes through the mountains of Kyrgyzstan."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A portrait made of words",
              "The portrait of Togolok Moldo is made up of microprinting — the inscription “Тоголок Молдо” repeated many times, visible only under magnification."
            ],
            [
              "A double watermark",
              "A localised watermark repeats the portrait from the front; next to it is a watermark showing the denomination."
            ],
            [
              "A thread with the denomination",
              "A windowed metallised security thread with the microtext “20 СОМ” is embedded in the paper; for blind people there is a raised tactile mark on the white coupon area."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The 2009-series 20-som banknote was put into circulation on 1 July 2009. The National Bank later issued modified versions of this denomination, and in 2023 a new 20-som banknote."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.nbkr.kg/index1.jsp?item=1289&lang=RUS",
                "National Bank of the Kyrgyz Republic — banknotes (in Russian)"
              ],
              [
                "https://www.nbkr.kg/index1.jsp?item=1289&lang=eng",
                "National Bank of the Kyrgyz Republic — banknotes (in English)"
              ],
              [
                "https://nbkr.kg/index1.jsp?item=3633&lang=RUS",
                "National Bank of the Kyrgyz Republic — Togolok Moldo"
              ],
              [
                "https://www.nbkr.kg/DOC/10092013/000000000023435.pdf",
                "NBKR — History of the establishment of Kyrgyzstan's currency, the som (chronology), PDF"
              ]
            ]
          }
        ]
      },
      "story": "My brother's girlfriend found out that I collect banknotes and shared this one with me."
    }
  },
  "macau": {
    "ru": {
      "title": "Патака — Макао",
      "facts": [
        [
          "Эмитент",
          "Банк Китая, отделение в Макао"
        ],
        [
          "Валюта",
          "Патака Макао (MOP)"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — храм А-Ма",
          "text": [
            "Лицевая сторона выполнена в красно-розовой гамме: в центре — храм А-Ма, одна из древнейших святынь Макао, с изогнутой черепичной крышей, каменными львами и лестницей. Слева — эмблема и название Банка Китая на китайском и португальском, справа вверху — дата 8 августа 2008 года и ссылка на Административный регламент № 20/2008 с подписью директора отделения. Надписи на двух языках и крупный номинал показывают многоязычие денежного обращения территории."
          ]
        },
        {
          "title": "Оборотная сторона — здание Банка Китая в Макао",
          "text": [
            "На обороте показано высотное здание Банка Китая в Макао и изгиб моста Дружбы (Ponte de Amizade); вертикальные линии построек перекликаются с графикой лицевой стороны. Розовые узоры и широкая светлая зона облегчают чтение номинала."
          ]
        },
        {
          "title": "Визуальная концепция — наследие и современность",
          "text": [
            "Каждая купюра серии 2008 года показывает на лицевой стороне объект Всемирного наследия Макао, а на обороте — одно и то же здание банка-эмитента. Получается диалог старого и нового города: древний храм против современной башни."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Лотос — символ Макао",
              "На просвет в светлом поле слева виден водяной знак в виде лотоса, рядом — высококонтрастный водяной знак с цифрой номинала."
            ],
            [
              "Лотос, который «катится»",
              "В левом нижнем углу лицевой стороны напечатан лотос оптически переменной краской: при наклоне по нему пробегает световая полоса."
            ],
            [
              "Голографическая нить",
              "Окошечная голографическая нить несёт частично деметаллизированный текст: микробуквы BANK OF CHINA и эмблема банка сменяют друг друга при наклоне."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Серия 2008 года (номиналы 10–1000 патак) выпущена на основании Административного регламента № 20/2008; церемония её представления прошла 5 января 2009 года."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.boc.cn/mo/en/aboutus/ab4/ab41/200912/t20091210_935794.html",
                "Банк Китая (Макао) — Bank of China Pataca Banknotes (2008 Edition)"
              ],
              [
                "https://www.boc.cn/en/aboutboc/ab4/200812/t20081205_1602065.html",
                "Банк Китая — The Contemporary Period: Macau Notes"
              ],
              [
                "https://www.gov.mo/en/?p=46540",
                "Портал правительства Макао — о выпуске банкнот"
              ],
              [
                "https://en.numista.com/204305",
                "Numista — 10 патак 2008 (каталог)"
              ]
            ]
          }
        ]
      },
      "story": "Одна из последних купюр в коллекции и одна из немногих, за которыми я съездил сам, — осенью 2026 года."
    },
    "en": {
      "title": "Pataca — Macau",
      "facts": [
        [
          "Issuer",
          "Bank of China, Macau Branch"
        ],
        [
          "Currency",
          "Macanese pataca (MOP)"
        ]
      ],
      "sections": [
        {
          "title": "Front — A-Ma Temple",
          "text": [
            "The front is designed in red and pink tones: in the centre is A-Ma Temple, one of Macau's oldest shrines, with its curved tiled roof, stone lions and staircase. On the left are the emblem and name of the Bank of China in Chinese and Portuguese; at the top right are the date 8 August 2008 and a reference to Administrative Regulation No. 20/2008, along with the branch director's signature. The bilingual inscriptions and the large denomination reflect the multilingual nature of the territory's currency."
          ]
        },
        {
          "title": "Back — Bank of China Building in Macau",
          "text": [
            "The back shows the Bank of China's high-rise building in Macau and the curve of the Friendship Bridge (Ponte de Amizade); the vertical lines of the buildings echo the graphics on the front. Pink patterns and a wide light area make the denomination easy to read."
          ]
        },
        {
          "title": "Visual concept — heritage and modernity",
          "text": [
            "Every note in the 2008 series shows a Macau World Heritage site on the front and the same building of the issuing bank on the back. The result is a dialogue between the old and the new city: an ancient temple set against a modern tower."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "The lotus — symbol of Macau",
              "Held up to the light, the blank area on the left reveals a lotus watermark, next to a high-contrast watermark of the denomination numeral."
            ],
            [
              "A “rolling” lotus",
              "In the lower-left corner of the front, a lotus is printed in optically variable ink: when the note is tilted, a band of light runs across it."
            ],
            [
              "Holographic thread",
              "The windowed holographic thread carries partially demetallised text: the micro-lettering BANK OF CHINA and the bank's emblem alternate as the note is tilted."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The 2008 series (denominations from 10 to 1,000 patacas) was issued under Administrative Regulation No. 20/2008; its launch ceremony took place on 5 January 2009."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.boc.cn/mo/en/aboutus/ab4/ab41/200912/t20091210_935794.html",
                "Bank of China (Macau) — Bank of China Pataca Banknotes (2008 Edition)"
              ],
              [
                "https://www.boc.cn/en/aboutboc/ab4/200812/t20081205_1602065.html",
                "Bank of China — The Contemporary Period: Macau Notes"
              ],
              [
                "https://www.gov.mo/en/?p=46540",
                "Macao SAR Government Portal — on the banknote issue"
              ],
              [
                "https://en.numista.com/204305",
                "Numista — 10 patacas 2008 (catalogue)"
              ]
            ]
          }
        ]
      },
      "story": "One of the latest notes in my collection, and one of the few I went and got myself — in autumn 2026."
    }
  },
  "malaysia": {
    "ru": {
      "title": "Ринггит — Малайзия",
      "facts": [
        [
          "Эмитент",
          "Банк Негара Малайзия"
        ],
        [
          "Валюта",
          "Малайзийский ринггит (MYR)"
        ],
        [
          "Материал",
          "Полимер"
        ],
        [
          "Размер",
          "120 × 65 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Туанку Абдул Рахман",
          "text": [
            "На лицевой стороне — портрет первого верховного правителя независимой Малайзии (Янг ди-Пертуан Агонга) Туанку Абдул Рахмана. Слева от крупной цифры номинала — красный цветок гибискуса, национального цветка страны, а фон заполнен голубым узором сонгкет. У левого края — прозрачное окно со ступенчатым геометрическим мотивом. Цвет создаёт ясную иерархию между человеком, достоинством купюры и эмблемами."
          ]
        },
        {
          "title": "Оборотная сторона — воздушный змей вау булан",
          "text": [
            "Оборот построен вокруг большого воздушного змея «вау булан» (Wau Bulan, «лунный змей»), узнаваемого малайского декоративно-прикладного объекта. Его изогнутый силуэт выполнен как сложный цветочный узор; на заднем плане — люди, запускающие змеев на берегу. Геометрические элементы и номинал продолжают декоративный ритм лицевой стороны."
          ]
        },
        {
          "title": "Визуальная концепция — узнаваемо малайзийское",
          "text": [
            "Вся четвёртая серия банкнот вышла под общей темой «Distinctively Malaysia» — «Узнаваемо малайзийское»: у каждого номинала свой символ страны, а у ринггита это традиционный воздушный змей. Голубая гамма и узор сонгкет связывают лицевую и оборотную стороны в единую композицию."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Свой символ у каждого номинала",
              "Банк Негара Малайзия закрепил за каждой купюрой серии отдельный мотив: RM1 — «Wau Bulan» (лунный змей), RM5 — птица-носорог, RM10 — раффлезия, RM20 — морские черепахи, RM50 — масличная пальма, RM100 — гора Кинабалу."
            ],
            [
              "Гибискус и сонгкет на всех купюрах",
              "Общими для всех номиналов остались национальный цветок — гибискус (Bunga Raya) — и узоры традиционной ткани сонгкет на фоне и по краям банкнот."
            ],
            [
              "Полимер только для мелких номиналов",
              "В новой серии на полимерной основе печатаются только купюры RM1 и RM5; среди защитных элементов серии — прозрачное окно, теневое изображение и защитная нить с изменяющимся цветом."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Новую (четвёртую) серию банкнот и монет Малайзии представили 21 декабря 2011 года; купюры RM1, RM5, RM10, RM20 и RM100 поступили в обращение во второй половине 2012 года. На этом экземпляре стоит подпись управляющего банком Зети Ахтар Азиз."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.bnm.gov.my/-/launch-of-malaysia-s-new-currency-series",
                "Банк Негара Малайзия — запуск новой серии денежных знаков Малайзии (2011)"
              ],
              [
                "https://www.bnm.gov.my/-/currency/banknotes/rm1",
                "Банк Негара Малайзия — 1 ринггит"
              ],
              [
                "https://www.bnm.gov.my/-/bank-negara-malaysia-to-issue-new-series-of-banknotes-and-coins",
                "Банк Негара Малайзия — Банк Негара Малайзия выпустит новую серию банкнот и монет"
              ],
              [
                "https://www.bnm.gov.my/web/bnm-bank-notes/frequently-asked-questions-faqs-",
                "Bank Negara Malaysia — FAQ о банкнотах"
              ]
            ]
          }
        ]
      },
      "story": "В хостеле в Пекине я познакомился с двумя парнями из Малайзии, и они поделились со мной этой купюрой."
    },
    "en": {
      "title": "Ringgit — Malaysia",
      "facts": [
        [
          "Issuer",
          "Bank Negara Malaysia"
        ],
        [
          "Currency",
          "Malaysian ringgit (MYR)"
        ],
        [
          "Material",
          "Polymer"
        ],
        [
          "Size",
          "120 × 65 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Tuanku Abdul Rahman",
          "text": [
            "The front shows a portrait of Tuanku Abdul Rahman, the first Supreme Head of State (Yang di-Pertuan Agong) of independent Malaysia. To the left of the large denomination numeral is a red hibiscus, the country's national flower, and the background is filled with a blue songket pattern. Near the left edge is a clear window with a stepped geometric motif. Colour creates a clear hierarchy between the person, the denomination and the emblems."
          ]
        },
        {
          "title": "Back — the wau bulan kite",
          "text": [
            "The back is built around a large wau bulan kite (Wau Bulan, \"moon kite\"), a recognisable piece of Malay decorative art. Its curved silhouette is rendered as an intricate floral pattern; in the background, people are flying kites on the shore. The geometric elements and the denomination continue the decorative rhythm of the front."
          ]
        },
        {
          "title": "Visual concept — distinctively Malaysian",
          "text": [
            "The entire fourth series of banknotes was issued under the common theme \"Distinctively Malaysia\": each denomination has its own national symbol, and for the ringgit it is the traditional kite. The blue colour scheme and the songket pattern tie the front and back together into a single composition."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "Each denomination has its own symbol",
              "Bank Negara Malaysia assigned a separate motif to each note in the series: RM1 — the \"Wau Bulan\" (moon kite), RM5 — the hornbill, RM10 — the rafflesia, RM20 — sea turtles, RM50 — the oil palm, RM100 — Mount Kinabalu."
            ],
            [
              "Hibiscus and songket on every note",
              "Common to all denominations are the national flower, the hibiscus (Bunga Raya), and patterns of the traditional songket fabric in the background and along the edges of the notes."
            ],
            [
              "Polymer only for the small denominations",
              "In the new series, only the RM1 and RM5 notes are printed on polymer; the series' security features include a clear window, a shadow image and a colour-shifting security thread."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "Malaysia's new (fourth) series of banknotes and coins was unveiled on 21 December 2011; the RM1, RM5, RM10, RM20 and RM100 notes entered circulation in the second half of 2012. This note bears the signature of the bank's Governor, Zeti Akhtar Aziz."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.bnm.gov.my/-/launch-of-malaysia-s-new-currency-series",
                "Bank Negara Malaysia — Launch of Malaysia's New Currency Series (2011)"
              ],
              [
                "https://www.bnm.gov.my/-/currency/banknotes/rm1",
                "Bank Negara Malaysia — RM1"
              ],
              [
                "https://www.bnm.gov.my/-/bank-negara-malaysia-to-issue-new-series-of-banknotes-and-coins",
                "Bank Negara Malaysia — Bank Negara Malaysia to Issue New Series of Banknotes and Coins"
              ],
              [
                "https://www.bnm.gov.my/web/bnm-bank-notes/frequently-asked-questions-faqs-",
                "Bank Negara Malaysia — Banknote FAQ"
              ]
            ]
          }
        ]
      },
      "story": "At a hostel in Beijing I met two guys from Malaysia, and they shared this note with me."
    }
  },
  "mexico": {
    "ru": {
      "title": "Мексиканское песо — Мексика",
      "facts": [
        [
          "Эмитент",
          "Банк Мексики"
        ],
        [
          "Валюта",
          "Мексиканское песо (MXN)"
        ],
        [
          "Материал",
          "Полимер"
        ],
        [
          "Размер",
          "120 × 66 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Бенито Хуарес",
          "text": [
            "Портрет Бенито Хуареса расположен рядом с яркими синими графическими полосами и современными формами, включая прозрачное окно. Слева от портрета — весы и раскрытая книга, отсылающие к Законам о реформе. Холодная палитра отличается от традиционной зелёно-коричневой банкнотной гаммы."
          ]
        },
        {
          "title": "Оборотная сторона — Монте-Альбан",
          "text": [
            "На обороте изображена панорама археологической зоны Монте-Альбан в штате Оахака, построенной сапотеками. Слева от панорамы помещена подвеска из гробницы № 7 этого городища, справа внизу — маска Кокихо, сапотекского бога дождя и грома. Древний город подан как открытая панорама, в отличие от замкнутого официального портрета на лицевой стороне."
          ]
        },
        {
          "title": "Визуальная концепция — закон и древняя история",
          "text": [
            "Лицевая сторона посвящена государственному деятелю и идее правового равновесия, оборотная — доиспанскому наследию Оахаки, родного штата Хуареса. Голубые плоскости и прозрачное окно связывают обе стороны в единую современную композицию."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Весы и книга",
              "По описанию Банка Мексики, весы на переднем плане символизируют равновесие и справедливость, а книга — Законы о реформе 1859 года."
            ],
            [
              "Прозрачное окно",
              "В прозрачном окне цифра номинала видна на фоне линий; окно выполнено непосредственно на полимерной подложке, а его элементы рельефны и ощутимы на ощупь."
            ],
            [
              "Наследие ЮНЕСКО на обороте",
              "Монте-Альбан, изображённый на обороте, внесён ЮНЕСКО в список Всемирного наследия; рядом с панорамой — подвеска из гробницы № 7 и маска бога Кокихо."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Купюра в 20 песо стала первой полимерной банкнотой Мексики: предыдущий вариант (тип D1) вышел в 2002 году. Банкнота семейства F поступила в обращение 20 августа 2007 года. С октября 2025 года Банк Мексики относит её к банкнотам, находящимся в процессе изъятия: она остаётся законным платёжным средством, но банки больше не выдают её повторно."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.banxico.org.mx/billetes-y-monedas/billete-20-pesos-familia-f-ci.html",
                "Банк Мексики — банкнота 20 песо серии F (на испанском)"
              ],
              [
                "https://www.banxico.org.mx/banknotes-and-coins/20-peso-banknote-circulation-.html",
                "Банк Мексики — банкнота 20 песо серии F (на английском)"
              ],
              [
                "https://www.banxico.org.mx/banknotes-and-coins/clear-window-security-banco-m.html",
                "Банк Мексики — прозрачное окно (защитный элемент)"
              ],
              [
                "https://www.banxico.org.mx/billetes-y-monedas/en-proceso-retiro-circulacion.html",
                "Банк Мексики — банкноты в процессе изъятия из обращения"
              ]
            ]
          }
        ]
      },
      "story": "Когда я был волонтёром на чемпионате мира по футболу 2018 года в Калининграде, я познакомился с Констанцией — волонтёром из Мексики, — и она подарила мне эту купюру на память."
    },
    "en": {
      "title": "Mexican Peso — Mexico",
      "facts": [
        [
          "Issuer",
          "Bank of Mexico"
        ],
        [
          "Currency",
          "Mexican peso (MXN)"
        ],
        [
          "Material",
          "Polymer"
        ],
        [
          "Size",
          "120 × 66 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Benito Juárez",
          "text": [
            "The portrait of Benito Juárez sits beside bright blue graphic bands and modern shapes, including a clear window. To the left of the portrait are a pair of scales and an open book, referring to the Reform Laws. The cool palette sets it apart from the traditional green-and-brown banknote colours."
          ]
        },
        {
          "title": "Back — Monte Albán",
          "text": [
            "The back shows a panorama of the Monte Albán archaeological zone in the state of Oaxaca, built by the Zapotecs. To the left of the panorama is a pendant from Tomb 7 at the site, and at the bottom right a mask of Cocijo, the Zapotec god of rain and thunder. The ancient city is presented as an open panorama, in contrast to the enclosed official portrait on the front."
          ]
        },
        {
          "title": "Visual concept — law and ancient history",
          "text": [
            "The front is dedicated to the statesman and the idea of legal balance, the back to the pre-Hispanic heritage of Oaxaca, Juárez's home state. Light blue areas and the clear window tie both sides into a single modern composition."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "Scales and a book",
              "According to the Bank of Mexico, the scales in the foreground symbolise balance and justice, and the book represents the Reform Laws of 1859."
            ],
            [
              "Clear window",
              "In the clear window the denomination numeral is visible against a background of lines; the window is made directly on the polymer substrate, and its elements are raised and can be felt by touch."
            ],
            [
              "UNESCO heritage on the back",
              "Monte Albán, shown on the back, is a UNESCO World Heritage Site; next to the panorama are the pendant from Tomb 7 and the mask of the god Cocijo."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The 20-peso note became Mexico's first polymer banknote: the previous version (type D1) was issued in 2002. The F-family note entered circulation on 20 August 2007. Since October 2025 the Bank of Mexico has classed it among banknotes in the process of withdrawal: it remains legal tender, but banks no longer pay it out again."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.banxico.org.mx/billetes-y-monedas/billete-20-pesos-familia-f-ci.html",
                "Banco de México — Billete de 20 pesos de la familia F"
              ],
              [
                "https://www.banxico.org.mx/banknotes-and-coins/20-peso-banknote-circulation-.html",
                "Banco de México — 20-peso banknote F"
              ],
              [
                "https://www.banxico.org.mx/banknotes-and-coins/clear-window-security-banco-m.html",
                "Banco de México — Clear window (security feature)"
              ],
              [
                "https://www.banxico.org.mx/billetes-y-monedas/en-proceso-retiro-circulacion.html",
                "Banco de México — Banknotes in the process of withdrawal"
              ]
            ]
          }
        ]
      },
      "story": "When I was a volunteer at the 2018 FIFA World Cup in Kaliningrad, I met Constanza — a volunteer from Mexico — and she gave me this banknote as a keepsake."
    }
  },
  "mongolia": {
    "ru": {
      "title": "Тугрик — Монголия",
      "facts": [
        [
          "Эмитент",
          "Банк Монголии"
        ],
        [
          "Валюта",
          "Монгольский тугрик (MNT)"
        ],
        [
          "Материал",
          "Хлопковая бумага"
        ],
        [
          "Размер",
          "150 × 72 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Чингисхан",
          "text": [
            "Портрет Чингисхана окружён плотной системой геометрических и растительных орнаментов. Тёмная графика портрета контрастирует со светлыми полями; герб-соёмбо, национальное письмо, крупные цифры и симметричные рамки делают оформление особенно насыщенным. Справа на светлом поле — водяной знак."
          ]
        },
        {
          "title": "Оборотная сторона — Великое кочевье",
          "text": [
            "На обороте — историческая сцена «Великого кочевья»: упряжка быков везёт на огромной телеге юрту-гэр, вокруг — всадники, погонщики и стоянка с юртами. Сцену обрамляют надписи «Монгол Улс», «Төгрөг» и «Монголбанк», а также крупные цифры 1000 и год выпуска 2003."
          ]
        },
        {
          "title": "Визуальная концепция — правитель и кочевая держава",
          "text": [
            "Лицевая сторона показывает основателя государства, оборотная — кочевой мир, которым он правил: портрет и передвижной дворец-гэр складываются в единый рассказ о Монгольской империи. Сине-коричневая гамма и плотные рамки отсылают к традиционному монгольскому орнаменту."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Сюжет «Великого кочевья»",
              "По данным Монголбанка, на обороте купюр 500 и 1000 тугриков помещено историческое изображение «Великого кочевья»; в каталоге банка сюжет 1000 тугриков назван «Повозка»."
            ],
            [
              "Многотоновый водяной знак",
              "Среди защитных элементов купюры Монголбанк называет многотоновый водяной знак с высветленным участком и оконную защитную нить с читаемой надписью MONGOLBANK."
            ],
            [
              "Восемь обновлений",
              "Купюра в 1000 тугриков впервые вышла в 1993 году и с тех пор, по данным банка, выпускалась в восьми обновлённых вариантах, сохраняя основной синий цвет и сюжет."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Нынешняя серия тугриков начата в 1993 году: тогда вышли купюры от 1 до 1000 тугриков, в 1994 году — 5000, в 1995 году — 10 000, в 2006 году — 20 000. Младшие номиналы несут портрет Сухэ-Батора, а купюры новой серии печатаются на бумаге из 100% хлопка с водяными знаками, микротекстом и металлографской печатью."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.mongolbank.mn/en/banknote",
                "Банк Монголии — банкноты"
              ],
              [
                "https://www.mongolbank.mn/en/p/1392",
                "Банк Монголии — история современной монгольской валюты тугрик"
              ],
              [
                "https://www.mongolbank.mn/en/p/1391",
                "Банк Монголии — история монгольской валюты"
              ],
              [
                "https://en.numista.com/207160",
                "Numista — 1000 Tögrög (каталог)"
              ]
            ]
          }
        ]
      },
      "story": "Осталась после поездки, когда я путешествовал с рюкзаком по Азии — из Сибири до Таиланда на поездах и автобусах."
    },
    "en": {
      "title": "Tögrög — Mongolia",
      "facts": [
        [
          "Issuer",
          "Bank of Mongolia"
        ],
        [
          "Currency",
          "Mongolian tögrög (MNT)"
        ],
        [
          "Material",
          "Cotton paper"
        ],
        [
          "Size",
          "150 × 72 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Genghis Khan",
          "text": [
            "The portrait of Genghis Khan is surrounded by a dense system of geometric and floral ornaments. The dark engraving of the portrait contrasts with the light margins; the Soyombo emblem, the national script, large numerals and symmetrical frames make the design especially rich. On the light field to the right is the watermark."
          ]
        },
        {
          "title": "Back — The Great Migration",
          "text": [
            "The back shows the historical scene of the “Great Migration”: a team of oxen hauls a ger (yurt) on a huge cart, surrounded by horsemen, drovers and a camp of gers. The scene is framed by the inscriptions “Монгол Улс”, “Төгрөг” and “Монголбанк”, as well as the large numerals 1000 and the year of issue, 2003."
          ]
        },
        {
          "title": "Visual concept — the ruler and the nomadic state",
          "text": [
            "The front shows the founder of the state, the back the nomadic world he ruled: the portrait and the mobile ger palace come together as a single story about the Mongol Empire. The blue-and-brown palette and dense frames refer to traditional Mongolian ornament."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "The “Great Migration” scene",
              "According to Mongolbank, the backs of the 500 and 1,000 tögrög notes carry a historical image of the “Great Migration”; in the bank’s catalogue the scene on the 1,000 tögrög note is called “Cart”."
            ],
            [
              "Multitone watermark",
              "Among the note’s security features, Mongolbank lists a multitone watermark with a highlighted area and a windowed security thread with the legible inscription MONGOLBANK."
            ],
            [
              "Eight updates",
              "The 1,000 tögrög note first appeared in 1993 and, according to the bank, has since been issued in eight updated versions, keeping its main blue colour and its scene."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The current tögrög series began in 1993, when notes from 1 to 1,000 tögrög were issued, followed by 5,000 in 1994, 10,000 in 1995 and 20,000 in 2006. The lower denominations carry a portrait of Sükhbaatar, and the notes of the new series are printed on 100% cotton paper with watermarks, microtext and intaglio printing."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.mongolbank.mn/en/banknote",
                "Bank of Mongolia — Banknote"
              ],
              [
                "https://www.mongolbank.mn/en/p/1392",
                "Bank of Mongolia — History of Modern Mongolian currency TOGROG"
              ],
              [
                "https://www.mongolbank.mn/en/p/1391",
                "Bank of Mongolia — History of Mongolian currency"
              ],
              [
                "https://en.numista.com/207160",
                "Numista — 1000 Tögrög (catalogue)"
              ]
            ]
          }
        ]
      },
      "story": "I brought it back from a trip when I was backpacking across Asia — from Siberia to Thailand by train and bus."
    }
  },
  "nepal": {
    "ru": {
      "title": "Непальская рупия — Непал",
      "facts": [
        [
          "Эмитент",
          "Непал Растра Банк"
        ],
        [
          "Валюта",
          "Непальская рупия (NPR)"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Эверест",
          "text": [
            "Слева — гравюра Эвереста (Сагарматхи), в центре — храм и колонна с фигурой на вершине, справа вверху — эмблема Непал Растра Банка. Изображения обрамлены богатой орнаментальной рамкой; надписи на деванагари включают название банка, номинал «रुपैयाँ बिस» («двадцать рупий»), подпись управляющего и дату по календарю Викрам Самват — २०७६."
          ]
        },
        {
          "title": "Оборотная сторона — пара оленей",
          "text": [
            "На обороте крупно изображены два оленя на фоне травянистой равнины и горной гряды; вверху — эмблема и название банка по-английски, внизу — «RUPEES TWENTY» и «2020 A.D.». Спокойная монохромная гравюра подчёркивает фактуру шерсти и природный сюжет."
          ]
        },
        {
          "title": "Визуальная концепция — горы и природа Непала",
          "text": [
            "Банкнота соединяет высочайшую вершину мира и храмовую архитектуру на лицевой стороне с дикой природой на обороте; обе стороны выдержаны в одной красной гамме."
          ]
        },
        {
          "title": "Несколько интересных фактов про дизайн",
          "list": [
            [
              "Две даты — два календаря",
              "На лицевой стороне год указан по непальскому календарю Викрам Самват (२०७६), а на обороте — по григорианскому (2020 A.D.)."
            ],
            [
              "Рододендрон в водяном знаке",
              "В числе защитных признаков банкнот Непала Растра Банк называет водяной знак с рододендроном — национальным цветком Непала (лалигурас)."
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
                "https://www.nrb.org.np/banknotes-security-features/",
                "Непал Растра Банк — защитные признаки банкнот"
              ],
              [
                "https://www.nrb.org.np/ofg/notes-and-coins-of-nepal/",
                "Непал Растра Банк — банкноты и монеты Непала (юбилейное издание к 50-летию)"
              ],
              [
                "https://www.collegenp.com/news/nepal-rastra-bank-circulated-rs-20-denomination-banknotes",
                "CollegeNP — сообщение НРБ о выпуске банкнот 20 рупий (2020)"
              ],
              [
                "https://en.wikipedia.org/wiki/Nepalese_twenty-rupee_note",
                "Википедия — банкнота 20 непальских рупий"
              ]
            ]
          }
        ]
      },
      "story": "Мой друг привёз её после поездки в эту страну."
    },
    "en": {
      "title": "Nepalese Rupee — Nepal",
      "facts": [
        [
          "Issuer",
          "Nepal Rastra Bank"
        ],
        [
          "Currency",
          "Nepalese rupee (NPR)"
        ]
      ],
      "sections": [
        {
          "title": "Front — Everest",
          "text": [
            "On the left is an engraving of Everest (Sagarmatha), in the centre a temple and a column topped by a figure, and at the top right the emblem of Nepal Rastra Bank. The images are framed by a richly ornamented border; the Devanagari inscriptions include the bank's name, the denomination “रुपैयाँ बिस” (“twenty rupees”), the governor's signature and the date in the Vikram Samvat calendar — २०७६."
          ]
        },
        {
          "title": "Back — a pair of deer",
          "text": [
            "The back features a large image of two deer against a grassy plain and a mountain range; at the top are the emblem and the bank's name in English, and at the bottom “RUPEES TWENTY” and “2020 A.D.”. The calm monochrome engraving brings out the texture of the fur and the natural scene."
          ]
        },
        {
          "title": "Visual concept — the mountains and nature of Nepal",
          "text": [
            "The banknote combines the world's highest peak and temple architecture on the front with wildlife on the back; both sides are kept in the same red colour scheme."
          ]
        },
        {
          "title": "A few interesting design facts",
          "list": [
            [
              "Two dates, two calendars",
              "On the front the year is given in the Nepali Vikram Samvat calendar (२०७६), and on the back in the Gregorian calendar (2020 A.D.)."
            ],
            [
              "Rhododendron in the watermark",
              "Among the security features of Nepal's banknotes, Nepal Rastra Bank lists a watermark showing the rhododendron — Nepal's national flower (laligurans)."
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
                "https://www.nrb.org.np/banknotes-security-features/",
                "Nepal Rastra Bank — Bank Notes Security Features"
              ],
              [
                "https://www.nrb.org.np/ofg/notes-and-coins-of-nepal/",
                "Nepal Rastra Bank — Notes and Coins of Nepal (Golden Jubilee publication)"
              ],
              [
                "https://www.collegenp.com/news/nepal-rastra-bank-circulated-rs-20-denomination-banknotes",
                "CollegeNP — NRB announcement on the issue of 20-rupee banknotes (2020)"
              ],
              [
                "https://en.wikipedia.org/wiki/Nepalese_twenty-rupee_note",
                "Wikipedia — Nepalese twenty-rupee note"
              ]
            ]
          }
        ]
      },
      "story": "A friend of mine brought it back from a trip to this country."
    }
  },
  "philippines": {
    "ru": {
      "title": "Филиппинское песо — Филиппины",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Филиппин"
        ],
        [
          "Валюта",
          "Филиппинское песо (PHP)"
        ],
        [
          "Материал",
          "Бумага на основе хлопка с волокнами абаки"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Серхио Осменья",
          "text": [
            "Портрет президента Серхио Осменьи выполнен в тёплой красно-розовой палитре. Слева — сцена заседания Первой национальной ассамблеи 1907 года, справа — высадка на Лейте в октябре 1944 года; большие цифры номинала дополняют плотную линейную штриховку."
          ]
        },
        {
          "title": "Оборотная сторона — озеро Таал",
          "text": [
            "На обороте изображено озеро Таал в провинции Батангас с вулканом Таал и рыбой малипуто, выполненные теми же розовыми тонами. Взгляд постепенно перемещается от крупного вулканического конуса к рыбам и вышивке-орнаменту по краю; слева — контур карты Филиппин."
          ]
        },
        {
          "title": "Визуальная концепция — история и природа Батангаса",
          "text": [
            "Как и во всей серии New Generation Currency, лицевая сторона рассказывает о людях и событиях истории страны, а оборотная — о природном богатстве Филиппин. Сцены собрания и высадки складываются в краткую биографию Осменьи, а оборот целиком посвящён одной провинции — Батангасу."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Озеро Таал",
              "По описанию Bangko Sentral, Таал — самое глубокое пресноводное озеро Филиппин, в котором находится действующий вулкан Таал."
            ],
            [
              "Малипуто и вышивка Батангаса",
              "Малипуто — пресноводная популяция гигантского каранкса, живущая в озере; узор вышивки ручной работы из Батангаса дополняет набор «чудес» этой провинции."
            ],
            [
              "Защитные элементы",
              "На банкнотах 20 и 50 песо на просвет видна вертикальная встроенная нить; номинал, скрытый в малом портрете, проявляется при повороте купюры на 45° и наклоне. В 2020 году защита серии NGC была дополнительно усилена."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Серия New Generation Currency выпускается Bangko Sentral ng Pilipinas с декабря 2010 года; при её разработке банк сознательно сохранил размер, основные цвета и персоналии предыдущей серии New Design. Осменья возглавил правительство в изгнании в 1944 году после смерти президента Кесона и в том же году вернулся на Филиппины вместе с освободительными силами."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.bsp.gov.ph/SitePages/CoinsAndNotes/NewGenerationCurrencyBanknotes.aspx",
                "Центральный банк Филиппин — банкноты серии New Generation Currency"
              ],
              [
                "https://www.bsp.gov.ph/SitePages/CoinsAndNotes/NewGenerationCurrencyBanknotesFeatures.aspx",
                "Центральный банк Филиппин — защитные признаки"
              ],
              [
                "https://www.bsp.gov.ph/Media_and_Research/Publications/BS10_A2.pdf",
                "Bangko Sentral Review 2010 — статья о серии New Generation Currency"
              ],
              [
                "https://www.bsp.gov.ph/Pages/MediaAndResearch/PublicationsAndReports/regular_bsrevjul02.aspx",
                "Центральный банк Филиппин — абака в филиппинских банкнотах"
              ]
            ]
          }
        ]
      },
      "story": "Мой друг привёз её после поездки в эту страну."
    },
    "en": {
      "title": "Philippine Peso — Philippines",
      "facts": [
        [
          "Issuer",
          "Bangko Sentral ng Pilipinas"
        ],
        [
          "Currency",
          "Philippine peso (PHP)"
        ],
        [
          "Material",
          "Cotton-based paper with abaca fibres"
        ]
      ],
      "sections": [
        {
          "title": "Front — Sergio Osmeña",
          "text": [
            "The portrait of President Sergio Osmeña is rendered in a warm red-pink palette. On the left is a scene of the First National Assembly session of 1907; on the right, the Leyte Landing of October 1944. Large denomination numerals complement the dense line hatching."
          ]
        },
        {
          "title": "Back — Taal Lake",
          "text": [
            "The back shows Taal Lake in Batangas province, with Taal Volcano and maliputo fish, rendered in the same pink tones. The eye moves gradually from the large volcanic cone to the fish and the embroidery pattern along the edge; on the left is an outline map of the Philippines."
          ]
        },
        {
          "title": "Visual concept — The history and nature of Batangas",
          "text": [
            "As throughout the New Generation Currency series, the front tells of the people and events of the country's history, and the back of the natural wealth of the Philippines. The assembly and landing scenes add up to a brief biography of Osmeña, while the back is devoted entirely to a single province, Batangas."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "Taal Lake",
              "According to the Bangko Sentral's description, Taal is the deepest freshwater lake in the Philippines and contains the active Taal Volcano."
            ],
            [
              "Maliputo and Batangas embroidery",
              "The maliputo is a freshwater population of the giant trevally living in the lake; a hand-embroidered pattern from Batangas completes the set of this province's “wonders”."
            ],
            [
              "Security features",
              "On the 20- and 50-peso notes, a vertical embedded thread is visible when held against the light; the denomination hidden in the small portrait appears when the note is rotated 45° and tilted. In 2020 the security of the NGC series was further enhanced."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The New Generation Currency series has been issued by Bangko Sentral ng Pilipinas since December 2010; in developing it, the bank deliberately kept the size, main colours and personalities of the previous New Design series. Osmeña headed the government-in-exile in 1944 after the death of President Quezon and, that same year, returned to the Philippines with the liberation forces."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.bsp.gov.ph/SitePages/CoinsAndNotes/NewGenerationCurrencyBanknotes.aspx",
                "Bangko Sentral ng Pilipinas — New Generation Currency Banknotes"
              ],
              [
                "https://www.bsp.gov.ph/SitePages/CoinsAndNotes/NewGenerationCurrencyBanknotesFeatures.aspx",
                "Bangko Sentral ng Pilipinas — Security Features"
              ],
              [
                "https://www.bsp.gov.ph/Media_and_Research/Publications/BS10_A2.pdf",
                "Bangko Sentral Review 2010 — article on the New Generation Currency series"
              ],
              [
                "https://www.bsp.gov.ph/Pages/MediaAndResearch/PublicationsAndReports/regular_bsrevjul02.aspx",
                "Bangko Sentral — Abaca in Philippine Banknotes"
              ]
            ]
          }
        ]
      },
      "story": "A friend of mine brought it back from a trip to this country."
    }
  },
  "poland": {
    "ru": {
      "title": "Злотый — Польша",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Польши"
        ],
        [
          "Валюта",
          "Польский злотый (PLN)"
        ],
        [
          "Материал",
          "Хлопковая бумага"
        ],
        [
          "Размер",
          "120 × 60 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — князь Мешко I",
          "text": [
            "На лицевой стороне — портрет князя Мешко I в круглом медальоне. Рядом — орёл, надпись «Narodowy Bank Polski», дата «Warszawa 25 marca 1994 r.» и подписи президента и главного казначея банка. Коричнево-зелёная палитра напоминает средневековую графику; ритм геометрических узоров распределён симметрично."
          ]
        },
        {
          "title": "Оборотная сторона — денарий Мешко I",
          "text": [
            "На обороте центральное место занимает денарий — серебряная монета времён правления Мешко I, по сторонам от неё — фрагменты романских колонн. Большая круглая форма монеты контрастирует с прямоугольной геометрией рамки и фона."
          ]
        },
        {
          "title": "Визуальная концепция — начало государства",
          "text": [
            "Первая, самая младшая купюра серии открывается первым исторически известным правителем Польши: портрет князя и его монета вместе отсылают к истокам польской государственности и денежной системы."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Корона на просвет",
              "Элементы, напечатанные на обеих сторонах (recto-verso), на просвет дополняют друг друга и складываются в корону в овале."
            ],
            [
              "Портрет в водяном знаке",
              "Водяной знак повторяет портрет Мешко I; в исходной версии 1994 года поле водяного знака ещё было запечатано, в модернизированной — оставлено чистым."
            ],
            [
              "Серия «Польские правители»",
              "Все купюры серии «Władcy polscy» с портретами польских правителей разработал график Анджей Хайдрих."
            ]
          ]
        },
        {
          "title": "Дизайн, авторы, художники",
          "people": [
            [
              "Анджей Хайдрих (Andrzej Heidrich, 1928–2019)",
              "автор проекта серии «Польские правители»"
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Первые купюры серии «Польские правители» номиналами 10, 20 и 50 злотых ввели в обращение 1 января 1995 года на основании распоряжения президента НБП 1994 года. С 7 апреля 2014 года НБП постепенно выпускает модернизированные купюры этой серии с усиленной защитой и прежними размерами."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://nbp.pl/en/coins-and-banknotes/banknotes-issued/10-zloty/",
                "Национальный банк Польши — 10 злотых"
              ],
              [
                "https://nbp.pl/banknoty-i-monety/banknoty-obiegowe/10-zl/",
                "Национальный банк Польши — оборотная банкнота 10 злотых"
              ],
              [
                "https://nbp.pl/wp-content/uploads/2023/03/Zabezpieczenia-Internet.pdf",
                "НБП — защитные признаки польских банкнот (PDF)"
              ],
              [
                "https://nbp.pl/wp-content/uploads/2022/11/bankoteka-20-en.pdf",
                "НБП — Bankoteka № 20 (2019)"
              ],
              [
                "https://nbp.pl/en/coins-and-banknotes/banknotes/",
                "Национальный банк Польши — банкноты"
              ]
            ]
          }
        ]
      },
      "story": "В Новосибирске я принимал каучсёрферов. У меня останавливался путешественник из Польши и оставил мне эту купюру на память."
    },
    "en": {
      "title": "Złoty — Poland",
      "facts": [
        [
          "Issuer",
          "National Bank of Poland"
        ],
        [
          "Currency",
          "Polish złoty (PLN)"
        ],
        [
          "Material",
          "Cotton paper"
        ],
        [
          "Size",
          "120 × 60 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Duke Mieszko I",
          "text": [
            "The front shows a portrait of Duke Mieszko I in a round medallion. Next to it are an eagle, the inscription “Narodowy Bank Polski”, the date “Warszawa 25 marca 1994 r.” and the signatures of the bank's president and chief treasurer. The brown and green palette recalls medieval graphic art; the rhythm of the geometric patterns is arranged symmetrically."
          ]
        },
        {
          "title": "Back — denarius of Mieszko I",
          "text": [
            "The centre of the back is taken up by a denarius — a silver coin from the reign of Mieszko I — flanked by fragments of Romanesque columns. The large round shape of the coin contrasts with the rectangular geometry of the frame and background."
          ]
        },
        {
          "title": "Visual concept — the beginning of the state",
          "text": [
            "The first and lowest note of the series opens with Poland's first historically known ruler: the duke's portrait and his coin together point to the origins of Polish statehood and its monetary system."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A crown against the light",
              "Elements printed on both sides (recto-verso) complement each other when held up to the light and form a crown in an oval."
            ],
            [
              "A portrait in the watermark",
              "The watermark repeats the portrait of Mieszko I; in the original 1994 version the watermark area was still printed over, while in the modernised version it is left blank."
            ],
            [
              "The “Polish Rulers” series",
              "All the notes in the “Władcy polscy” series, featuring portraits of Polish rulers, were designed by graphic artist Andrzej Heidrich."
            ]
          ]
        },
        {
          "title": "Design, authors, artists",
          "people": [
            [
              "Andrzej Heidrich (1928–2019)",
              "designer of the “Polish Rulers” series"
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The first notes of the “Polish Rulers” series, in denominations of 10, 20 and 50 złoty, were put into circulation on 1 January 1995 under a 1994 order of the President of the NBP. Since 7 April 2014 the NBP has been gradually issuing modernised notes of this series with enhanced security features and the same dimensions."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://nbp.pl/en/coins-and-banknotes/banknotes-issued/10-zloty/",
                "Narodowy Bank Polski — 10 złoty"
              ],
              [
                "https://nbp.pl/banknoty-i-monety/banknoty-obiegowe/10-zl/",
                "Narodowy Bank Polski — Banknot obiegowy 10 zł"
              ],
              [
                "https://nbp.pl/wp-content/uploads/2023/03/Zabezpieczenia-Internet.pdf",
                "NBP — Zabezpieczenia polskich banknotów (PDF)"
              ],
              [
                "https://nbp.pl/wp-content/uploads/2022/11/bankoteka-20-en.pdf",
                "NBP — Bankoteka No 20 (2019)"
              ],
              [
                "https://nbp.pl/en/coins-and-banknotes/banknotes/",
                "Narodowy Bank Polski — Banknotes"
              ]
            ]
          }
        ]
      },
      "story": "Back in Novosibirsk I used to host couchsurfers. A traveller from Poland stayed with me and left me this note as a keepsake."
    }
  },
  "romania": {
    "ru": {
      "title": "Лей — Румыния",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Румынии"
        ],
        [
          "Валюта",
          "Румынский лей (RON)"
        ],
        [
          "Материал",
          "Полимер"
        ],
        [
          "Размер",
          "133 × 72 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Николае Григореску",
          "text": [
            "На розовой лицевой стороне — портрет художника Николае Григореску (1838–1907). Рядом — цветы мальвы (нальбы), палитра и кисть художника, а в прозрачном окне в форме палитры — белая и две золотые кисти. Гравированное лицо помещено в поле розовых и оранжево-коричневых узоров; вверху — название банка и герб Румынии, внизу — подписи управляющего и главного кассира, сбоку — дата выпуска 1 декабря 2008 года."
          ]
        },
        {
          "title": "Оборотная сторона — крестьянский дом и «Родика»",
          "text": [
            "На обороте — традиционный крестьянский дом и фрагмент картины Григореску «Родика»: девушка с кувшином на плече. Плавные линии изображения контрастируют с банкнотной микрографикой, монограммой BNR и крупными цифрами номинала; рядом — предупреждение о наказании за подделку."
          ]
        },
        {
          "title": "Визуальная концепция — профессия героя как знак",
          "text": [
            "Палитра и кисти превращают профессию героя в читаемый визуальный знак: они повторяются и рядом с портретом, и в прозрачном окне, которое видно с обеих сторон. Оборот продолжает тему, показывая сюжет из творчества самого художника — сельскую жизнь Румынии."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Окно-палитра",
              "Прозрачное окно сделано в форме палитры художника; в выпуске 2008 года в нём напечатаны белая и две золотые кисти, видимые с обеих сторон купюры."
            ],
            [
              "Чем 2008 отличается от 2005",
              "В первой версии 2005 года в окне была выдавлена цифра номинала без кистей; в 2008 году от рельефной (металлографской) печати отказались, а остальные защитные элементы — водяной знак, золотой элемент, ирисная полоса, совмещение рисунка, защитная нить — сохранились."
            ],
            [
              "Номер на свету",
              "Серийный номер уникален: 3 цифры, буква и семизначный номер; в ультрафиолете он светится."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Купюра в 10 леев с Григореску впервые вышла 1 июля 2005 года вместе с деноминацией лея; обновлённая версия поступила в обращение 1 декабря 2008 года. Румыния — пионер полимерных денег в Европе: ещё в 1999 году Национальный банк выпустил полимерную купюру в 2000 леев к солнечному затмению 11 августа — первую полимерную банкноту в Европе и Северном полушарии."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.bnr.ro/10-lei---Nicolae-Grigorescu-(2008)-8816-Mobile.aspx",
                "НБР — 10 lei, Nicolae Grigorescu (2008)"
              ],
              [
                "https://www.bnr.ro/Emisiunile-2008-%C8%99i-2005-ale-bancnotei-de-10-lei-13992.aspx",
                "НБР — Emisiunile 2008 și 2005 ale bancnotei de 10 lei"
              ],
              [
                "https://www.bnr.ro/Prima-bancnota-din-polimer-din-Europa-18832-Mobile.aspx",
                "НБР — Prima bancnotă din polimer din Europa"
              ],
              [
                "https://www.bnr.ro/Monede-si-bancnote-408.aspx",
                "НБР — Monede şi bancnote"
              ]
            ]
          }
        ]
      },
      "story": "Мой бывший коллега по дизайн-студии Игорь привёз её из поездки. Я попросил купюру себе в коллекцию и пообещал купить ему кофе, но так этого и не сделал. Игорь, если ты читаешь это: когда мы где-нибудь встретимся, я обязательно сдержу слово — и уже вместе с круассаном :) Я помню, прости!"
    },
    "en": {
      "title": "Leu — Romania",
      "facts": [
        [
          "Issuer",
          "National Bank of Romania"
        ],
        [
          "Currency",
          "Romanian leu (RON)"
        ],
        [
          "Material",
          "Polymer"
        ],
        [
          "Size",
          "133 × 72 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Nicolae Grigorescu",
          "text": [
            "The pink front carries a portrait of the painter Nicolae Grigorescu (1838–1907). Beside it are mallow (nalbă) flowers and the artist's palette and brush, and in a transparent palette-shaped window are one white and two gold brushes. The engraved face is set in a field of pink and orange-brown patterns; at the top are the bank's name and the coat of arms of Romania, at the bottom the signatures of the Governor and the Chief Cashier, and on the side the issue date, 1 December 2008."
          ]
        },
        {
          "title": "Back — a peasant house and \"Rodica\"",
          "text": [
            "The back shows a traditional peasant house and a detail from Grigorescu's painting \"Rodica\": a girl with a jug on her shoulder. The flowing lines of the image contrast with the banknote micrographics, the BNR monogram and the large denomination numerals; next to them is a warning about the penalty for counterfeiting."
          ]
        },
        {
          "title": "Visual concept — the hero's profession as a sign",
          "text": [
            "The palette and brushes turn the hero's profession into a readable visual sign: they appear both beside the portrait and in the transparent window, which can be seen from both sides. The back continues the theme by showing a subject from the painter's own work: rural life in Romania."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A palette window",
              "The transparent window is shaped like an artist's palette; in the 2008 issue it contains one white and two gold brushes, visible from both sides of the note."
            ],
            [
              "How 2008 differs from 2005",
              "In the first version of 2005, the window had an embossed denomination numeral and no brushes; in 2008 raised (intaglio) printing was dropped, while the other security features (watermark, gold element, iridescent stripe, see-through register, security thread) were kept."
            ],
            [
              "A number that glows",
              "The serial number is unique: 3 digits, a letter and a seven-digit number; it glows under ultraviolet light."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The 10-lei note with Grigorescu first appeared on 1 July 2005, together with the redenomination of the leu; the updated version entered circulation on 1 December 2008. Romania is a pioneer of polymer money in Europe: back in 1999 the National Bank issued a polymer 2,000-lei note for the solar eclipse of 11 August, the first polymer banknote in Europe and the Northern Hemisphere."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.bnr.ro/10-lei---Nicolae-Grigorescu-(2008)-8816-Mobile.aspx",
                "NBR — 10 lei, Nicolae Grigorescu (2008)"
              ],
              [
                "https://www.bnr.ro/Emisiunile-2008-%C8%99i-2005-ale-bancnotei-de-10-lei-13992.aspx",
                "NBR — Emisiunile 2008 și 2005 ale bancnotei de 10 lei"
              ],
              [
                "https://www.bnr.ro/Prima-bancnota-din-polimer-din-Europa-18832-Mobile.aspx",
                "NBR — Prima bancnotă din polimer din Europa"
              ],
              [
                "https://www.bnr.ro/Monede-si-bancnote-408.aspx",
                "NBR — Monede şi bancnote"
              ]
            ]
          }
        ]
      },
      "story": "My former colleague from the design studio, Igor, brought it back from a trip. I asked him for the note for my collection and promised to buy him a coffee, but I never did. Igor, if you're reading this: when we meet somewhere, I'll definitely keep my word — and with a croissant too :) I remember, sorry!"
    }
  },
  "russia": {
    "ru": {
      "title": "Рубль — Россия",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Российской Федерации"
        ],
        [
          "Валюта",
          "Российский рубль (RUB)"
        ],
        [
          "Материал",
          "Хлопковая бумага"
        ],
        [
          "Размер",
          "150 × 65 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — мост через Енисей и часовня Параскевы Пятницы",
          "text": [
            "На лицевой стороне — Красноярск: городской вид с мостом через Енисей и часовня Параскевы Пятницы, выполненные в оливково-зелёной палитре. Под часовней — лента с подписью «Красноярск», а вертикальная декоративная полоса из геометрических узоров отделяет изображения от крупной надписи «Десять рублей»."
          ]
        },
        {
          "title": "Оборотная сторона — Красноярская ГЭС",
          "text": [
            "Оборот занимает панорамный вид Красноярской ГЭС: плотина и водосбросы в обрамлении берёз. Продолговатые горизонтали сооружения подчёркивают масштаб инфраструктуры; цветовое решение остаётся зелёно-коричневым. В правом нижнем углу — год образца «1997»."
          ]
        },
        {
          "title": "Визуальная концепция — один город, две стороны",
          "text": [
            "Обе стороны посвящены Красноярску: на лицевой — исторический символ города и мост, на обороте — гидроэлектростанция на Енисее. Архитектурные горизонтали и боковая орнаментальная полоса создают ритм длинной банкноты."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Часовня в водяном знаке",
              "Водяные знаки расположены на купонных полях: на широком — часовня в Красноярске, на узком — цифровое обозначение номинала «10»."
            ],
            [
              "Ныряющая нить",
              "В бумагу внедрена металлизированная защитная нить, пять участков которой выходят на поверхность с оборотной стороны; на просвет она выглядит сплошной тёмной полосой."
            ],
            [
              "Муаровые полосы",
              "У модификации 2004 года есть поле, которое под прямым углом кажется однотонным, а при наклоне банкноты на нём появляются многоцветные муаровые полосы."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Банкнота образца 1997 года находится в обращении с 1 января 1998 года; по данным Банка России, дизайн деноминированных банкнот образца 1997 года практически повторяет дизайн банкнот образца 1995 года. Модификация 2004 года — с вертикальной надписью «Модификация 2004 г.» на лицевой стороне — введена в обращение 16 августа 2004 года. Банкноты образца 1997 года всех модификаций остаются законным платёжным средством."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.cbr.ru/cash_circulation/banknotes/10rub/",
                "Банк России — банкнота номиналом 10 рублей"
              ],
              [
                "https://www.cbr.ru/cash_circulation/banknotes/10rub/?tab.current=y1997",
                "Банк России — банкнота образца 1997 года номиналом 10 рублей"
              ],
              [
                "https://www.cbr.ru/eng/cash_circulation/banknotes/10rub/",
                "Bank of Russia — 10-ruble banknote (англ.)"
              ],
              [
                "https://en.numista.com/202130",
                "Numista — 10 рублей (модификация 2004)"
              ]
            ]
          }
        ]
      },
      "story": "Блин, я уже не помню."
    },
    "en": {
      "title": "Ruble — Russia",
      "facts": [
        [
          "Issuer",
          "Central Bank of the Russian Federation"
        ],
        [
          "Currency",
          "Russian ruble (RUB)"
        ],
        [
          "Material",
          "Cotton paper"
        ],
        [
          "Size",
          "150 × 65 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — bridge over the Yenisei and the Chapel of Paraskeva Pyatnitsa",
          "text": [
            "The front shows Krasnoyarsk: a city view with the bridge over the Yenisei and the Chapel of Paraskeva Pyatnitsa, rendered in an olive-green palette. Beneath the chapel is a ribbon with the caption “Krasnoyarsk”, and a vertical decorative strip of geometric patterns separates the images from the large inscription “Ten rubles”."
          ]
        },
        {
          "title": "Back — Krasnoyarsk Hydroelectric Power Station",
          "text": [
            "The back is taken up by a panoramic view of the Krasnoyarsk Hydroelectric Power Station: the dam and spillways framed by birch trees. The long horizontal lines of the structure emphasise the scale of the infrastructure; the colour scheme remains green and brown. In the lower right corner is the design year “1997”."
          ]
        },
        {
          "title": "Visual concept — one city, two sides",
          "text": [
            "Both sides are dedicated to Krasnoyarsk: the front shows the city's historical symbol and the bridge, the back the hydroelectric power station on the Yenisei. Architectural horizontals and the ornamental side strip create a rhythm across the long banknote."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A chapel in the watermark",
              "The watermarks are placed on the coupon fields: on the wide one, the chapel in Krasnoyarsk; on the narrow one, the numeral “10”."
            ],
            [
              "A weaving thread",
              "A metallised security thread is embedded in the paper, with five sections emerging on the surface on the back; held up to the light, it appears as a solid dark stripe."
            ],
            [
              "Moiré stripes",
              "The 2004 modification has a field that looks uniform when viewed straight on, but multicoloured moiré stripes appear on it when the note is tilted."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The 1997-design banknote has been in circulation since 1 January 1998; according to the Bank of Russia, the design of the redenominated 1997 banknotes almost exactly repeats that of the 1995 banknotes. The 2004 modification — with the vertical inscription “Модификация 2004 г.” (“2004 modification”) on the front — was put into circulation on 16 August 2004. All modifications of the 1997-design banknotes remain legal tender."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.cbr.ru/cash_circulation/banknotes/10rub/",
                "Bank of Russia — 10-ruble banknote"
              ],
              [
                "https://www.cbr.ru/cash_circulation/banknotes/10rub/?tab.current=y1997",
                "Bank of Russia — 1997-design 10-ruble banknote"
              ],
              [
                "https://www.cbr.ru/eng/cash_circulation/banknotes/10rub/",
                "Bank of Russia — 10-ruble banknote (English)"
              ],
              [
                "https://en.numista.com/202130",
                "Numista — 10 rubles (2004 modification)"
              ]
            ]
          }
        ]
      },
      "story": "Damn, I honestly don't remember anymore."
    }
  },
  "saudi-arabia": {
    "ru": {
      "title": "Риял — Саудовская Аравия",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Саудовской Аравии"
        ],
        [
          "Валюта",
          "Саудовский риял (SAR)"
        ],
        [
          "Материал",
          "Хлопковая бумага"
        ],
        [
          "Размер",
          "145 × 66 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — король Абдалла и НПЗ Рас-Танура",
          "text": [
            "На фиолетовом поле справа помещён официальный портрет короля Абдаллы ибн Абдул-Азиза Аль Сауда и серийный номер, в центре — нефтеперерабатывающий завод Рас-Танура в Восточной провинции. Сверху — название агентства, номер и дата королевского указа, на основании которого выпущена купюра, и имя короля по-арабски; слева — водяной знак и фольгированная полоса. Строгие вертикали рамки обрамляют лицо, фон покрыт мелкой орнаментальной текстурой."
          ]
        },
        {
          "title": "Оборотная сторона — коммерческий порт Джубайль",
          "text": [
            "Оборот показывает коммерческий морской порт Джубайль в Восточной провинции: танкер у длинного причала в широкой горизонтальной рамке. Вверху — название агентства по-английски, внизу справа — номинал FIVE RIYALS и государственный герб Саудовской Аравии с пальмой и скрещёнными мечами. Фиолетовый оттенок связывает стороны."
          ]
        },
        {
          "title": "Визуальная концепция — нефть и море Восточной провинции",
          "text": [
            "Обе стороны посвящены Восточной провинции — сердцу нефтяной экономики королевства: на лицевой стороне переработка нефти, на обороте — морские ворота для её экспорта. Геометрическая плетёная вязь по краям отсылает к традиционному исламскому орнаменту."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Указ прямо на купюре",
              "Над изображением напечатаны номер и дата королевского указа, по которому выпущены банкноты, — юридическое основание эмиссии встроено в дизайн."
            ],
            [
              "Защита на ощупь и на свет",
              "Для купюр в 5 и 10 риялов SAMA перечисляет рельефную металлографскую печать, водяной знак, защитную нить, совмещающиеся на просвет элементы и микрогравировку."
            ],
            [
              "Номера с секретом",
              "Один серийный номер напечатан чёрной магнитной краской, другой — красной, светящейся в ультрафиолете."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Купюра относится к пятому выпуску саудовских банкнот с портретом короля Абдаллы: номиналы 100 и 50 риялов вышли 21 мая 2007 года, а 10 и 5 риялов — 16 июля 2007 года. В 2020 году банкноту в 5 риялов перевыпустили на полимере с похожим дизайном и цветами."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.sama.gov.sa/en-US/Currency/Pages/FifthIssue.aspx",
                "Центральный банк Саудовской Аравии — пятый выпуск"
              ],
              [
                "https://www.sama.gov.sa/en-us/currency/pages/securityfeature.aspx",
                "Центральный банк Саудовской Аравии — защитные признаки пятого выпуска"
              ],
              [
                "https://rulebook.sama.gov.sa/en/entiresection/6789",
                "SAMA Rulebook — описание банкнот пятого выпуска"
              ]
            ]
          }
        ]
      },
      "story": "Увидел купюру в одном из баров и обменял её на чаевые."
    },
    "en": {
      "title": "Riyal — Saudi Arabia",
      "facts": [
        [
          "Issuer",
          "Saudi Central Bank"
        ],
        [
          "Currency",
          "Saudi riyal (SAR)"
        ],
        [
          "Material",
          "Cotton paper"
        ],
        [
          "Size",
          "145 × 66 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — King Abdullah and the Ras Tanura refinery",
          "text": [
            "On the violet field to the right are the official portrait of King Abdullah bin Abdulaziz Al Saud and the serial number; in the centre is the Ras Tanura oil refinery in the Eastern Province. Along the top are the name of the agency, the number and date of the royal decree under which the note was issued, and the king's name in Arabic; on the left are the watermark and a foil stripe. Strict vertical lines of the frame surround the face, and the background is covered with a fine ornamental texture."
          ]
        },
        {
          "title": "Back — the commercial port of Jubail",
          "text": [
            "The back shows the commercial seaport of Jubail in the Eastern Province: a tanker at a long pier inside a wide horizontal frame. At the top is the agency's name in English; at the bottom right are the denomination FIVE RIYALS and the national emblem of Saudi Arabia with a palm tree and crossed swords. A violet tint ties the two sides together."
          ]
        },
        {
          "title": "Visual concept — oil and sea of the Eastern Province",
          "text": [
            "Both sides are devoted to the Eastern Province, the heart of the kingdom's oil economy: the front shows oil refining, the back the sea gateway for its export. The geometric interlaced pattern along the edges recalls traditional Islamic ornament."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "The decree right on the note",
              "The number and date of the royal decree under which the notes were issued are printed above the image, so the legal basis for the issue is built into the design."
            ],
            [
              "Security by touch and by light",
              "For the 5- and 10-riyal notes, SAMA lists raised intaglio printing, a watermark, a security thread, see-through register elements and micro-engraving."
            ],
            [
              "Serial numbers with a secret",
              "One serial number is printed in black magnetic ink, the other in red ink that glows under ultraviolet light."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The note belongs to the fifth issue of Saudi banknotes, featuring King Abdullah: the 100- and 50-riyal notes came out on 21 May 2007, and the 10- and 5-riyal notes on 16 July 2007. In 2020 the 5-riyal note was reissued on polymer with a similar design and colours."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.sama.gov.sa/en-US/Currency/Pages/FifthIssue.aspx",
                "SAMA — Fifth Issue"
              ],
              [
                "https://www.sama.gov.sa/en-us/currency/pages/securityfeature.aspx",
                "SAMA — Security Features for Fifth Issue"
              ],
              [
                "https://rulebook.sama.gov.sa/en/entiresection/6789",
                "SAMA Rulebook — description of the fifth-issue banknotes"
              ]
            ]
          }
        ]
      },
      "story": "I spotted the note in a bar and swapped it for a tip."
    }
  },
  "serbia": {
    "ru": {
      "title": "Сербский динар — Сербия",
      "facts": [
        [
          "Эмитент",
          "Народный банк Сербии"
        ],
        [
          "Валюта",
          "Сербский динар (RSD)"
        ],
        [
          "Материал",
          "Тонированная защищённая бумага"
        ],
        [
          "Размер",
          "139 × 66 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Стеван Стоянович Мокраняц",
          "text": [
            "Главный персонаж — композитор Стеван Стоянович Мокраняц. Рядом с портретом помещены стилизованные клавиши, фрагмент скрипки и нотные записи из наследия композитора. Охристо-фиолетовая гамма подчёркивает культурную тематику вместо государственного монумента."
          ]
        },
        {
          "title": "Оборотная сторона — фигура композитора",
          "text": [
            "На обороте композитор показан фигурой, рядом — нотная запись и мотив иллюминации из Мирославова Евангелия, в левом верхнем углу — большой герб Республики Сербия на фиолетовом фоне. Фигура уравновешена декоративными фрагментами рукописной культуры."
          ]
        },
        {
          "title": "Визуальная концепция — музыка и рукописная традиция",
          "text": [
            "Нотные знаки и рукописный орнамент связывают фигуру композитора с его профессией, а средневековая иллюминация — с давней сербской книжной традицией, к которой обращалась и духовная музыка Мокраняца."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Водяной знак-портрет",
              "В решении Народного банка Сербии об основных признаках купюры указано, что она печатается на тонированной защищённой бумаге с многотоновым водяным знаком в виде портрета Мокраняца и прерывистой защитной нитью."
            ],
            [
              "Мирославово Евангелие",
              "Мотив на обороте официально описан как иллюминация из Мирославова Евангелия — одной из старейших сербских рукописей."
            ],
            [
              "Две азбуки",
              "По закону о Народном банке Сербии надписи на банкнотах выполняются кириллицей и латиницей — поэтому номинал «педесет динара / pedeset dinara» повторён дважды."
            ]
          ]
        },
        {
          "title": "Дизайн, авторы, художники",
          "people": [
            [
              "Завод за израду новчаница и кованог новца — Топчидер",
              "Изготовитель (надпись на банкноте)"
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Купюра с портретом Мокраняца находится в обращении с 2005 года и неоднократно переиздавалась. Выпуск 2011 года был введён в обращение 20 июня 2011 года решением, опубликованным в «Службеном гласнике РС» № 43/2011."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://nbs.rs/sr_RS/novac-i-placanja/novcanice/",
                "Народна банка Србије — Новчанице"
              ],
              [
                "https://www.nbs.rs/en/novac-i-placanja/novcanice/",
                "Национальный банк Сербии — банкноты"
              ],
              [
                "https://www.nbs.rs/export/sites/NBS_site/documents/propisi/propisi-trz/opticaj_50_dinara_2011.pdf",
                "НБС — Решение о вводе в обращение 50 динаров (2011)"
              ],
              [
                "https://nbs.rs/export/sites/NBS_site/documents/propisi/propisi-trz/izdavanje_obelezja_50_201420.pdf",
                "НБС — Решение о выпуске и основных признаках 50 динаров (2014)"
              ],
              [
                "https://www.nbs.rs/export/sites/NBS_site/documents/propisi/zakoni/nbs_o_nbs.pdf",
                "Закон о Народном банке Сербии"
              ]
            ]
          }
        ]
      },
      "story": "Оставил себе на память после полутора лет жизни в этой потрясающей стране. Хвала, Србијо!"
    },
    "en": {
      "title": "Serbian Dinar — Serbia",
      "facts": [
        [
          "Issuer",
          "National Bank of Serbia"
        ],
        [
          "Currency",
          "Serbian dinar (RSD)"
        ],
        [
          "Material",
          "Tinted security paper"
        ],
        [
          "Size",
          "139 × 66 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Stevan Stojanović Mokranjac",
          "text": [
            "The main figure is the composer Stevan Stojanović Mokranjac. Next to the portrait are stylised piano keys, part of a violin and musical notation from the composer's legacy. The ochre-and-violet palette emphasises a cultural theme rather than a state monument."
          ]
        },
        {
          "title": "Back — figure of the composer",
          "text": [
            "The back shows the composer as a full figure, accompanied by musical notation and an illumination motif from Miroslav's Gospel, with the large coat of arms of the Republic of Serbia on a violet background in the upper left corner. The figure is balanced by decorative fragments of manuscript culture."
          ]
        },
        {
          "title": "Visual concept — music and the manuscript tradition",
          "text": [
            "The musical signs and manuscript ornament link the composer's figure to his profession, and the medieval illumination to the long-standing Serbian book tradition, which Mokranjac's sacred music also drew upon."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "Portrait watermark",
              "The National Bank of Serbia's decision on the note's main features states that it is printed on tinted security paper with a multitone watermark depicting Mokranjac and a broken (interrupted) security thread."
            ],
            [
              "Miroslav's Gospel",
              "The motif on the back is officially described as an illumination from Miroslav's Gospel — one of the oldest Serbian manuscripts."
            ],
            [
              "Two alphabets",
              "Under the Law on the National Bank of Serbia, inscriptions on banknotes are written in both Cyrillic and Latin script — which is why the denomination “педесет динара / pedeset dinara” appears twice."
            ]
          ]
        },
        {
          "title": "Design, authors, artists",
          "people": [
            [
              "Завод за израду новчаница и кованог новца — Топчидер (Institute for Manufacturing Banknotes and Coins — Topčider)",
              "Manufacturer (inscription on the banknote)"
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The note with Mokranjac's portrait has been in circulation since 2005 and has been reissued several times. The 2011 issue was put into circulation on 20 June 2011 by a decision published in the Official Gazette of the Republic of Serbia (“Службени гласник РС”) No. 43/2011."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://nbs.rs/sr_RS/novac-i-placanja/novcanice/",
                "Народна банка Србије — Новчанице"
              ],
              [
                "https://www.nbs.rs/en/novac-i-placanja/novcanice/",
                "National Bank of Serbia — Banknotes"
              ],
              [
                "https://www.nbs.rs/export/sites/NBS_site/documents/propisi/propisi-trz/opticaj_50_dinara_2011.pdf",
                "NBS — Decision on putting the 50-dinar note into circulation (2011)"
              ],
              [
                "https://nbs.rs/export/sites/NBS_site/documents/propisi/propisi-trz/izdavanje_obelezja_50_201420.pdf",
                "NBS — Decision on the issue and main features of the 50-dinar note (2014)"
              ],
              [
                "https://www.nbs.rs/export/sites/NBS_site/documents/propisi/zakoni/nbs_o_nbs.pdf",
                "Law on the National Bank of Serbia"
              ]
            ]
          }
        ]
      },
      "story": "I kept it as a souvenir after a year and a half of living in this amazing country. Хвала, Србијо!"
    }
  },
  "singapore": {
    "ru": {
      "title": "Сингапурский доллар — Сингапур",
      "facts": [
        [
          "Эмитент",
          "Денежно-кредитное управление Сингапура"
        ],
        [
          "Валюта",
          "Сингапурский доллар (SGD)"
        ],
        [
          "Материал",
          "Полимер"
        ],
        [
          "Размер",
          "133 × 66 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Юсоф бин Исхак",
          "text": [
            "Лицевую сторону занимает портрет Юсофа бин Исхака, первого президента Сингапура. Зелёная палитра, герб в прозрачном окне и крупная цифра 5 создают современное оформление, но изображение лица остаётся самым контрастным и узнаваемым элементом."
          ]
        },
        {
          "title": "Оборотная сторона — тембусу в Ботаническом саду",
          "text": [
            "На обороте расположен старый тембусу (Fagraea fragrans) в Сингапурском ботаническом саду, которому больше 200 лет. Широкая крона дерева организует композицию в крупное зелёное пятно, на заднем плане видны силуэты высоток; тема «города-сада» (Garden City) прямо названа Денежно-кредитным управлением Сингапура."
          ]
        },
        {
          "title": "Визуальная концепция — город-сад",
          "text": [
            "Ветвистая крона тембусу работает почти как графическая сеть и занимает большую часть оборота, а небоскрёбы за ней напоминают, что речь о саде внутри города."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Первая купюра, целиком созданная сингапурцем",
              "Портретную серию разработал местный художник Энг Сиак Лой — впервые сингапурская банкнота была полностью спроектирована сингапурцем. Портрет президента Юсофа бин Исхака написал другой известный сингапурский художник, Чуа Миа Ти."
            ],
            [
              "Шрифт Брайля в краске",
              "В правом верхнем углу лицевой стороны напечатан рельефный знак Брайля толстым слоем металлографской краски — он помогает незрячим людям определить номинал."
            ],
            [
              "Защита, возможная только на полимере",
              "Полимерная пятидолларовая купюра получила элементы, которых нет у бумажной: прозрачные окна, золотой символ сингапурского льва со скрытым изображением и защитную нить."
            ]
          ]
        },
        {
          "title": "Дизайн, авторы, художники",
          "people": [
            [
              "Энг Сиак Лой (Eng Siak Loy)",
              "художник, автор дизайна Портретной серии"
            ],
            [
              "Чуа Миа Ти (Chua Mia Tee)",
              "художник, автор портрета Юсофа бин Исхака"
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Портретная серия выпущена 9 сентября 1999 года Советом уполномоченных по валюте Сингапура; позже выпуск валюты перешёл к Денежно-кредитному управлению. С 18 мая 2007 года пятидолларовая купюра печатается на полимере — это третий номинал серии, переведённый с бумаги на полимер; размер и дизайн при этом сохранились."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.mas.gov.sg/currency/circulation-currency/circulation-currency-notes",
                "Денежно-кредитное управление Сингапура — денежные знаки в обращении: банкноты"
              ],
              [
                "https://www.mas.gov.sg/news/media-releases/2007/mas-issues-5dollars-polymer-notes",
                "Денежно-кредитное управление Сингапура — MAS выпускает полимерные банкноты 5 долларов (2007)"
              ],
              [
                "https://www.mas.gov.sg/currency/circulation-currency/identifying-genuine-currency/singapore-polymer-notes-security-features",
                "Денежно-кредитное управление Сингапура — полимерные банкноты Сингапура: защитные признаки"
              ],
              [
                "https://www.nas.gov.sg/archivesonline/data/pdfdoc/1999090901.htm",
                "Singapore Government Press Release, 9 сентября 1999 (National Archives of Singapore)"
              ],
              [
                "https://en.numista.com/203037",
                "Numista — 5 долларов (Сингапур, полимер)"
              ]
            ]
          }
        ]
      },
      "story": "Одна из немногих купюр в коллекции, за которыми я съездил сам, — осенью 2025 года."
    },
    "en": {
      "title": "Singapore Dollar — Singapore",
      "facts": [
        [
          "Issuer",
          "Monetary Authority of Singapore"
        ],
        [
          "Currency",
          "Singapore dollar (SGD)"
        ],
        [
          "Material",
          "Polymer"
        ],
        [
          "Size",
          "133 × 66 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Yusof bin Ishak",
          "text": [
            "The front is taken up by a portrait of Yusof bin Ishak, the first President of Singapore. The green palette, the coat of arms in a clear window and the large numeral 5 create a modern design, but the face remains the most contrasting and recognisable element."
          ]
        },
        {
          "title": "Back — the tembusu in the Botanic Gardens",
          "text": [
            "The back features an old tembusu tree (Fagraea fragrans), more than 200 years old, in the Singapore Botanic Gardens. The tree's broad crown organises the composition into a large patch of green, with the silhouettes of high-rises visible in the background; the Monetary Authority of Singapore explicitly names the \"Garden City\" theme."
          ]
        },
        {
          "title": "Visual concept — the Garden City",
          "text": [
            "The branching crown of the tembusu works almost like a graphic network and occupies most of the back, while the skyscrapers behind it remind us that this is a garden within a city."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "The first note designed entirely by a Singaporean",
              "The Portrait Series was designed by local artist Eng Siak Loy — the first time a Singapore banknote had been designed entirely by a Singaporean. The portrait of President Yusof bin Ishak was painted by another well-known Singaporean artist, Chua Mia Tee."
            ],
            [
              "Braille in ink",
              "In the top right corner of the front, a raised Braille mark is printed in a thick layer of intaglio ink — it helps blind people identify the denomination."
            ],
            [
              "Security only possible on polymer",
              "The polymer five-dollar note gained features the paper note lacks: clear windows, a gold Singapore lion symbol with a hidden image, and a security thread."
            ]
          ]
        },
        {
          "title": "Design, authors, artists",
          "people": [
            [
              "Eng Siak Loy",
              "artist, designer of the Portrait Series"
            ],
            [
              "Chua Mia Tee",
              "artist, painter of the portrait of Yusof bin Ishak"
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The Portrait Series was issued on 9 September 1999 by the Board of Commissioners of Currency, Singapore; currency issuance later passed to the Monetary Authority. Since 18 May 2007 the five-dollar note has been printed on polymer — the third denomination in the series to move from paper to polymer, with its size and design unchanged."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.mas.gov.sg/currency/circulation-currency/circulation-currency-notes",
                "Monetary Authority of Singapore — Circulation Currency: Notes"
              ],
              [
                "https://www.mas.gov.sg/news/media-releases/2007/mas-issues-5dollars-polymer-notes",
                "Monetary Authority of Singapore — MAS Issues $5 Polymer Notes (2007)"
              ],
              [
                "https://www.mas.gov.sg/currency/circulation-currency/identifying-genuine-currency/singapore-polymer-notes-security-features",
                "Monetary Authority of Singapore — Singapore Polymer Notes: Security Features"
              ],
              [
                "https://www.nas.gov.sg/archivesonline/data/pdfdoc/1999090901.htm",
                "Singapore Government Press Release, 9 September 1999 (National Archives of Singapore)"
              ],
              [
                "https://en.numista.com/203037",
                "Numista — 5 Dollars (Singapore, polymer)"
              ]
            ]
          }
        ]
      },
      "story": "One of the few notes in the collection that I went and got myself — in autumn 2025."
    }
  },
  "south-africa": {
    "ru": {
      "title": "Рэнд — ЮАР",
      "facts": [
        [
          "Эмитент",
          "Южноафриканский резервный банк"
        ],
        [
          "Валюта",
          "Южноафриканский рэнд (ZAR)"
        ],
        [
          "Материал",
          "Банкнотная бумага"
        ],
        [
          "Размер",
          "128 × 70 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Нельсон Мандела",
          "text": [
            "Портрет Нельсона Манделы выполнен в тёплой зелёной гамме и окружён абстрактными геометрическими текстурами. Сильное портретное пятно сочетается с крупным номиналом, гербом ЮАР, подписью управляющего Гилл Маркус и силуэтами антилоп по краям."
          ]
        },
        {
          "title": "Оборотная сторона — носорог",
          "text": [
            "На обороте крупно изображена голова носорога, а за ней — фигура животного целиком на фоне орнамента. Линейная штриховка подчёркивает его объём и характерную форму; надписи даны на африкаанс и других официальных языках."
          ]
        },
        {
          "title": "Визуальная концепция — масса и силуэт",
          "text": [
            "Крупная фигура носорога передаёт массу животного через силуэт и штриховку, а повтор его фигуры на втором плане создаёт глубину."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "«Большая пятёрка» на обороте",
              "Вся серия объединена темой: на лицевой стороне — Нельсон Мандела, на обороте — животные «большой пятёрки»; купюре 10 рэндов достался носорог."
            ],
            [
              "Знаки для незрячих",
              "Внизу слева и справа на лицевой стороне есть выпуклые линии: у 10 рэндов — по одной; рельефной печатью выполнены также портрет, название банка и герб."
            ],
            [
              "Водяной знак и совмещение",
              "На просвет видны водяной знак с портретом Манделы и скрытая цифра номинала, а половинки рисунка с двух сторон складываются в контур животного."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Серия банкнот с портретом Манделы введена в обращение 6 ноября 2012 года и сначала обращалась вместе с прежними купюрами. Первым ею расплатился управляющий Резервного банка Гилл Маркус. В 2023 году банк выпустил обновлённую серию, где «большая пятёрка» изображена семьями."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.resbank.co.za/en/home/what-we-do/banknotes-and-coin/Banknotes",
                "Южноафриканский резервный банк — банкноты"
              ],
              [
                "http://banknotes.resbank.co.za/banknotes",
                "ЮАРБ — банкноты с портретом Манделы"
              ],
              [
                "http://banknotes.resbank.co.za/security",
                "ЮАРБ — защитные признаки"
              ],
              [
                "https://www.gov.za/news/media-statements/south-african-reserve-bank-unveils-new-banknotes-05-sep-2012",
                "Правительство ЮАР — South African Reserve Bank unveils new banknotes (2012)"
              ],
              [
                "https://www.gov.za/south-african-reserve-bank-sarb-new-banknotes-official-circulation-date-announced",
                "Правительство ЮАР — official circulation date announced"
              ],
              [
                "https://www.sanews.gov.za/south-africa/marcus-first-use-new-mandela-notes",
                "SAnews — Маркус первым расплатился новыми банкнотами с Манделой"
              ],
              [
                "https://www.resbank.co.za/content/dam/sarb/what-we-do/banknotes-and-coin/2023/SARB%20Currency%20Booklet.pdf",
                "ЮАРБ — буклет о денежных знаках 2023 (PDF)"
              ]
            ]
          }
        ]
      },
      "story": "Мой хороший знакомый Даниил поделился ею со мной. Если не ошибаюсь, это его любимая страна."
    },
    "en": {
      "title": "Rand — South Africa",
      "facts": [
        [
          "Issuer",
          "South African Reserve Bank"
        ],
        [
          "Currency",
          "South African rand (ZAR)"
        ],
        [
          "Material",
          "Banknote paper"
        ],
        [
          "Size",
          "128 × 70 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Nelson Mandela",
          "text": [
            "The portrait of Nelson Mandela is rendered in warm green tones and surrounded by abstract geometric textures. The strong portrait is paired with a large denomination, the South African coat of arms, the signature of Governor Gill Marcus and antelope silhouettes along the edges."
          ]
        },
        {
          "title": "Back — rhinoceros",
          "text": [
            "The back features a large rhino head, with the whole animal shown behind it against an ornamental background. Line hatching emphasises its bulk and distinctive shape; the inscriptions are in Afrikaans and other official languages."
          ]
        },
        {
          "title": "Visual concept — mass and silhouette",
          "text": [
            "The large figure of the rhino conveys the animal's mass through silhouette and hatching, while repeating its figure in the background creates depth."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "The “Big Five” on the back",
              "The whole series shares a theme: Nelson Mandela on the front and the “Big Five” animals on the back; the 10-rand note got the rhino."
            ],
            [
              "Marks for the visually impaired",
              "At the bottom left and right of the front there are raised lines: one on each side for the 10-rand note; the portrait, the bank's name and the coat of arms are also printed in relief."
            ],
            [
              "Watermark and see-through register",
              "Held up to the light, the note reveals a watermark portrait of Mandela and a hidden denomination numeral, while halves of a design printed on both sides combine into the outline of an animal."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The Mandela banknote series was put into circulation on 6 November 2012 and at first circulated alongside the previous notes. The first person to pay with them was Reserve Bank Governor Gill Marcus. In 2023 the bank issued an updated series in which the “Big Five” are shown as families."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.resbank.co.za/en/home/what-we-do/banknotes-and-coin/Banknotes",
                "South African Reserve Bank — Banknotes"
              ],
              [
                "http://banknotes.resbank.co.za/banknotes",
                "SARB — Mandela banknotes"
              ],
              [
                "http://banknotes.resbank.co.za/security",
                "SARB — Security features"
              ],
              [
                "https://www.gov.za/news/media-statements/south-african-reserve-bank-unveils-new-banknotes-05-sep-2012",
                "South African Government — South African Reserve Bank unveils new banknotes (2012)"
              ],
              [
                "https://www.gov.za/south-african-reserve-bank-sarb-new-banknotes-official-circulation-date-announced",
                "South African Government — official circulation date announced"
              ],
              [
                "https://www.sanews.gov.za/south-africa/marcus-first-use-new-mandela-notes",
                "SAnews — Marcus first to use new Mandela notes"
              ],
              [
                "https://www.resbank.co.za/content/dam/sarb/what-we-do/banknotes-and-coin/2023/SARB%20Currency%20Booklet.pdf",
                "SARB — Currency Booklet 2023 (PDF)"
              ]
            ]
          }
        ]
      },
      "story": "A good friend of mine, Daniil, shared it with me. If I'm not mistaken, it's his favourite country."
    }
  },
  "south-korea": {
    "ru": {
      "title": "Вона — Южная Корея",
      "facts": [
        [
          "Эмитент",
          "Банк Кореи"
        ],
        [
          "Валюта",
          "Южнокорейская вона (KRW)"
        ],
        [
          "Материал",
          "Хлопковая бумага"
        ],
        [
          "Размер",
          "136 × 68 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Тхвеге Ли Хван",
          "text": [
            "Портрет учёного-конфуцианца Ли Хвана (Тхвеге, 1501–1570) соседствует с ветвью цветущей сливы-мэхва и зданием Мённюндан. Холодная голубая гамма и тонкие линии задают ровный графический ритм, а надписи «한국은행» и «천원» выполнены традиционным корейским письмом."
          ]
        },
        {
          "title": "Оборотная сторона — «Кесан чонгодо»",
          "text": [
            "Оборот занимает картина Чон Сона (Кёмчжэ) «Кесан чонгодо» — горный пейзаж с соснами, рекой и небольшим кабинетом-содангом, где уединённо жил Ли Хван. Композиция напоминает свитковую живопись: линия гор и штриховка определяют пространство."
          ]
        },
        {
          "title": "Визуальная концепция — учёный и его пейзаж",
          "text": [
            "Обе стороны связаны фигурой Тхвеге: на лицевой — сам учёный и символы конфуцианского образования, на обороте — место, где он жил и учил. Слива, цветущая в холода, традиционно считается символом стойкости учёного; это культурная ассоциация, а не официальная формулировка банка."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Картина-сокровище на обороте",
              "«Кесан чонгодо» Чон Сона (1746) — национальное сокровище Кореи (보물); по словам Службы культурного наследия, в доме-кабинете на картине можно разглядеть самого Тхвеге."
            ],
            [
              "Меняющая цвет цифра",
              "Номинал напечатан краской с оптически переменным эффектом: на купюре 1000 вон цифра при наклоне меняет цвет с зелёного на синий."
            ],
            [
              "Совмещение «тхэгык»",
              "Знак тхэгык напечатан на обеих сторонах в одном и том же месте, и на просвет половинки складываются в целое; в левом поле виден водяной знак с портретом."
            ]
          ]
        },
        {
          "title": "Дизайн, авторы, художники",
          "people": [
            [
              "Чон Сон (Кёмчжэ)",
              "автор картины «Кесан чонгодо», воспроизведённой на обороте"
            ],
            [
              "Корейская корпорация по чеканке и печати (KOMSCO)",
              "изготовитель банкноты"
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Купюра относится к третьей («Да») серии банкнот 1000 вон и выпущена Банком Кореи 22 января 2007 года. В новом образце были усилены защитные признаки — водяной знак, совмещение, голограмма на защитной нити. Предыдущая купюра 1983 года с тем же портретом Тхвеге на обороте изображала академию Тосан-совон."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.bok.or.kr/eng/main/contents.do?menuNo=400175",
                "Банк Кореи — 1 000 вон"
              ],
              [
                "https://www.bok.or.kr/eng/main/contents.do?menuNo=400121",
                "Банк Кореи — банкноты с 2006 года"
              ],
              [
                "https://www.bok.or.kr/eng/main/contents.do?menuNo=400171",
                "Банк Кореи — обзор защитных признаков"
              ],
              [
                "https://www.bok.or.kr/eng/main/contents.do?menuNo=400112",
                "Банк Кореи — знакомство с банкнотами"
              ],
              [
                "https://www.bok.or.kr/portal/main/contents.do?menuNo=200017",
                "Банк Кореи — банкноты в обращении"
              ],
              [
                "https://www.khs.go.kr/cop/bbs/selectBoardArticle.do?nttId=60589&bbsId=BBSMSTR_1214&mn=NS_01_24",
                "Служба культурного наследия Кореи — «1000원 지폐 속 퇴계의 이상향»"
              ],
              [
                "https://en.numista.com/201806",
                "Numista — 1000 Won 2007 (каталог)"
              ]
            ]
          }
        ]
      },
      "story": "Подруга моего брата узнала, что я коллекционирую купюры, и поделилась со мной."
    },
    "en": {
      "title": "Won — South Korea",
      "facts": [
        [
          "Issuer",
          "Bank of Korea"
        ],
        [
          "Currency",
          "South Korean won (KRW)"
        ],
        [
          "Material",
          "Cotton paper"
        ],
        [
          "Size",
          "136 × 68 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Toegye Yi Hwang",
          "text": [
            "The portrait of the Confucian scholar Yi Hwang (Toegye, 1501–1570) sits alongside a branch of flowering plum (maehwa) and the Myeongnyundang hall. The cool blue palette and fine lines set an even graphic rhythm, and the inscriptions “한국은행” and “천원” are written in traditional Korean script."
          ]
        },
        {
          "title": "Back — “Gyesang Jeonggeodo”",
          "text": [
            "The back is taken up by Jeong Seon’s (Gyeomjae) painting “Gyesang Jeonggeodo” — a mountain landscape with pines, a river and a small study (seodang) where Yi Hwang lived in seclusion. The composition recalls scroll painting: the line of the mountains and the hatching define the space."
          ]
        },
        {
          "title": "Visual concept — the scholar and his landscape",
          "text": [
            "Both sides are linked by the figure of Toegye: on the front, the scholar himself and symbols of Confucian learning; on the back, the place where he lived and taught. The plum, which blossoms in the cold, is traditionally seen as a symbol of a scholar’s steadfastness; this is a cultural association rather than an official statement by the bank."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A treasured painting on the back",
              "Jeong Seon’s “Gyesang Jeonggeodo” (1746) is a national Treasure of Korea (보물); according to the Cultural Heritage Administration, Toegye himself can be made out in the study in the painting."
            ],
            [
              "A numeral that changes colour",
              "The denomination is printed in optically variable ink: on the 1,000 won note, the numeral shifts from green to blue when the note is tilted."
            ],
            [
              "Taegeuk see-through register",
              "The taegeuk symbol is printed on both sides in exactly the same place, and when held up to the light the halves combine into a whole; a portrait watermark is visible in the left margin."
            ]
          ]
        },
        {
          "title": "Design, authors, artists",
          "people": [
            [
              "Jeong Seon (Gyeomjae)",
              "painter of “Gyesang Jeonggeodo”, reproduced on the back"
            ],
            [
              "Korea Minting and Security Printing Corporation (KOMSCO)",
              "manufacturer of the banknote"
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The note belongs to the third (“Da”) series of 1,000 won banknotes and was issued by the Bank of Korea on 22 January 2007. The new design strengthened the security features — the watermark, the see-through register and the hologram on the security thread. The previous 1983 note, with the same portrait of Toegye, showed the Dosan Seowon academy on the back."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.bok.or.kr/eng/main/contents.do?menuNo=400175",
                "Bank of Korea — 1,000 won"
              ],
              [
                "https://www.bok.or.kr/eng/main/contents.do?menuNo=400121",
                "Bank of Korea — Banknotes 2006 ~"
              ],
              [
                "https://www.bok.or.kr/eng/main/contents.do?menuNo=400171",
                "Bank of Korea — Summary of Security Features"
              ],
              [
                "https://www.bok.or.kr/eng/main/contents.do?menuNo=400112",
                "Bank of Korea — Introduction to Banknotes"
              ],
              [
                "https://www.bok.or.kr/portal/main/contents.do?menuNo=200017",
                "한국은행 — 현용은행권"
              ],
              [
                "https://www.khs.go.kr/cop/bbs/selectBoardArticle.do?nttId=60589&bbsId=BBSMSTR_1214&mn=NS_01_24",
                "Cultural Heritage Administration of Korea — “1000원 지폐 속 퇴계의 이상향”"
              ],
              [
                "https://en.numista.com/201806",
                "Numista — 1000 Won 2007 (catalogue)"
              ]
            ]
          }
        ]
      },
      "story": "A friend of my brother’s found out that I collect banknotes and shared this one with me."
    }
  },
  "sri-lanka": {
    "ru": {
      "title": "Шри-ланкийская рупия — Шри-Ланка",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Шри-Ланки"
        ],
        [
          "Валюта",
          "Шри-ланкийская рупия (LKR)"
        ],
        [
          "Материал",
          "Хлопковая бумага"
        ],
        [
          "Размер",
          "138 × 67 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — ТЭС Норочхолай и водопад Лакшапана",
          "text": [
            "В центре — угольная электростанция Норочхолай, над ней водопад Лакшапана с линиями электропередачи. Справа — эндемичная птица Шри-Ланки, оранжевоклювая тимелия, слева — бабочка «осенний лист». Композицию в оранжевых тонах дополняют крупный номинал 100, номера и подписи; дата на экземпляре — 2020-08-12."
          ]
        },
        {
          "title": "Оборотная сторона — танцовщица бхаратанатьяма и барабанщик",
          "text": [
            "На обороте сидящий барабанщик играет на мридангаме, рядом с ним — танцовщица бхаратанатьяма. В правом верхнем углу — нага-страж (охранный камень с семиглавой коброй). Объёмные декоративные мотивы и крупное число 100 обрамляют сцену, а свободное светлое поле оставлено под водяной знак."
          ]
        },
        {
          "title": "Визуальная концепция — развитие страны и её культура",
          "text": [
            "Две стороны купюры складываются в единую картину: лицевая показывает энергетику и природу Шри-Ланки, оборотная — традиционный танец и музыку. Плотные орнаменты соседствуют со свободными полями, а оранжевая гамма объединяет индустриальный и культурный сюжеты."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Единая тема серии",
              "Серия 2010 года называется «Развитие, процветание и танцоры Шри-Ланки»: на лицевых сторонах — образы развития страны, эндемичные птицы и бабочки, на оборотных — разные танцоры вместе с барабанщиками, характерными для каждого танца, а также охранные камни и цветочные орнаменты."
            ],
            [
              "Птица в водяном знаке",
              "Водяной знак повторяет птицу, изображённую на купюре; кроме того, номинал цифрами виден вертикально как высветленный водяной знак. В бумагу вшита тонкая полиэфирная нить с буквами CBSL и номиналом."
            ],
            [
              "Точки для незрячих",
              "Слева на лицевой стороне напечатан вертикальный ряд выпуклых точек: их число растёт с номиналом (у 20 рупий — одна точка), что помогает людям с нарушениями зрения различать купюры."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Это одиннадцатая серия банкнот Центрального банка с момента его основания в 1950 году. Концепция появилась в 2007 году, дизайны отбирались на общенациональном конкурсе, а в обращение серия поступила 4 февраля 2011 года — в День независимости и в год 60-летия банка. Экземпляр в коллекции — более поздний тираж того же образца, датированный 12 августа 2020 года."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.cbsl.gov.lk/en/notes-coins/notes-and-coins/current-note-series",
                "Центральный банк Шри-Ланки — текущая серия банкнот"
              ],
              [
                "https://www.cbsl.gov.lk/en/notes-coins/notes-and-coins/security-features-of-notes",
                "Центральный банк Шри-Ланки — защитные признаки банкнот"
              ],
              [
                "https://www.cbsl.gov.lk/en/faq/currency",
                "Центральный банк Шри-Ланки — вопросы и ответы о денежных знаках"
              ],
              [
                "https://www.cbsl.gov.lk/sites/default/files/cbslweb_documents/publications/otherpub/60th_anniversary_currency_issued_by_the_Central_bank_of_sri_lanka.pdf",
                "Центральный банк Шри-Ланки — денежные знаки, выпущенные Центральным банком Шри-Ланки (издание к 60-летию)"
              ],
              [
                "https://www.cbsl.gov.lk/sites/default/files/cbslweb_documents/statistics/mbt/Monthly_Bulletin_February_2011.pdf",
                "Центральный банк Шри-Ланки — ежемесячный бюллетень, февраль 2011"
              ],
              [
                "https://en.numista.com/205392",
                "Numista — 100 Rupees (каталог)"
              ]
            ]
          }
        ]
      },
      "story": "Мой друг и по совместительству одноклубник по баскетбольной сборной университета Костя поделился ею, когда узнал, что я коллекционирую купюры."
    },
    "en": {
      "title": "Sri Lankan Rupee — Sri Lanka",
      "facts": [
        [
          "Issuer",
          "Central Bank of Sri Lanka"
        ],
        [
          "Currency",
          "Sri Lankan rupee (LKR)"
        ],
        [
          "Material",
          "Cotton paper"
        ],
        [
          "Size",
          "138 × 67 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Norochcholai Power Station and Laxapana Falls",
          "text": [
            "At the centre is the Norochcholai coal power station, with Laxapana Falls and power lines above it. On the right is a bird endemic to Sri Lanka, the orange-billed babbler; on the left, an autumn leaf butterfly. The orange-toned composition is completed by a large denomination 100, serial numbers and signatures; the date on this note is 2020-08-12."
          ]
        },
        {
          "title": "Back — Bharatanatyam dancer and drummer",
          "text": [
            "On the back, a seated drummer plays the mridangam, with a Bharatanatyam dancer beside him. In the upper right corner is a naga guardstone (a guard stone with a seven-headed cobra). Raised decorative motifs and a large number 100 frame the scene, and a clear light field is left for the watermark."
          ]
        },
        {
          "title": "Visual concept — The country's development and its culture",
          "text": [
            "The two sides of the note form a single picture: the front shows Sri Lanka's energy and nature, the back traditional dance and music. Dense ornaments sit alongside open fields, and the orange palette unites the industrial and cultural themes."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A unified series theme",
              "The 2010 series is called “Development, Prosperity and Sri Lankan Dancers”: the fronts carry images of the country's development, endemic birds and butterflies, and the backs show different dancers together with the drummers characteristic of each dance, as well as guardstones and floral ornaments."
            ],
            [
              "The bird in the watermark",
              "The watermark repeats the bird shown on the note; in addition, the denomination in numerals is visible vertically as a highlighted watermark. A thin polyester thread bearing the letters CBSL and the denomination is embedded in the paper."
            ],
            [
              "Dots for the visually impaired",
              "On the left of the front, a vertical row of raised dots is printed: their number increases with the denomination (the 20 rupees has one dot), helping people with visual impairments tell the notes apart."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "This is the eleventh banknote series of the Central Bank since its founding in 1950. The concept appeared in 2007, the designs were selected through a nationwide competition, and the series entered circulation on 4 February 2011 — Independence Day and the year of the bank's 60th anniversary. The note in the collection is a later printing of the same design, dated 12 August 2020."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.cbsl.gov.lk/en/notes-coins/notes-and-coins/current-note-series",
                "Central Bank of Sri Lanka — Current Note Series"
              ],
              [
                "https://www.cbsl.gov.lk/en/notes-coins/notes-and-coins/security-features-of-notes",
                "Central Bank of Sri Lanka — Security Features of Notes"
              ],
              [
                "https://www.cbsl.gov.lk/en/faq/currency",
                "Central Bank of Sri Lanka — Currency FAQs"
              ],
              [
                "https://www.cbsl.gov.lk/sites/default/files/cbslweb_documents/publications/otherpub/60th_anniversary_currency_issued_by_the_Central_bank_of_sri_lanka.pdf",
                "Central Bank of Sri Lanka — Currency issued by the Central Bank of Sri Lanka (60th anniversary volume)"
              ],
              [
                "https://www.cbsl.gov.lk/sites/default/files/cbslweb_documents/statistics/mbt/Monthly_Bulletin_February_2011.pdf",
                "Central Bank of Sri Lanka — Monthly Bulletin, February 2011"
              ],
              [
                "https://en.numista.com/205392",
                "Numista — 100 Rupees (catalogue)"
              ]
            ]
          }
        ]
      },
      "story": "My friend Kostya, who was also my teammate on the university basketball team, gave me one when he found out I collect banknotes."
    }
  },
  "tajikistan": {
    "ru": {
      "title": "Сомони — Таджикистан",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Таджикистана"
        ],
        [
          "Валюта",
          "Таджикский сомони (TJS)"
        ],
        [
          "Материал",
          "Хлопковая бумага"
        ],
        [
          "Размер",
          "147 × 65 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Мир Сайид Али Хамадони",
          "text": [
            "Справа помещён гравированный портрет Мир Сайида Али Хамадони — таджикского мыслителя и поэта XIV века; его имя и годы жизни подписаны под портретом. Портрет окружён рубиново-красными восточными орнаментами, слева — широкая декоративная полоса, герб Таджикистана и надпись «Бонки миллии Тоҷикистон». В центре — стилизованный кувшин и свиток на фоне вертикальной орнаментальной ленты, крупный номинал «10» и надпись «Даҳ сомонӣ», внизу — подписи Президента Таджикистана и председателя Национального банка и год образца 1999."
          ]
        },
        {
          "title": "Оборотная сторона — мавзолей Мир Сайида Али Хамадони в Кулябе",
          "text": [
            "Центром оборота выступает мавзолей Мир Сайида Али Хамадони в городе Куляб — архитектурный ансамбль с куполами, порталом и традиционными фасадами. Слева — восьмигранная беседка-павильон на фоне красного орнамента, ниже — несколько строк стихов на таджикском языке. Справа вверху развевается государственный флаг Таджикистана, вверху — надпись TEN SOMONI и крупная цифра номинала, по левому краю — National Bank of Tajikistan."
          ]
        },
        {
          "title": "Визуальная концепция — один герой на обеих сторонах",
          "text": [
            "Обе стороны посвящены одной фигуре: на лицевой — сам Хамадони, на обороте — его мавзолей в Кулябе. Красная палитра и повторяющиеся геометрические орнаменты связывают стороны и отсылают к традиционному декоративному искусству региона."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Нить с буквами «БМТ»",
              "Защитная нить — прозрачная полимерная полоса с повторяющимся текстом «БМТ» (Бонки миллии Тоҷикистон) в прямом и перевёрнутом изображении."
            ],
            [
              "Микротекст на двух языках",
              "Номинал повторён микротекстом: на лицевой стороне — по-таджикски, на обороте — по-английски."
            ],
            [
              "Магнитные номера и светящиеся волокна",
              "Серийный номер обладает магнитными свойствами, а в хлопковую бумагу введены бесцветные волокна, которые светятся красным, синим и зелёным в ультрафиолете."
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
                "https://nbt.tj/ru/banknotes_coins/banknotes.php",
                "Национальный банк Таджикистана — Банкноты"
              ],
              [
                "https://www.nbt.tj/en/banknotes_coins/banknotes.php",
                "Национальный банк Таджикистана — банкноты (англ.)"
              ],
              [
                "https://www.realbanknotes.com/banknote/40611-Tajikistan-p16a-10-Somoni-from-1999",
                "RealBanknotes — 10 сомони 1999 (каталог)"
              ]
            ]
          }
        ]
      },
      "story": "Оставил себе после поездки три года назад в страну, где я родился и жил до четырёх лет."
    },
    "en": {
      "title": "Somoni — Tajikistan",
      "facts": [
        [
          "Issuer",
          "National Bank of Tajikistan"
        ],
        [
          "Currency",
          "Tajikistani somoni (TJS)"
        ],
        [
          "Material",
          "Cotton paper"
        ],
        [
          "Size",
          "147 × 65 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Mir Sayyid Ali Hamadani",
          "text": [
            "On the right is an engraved portrait of Mir Sayyid Ali Hamadani, a 14th-century Tajik thinker and poet; his name and dates are given beneath the portrait. The portrait is surrounded by ruby-red oriental ornaments; on the left are a wide decorative band, the coat of arms of Tajikistan and the inscription \"Бонки миллии Тоҷикистон\". In the centre are a stylised jug and scroll against a vertical ornamental ribbon, a large denomination \"10\" and the words \"Даҳ сомонӣ\"; at the bottom are the signatures of the President of Tajikistan and the Chairman of the National Bank, and the series year 1999."
          ]
        },
        {
          "title": "Back — the Mausoleum of Mir Sayyid Ali Hamadani in Kulob",
          "text": [
            "The centrepiece of the back is the Mausoleum of Mir Sayyid Ali Hamadani in the city of Kulob, an architectural ensemble with domes, a portal and traditional façades. On the left is an octagonal pavilion against a red ornament, with several lines of verse in Tajik below it. At the top right the national flag of Tajikistan flies; at the top are the words TEN SOMONI and a large denomination numeral, and along the left edge National Bank of Tajikistan."
          ]
        },
        {
          "title": "Visual concept — one hero on both sides",
          "text": [
            "Both sides are devoted to a single figure: the front shows Hamadani himself, the back his mausoleum in Kulob. The red palette and recurring geometric ornaments tie the sides together and refer to the traditional decorative art of the region."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A thread with the letters \"БМТ\"",
              "The security thread is a transparent polymer strip with the text \"БМТ\" (Бонки миллии Тоҷикистон) repeated in normal and inverted form."
            ],
            [
              "Microtext in two languages",
              "The denomination is repeated in microtext: in Tajik on the front and in English on the back."
            ],
            [
              "Magnetic numbers and glowing fibres",
              "The serial number has magnetic properties, and colourless fibres embedded in the cotton paper glow red, blue and green under ultraviolet light."
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
                "https://nbt.tj/ru/banknotes_coins/banknotes.php",
                "National Bank of Tajikistan — Banknotes (RU)"
              ],
              [
                "https://www.nbt.tj/en/banknotes_coins/banknotes.php",
                "National Bank of Tajikistan — Banknotes (EN)"
              ],
              [
                "https://www.realbanknotes.com/banknote/40611-Tajikistan-p16a-10-Somoni-from-1999",
                "RealBanknotes — 10 Somoni 1999 (catalogue)"
              ]
            ]
          }
        ]
      },
      "story": "I kept it after a trip three years ago to the country where I was born and lived until I was four."
    }
  },
  "thailand": {
    "ru": {
      "title": "Бат — Таиланд",
      "facts": [
        [
          "Эмитент",
          "Банк Таиланда"
        ],
        [
          "Валюта",
          "Тайский бат (THB)"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — король Пхумипон Адульядет (Рама IX)",
          "text": [
            "На лицевой стороне — портрет короля Пхумипона Адульядета в парадной форме на зеленовато-сером фоне. Слева вверху — Гаруда, государственный герб Таиланда, рядом надпись «รัฐบาลไทย» («Правительство Таиланда»), номинал словами и подписи министра финансов и управляющего Банком Таиланда. Традиционные тайские растительные орнаменты сочетаются с тонкими гильошированными охранными узорами."
          ]
        },
        {
          "title": "Оборотная сторона — памятник королю Таксину Великому",
          "text": [
            "Оборот посвящён королю Таксину Великому: конный памятник с фигурами воинов, рядом подпись с его именем и годами жизни по буддийскому календарю — 2277–2325 (1734–1782). Рельефная штриховка и сдержанная палитра связывают монархическую символику с историческим памятником."
          ]
        },
        {
          "title": "Визуальная концепция — правящий король и великий предок",
          "text": [
            "Лицевая сторона показывает правящего на момент выпуска монарха, а оборот — одного из королей, удостоенных титула «Великий». Так банкнота связывает современность с ключевыми фигурами тайской истории."
          ]
        },
        {
          "title": "Несколько интересных фактов про дизайн",
          "list": [
            [
              "Серия «Великих» королей",
              "Банк Таиланда задумал 12-ю серию, чтобы прославить монархов, удостоенных титула «Великий»: для всех банкнот серии были созданы гравюры памятников этим королям."
            ],
            [
              "Всего три номинала",
              "12-я серия выпускалась в трёх номиналах — 10, 20 и 100 батов — после того как была завершена 11-я серия."
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
                "https://www.bot.or.th/en/our-roles/banknotes/History-and-Series-of-Banknote-And-Commemorative/banknotes-series/banknote-series12.html",
                "Банк Таиланда — 12-я серия"
              ],
              [
                "https://www.bot.or.th/th/our-roles/banknotes/History-and-Series-of-Banknote-And-Commemorative/banknotes-series/banknote-series12.html",
                "Банк Таиланда — банкноты 12-й серии"
              ],
              [
                "https://www.bot.or.th/en/our-roles/banknotes/History-and-Series-of-Banknote-And-Commemorative/banknotes-series.html",
                "Банк Таиланда — банкноты в обращении"
              ]
            ]
          }
        ]
      },
      "story": "Я живу здесь уже три года, так что таких купюр у меня много (октябрь 2026)."
    },
    "en": {
      "title": "Baht — Thailand",
      "facts": [
        [
          "Issuer",
          "Bank of Thailand"
        ],
        [
          "Currency",
          "Thai baht (THB)"
        ]
      ],
      "sections": [
        {
          "title": "Front — King Bhumibol Adulyadej (Rama IX)",
          "text": [
            "The front shows a portrait of King Bhumibol Adulyadej in ceremonial uniform against a greenish-grey background. At the top left is the Garuda, the national emblem of Thailand, next to the inscription “รัฐบาลไทย” (“Government of Thailand”), the denomination in words and the signatures of the Minister of Finance and the Governor of the Bank of Thailand. Traditional Thai floral ornaments are combined with fine guilloche security patterns."
          ]
        },
        {
          "title": "Back — monument to King Taksin the Great",
          "text": [
            "The back is dedicated to King Taksin the Great: an equestrian monument with figures of warriors, next to a caption with his name and his dates according to the Buddhist calendar — 2277–2325 (1734–1782). Relief hatching and a restrained palette link the royal symbolism with the historical monument."
          ]
        },
        {
          "title": "Visual concept — the reigning king and a great forebear",
          "text": [
            "The front shows the monarch reigning at the time of issue, and the back one of the kings honoured with the title “the Great”. In this way the banknote links the present with key figures in Thai history."
          ]
        },
        {
          "title": "A few interesting design facts",
          "list": [
            [
              "A series of “Great” kings",
              "The Bank of Thailand conceived Series 12 to honour the monarchs given the title “the Great”: engravings of monuments to these kings were created for all the notes in the series."
            ],
            [
              "Only three denominations",
              "Series 12 was issued in three denominations — 10, 20 and 100 baht — after Series 11 had been completed."
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
                "https://www.bot.or.th/en/our-roles/banknotes/History-and-Series-of-Banknote-And-Commemorative/banknotes-series/banknote-series12.html",
                "Bank of Thailand — Series 12"
              ],
              [
                "https://www.bot.or.th/th/our-roles/banknotes/History-and-Series-of-Banknote-And-Commemorative/banknotes-series/banknote-series12.html",
                "ธนาคารแห่งประเทศไทย — ธนบัตรแบบ 12"
              ],
              [
                "https://www.bot.or.th/en/our-roles/banknotes/History-and-Series-of-Banknote-And-Commemorative/banknotes-series.html",
                "Bank of Thailand — Circulating Banknotes"
              ]
            ]
          }
        ]
      },
      "story": "I've been living here for three years now, so I have plenty of these notes (October 2026)."
    }
  },
  "trinidad-and-tobago": {
    "ru": {
      "title": "Доллар Тринидада и Тобаго — Тринидад и Тобаго",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Тринидада и Тобаго"
        ],
        [
          "Валюта",
          "Доллар Тринидада и Тобаго (TTD)"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — алый ибис и герб",
          "text": [
            "В центре на насыщенном красно-коралловом фоне — герб Тринидада и Тобаго в овальной рамке с девизом «Together we aspire, together we achieve». Слева — две птицы алого ибиса (Eudocimus ruber) среди ветвей. Симметричные узоры и большие цифры номинала создают формат яркой парадной графики."
          ]
        },
        {
          "title": "Оборотная сторона — здание Центрального банка и Пойнт-Лисас",
          "text": [
            "Главное изображение — высотные башни комплекса, в котором размещается Центральный банк в Порт-оф-Спейне; справа — промышленный пейзаж индустриальной зоны Пойнт-Лисас. Вертикальные архитектурные линии уравновешены широким пейзажным планом. Цвет оборота остаётся красноватым, поэтому две стороны воспринимаются как единая графическая серия."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Птица в водяном знаке",
              "Алый ибис с лицевой стороны повторён в водяном знаке: если посмотреть купюру на просвет, видно птицу и электротипную надпись TT1."
            ],
            [
              "Узкая нить у доллара",
              "В выпуске 2006 года только у купюры в 1 доллар защитную нить сузили с 2 до 1,2 мм, и она перестала светиться в ультрафиолете."
            ],
            [
              "Экономика на обороте",
              "Центральный банк называет сюжетом оборота индустриальную зону Пойнт-Лисас — промышленный пейзаж страны, а не природу."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Серия 2006 года была модернизацией защиты предыдущих купюр, а не новым дизайном. В 2019–2020 годах Тринидад и Тобаго перешёл на полимерные банкноты, и с 1 января 2022 года купюры с датой серии ранее 2020 года перестали быть законным платёжным средством; Центральный банк продолжает обменивать их бессрочно."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.central-bank.org.tt/currency/about-notes-and-coins/upgraded-1-dollar-note",
                "Центральный банк Тринидада и Тобаго — обновлённая банкнота 1 доллар"
              ],
              [
                "https://central-bank.org.tt/sites/default/files/press_releases/currency%20notes%20security%20features%20notice.pdf",
                "Central Bank of Trinidad and Tobago — уведомление об изменении защитных элементов (PDF)"
              ],
              [
                "https://www.central-bank.org.tt/completion-transition-polymer-banknotes/",
                "Центральный банк Тринидада и Тобаго — завершение перехода на полимерные банкноты"
              ],
              [
                "https://www.finance.gov.tt/2021/06/04/completion-of-transition-to-polymer-bank-notes/",
                "Министерство финансов Тринидада и Тобаго — Completion of Transition to Polymer Bank Notes"
              ],
              [
                "https://en.numista.com/204244",
                "Numista — 1 доллар (Тринидад и Тобаго)"
              ]
            ]
          }
        ]
      },
      "story": "Увидел эту купюру в Amsterdam Pub в Новосибирске, и знакомые бармены поделились ею со мной."
    },
    "en": {
      "title": "Trinidad and Tobago Dollar — Trinidad and Tobago",
      "facts": [
        [
          "Issuer",
          "Central Bank of Trinidad and Tobago"
        ],
        [
          "Currency",
          "Trinidad and Tobago dollar (TTD)"
        ]
      ],
      "sections": [
        {
          "title": "Front — the scarlet ibis and the coat of arms",
          "text": [
            "In the centre, on a rich red-coral background, is the coat of arms of Trinidad and Tobago in an oval frame with the motto \"Together we aspire, together we achieve\". On the left are two scarlet ibises (Eudocimus ruber) among branches. Symmetrical patterns and large denomination numerals give it the feel of bright ceremonial graphics."
          ]
        },
        {
          "title": "Back — the Central Bank building and Point Lisas",
          "text": [
            "The main image shows the high-rise towers of the complex that houses the Central Bank in Port of Spain; on the right is an industrial landscape of the Point Lisas industrial estate. The vertical architectural lines are balanced by a wide landscape view. The back stays reddish in colour, so the two sides read as a single graphic series."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A bird in the watermark",
              "The scarlet ibis from the front is repeated in the watermark: hold the note up to the light and you can see the bird and the electrotype inscription TT1."
            ],
            [
              "A narrow thread on the dollar",
              "In the 2006 issue, only the 1-dollar note had its security thread narrowed from 2 to 1.2 mm, and it no longer glows under ultraviolet light."
            ],
            [
              "The economy on the back",
              "The Central Bank describes the subject of the back as the Point Lisas industrial estate — the country's industrial landscape rather than its nature."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The 2006 series was a security upgrade of the previous notes rather than a new design. In 2019–2020 Trinidad and Tobago switched to polymer banknotes, and from 1 January 2022 notes with a series date earlier than 2020 ceased to be legal tender; the Central Bank continues to exchange them indefinitely."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.central-bank.org.tt/currency/about-notes-and-coins/upgraded-1-dollar-note",
                "Central Bank of Trinidad and Tobago — Upgraded $1 note"
              ],
              [
                "https://central-bank.org.tt/sites/default/files/press_releases/currency%20notes%20security%20features%20notice.pdf",
                "Central Bank of Trinidad and Tobago — notice of changes to security features (PDF)"
              ],
              [
                "https://www.central-bank.org.tt/completion-transition-polymer-banknotes/",
                "Central Bank of Trinidad and Tobago — Completion of Transition to Polymer Banknotes"
              ],
              [
                "https://www.finance.gov.tt/2021/06/04/completion-of-transition-to-polymer-bank-notes/",
                "Ministry of Finance of Trinidad and Tobago — Completion of Transition to Polymer Bank Notes"
              ],
              [
                "https://en.numista.com/204244",
                "Numista — 1 Dollar (Trinidad and Tobago)"
              ]
            ]
          }
        ]
      },
      "story": "I spotted this note at the Amsterdam Pub in Novosibirsk, and the bartenders I know there shared it with me."
    }
  },
  "turkey": {
    "ru": {
      "title": "Турецкая лира — Турция",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Турецкой Республики"
        ],
        [
          "Валюта",
          "Турецкая лира (TRY)"
        ],
        [
          "Материал",
          "Банкнотная бумага"
        ],
        [
          "Размер",
          "142 × 68 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Мустафа Кемаль Ататюрк",
          "text": [
            "На зелёном фоне расположен портрет Мустафы Кемаля Ататюрка. Звезда, полумесяц, цветовые сетки и геометрические узоры образуют технологичный графический фон, контрастируя с реалистичной гравировкой лица."
          ]
        },
        {
          "title": "Оборотная сторона — Мимар Кемаледдин",
          "text": [
            "На обороте — портрет архитектора Мимара Кемаледдина (1870–1927) и линейный рисунок построенного по его проекту здания ректората Университета Гази в Анкаре. Аркады, круги и объёмные геометрические формы выполнены мелкой штриховкой; крупные зелёные плоскости визуально связывают обе стороны."
          ]
        },
        {
          "title": "Визуальная концепция — архитектура в объёме",
          "text": [
            "По описанию Центрального банка, рисунок здания на обороте дополнен арками, кругами и объёмными телами, которые передают трёхмерность архитектуры, — это отсылка к творчеству Кемаледдина, одного из лидеров Первого национального архитектурного направления."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Голограмма и нить",
              "Банкнота защищена голографической полосой и защитной нитью с надписями «TL» и «20»; есть также водяной знак с портретом и совмещающееся на просвет изображение."
            ],
            [
              "Размер растёт с номиналом",
              "Банкноты серии E9 различаются по длине на 6 мм от номинала к номиналу, а по ширине — на 4 мм; вместе с рельефными метками это помогает людям с нарушениями зрения."
            ],
            [
              "Архитектор между Берлином и Стамбулом",
              "Кемаледдин учился архитектуре в Берлине и соединял в своих работах черты немецкой и классической османской архитектуры; в 1908 году он основал Османскую палату архитекторов и инженеров."
            ]
          ]
        },
        {
          "title": "Дизайн, авторы, художники",
          "people": [
            [
              "Банкнотная типография Центрального банка Турецкой Республики (TCMB Banknot Matbaası)",
              "Изготовление банкноты"
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Серия (эмиссионная группа) E9 выпускается с 1 января 2009 года — отсюда год «2009» в выходных данных типографии на лицевой стороне. Этот экземпляр относится ко второму выпуску (II. tertip) 20 лир, введённому в обращение 24 декабря 2012 года; позже выходили новые выпуски с подписями других руководителей банка."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.tcmb.gov.tr/wps/wcm/connect/EN/TCMB+EN/Main+Menu/Banknotes/Banknotes+in+Circulation+and+Their+Security+Features/2-Series-Turkish-Lira/20+Turkish+Lira",
                "ЦБ Турции — 20 турецких лир, 2-я серия (на английском)"
              ],
              [
                "https://tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Banknotlar/Dolasimdaki+Banknotlar/2.+Tertip+Banknotlar/20+Turk+Lirasi",
                "ЦБ Турции — 20 турецких лир, 2-я серия (на турецком)"
              ],
              [
                "https://www.tcmb.gov.tr/wps/wcm/connect/EN/TCMB+EN/Main+Menu/Banknotes/General+Information+on+Banknotes/Banknote+Characters",
                "ЦБ Турции — персонажи банкнот эмиссионной группы E9"
              ],
              [
                "https://sanalmuze.tcmb.gov.tr/wps/wcm/connect/9ea932ef-006f-43d1-a38e-c00ea773962a/E9_cv_en.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-9ea932ef-006f-43d1-a38e-c00ea773962a-px.HjsE",
                "Виртуальный музей ЦБ Турции — персонажи банкнот E9 (PDF)"
              ],
              [
                "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Banknotlar/Dolasimdaki+Banknotlar/1.Tertip+Banknotlar/20+Turk+Lirasi",
                "ЦБ Турции — 20 турецких лир, 1-я серия"
              ]
            ]
          }
        ]
      },
      "story": "Оставил себе после поездки в Стамбул. Кстати, там я встретил своё 30-летие — 7 мая 2022 года."
    },
    "en": {
      "title": "Turkish Lira — Türkiye",
      "facts": [
        [
          "Issuer",
          "Central Bank of the Republic of Türkiye"
        ],
        [
          "Currency",
          "Turkish lira (TRY)"
        ],
        [
          "Material",
          "Banknote paper"
        ],
        [
          "Size",
          "142 × 68 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Mustafa Kemal Atatürk",
          "text": [
            "A portrait of Mustafa Kemal Atatürk is set against a green background. A star, a crescent, colour grids and geometric patterns form a technical-looking graphic backdrop that contrasts with the realistic engraving of the face."
          ]
        },
        {
          "title": "Back — Mimar Kemaleddin",
          "text": [
            "The back shows a portrait of the architect Mimar Kemaleddin (1870–1927) and a line drawing of the Gazi University rectorate building in Ankara, which was built to his design. Arcades, circles and three-dimensional geometric shapes are rendered in fine hatching, and large green areas visually link the two sides."
          ]
        },
        {
          "title": "Visual concept — architecture in three dimensions",
          "text": [
            "According to the Central Bank's description, the drawing of the building on the back is complemented by arches, circles and solid forms that convey the three-dimensionality of architecture — a reference to the work of Kemaleddin, one of the leaders of the First National Architectural Movement."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "Hologram and thread",
              "The banknote is protected by a holographic stripe and a security thread bearing the inscriptions “TL” and “20”; there is also a portrait watermark and a see-through register image."
            ],
            [
              "Size grows with value",
              "Banknotes of the E9 series differ in length by 6 mm from one denomination to the next, and in width by 4 mm; together with the raised tactile marks, this helps people with visual impairments."
            ],
            [
              "An architect between Berlin and Istanbul",
              "Kemaleddin studied architecture in Berlin and combined features of German and classical Ottoman architecture in his work; in 1908 he founded the Ottoman Chamber of Architects and Engineers."
            ]
          ]
        },
        {
          "title": "Design, authors, artists",
          "people": [
            [
              "Banknote Printing Works of the Central Bank of the Republic of Türkiye (TCMB Banknot Matbaası)",
              "Production of the banknote"
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The E9 series (emission group) has been issued since 1 January 2009 — hence the year “2009” in the printer's imprint on the front. This note belongs to the second issue (II. tertip) of the 20 lira, put into circulation on 24 December 2012; later issues followed with the signatures of other heads of the bank."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.tcmb.gov.tr/wps/wcm/connect/EN/TCMB+EN/Main+Menu/Banknotes/Banknotes+in+Circulation+and+Their+Security+Features/2-Series-Turkish-Lira/20+Turkish+Lira",
                "TCMB — 20 Turkish Lira, 2nd series"
              ],
              [
                "https://tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Banknotlar/Dolasimdaki+Banknotlar/2.+Tertip+Banknotlar/20+Turk+Lirasi",
                "TCMB — 20 Türk Lirası, 2. Tertip"
              ],
              [
                "https://www.tcmb.gov.tr/wps/wcm/connect/EN/TCMB+EN/Main+Menu/Banknotes/General+Information+on+Banknotes/Banknote+Characters",
                "TCMB — Banknote Characters on E9 Emission Group"
              ],
              [
                "https://sanalmuze.tcmb.gov.tr/wps/wcm/connect/9ea932ef-006f-43d1-a38e-c00ea773962a/E9_cv_en.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-9ea932ef-006f-43d1-a38e-c00ea773962a-px.HjsE",
                "TCMB Virtual Museum — Banknote Characters on E9 (PDF)"
              ],
              [
                "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Banknotlar/Dolasimdaki+Banknotlar/1.Tertip+Banknotlar/20+Turk+Lirasi",
                "TCMB — 20 Türk Lirası, 1. Tertip"
              ]
            ]
          }
        ]
      },
      "story": "I kept it after a trip to Istanbul. By the way, that's where I celebrated my 30th birthday — on 7 May 2022."
    }
  },
  "uae": {
    "ru": {
      "title": "Дирхам — ОАЭ",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Объединённых Арабских Эмиратов"
        ],
        [
          "Валюта",
          "Дирхам ОАЭ (AED)"
        ],
        [
          "Материал",
          "Полимер"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Мечеть шейха Зайда",
          "text": [
            "В центре в овальной рамке — Большая мечеть шейха Зайда в Абу-Даби с куполами, минаретом и аркадами, отражёнными в воде. Сверху — название Центрального банка ОАЭ арабской каллиграфией и круглая эмблема-розетка, справа — прозрачное окно с портретом шейха Зайда бин Султана Аль Нахайяна. Палитра — зелёная, как у прежней купюры в 10 дирхамов; внизу — надпись номинала по-арабски и подпись председателя совета директоров банка."
          ]
        },
        {
          "title": "Оборотная сторона — амфитеатр Хорфаккана",
          "text": [
            "На обороте — амфитеатр Хорфаккана в эмирате Шарджа: колоннада с коринфскими капителями и арочные фасады показаны в перспективе на светло-зелёном фоне. Слева повторяется окно с портретом шейха Зайда, сверху — название банка по-английски и год 2022, внизу — надпись TEN DIRHAMS."
          ]
        },
        {
          "title": "Визуальная концепция — святыня и культурная площадка",
          "text": [
            "Лицевая сторона показывает одну из главных национальных святынь страны, оборот — современную культурную достопримечательность Шарджи. Сквозное прозрачное окно с портретом основателя государства буквально связывает обе стороны купюры."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Окно с портретом основателя",
              "Круглое прозрачное окно с портретом шейха Зайда видно с обеих сторон банкноты; вокруг него нанесена радужная (ирисная) краска."
            ],
            [
              "Скрытая карта страны",
              "Внизу слева спрятано латентное изображение карты ОАЭ с английской аббревиатурой UAE — оно проявляется при наклоне купюры."
            ],
            [
              "Шрифт Брайля и микротекст",
              "На купюру добавлены рельефные знаки шрифта Брайля для слабовидящих, а внизу микропечатью повторяется надпись CENTRAL BANK OF THE UNITED ARAB EMIRATES."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Полимерная купюра в 10 дирхамов вошла в обращение 21 апреля 2022 года как часть третьего выпуска национальной валюты, вслед за полимерной купюрой в 50 дирхамов. По данным ЦБ ОАЭ, полимерные банкноты служат в обращении в два и более раза дольше бумажных и пригодны для переработки; прежние бумажные купюры остаются законным платёжным средством."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://centralbank.ae/en/our-operations/currency-and-coins/circulated-currency/current-banknotes/aed-10-polymer/",
                "ЦБ ОАЭ — AED 10 Polymer"
              ],
              [
                "https://centralbank.ae/media/dvejh1rw/cbuae_aed10_security_features.pdf",
                "ЦБ ОАЭ — Security Features of the 10 Dirhams Third Issue (PDF)"
              ],
              [
                "https://centralbank.ae/media/kq3jseq3/cbuae-issues-new-five-and-ten-dirham-polymer-banknotes-en.pdf",
                "ЦБ ОАЭ — CBUAE issues new five and ten dirham polymer banknotes (PDF)"
              ],
              [
                "https://www.wam.ae/en/article/hszrekz7-cbuae-issues-new-five-and-ten-dirham-polymer",
                "WAM (госагентство ОАЭ) — пресс-релиз о выпуске"
              ]
            ]
          }
        ]
      },
      "story": "Оставил себе после поездки."
    },
    "en": {
      "title": "Dirham — United Arab Emirates",
      "facts": [
        [
          "Issuer",
          "Central Bank of the UAE"
        ],
        [
          "Currency",
          "UAE dirham (AED)"
        ],
        [
          "Material",
          "Polymer"
        ]
      ],
      "sections": [
        {
          "title": "Front — Sheikh Zayed Mosque",
          "text": [
            "In the centre, inside an oval frame, is the Sheikh Zayed Grand Mosque in Abu Dhabi, with its domes, minaret and arcades reflected in water. At the top are the name of the Central Bank of the UAE in Arabic calligraphy and a round rosette emblem; on the right is a transparent window with a portrait of Sheikh Zayed bin Sultan Al Nahyan. The palette is green, like that of the previous 10-dirham note; at the bottom are the denomination in Arabic and the signature of the chairman of the bank's board of directors."
          ]
        },
        {
          "title": "Back — Khor Fakkan Amphitheatre",
          "text": [
            "The back shows the Khor Fakkan Amphitheatre in the emirate of Sharjah: a colonnade with Corinthian capitals and arched façades shown in perspective on a light green background. On the left the window with Sheikh Zayed's portrait appears again; at the top are the bank's name in English and the year 2022, and at the bottom the words TEN DIRHAMS."
          ]
        },
        {
          "title": "Visual concept — a sacred site and a cultural venue",
          "text": [
            "The front shows one of the country's most important national sacred sites, the back a modern cultural landmark of Sharjah. The see-through window with the portrait of the nation's founder literally links the two sides of the note."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A window with the founder's portrait",
              "The round transparent window with Sheikh Zayed's portrait is visible from both sides of the note; it is surrounded by iridescent ink."
            ],
            [
              "A hidden map of the country",
              "At the bottom left is a latent image of a map of the UAE with the English abbreviation UAE, which appears when the note is tilted."
            ],
            [
              "Braille and microtext",
              "Raised Braille marks have been added for the visually impaired, and the words CENTRAL BANK OF THE UNITED ARAB EMIRATES are repeated in microprint along the bottom."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The polymer 10-dirham note entered circulation on 21 April 2022 as part of the third issue of the national currency, following the polymer 50-dirham note. According to the CBUAE, polymer notes last two or more times longer in circulation than paper ones and are recyclable; the earlier paper notes remain legal tender."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://centralbank.ae/en/our-operations/currency-and-coins/circulated-currency/current-banknotes/aed-10-polymer/",
                "CBUAE — AED 10 Polymer"
              ],
              [
                "https://centralbank.ae/media/dvejh1rw/cbuae_aed10_security_features.pdf",
                "CBUAE — Security Features of the 10 Dirhams Third Issue (PDF)"
              ],
              [
                "https://centralbank.ae/media/kq3jseq3/cbuae-issues-new-five-and-ten-dirham-polymer-banknotes-en.pdf",
                "CBUAE — CBUAE issues new five and ten dirham polymer banknotes (PDF)"
              ],
              [
                "https://www.wam.ae/en/article/hszrekz7-cbuae-issues-new-five-and-ten-dirham-polymer",
                "WAM (UAE state news agency) — press release on the issue"
              ]
            ]
          }
        ]
      },
      "story": "I kept it after a trip."
    }
  },
  "united-kingdom": {
    "ru": {
      "title": "Фунт стерлингов — Великобритания",
      "facts": [
        [
          "Эмитент",
          "Королевский банк Шотландии"
        ],
        [
          "Валюта",
          "Фунт стерлингов (GBP)"
        ],
        [
          "Материал",
          "Полимер"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Нэн Шеперд",
          "text": [
            "Портрет писательницы Нэн Шеперд (1893–1981) окружён ландшафтными текстурами горного массива Кэрнгорм и цитатами из её книг, в том числе из «Живой горы» (The Living Mountain). Голубовато-зелёные цвета отсылают к воде и северной природе. На банкноте есть мотивы вайды и рисунок текстильной структуры «ёлочка» — herringbone tweed."
          ]
        },
        {
          "title": "Оборотная сторона — две скумбрии",
          "text": [
            "Две скумбрии изображены в окружении ботанических и декоративных элементов, поверх них — строки из гэльского стихотворения Сорли Маклейна «Выбор» (The Choice). Живые формы рыб контрастируют с тонкими линейными орнаментами. Оформление соединяет рыбную отрасль, море и шотландский пейзаж в одном изобразительном пространстве."
          ]
        },
        {
          "title": "Визуальная концепция — ткань природы",
          "text": [
            "Серия носит название «Fabric of Nature» — «Ткань природы»: морской сюжет оборота переносит акцент с портрета известной личности на местную природу, а текстильные мотивы связывают пейзаж с шотландскими ремёслами."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Первая полимерная купюра банка",
              "Пятифунтовая банкнота 2016 года стала первым выпуском Королевского банка Шотландии на полимерной основе; она сменила пятифунтовку серии Ilay, находившуюся в обращении с 1987 года."
            ],
            [
              "Женщина на основной серии",
              "Нэн Шеперд выбрал совет директоров RBS Scotland, и вместе с Мэри Сомервилл на десятифунтовой купюре она стала первой женщиной на основных банкнотах Королевского банка Шотландии."
            ],
            [
              "Скумбрия и стихи",
              "Скумбрия на обороте выбрана как самый ценный вид для шотландского рыболовства, а рядом с рыбами помещён отрывок из стихотворения Сорли Маклейна «Выбор» на шотландском гэльском."
            ]
          ]
        },
        {
          "title": "Дизайн, авторы, художники",
          "people": [
            [
              "O Street",
              "студия графического дизайна, руководившая творческим процессом серии"
            ],
            [
              "De La Rue",
              "печать банкноты на полимере Safeguard"
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Тему серии выбрали после публичных консультаций, начатых в 2015 году. Новая пятифунтовая купюра вошла в обращение 27 октября 2016 года; пятёрка, десятка, двадцатка и пятидесятифунтовая купюра составляют серию «Fabric of Nature», а реже используемая купюра в 1 фунт по-прежнему выходит в старом дизайне серии Ilay."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.natwestgroup.com/heritage/subjects/banknotes/current-issue-banknotes/current-royal-bank-of-scotland-5-pound-note.html",
                "NatWest Group Heritage Hub — действующая банкнота 5 фунтов Королевского банка Шотландии"
              ],
              [
                "https://www.natwestgroup.com/heritage/subjects/banknotes/current-issue-banknotes.html",
                "NatWest Group Heritage Hub — банкноты текущего выпуска"
              ],
              [
                "https://ostreet.co.uk/project/rbs-peoples-money-design/",
                "O Street — RBS: The People's Money (кейс студии)"
              ],
              [
                "https://www.scottishfinancialnews.com/articles/new-rbs-fiver-to-feature-a-woman-for-first-time",
                "Scottish Financial News — на новой пятифунтовой банкноте RBS впервые изображена женщина"
              ],
              [
                "https://coinweek.com/royal-bank-scotland-issues-new-5-polymer-note/",
                "CoinWeek — Королевский банк Шотландии выпускает новую полимерную банкноту 5 фунтов"
              ],
              [
                "https://en.wikipedia.org/wiki/The_Royal_Bank_of_Scotland_%C2%A35_note",
                "Википедия — банкнота 5 фунтов Королевского банка Шотландии"
              ]
            ]
          }
        ]
      },
      "story": "Оставил себе после того, как пару месяцев гостил у сестры на острове Скай."
    },
    "en": {
      "title": "Pound Sterling — United Kingdom",
      "facts": [
        [
          "Issuer",
          "The Royal Bank of Scotland plc"
        ],
        [
          "Currency",
          "Pound sterling (GBP)"
        ],
        [
          "Material",
          "Polymer"
        ]
      ],
      "sections": [
        {
          "title": "Front — Nan Shepherd",
          "text": [
            "The portrait of the writer Nan Shepherd (1893–1981) is surrounded by landscape textures of the Cairngorm mountains and quotations from her books, including The Living Mountain. The bluish-green colours evoke water and northern nature. The note also features woad motifs and a herringbone tweed textile pattern."
          ]
        },
        {
          "title": "Back — two mackerel",
          "text": [
            "Two mackerel are shown surrounded by botanical and decorative elements, overlaid with lines from Sorley MacLean's Gaelic poem The Choice. The lively shapes of the fish contrast with fine linear ornaments. The design brings the fishing industry, the sea and the Scottish landscape together in a single pictorial space."
          ]
        },
        {
          "title": "Visual concept — the fabric of nature",
          "text": [
            "The series is called \"Fabric of Nature\": the marine subject of the back shifts the emphasis from the portrait of a famous figure to local nature, while the textile motifs link the landscape with Scottish crafts."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "The bank's first polymer note",
              "The 2016 five-pound note was the Royal Bank of Scotland's first polymer issue; it replaced the Ilay series fiver, which had been in circulation since 1987."
            ],
            [
              "A woman on the main series",
              "Nan Shepherd was chosen by the RBS Scotland board, and together with Mary Somerville on the ten-pound note she became the first woman to appear on the Royal Bank of Scotland's main banknotes."
            ],
            [
              "Mackerel and poetry",
              "The mackerel on the back was chosen as the most valuable species for Scottish fishing, and next to the fish is an extract from Sorley MacLean's poem The Choice in Scottish Gaelic."
            ]
          ]
        },
        {
          "title": "Design, authors, artists",
          "people": [
            [
              "O Street",
              "graphic design studio that led the creative process for the series"
            ],
            [
              "De La Rue",
              "printing of the note on Safeguard polymer"
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The theme of the series was chosen after a public consultation launched in 2015. The new five-pound note entered circulation on 27 October 2016; the five, ten, twenty and fifty-pound notes make up the \"Fabric of Nature\" series, while the less commonly used £1 note is still issued in the old Ilay series design."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.natwestgroup.com/heritage/subjects/banknotes/current-issue-banknotes/current-royal-bank-of-scotland-5-pound-note.html",
                "NatWest Group Heritage Hub — Current Royal Bank of Scotland £5 note"
              ],
              [
                "https://www.natwestgroup.com/heritage/subjects/banknotes/current-issue-banknotes.html",
                "NatWest Group Heritage Hub — Current issue banknotes"
              ],
              [
                "https://ostreet.co.uk/project/rbs-peoples-money-design/",
                "O Street — RBS: The People's Money (studio case study)"
              ],
              [
                "https://www.scottishfinancialnews.com/articles/new-rbs-fiver-to-feature-a-woman-for-first-time",
                "Scottish Financial News — New RBS fiver to feature a woman for first time"
              ],
              [
                "https://coinweek.com/royal-bank-scotland-issues-new-5-polymer-note/",
                "CoinWeek — Royal Bank of Scotland Issues New £5 Polymer Note"
              ],
              [
                "https://en.wikipedia.org/wiki/The_Royal_Bank_of_Scotland_%C2%A35_note",
                "Wikipedia — The Royal Bank of Scotland £5 note"
              ]
            ]
          }
        ]
      },
      "story": "I kept it after spending a couple of months staying with my sister on the Isle of Skye."
    }
  },
  "united-states": {
    "ru": {
      "title": "Доллар США — США",
      "facts": [
        [
          "Эмитент",
          "Федеральная резервная система США"
        ],
        [
          "Валюта",
          "Доллар США (USD)"
        ],
        [
          "Материал",
          "Хлопково-льняная бумага (75% хлопка, 25% льна)"
        ],
        [
          "Размер",
          "156 × 66 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Джордж Вашингтон",
          "text": [
            "Гравированный портрет Джорджа Вашингтона помещён в овальную рамку; слева — чёрная печать Федерального резервного банка (на этом экземпляре — буква E, Ричмонд), справа — зелёная печать Министерства финансов, серийный номер повторён дважды. Чёрно-зелёная графика выстроена на историческом языке орнаментальной гравюры; строгая симметрия подчёркивает официальность."
          ]
        },
        {
          "title": "Оборотная сторона — Большая печать США",
          "text": [
            "В центре оборота крупное слово ONE, по обеим сторонам — две стороны Большой печати США: пирамида со всевидящим оком и орёл со щитом. Геометрическая симметрия, латинские девизы и плотные гравированные рамки превращают государственную эмблематику в основной сюжет."
          ]
        },
        {
          "title": "Визуальная концепция — эмблематика вместо пейзажа",
          "text": [
            "Две печати на обороте — отдельные круглые композиции, визуально уравновешенные крупным словом ONE. Вместо пейзажа или здания здесь работает чистая государственная символика, а орнамент гравюры связывает обе стороны."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Дизайн не менялся с 1963 года",
              "Первая однодолларовая банкнота Федеральной резервной системы вышла в 1963 году, и её оформление с портретом Вашингтона и Большой печатью США с тех пор остаётся прежним."
            ],
            [
              "Печать с буквой банка",
              "Чёрная печать слева от портрета содержит название и букву Федерального резервного банка, который распределил купюру; на этом экземпляре это банк Ричмонда (буква E)."
            ],
            [
              "Бумага с цветными волокнами",
              "Банкнотная бумага на четверть состоит из льна и на три четверти из хлопка, в неё случайным образом вкраплены красные и синие защитные волокна."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "В 1929 году все банкноты США уменьшили примерно на 30% — до нынешнего формата 6,14 × 2,61 дюйма. Купюру печатает Бюро гравирования и печати Министерства финансов США; на этом экземпляре серии 2013 года стоят подписи казначея Розы Гуматаотао Риос и министра финансов Джейкоба Лью."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.uscurrency.gov/denominations/1",
                "Программа просвещения о валюте США — банкнота 1 доллар"
              ],
              [
                "https://www.bep.gov/currency/how-money-is-made/",
                "Бюро гравировки и печати — как делают деньги"
              ],
              [
                "https://www.bep.gov/currency/circulating-currency/1-note",
                "Бюро гравировки и печати — банкнота 1 доллар"
              ],
              [
                "https://www.uscurrency.gov/denominations",
                "Программа просвещения о валюте США — семь номиналов"
              ]
            ]
          }
        ]
      },
      "story": "Блин, я уже не помню."
    },
    "en": {
      "title": "US Dollar — United States",
      "facts": [
        [
          "Issuer",
          "Federal Reserve System"
        ],
        [
          "Currency",
          "United States dollar (USD)"
        ],
        [
          "Material",
          "Cotton-linen paper (75% cotton, 25% linen)"
        ],
        [
          "Size",
          "156 × 66 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — George Washington",
          "text": [
            "An engraved portrait of George Washington sits in an oval frame; to the left is the black Federal Reserve Bank seal (on this note, the letter E, Richmond), to the right the green Treasury seal, and the serial number appears twice. The black-and-green design draws on the historical language of ornamental engraving; strict symmetry underlines its official character."
          ]
        },
        {
          "title": "Back — the Great Seal of the United States",
          "text": [
            "In the centre of the back is the large word ONE, flanked by the two sides of the Great Seal of the United States: the pyramid with the all-seeing eye and the eagle with a shield. Geometric symmetry, Latin mottos and dense engraved borders turn state emblems into the main subject."
          ]
        },
        {
          "title": "Visual concept — emblems instead of landscape",
          "text": [
            "The two seals on the back are separate circular compositions, visually balanced by the large word ONE. Instead of a landscape or a building, pure state symbolism does the work here, and the engraved ornament ties both sides together."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "The design has not changed since 1963",
              "The first Federal Reserve one-dollar note was issued in 1963, and its design, with the portrait of Washington and the Great Seal of the United States, has stayed the same ever since."
            ],
            [
              "A seal with the bank's letter",
              "The black seal to the left of the portrait contains the name and letter of the Federal Reserve Bank that distributed the note; on this note it is the Richmond bank (letter E)."
            ],
            [
              "Paper with coloured fibres",
              "The banknote paper is one quarter linen and three quarters cotton, with red and blue security fibres randomly embedded in it."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "In 1929 all US banknotes were reduced in size by about 30%, to the current format of 6.14 × 2.61 inches. The note is printed by the US Treasury's Bureau of Engraving and Printing; this Series 2013 note bears the signatures of Treasurer Rosa Gumataotao Rios and Secretary of the Treasury Jacob Lew."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.uscurrency.gov/denominations/1",
                "U.S. Currency Education Program — $1 Note"
              ],
              [
                "https://www.bep.gov/currency/how-money-is-made/",
                "Bureau of Engraving and Printing — How Money is Made"
              ],
              [
                "https://www.bep.gov/currency/circulating-currency/1-note",
                "Bureau of Engraving and Printing — $1 Note"
              ],
              [
                "https://www.uscurrency.gov/denominations",
                "U.S. Currency Education Program — The Seven Denominations"
              ]
            ]
          }
        ]
      },
      "story": "Damn, I honestly don't remember anymore."
    }
  },
  "uzbekistan": {
    "ru": {
      "title": "Сум — Узбекистан",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Республики Узбекистан"
        ],
        [
          "Валюта",
          "Узбекский сум (UZS)"
        ],
        [
          "Материал",
          "Банкнотная бумага"
        ],
        [
          "Размер",
          "144 × 78 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — государственный герб",
          "text": [
            "На лицевой стороне расположен государственный герб Узбекистана с птицей Хумо в обрамлении растительных элементов. Крупная розовая цифра 1000 с надписью «БИР МИНГ СЎМ», многоцветные гильоши и орнаментальная рамка контрастируют со светлым фоном; вверху справа указан год выпуска — 2001."
          ]
        },
        {
          "title": "Оборотная сторона — музей Амира Темура",
          "text": [
            "На обороте коричневой гравюрой изображено круглое здание Государственного музея истории Темуридов в Ташкенте. Его купол, колоннада и симметричный фасад окружены бирюзово-фиолетовыми растительными и геометрическими узорами."
          ]
        },
        {
          "title": "Визуальная концепция — круг и орнамент",
          "text": [
            "Круглая архитектура музея перекликается с розетками и радиальными линиями защитной графики; этот приём визуально связывает архитектурный сюжет с орнаментом."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Герб в водяном знаке",
              "На широком белом поле лицевой стороны виден локальный водяной знак — герб Республики Узбекистан и цифра «1000» под ним."
            ],
            [
              "Нить со словом «ЎЗБЕКИСТОН»",
              "В бумагу введена металлизированная полиэфирная защитная нить шириной 1,2 мм с многократно повторяющимся текстом «ЎЗБЕКИСТОН»."
            ],
            [
              "Рельефная печать",
              "Рамка, надписи и герб выполнены металлографской (глубокой) печатью, поэтому ощущаются на ощупь."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Музей, изображённый на обороте, открыт 18 октября 1996 года в центре Ташкента к 660-летию Амира Темура. Его здание сочетает темуридский и современный стили: круглый объём венчает большой ребристый купол, облицованный голубой майоликой."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://cbu.uz/ru/banknotes-coins/banknotes/2001/1000/",
                "Центральный банк Республики Узбекистан — 1 000 сум (образец 2001 г.)"
              ],
              [
                "https://cbu.uz/ru/banknotes-coins/banknotes/",
                "Центральный банк Республики Узбекистан — Банкноты"
              ],
              [
                "https://dkm.gov.uz/ru/muzej-istorii-temuridov-taskent",
                "Дирекция при Кабинете Министров РУз — Государственный музей истории Темуридов"
              ]
            ]
          }
        ]
      },
      "story": "Когда я был волонтёром на чемпионате мира по футболу 2018 года в Калининграде, я познакомился с Шохрухом — волонтёром из Узбекистана. Он поделился со мной этой купюрой."
    },
    "en": {
      "title": "Soʻm — Uzbekistan",
      "facts": [
        [
          "Issuer",
          "Central Bank of the Republic of Uzbekistan"
        ],
        [
          "Currency",
          "Uzbek soʻm (UZS)"
        ],
        [
          "Material",
          "Banknote paper"
        ],
        [
          "Size",
          "144 × 78 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — the state coat of arms",
          "text": [
            "The front features the state coat of arms of Uzbekistan with the Humo bird, framed by floral elements. The large pink numeral 1000 with the inscription “БИР МИНГ СЎМ”, multicoloured guilloches and an ornamental frame contrast with the light background; the year of issue, 2001, appears at the top right."
          ]
        },
        {
          "title": "Back — the Amir Timur Museum",
          "text": [
            "The back shows, as a brown engraving, the round building of the State Museum of Timurid History in Tashkent. Its dome, colonnade and symmetrical façade are surrounded by turquoise-and-violet floral and geometric patterns."
          ]
        },
        {
          "title": "Visual concept — circle and ornament",
          "text": [
            "The museum’s round architecture echoes the rosettes and radial lines of the security graphics; this device visually links the architectural subject with the ornament."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "Coat of arms in the watermark",
              "In the wide white field on the front, a localised watermark is visible — the coat of arms of the Republic of Uzbekistan with the numeral “1000” beneath it."
            ],
            [
              "A thread reading “ЎЗБЕКИСТОН”",
              "A metallised polyester security thread 1.2 mm wide, with the text “ЎЗБЕКИСТОН” repeated many times, is embedded in the paper."
            ],
            [
              "Raised printing",
              "The frame, inscriptions and coat of arms are printed by intaglio, so they can be felt to the touch."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The museum shown on the back opened on 18 October 1996 in the centre of Tashkent to mark the 660th anniversary of Amir Timur. Its building combines Timurid and modern styles: the round structure is crowned by a large ribbed dome clad in blue majolica."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://cbu.uz/ru/banknotes-coins/banknotes/2001/1000/",
                "Central Bank of the Republic of Uzbekistan — 1,000 soʻm (2001 design)"
              ],
              [
                "https://cbu.uz/ru/banknotes-coins/banknotes/",
                "Central Bank of the Republic of Uzbekistan — Banknotes"
              ],
              [
                "https://dkm.gov.uz/ru/muzej-istorii-temuridov-taskent",
                "Directorate under the Cabinet of Ministers of Uzbekistan — State Museum of Timurid History"
              ]
            ]
          }
        ]
      },
      "story": "When I was a volunteer at the 2018 FIFA World Cup in Kaliningrad, I met Shokhrukh, a volunteer from Uzbekistan. He shared this banknote with me."
    }
  },
  "vietnam": {
    "ru": {
      "title": "Донг — Вьетнам",
      "facts": [
        [
          "Эмитент",
          "Государственный банк Вьетнама"
        ],
        [
          "Валюта",
          "Вьетнамский донг (VND)"
        ],
        [
          "Материал",
          "Хлопковая бумага"
        ],
        [
          "Размер",
          "134 × 65 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Хо Ши Мин",
          "text": [
            "Портрет президента Хо Ши Мина расположен на бежево-коричневом фоне справа, слева — государственный герб Вьетнама и надпись «Cộng hòa xã hội chủ nghĩa Việt Nam». Национальные орнаменты и современная сетчатая графика обрамляют композицию, а номинал 2000 повторён цифрами и словами «Hai nghìn đồng». Внизу напечатан год образца — 1988."
          ]
        },
        {
          "title": "Оборотная сторона — ткацкий цех",
          "text": [
            "На обороте — интерьер текстильного цеха: работницы обслуживают длинные ряды прядильных машин, уходящих в глубину. Над сюжетом — надпись «Ngân hàng Nhà nước Việt Nam» (Государственный банк Вьетнама). Тёмно-коричневая гравюрная палитра создаёт эффект архивной иллюстрации."
          ]
        },
        {
          "title": "Визуальная концепция — портрет и труд",
          "text": [
            "Купюра строится на сопоставлении двух тем: лицевая сторона посвящена государству и его основателю, оборотная — повседневному промышленному труду. Перспектива цеха с бесконечными рядами машин придаёт сюжету ощущение масштаба, а традиционные орнаменты по краям смягчают индустриальную тему."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Год на купюре и дата выпуска различаются",
              "На банкноте стоит 1988 год, но в обращение номинал 2000 донгов был выпущен Государственным банком Вьетнама 20 октября 1989 года."
            ],
            [
              "Хлопковая бумага",
              "Банкнота напечатана на хлопковой бумаге; Государственный банк указывает её общий цвет как тёмно-коричневый."
            ],
            [
              "Сочетание орнаментов",
              "По официальному описанию, на лицевой стороне национальные орнаменты (hoa văn dân tộc) соединены с современным сетчатым узором (hoa văn lưới hiện đại)."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Банкнота 2000 донгов на хлопковой бумаге входит в перечень денежных знаков, которые Государственный банк Вьетнама указывает как находящиеся в обращении, наряду с более поздними полимерными купюрами высоких номиналов."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://sbv.gov.vn/en/w/sbvwebapp01sbv072320",
                "Государственный банк Вьетнама — Tiền đang lưu hành (денежные знаки в обращении)"
              ],
              [
                "https://sbv.gov.vn/en/w/sbv615814",
                "Государственный банк Вьетнама — Đồng tiền Việt Nam (вьетнамская валюта)"
              ],
              [
                "https://sbv.gov.vn/en/vietnamese-currency",
                "Государственный банк Вьетнама — вьетнамская валюта"
              ]
            ]
          }
        ]
      },
      "story": "Осталась после поездки, когда я путешествовал с рюкзаком по Азии — из Сибири до Таиланда на поездах и автобусах."
    },
    "en": {
      "title": "Dong — Vietnam",
      "facts": [
        [
          "Issuer",
          "State Bank of Vietnam"
        ],
        [
          "Currency",
          "Vietnamese đồng (VND)"
        ],
        [
          "Material",
          "Cotton paper"
        ],
        [
          "Size",
          "134 × 65 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Ho Chi Minh",
          "text": [
            "The portrait of President Ho Chi Minh sits on a beige-and-brown background on the right; on the left are the state emblem of Vietnam and the inscription “Cộng hòa xã hội chủ nghĩa Việt Nam”. National ornaments and modern mesh patterns frame the composition, and the denomination 2000 is repeated in numerals and in the words “Hai nghìn đồng”. The design year, 1988, is printed at the bottom."
          ]
        },
        {
          "title": "Back — a weaving workshop",
          "text": [
            "The back shows the interior of a textile mill: women workers tend long rows of spinning machines receding into the distance. Above the scene is the inscription “Ngân hàng Nhà nước Việt Nam” (State Bank of Vietnam). The dark brown engraved palette gives the effect of an archival illustration."
          ]
        },
        {
          "title": "Visual concept — portrait and labour",
          "text": [
            "The note is built on a contrast between two themes: the front is devoted to the state and its founder, the back to everyday industrial labour. The perspective of the workshop with its endless rows of machines gives the scene a sense of scale, while the traditional ornaments around the edges soften the industrial theme."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "The year on the note and the issue date differ",
              "The banknote bears the year 1988, but the 2,000 đồng denomination was put into circulation by the State Bank of Vietnam on 20 October 1989."
            ],
            [
              "Cotton paper",
              "The banknote is printed on cotton paper; the State Bank gives its overall colour as dark brown."
            ],
            [
              "A combination of ornaments",
              "According to the official description, the front combines national ornaments (hoa văn dân tộc) with a modern mesh pattern (hoa văn lưới hiện đại)."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The 2,000 đồng cotton-paper note is on the list of currency that the State Bank of Vietnam states is in circulation, alongside the later high-denomination polymer notes."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://sbv.gov.vn/en/w/sbvwebapp01sbv072320",
                "State Bank of Vietnam — Tiền đang lưu hành (currency in circulation)"
              ],
              [
                "https://sbv.gov.vn/en/w/sbv615814",
                "State Bank of Vietnam — Đồng tiền Việt Nam (Vietnamese currency)"
              ],
              [
                "https://sbv.gov.vn/en/vietnamese-currency",
                "State Bank of Vietnam — Vietnamese Currency"
              ]
            ]
          }
        ]
      },
      "story": "I brought it back from a trip when I was backpacking across Asia — from Siberia to Thailand by train and bus."
    }
  },
  "zimbabwe": {
    "ru": {
      "title": "Доллар Зимбабве — Зимбабве",
      "facts": [
        [
          "Эмитент",
          "Резервный банк Зимбабве"
        ],
        [
          "Валюта",
          "Зимбабвийский доллар (ZWN)"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — балансирующие камни Чиремба",
          "text": [
            "Основной знак — балансирующие камни Чиремба в круглой эмблеме Резервного банка на зеленовато-голубом поле. Крупные цифры номинала, надписи «Pay the bearer on demand», «Twenty five million dollars», срок «on or before 30th June 2008», дата выпуска 2 апреля 2008 года, подпись управляющего Г. Гоно и слова «Bearer cheque» составляют композицию вместе с геометрическими орнаментами."
          ]
        },
        {
          "title": "Оборотная сторона — Пламя свободы и панорама Хараре",
          "text": [
            "Оборот показывает монумент «Пламя свободы» и городскую панораму Хараре. Вертикальный монумент на переднем плане и широкие очертания зданий создают противопоставление исторического знака и современного города."
          ]
        },
        {
          "title": "Визуальная концепция — документ с ограниченным сроком",
          "text": [
            "По форме это не банкнота, а чек на предъявителя: текст обязательства и дата погашения занимают центр лицевой стороны, а изображения сведены к эмблеме банка и одной городской сцене. Скромное двухцветное оформление выдаёт временный характер выпуска."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Чек со сроком годности",
              "Закон о Резервном банке Зимбабве (ст. 42A) позволяет банку при нехватке банкнот выпускать чеки на предъявителя с заранее установленной суммой и сроком действия не более двенадцати месяцев — поэтому на купюре напечатано «до 30 июня 2008 года»."
            ],
            [
              "Камни Чиремба",
              "На лицевой стороне — балансирующие камни Чиремба, природный символ, ставший частью эмблемы Резервного банка."
            ],
            [
              "Пламя свободы",
              "На обороте на переднем плане панорамы Хараре изображён монумент «Пламя свободы»."
            ]
          ]
        },
        {
          "title": "Исторический контекст",
          "text": [
            "Чек выпущен 2 апреля 2008 года, в разгар гиперинфляции, и действовал меньше трёх месяцев. Уже 1 августа 2008 года была проведена деноминация: десять миллиардов долларов в старых чеках на предъявителя приравняли к одному новому доллару, а старые чеки принимались до 31 января 2009 года."
          ]
        }
      ],
      "sources": {
        "title": "Источники и ссылки",
        "groups": [
          {
            "links": [
              [
                "https://www.rbz.co.zw/documents/Regulations_Acts/acts/rbz_act.pdf",
                "Резервный банк Зимбабве — Закон о Резервном банке Зимбабве [глава 22:15]"
              ],
              [
                "https://www.rbz.co.zw/documents/Regulations_Acts/SIs/SI_109_2008.pdf",
                "Резервный банк Зимбабве — постановление S.I. 109 от 2008 года о деноминации валюты"
              ],
              [
                "https://data.fitzmuseum.cam.ac.uk/id/object/176420",
                "Музей Фицуильяма, Кембридж — Зимбабве, чек на предъявителя на 25 миллионов долларов, 2008 (CM.586-2008)"
              ],
              [
                "https://en.numista.com/207514",
                "Numista — 25 000 000 долларов (чек на предъявителя), 2008"
              ]
            ]
          }
        ]
      },
      "story": "Мой хороший знакомый Даниил поделился ею со мной. Если не ошибаюсь, это его любимая страна. Особая для меня купюра — одна из вишенок моей коллекции."
    },
    "en": {
      "title": "Zimbabwean Dollar — Zimbabwe",
      "facts": [
        [
          "Issuer",
          "Reserve Bank of Zimbabwe"
        ],
        [
          "Currency",
          "Zimbabwean dollar (ZWN)"
        ]
      ],
      "sections": [
        {
          "title": "Front — the Chiremba Balancing Rocks",
          "text": [
            "The main motif is the Chiremba Balancing Rocks in the Reserve Bank’s round emblem on a greenish-blue field. The large denomination numerals, the inscriptions “Pay the bearer on demand” and “Twenty five million dollars”, the validity “on or before 30th June 2008”, the issue date of 2 April 2008, the signature of Governor G. Gono and the words “Bearer cheque” make up the composition together with geometric ornaments."
          ]
        },
        {
          "title": "Back — the Freedom Flame and the Harare skyline",
          "text": [
            "The back shows the Freedom Flame monument and the Harare skyline. The vertical monument in the foreground and the broad outlines of the buildings set a historical landmark against the modern city."
          ]
        },
        {
          "title": "Visual concept — a document with a limited lifespan",
          "text": [
            "In form this is not a banknote but a bearer cheque: the text of the promise and the redemption date occupy the centre of the front, and the imagery is reduced to the bank’s emblem and a single city scene. The modest two-colour design betrays the temporary nature of the issue."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A cheque with an expiry date",
              "The Reserve Bank of Zimbabwe Act (section 42A) allows the bank, when banknotes are in short supply, to issue bearer cheques with a preset amount and a validity of no more than twelve months — which is why the note reads “on or before 30th June 2008”."
            ],
            [
              "The Chiremba rocks",
              "The front shows the Chiremba Balancing Rocks, a natural symbol that became part of the Reserve Bank’s emblem."
            ],
            [
              "The Freedom Flame",
              "On the back, the Freedom Flame monument is shown in the foreground of the Harare skyline."
            ]
          ]
        },
        {
          "title": "Historical context",
          "text": [
            "The cheque was issued on 2 April 2008, at the height of hyperinflation, and was valid for less than three months. On 1 August 2008 the currency was redenominated: ten billion dollars in old bearer cheques became equal to one new dollar, and the old cheques were accepted until 31 January 2009."
          ]
        }
      ],
      "sources": {
        "title": "Sources and links",
        "groups": [
          {
            "links": [
              [
                "https://www.rbz.co.zw/documents/Regulations_Acts/acts/rbz_act.pdf",
                "Reserve Bank of Zimbabwe — Reserve Bank of Zimbabwe Act [Chapter 22:15]"
              ],
              [
                "https://www.rbz.co.zw/documents/Regulations_Acts/SIs/SI_109_2008.pdf",
                "Reserve Bank of Zimbabwe — S.I. 109 of 2008, Currency Revaluation"
              ],
              [
                "https://data.fitzmuseum.cam.ac.uk/id/object/176420",
                "Fitzwilliam Museum, Cambridge — Zimbabwe, 25 million dollars bearer cheque, 2008 (CM.586-2008)"
              ],
              [
                "https://en.numista.com/207514",
                "Numista — 25 000 000 Dollars (Bearer Cheque) 2008"
              ]
            ]
          }
        ]
      },
      "story": "My good friend Daniil shared it with me. If I'm not mistaken, it's his favourite country. This note is special to me — one of the cherries on top of my collection."
    }
  },
  "colombia": {
    "ru": {
      "title": "Колумбийское песо — Колумбия",
      "facts": [
        [
          "Эмитент",
          "Банк Республики Колумбия"
        ],
        [
          "Валюта",
          "Колумбийский песо (COP)"
        ],
        [
          "Материал",
          "Банкнотная бумага"
        ],
        [
          "Размер",
          "133 × 66 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Хосе Асунсьон Сильва",
          "text": [
            "Главный персонаж банкноты — колумбийский поэт Хосе Асунсьон Сильва (1865–1896). Он изображён дважды: крупным портретом и фигурой в полный рост. Рядом находятся растение пуйя и шмель. Коричневая палитра сочетается с зелёными, синими и красноватыми геометрическими элементами. Шестиугольные узоры обрамляют портрет, создавая контраст между историческим образом поэта и современной графикой банкноты."
          ]
        },
        {
          "title": "Оборотная сторона — Высокогорья Колумбии",
          "text": [
            "Оборот посвящён парамос — высокогорным экосистемам Анд, которые играют важную роль в сохранении водных ресурсов страны. Среди горного пейзажа изображены андский кондор, очковый медведь и характерные высокогорные растения — фрайлехоны. Справа размещено стихотворение Сильвы «Меланхолия». Таким образом, природный ландшафт становится не просто иллюстрацией, а частью визуального рассказа о колумбийской культуре."
          ]
        },
        {
          "title": "Визуальная концепция — Поэзия среди Анд",
          "text": [
            "Здесь литература и природа существуют в одной композиционной системе. Поэт занимает лицевую сторону, а пейзаж, растения и животные — оборотную. Их связывает текст стихотворения, продолжающий литературную тему среди гор. Это соответствует официальной концепции новой серии: чествованию выдающихся колумбийцев и природного разнообразия страны."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Стихотворение как часть банкноты",
              "На оборотной стороне напечатано произведение Сильвы «Меланхолия». Это редкий случай, когда литературный текст становится полноценной частью банкнотной композиции, а не просто декоративной подписью."
            ],
            [
              "Растение, которое меняет цвет",
              "На лицевой стороне изображена пуйя. При наклоне банкноты её центральная часть меняет цвет с медного на зелёный. Таким образом, ботаническая иллюстрация одновременно выполняет декоративную и защитную функции."
            ],
            [
              "Шмель скрыт в графике",
              "Изображение шмеля присутствует не только в оформлении, но и в защитных элементах. Части рисунка на лицевой и оборотной сторонах совмещаются при просмотре банкноты на просвет."
            ]
          ]
        },
        {
          "title": "Дизайн, авторы, художники",
          "people": [
            [
              "Banco de la República",
              "Эмитент и организация, разработавшая концепцию новой серии банкнот, посвящённой известным личностям и биоразнообразию Колумбии."
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
                "https://www.banrep.gov.co/es/contenidos/billete-5000",
                "Banco de la República — банкнота 5 000 песо: изображения, визуальные элементы и защита"
              ],
              [
                "https://www.banrep.gov.co/en/noticias/comunicado/banco-republica-starts-circulating-5-thousand-peso-banknote",
                "Banco de la República — выпуск банкноты 5 000 песо в обращение, 9 ноября 2016 года"
              ],
              [
                "https://www.banrep.gov.co/en/press-release-25-09-2015",
                "Banco de la República — концепция новой серии банкнот"
              ],
              [
                "https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/rbr_nota_1055.pdf",
                "Banco de la República — «Новая серия банкнот», редакционная заметка (PDF)"
              ]
            ]
          }
        ]
      },
      "story": "Когда я был волонтёром на чемпионате мира по футболу 2018 года в Калининграде, Нико — волонтёр из Колумбии — подарил мне эту купюру на память."
    },
    "en": {
      "title": "Colombian Peso — Colombia",
      "facts": [
        [
          "Issuer",
          "Bank of the Republic of Colombia"
        ],
        [
          "Currency",
          "Colombian peso (COP)"
        ],
        [
          "Material",
          "Banknote paper"
        ],
        [
          "Size",
          "133 × 66 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — José Asunción Silva",
          "text": [
            "The note's main figure is the Colombian poet José Asunción Silva (1865–1896). He appears twice: in a large portrait and as a full-length figure. Next to him are a puya plant and a bumblebee. The brown palette is combined with green, blue and reddish geometric elements. Hexagonal patterns frame the portrait, creating a contrast between the historical image of the poet and the note's modern graphics."
          ]
        },
        {
          "title": "Back — Colombia's highlands",
          "text": [
            "The back is devoted to the páramos, the high-altitude ecosystems of the Andes that play an important role in conserving the country's water resources. Within the mountain landscape are an Andean condor, a spectacled bear and characteristic high-altitude plants, frailejones. On the right is Silva's poem \"Melancolía\". In this way the natural landscape becomes not just an illustration but part of a visual story about Colombian culture."
          ]
        },
        {
          "title": "Visual concept — Poetry among the Andes",
          "text": [
            "Here literature and nature exist within a single compositional system. The poet occupies the front, while the landscape, plants and animals occupy the back. They are linked by the text of the poem, which carries the literary theme into the mountains. This matches the official concept of the new series: honouring outstanding Colombians and the country's natural diversity."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "A poem as part of the note",
              "Silva's poem \"Melancolía\" is printed on the back. It is a rare case of a literary text becoming a full part of a banknote's composition rather than just a decorative caption."
            ],
            [
              "A plant that changes colour",
              "The front shows a puya. When the note is tilted, its central part changes colour from copper to green. The botanical illustration thus serves both a decorative and a security function."
            ],
            [
              "A bumblebee hidden in the graphics",
              "The bumblebee appears not only in the design but also in the security features. Parts of the image on the front and back line up when the note is held up to the light."
            ]
          ]
        },
        {
          "title": "Design, authors, artists",
          "people": [
            [
              "Banco de la República",
              "The issuer and the organisation that developed the concept of the new banknote series, devoted to notable figures and Colombia's biodiversity."
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
                "https://www.banrep.gov.co/es/contenidos/billete-5000",
                "Banco de la República — the 5,000-peso note: images, visual elements and security"
              ],
              [
                "https://www.banrep.gov.co/en/noticias/comunicado/banco-republica-starts-circulating-5-thousand-peso-banknote",
                "Banco de la República — the 5,000-peso note enters circulation, 9 November 2016"
              ],
              [
                "https://www.banrep.gov.co/en/press-release-25-09-2015",
                "Banco de la República — the concept of the new banknote series"
              ],
              [
                "https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/rbr_nota_1055.pdf",
                "Banco de la República — \"The new banknote series\", editorial note (PDF)"
              ]
            ]
          }
        ]
      },
      "story": "When I was a volunteer at the 2018 FIFA World Cup in Kaliningrad, Nico, a volunteer from Colombia, gave me this note as a keepsake."
    }
  },
  "morocco": {
    "ru": {
      "title": "Марокканский дирхам — Марокко",
      "facts": [
        [
          "Эмитент",
          "Банк аль-Магриб"
        ],
        [
          "Валюта",
          "Марокканский дирхам (MAD)"
        ],
        [
          "Материал",
          "Банкнотная бумага"
        ],
        [
          "Размер",
          "138 × 70 мм"
        ]
      ],
      "sections": [
        {
          "title": "Лицевая сторона — Мухаммед VI и ворота Эс-Сувейры",
          "text": [
            "На банкноте изображён король Марокко Мухаммед VI. Рядом размещена стилизованная композиция ворот Баб-эс-Себаа в историческом городе Эс-Сувейра, а также королевская корона и государственный герб. Архитектурные формы сочетаются с тонкой геометрической графикой. Зелёные, жёлтые и голубые оттенки создают светлую композицию, в которой портрет и традиционная архитектура представлены как равноправные элементы оформления."
          ]
        },
        {
          "title": "Оборотная сторона — Аргановое дерево и водопады Узуд",
          "text": [
            "На обороте показаны водопады Узуд и аргановое дерево — растение, характерное для Марокко. Композицию дополняют традиционный жернов для производства арганового масла, птица и декоративные мотивы, вдохновлённые марокканскими коврами. Природные изображения сочетаются с предметом сельского ремесла, а зелёная гамма связывает пейзаж, растительные мотивы и орнаментальные элементы в единую композицию."
          ]
        },
        {
          "title": "Визуальная концепция — Сельское Марокко",
          "text": [
            "Для серии 2012 года Банк аль-Магриб определил отдельную тему каждому номиналу. Пятьдесят дирхамов посвящены сельской местности. Аргановое дерево, водопады и традиционное производство масла представляют природное и хозяйственное наследие страны. Декоративную графику дополняют узоры, вдохновлённые коврами разных регионов Марокко."
          ]
        },
        {
          "title": "Три интересных факта про дизайн",
          "list": [
            [
              "Жернов как символ сельского ремесла",
              "Изображение жернова связано с традиционным изготовлением арганового масла. Дизайнеры включили не только растение, но и инструмент его обработки, показывая связь природы с хозяйственной культурой Марокко."
            ],
            [
              "Орнаменты марокканских ковров",
              "Банк аль-Магриб официально подтверждает, что фон оборотных сторон серии оформлен орнаментами, вдохновлёнными коврами различных регионов страны."
            ],
            [
              "Архитектурные ворота как символ открытости",
              "В дизайне серии используются стилизованные марокканские ворота. По объяснению Банка аль-Магриб, этот архитектурный образ символизирует открытость страны. На банкноте 50 дирхамов в качестве мотива выбраны ворота Эс-Сувейры."
            ]
          ]
        },
        {
          "title": "Дизайн, авторы, художники",
          "people": [
            [
              "Dar As-Sikkah",
              "Художники государственного монетного двора Марокко. Согласно годовому отчёту Банка аль-Магриб за 2013 год, макеты банкнот номиналом 20 и 50 дирхамов разрабатывали именно они."
            ],
            [
              "Художественный и тематический комитет Bank Al-Maghrib",
              "Для разработки серии был сформирован комитет из сотрудников банка и приглашённых специалистов. Он определял темы, рассматривал макеты и вносил изменения."
            ],
            [
              "Совет Bank Al-Maghrib",
              "Утверждал характеристики новой серии банкнот перед выпуском в обращение."
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
                "https://www.bkam.ma/Billets-et-monnaies/Billets-et-pieces-en-circulation/Billets-en-circulation/Serie-2012/Billet-de-50-dh",
                "Bank Al-Maghrib — банкнота 50 дирхамов, серия 2012 года"
              ],
              [
                "https://www.bkam.ma/Billets-et-monnaies/Iconographie-des-billets-et-pieces/Nature",
                "Bank Al-Maghrib — природа на банкнотах: аргановое дерево и водопады Узуд"
              ],
              [
                "https://www.bkam.ma/pedagogic/content/download/335531/2870433/Kit%20p%C3%A9dagogique.pdf",
                "Bank Al-Maghrib — образовательный материал о валюте Марокко (PDF)"
              ],
              [
                "https://en.numista.com/202313",
                "Numista — 50 дирхамов, серия 2012 года"
              ]
            ]
          }
        ]
      },
      "story": "В Новосибирске я принимал каучсёрферов. У меня останавливалась путешественница из Марокко, и она подарила мне эту купюру."
    },
    "en": {
      "title": "Moroccan Dirham — Morocco",
      "facts": [
        [
          "Issuer",
          "Bank Al-Maghrib"
        ],
        [
          "Currency",
          "Moroccan dirham (MAD)"
        ],
        [
          "Material",
          "Banknote paper"
        ],
        [
          "Size",
          "138 × 70 mm"
        ]
      ],
      "sections": [
        {
          "title": "Front — Mohammed VI and the Essaouira gate",
          "text": [
            "The banknote depicts King Mohammed VI of Morocco. Beside him is a stylised rendering of the Bab Sbaa gate in the historic city of Essaouira, together with the royal crown and the national coat of arms. The architectural forms are combined with fine geometric linework. Shades of green, yellow and blue create a light composition in which the portrait and the traditional architecture are presented as equal elements of the design."
          ]
        },
        {
          "title": "Back — The argan tree and Ouzoud Falls",
          "text": [
            "The back shows Ouzoud Falls and the argan tree, a plant characteristic of Morocco. The composition is completed by a traditional millstone used to make argan oil, a bird, and decorative motifs inspired by Moroccan carpets. The images of nature are paired with an object of rural craft, and the green palette ties the landscape, plant motifs and ornamental elements into a single composition."
          ]
        },
        {
          "title": "Visual concept — Rural Morocco",
          "text": [
            "For the 2012 series, Bank Al-Maghrib assigned a separate theme to each denomination. The fifty dirhams is dedicated to the countryside. The argan tree, the waterfalls and traditional oil production represent the country's natural and economic heritage. The decorative graphics are complemented by patterns inspired by carpets from different regions of Morocco."
          ]
        },
        {
          "title": "Three interesting design facts",
          "list": [
            [
              "The millstone as a symbol of rural craft",
              "The image of the millstone is linked to the traditional making of argan oil. The designers included not only the plant but also the tool used to process it, showing the connection between nature and Morocco's economic culture."
            ],
            [
              "Moroccan carpet ornaments",
              "Bank Al-Maghrib officially confirms that the background of the backs of the series is decorated with ornaments inspired by carpets from various regions of the country."
            ],
            [
              "An architectural gate as a symbol of openness",
              "The series design uses stylised Moroccan gates. According to Bank Al-Maghrib, this architectural image symbolises the country's openness. On the 50-dirham note, the Essaouira gate was chosen as the motif."
            ]
          ]
        },
        {
          "title": "Design, authors, artists",
          "people": [
            [
              "Dar As-Sikkah",
              "Artists of Morocco's state mint. According to Bank Al-Maghrib's 2013 annual report, they developed the designs of the 20- and 50-dirham notes."
            ],
            [
              "Bank Al-Maghrib Artistic and Thematic Committee",
              "A committee of bank staff and invited specialists was formed to develop the series. It set the themes, reviewed the designs and made changes."
            ],
            [
              "Bank Al-Maghrib Board",
              "Approved the specifications of the new banknote series before it was put into circulation."
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
                "https://www.bkam.ma/Billets-et-monnaies/Billets-et-pieces-en-circulation/Billets-en-circulation/Serie-2012/Billet-de-50-dh",
                "Bank Al-Maghrib — 50-dirham banknote, 2012 series"
              ],
              [
                "https://www.bkam.ma/Billets-et-monnaies/Iconographie-des-billets-et-pieces/Nature",
                "Bank Al-Maghrib — Nature on banknotes: the argan tree and Ouzoud Falls"
              ],
              [
                "https://www.bkam.ma/pedagogic/content/download/335531/2870433/Kit%20p%C3%A9dagogique.pdf",
                "Bank Al-Maghrib — Educational material on Moroccan currency (PDF)"
              ],
              [
                "https://en.numista.com/202313",
                "Numista — 50 dirhams, 2012 series"
              ]
            ]
          }
        ]
      },
      "story": "I used to host couchsurfers in Novosibirsk. A traveller from Morocco stayed with me, and she gave me this note as a gift."
    }
  }
};
