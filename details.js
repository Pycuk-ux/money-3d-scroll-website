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
          "Национальный банк Украины (НБУ)"
        ],
        [
          "Валюта",
          "украинская гривна (UAH)"
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
      }
    },
    "en": {
      "title": "Hryvnia — Ukraine",
      "facts": [
        [
          "Issuer",
          "National Bank of Ukraine (NBU)"
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
      }
    }
  },
  "bangladesh": {
    "ru": {
      "title": "Така — Бангладеш",
      "facts": [
        [
          "Эмитент",
          "Банк Бангладеш (Bangladesh Bank)"
        ],
        [
          "Валюта",
          "бангладешская така (BDT)"
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
      }
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
          "армянский драм (AMD)"
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
          "Национальный банк Азербайджана (Azərbaycan Milli Bankı)"
        ],
        [
          "Валюта",
          "азербайджанский манат (AZN)"
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
      }
    }
  },
  "brunei": {
    "ru": {
      "title": "Брунейский доллар — Бруней",
      "facts": [
        [
          "Эмитент",
          "Денежно-кредитное управление Брунея-Даруссалама (Autoriti Monetari Brunei Darussalam), ныне Центральный банк Брунея-Даруссалама (Brunei Darussalam Central Bank)"
        ],
        [
          "Валюта",
          "брунейский доллар (BND)"
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
      }
    }
  },
  "cambodia": {
    "ru": {
      "title": "Риель — Камбоджа",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Камбоджи (National Bank of Cambodia)"
        ],
        [
          "Валюта",
          "камбоджийский риель (KHR)"
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
                "National Bank of Cambodia — Banknotes in Circulation"
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
      }
    }
  },
  "china": {
    "ru": {
      "title": "Юань — Китай",
      "facts": [
        [
          "Эмитент",
          "Народный банк Китая (中国人民银行)"
        ],
        [
          "Валюта",
          "китайский юань (CNY)"
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
      }
    }
  },
  "czechia": {
    "ru": {
      "title": "Чешская крона — Чехия",
      "facts": [
        [
          "Эмитент",
          "Чешский национальный банк (Česká národní banka)"
        ],
        [
          "Валюта",
          "чешская крона (CZK)"
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
                "Vyhláška ČNB č. 158/1993 Sb. o vydání bankovek po 100 Kč (текст Сборника законов)"
              ],
              [
                "https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/1997/236",
                "Vyhláška ČNB č. 236/1997 Sb. o vydání bankovek po 100 Kč vzoru 1997"
              ]
            ]
          }
        ]
      }
    }
  },
  "egypt": {
    "ru": {
      "title": "Египетский фунт — Египет",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Египта (Central Bank of Egypt)"
        ],
        [
          "Валюта",
          "египетский фунт (EGP)"
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
      }
    }
  },
  "european-union": {
    "ru": {
      "title": "Евро — Евросоюз",
      "facts": [
        [
          "Эмитент",
          "Европейский центральный банк / Евросистема (European Central Bank)"
        ],
        [
          "Валюта",
          "евро (EUR)"
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
      }
    }
  },
  "georgia": {
    "ru": {
      "title": "Лари — Грузия",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Грузии (საქართველოს ეროვნული ბანკი)"
        ],
        [
          "Валюта",
          "грузинский лари (GEL)"
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
                "National Bank of Georgia — Georgian Money"
              ],
              [
                "https://nbg.gov.ge/en/media/news/national-bank-of-georgia-starts-releasing-upgraded-lari-banknotes-in-circulation",
                "NBG — начало выпуска обновлённых купюр лари"
              ],
              [
                "https://nbg.gov.ge/en/media/news/upgraded-lari-banknotes-win-international-award",
                "NBG — Upgraded Lari Banknotes Win International Award"
              ],
              [
                "https://nbg.gov.ge/en/media/news/on-the-issuance-of-5-and-20-lari-banknotes-of-2021-emission-in-circulation",
                "NBG — о выпуске купюр 5 и 20 лари эмиссии 2021 года"
              ]
            ]
          }
        ]
      }
    }
  },
  "ghana": {
    "ru": {
      "title": "Седи — Гана",
      "facts": [
        [
          "Эмитент",
          "Банк Ганы (Bank of Ghana)"
        ],
        [
          "Валюта",
          "ганский седи (GHS)"
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
      }
    }
  },
  "hong-kong": {
    "ru": {
      "title": "Гонконгский доллар — Гонконг",
      "facts": [
        [
          "Эмитент",
          "Правительство Специального административного района Гонконг (Government of the Hong Kong SAR)"
        ],
        [
          "Валюта",
          "гонконгский доллар (HKD)"
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
                "HKMA — Ten-Dollar Paper Note"
              ],
              [
                "https://www.hkma.gov.hk/eng/news-and-media/press-releases/2002/06/20020628-3/",
                "HKMA — Hong Kong's new $10 note (28.06.2002)"
              ],
              [
                "https://www.info.gov.hk/gia/general/200206/28/0628187.htm",
                "Правительство САР Гонконг — Hong Kong's new $10 note"
              ],
              [
                "https://www.hkma.gov.hk/eng/key-functions/money/hong-kong-currency/notes/",
                "HKMA — Notes"
              ],
              [
                "https://en.numista.com/catalogue/note203464.html",
                "Numista — 10 Dollars 2002 (каталог)"
              ]
            ]
          }
        ]
      }
    }
  },
  "india": {
    "ru": {
      "title": "Индийская рупия — Индия",
      "facts": [
        [
          "Эмитент",
          "Резервный банк Индии (Reserve Bank of India)"
        ],
        [
          "Валюта",
          "индийская рупия (INR)"
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
                "Reserve Bank of India — RBI to Issue New Design ₹100 Denomination Banknote (19.07.2018)"
              ],
              [
                "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=46387",
                "Reserve Bank of India — Issue of ₹100 banknotes bearing the signature of Shri Shaktikanta Das (26.02.2019)"
              ],
              [
                "https://paisaboltahai.rbi.org.in/rupees-one-hundred.aspx",
                "Reserve Bank of India (Paisa Bolta Hai) — ₹100: признаки подлинности"
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
      }
    }
  },
  "indonesia": {
    "ru": {
      "title": "Рупия — Индонезия",
      "facts": [
        [
          "Эмитент",
          "Банк Индонезии (Bank Indonesia)"
        ],
        [
          "Валюта",
          "индонезийская рупия (IDR)"
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
                "Bank Indonesia — Laporan Perekonomian Indonesia 2016, Bagian III"
              ],
              [
                "https://www.bi.go.id/id/publikasi/peraturan/Pages/PBI_241122.aspx",
                "Bank Indonesia — PBI No. 24/11/PBI/2022 о выпуске Rp10.000 эмиссии 2022"
              ],
              [
                "https://cdn.setneg.go.id/_multimedia/document/20171205/1147Penerima_Gelar_Pahlawan_Nasional_1959-2017.pdf",
                "Kementerian Sekretariat Negara RI — Penerima Gelar Pahlawan Nasional 1959–2017"
              ],
              [
                "https://www.bi.go.id/id/rupiah/gambar-uang/Detail-Uang.aspx?Bahan=Kertas&ID=4",
                "Bank Indonesia — Rp10.000, Tahun Emisi 2022 (для сравнения)"
              ]
            ]
          }
        ]
      }
    }
  },
  "kazakhstan": {
    "ru": {
      "title": "Тенге — Казахстан",
      "facts": [
        [
          "Эмитент",
          "Национальный Банк Республики Казахстан (Қазақстан Ұлттық Банкі)"
        ],
        [
          "Валюта",
          "казахстанский тенге (KZT)"
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
      }
    }
  },
  "kyrgyzstan": {
    "ru": {
      "title": "Сом — Кыргызстан",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Кыргызской Республики (Кыргыз Республикасынын Улуттук банкы)"
        ],
        [
          "Валюта",
          "киргизский сом (KGS)"
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
      }
    }
  },
  "macau": {
    "ru": {
      "title": "Патака — Макао",
      "facts": [
        [
          "Эмитент",
          "Банк Китая, отделение в Макао (Banco da China, Sucursal de Macau)"
        ],
        [
          "Валюта",
          "патака Макао (MOP)"
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
      }
    }
  },
  "malaysia": {
    "ru": {
      "title": "Ринггит — Малайзия",
      "facts": [
        [
          "Эмитент",
          "Банк Негара Малайзия (Bank Negara Malaysia)"
        ],
        [
          "Валюта",
          "малайзийский ринггит (MYR)"
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
                "Bank Negara Malaysia — FAQ о банкнотах"
              ]
            ]
          }
        ]
      }
    }
  },
  "mexico": {
    "ru": {
      "title": "Мексиканское песо — Мексика",
      "facts": [
        [
          "Эмитент",
          "Банк Мексики (Banco de México)"
        ],
        [
          "Валюта",
          "мексиканское песо (MXN)"
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
                "Banco de México — Billete de 20 pesos de la familia F"
              ],
              [
                "https://www.banxico.org.mx/banknotes-and-coins/20-peso-banknote-circulation-.html",
                "Banco de México — 20-peso banknote F"
              ],
              [
                "https://www.banxico.org.mx/banknotes-and-coins/clear-window-security-banco-m.html",
                "Banco de México — Clear window (защитный элемент)"
              ],
              [
                "https://www.banxico.org.mx/billetes-y-monedas/en-proceso-retiro-circulacion.html",
                "Banco de México — Банкноты в процессе изъятия"
              ]
            ]
          }
        ]
      }
    }
  },
  "mongolia": {
    "ru": {
      "title": "Тугрик — Монголия",
      "facts": [
        [
          "Эмитент",
          "Банк Монголии (Монголбанк)"
        ],
        [
          "Валюта",
          "монгольский тугрик (MNT)"
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
                "Numista — 1000 Tögrög (каталог)"
              ]
            ]
          }
        ]
      }
    }
  },
  "nepal": {
    "ru": {
      "title": "Непальская рупия — Непал",
      "facts": [
        [
          "Эмитент",
          "Непал Растра Банк (Nepal Rastra Bank)"
        ],
        [
          "Валюта",
          "непальская рупия (NPR)"
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
                "Nepal Rastra Bank — Bank Notes Security Features"
              ],
              [
                "https://www.nrb.org.np/ofg/notes-and-coins-of-nepal/",
                "Nepal Rastra Bank — Notes and Coins of Nepal (Golden Jubilee publication)"
              ],
              [
                "https://www.collegenp.com/news/nepal-rastra-bank-circulated-rs-20-denomination-banknotes",
                "CollegeNP — сообщение НРБ о выпуске банкнот 20 рупий (2020)"
              ],
              [
                "https://en.wikipedia.org/wiki/Nepalese_twenty-rupee_note",
                "Wikipedia — Nepalese twenty-rupee note"
              ]
            ]
          }
        ]
      }
    }
  },
  "philippines": {
    "ru": {
      "title": "Филиппинское песо — Филиппины",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Филиппин (Bangko Sentral ng Pilipinas)"
        ],
        [
          "Валюта",
          "филиппинское песо (PHP)"
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
                "Bangko Sentral ng Pilipinas — New Generation Currency Banknotes"
              ],
              [
                "https://www.bsp.gov.ph/SitePages/CoinsAndNotes/NewGenerationCurrencyBanknotesFeatures.aspx",
                "Bangko Sentral ng Pilipinas — Security Features"
              ],
              [
                "https://www.bsp.gov.ph/Media_and_Research/Publications/BS10_A2.pdf",
                "Bangko Sentral Review 2010 — статья о серии New Generation Currency"
              ],
              [
                "https://www.bsp.gov.ph/Pages/MediaAndResearch/PublicationsAndReports/regular_bsrevjul02.aspx",
                "Bangko Sentral — Abaca in Philippine Banknotes"
              ]
            ]
          }
        ]
      }
    }
  },
  "poland": {
    "ru": {
      "title": "Злотый — Польша",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Польши (Narodowy Bank Polski)"
        ],
        [
          "Валюта",
          "польский злотый (PLN)"
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
      }
    }
  },
  "romania": {
    "ru": {
      "title": "Лей — Румыния",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Румынии (Banca Naţională a României)"
        ],
        [
          "Валюта",
          "румынский лей (RON)"
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
      }
    }
  },
  "russia": {
    "ru": {
      "title": "Рубль — Россия",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Российской Федерации (Банк России)"
        ],
        [
          "Валюта",
          "российский рубль (RUB)"
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
      }
    }
  },
  "saudi-arabia": {
    "ru": {
      "title": "Риял — Саудовская Аравия",
      "facts": [
        [
          "Эмитент",
          "Агентство денежного обращения Саудовской Аравии (Saudi Arabian Monetary Agency, SAMA; ныне — Центральный банк Саудовской Аравии)"
        ],
        [
          "Валюта",
          "саудовский риял (SAR)"
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
                "SAMA — Fifth Issue"
              ],
              [
                "https://www.sama.gov.sa/en-us/currency/pages/securityfeature.aspx",
                "SAMA — Security Features for Fifth Issue"
              ],
              [
                "https://rulebook.sama.gov.sa/en/entiresection/6789",
                "SAMA Rulebook — описание банкнот пятого выпуска"
              ]
            ]
          }
        ]
      }
    }
  },
  "serbia": {
    "ru": {
      "title": "Сербский динар — Сербия",
      "facts": [
        [
          "Эмитент",
          "Народный банк Сербии (Народна банка Србије)"
        ],
        [
          "Валюта",
          "сербский динар (RSD)"
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
                "National Bank of Serbia — Banknotes"
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
      }
    }
  },
  "singapore": {
    "ru": {
      "title": "Сингапурский доллар — Сингапур",
      "facts": [
        [
          "Эмитент",
          "Денежно-кредитное управление Сингапура (Monetary Authority of Singapore)"
        ],
        [
          "Валюта",
          "сингапурский доллар (SGD)"
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
                "Singapore Government Press Release, 9 сентября 1999 (National Archives of Singapore)"
              ],
              [
                "https://en.numista.com/203037",
                "Numista — 5 Dollars (Singapore, polymer)"
              ]
            ]
          }
        ]
      }
    }
  },
  "south-africa": {
    "ru": {
      "title": "Рэнд — ЮАР",
      "facts": [
        [
          "Эмитент",
          "Южноафриканский резервный банк (South African Reserve Bank)"
        ],
        [
          "Валюта",
          "южноафриканский рэнд (ZAR)"
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
                "Правительство ЮАР — South African Reserve Bank unveils new banknotes (2012)"
              ],
              [
                "https://www.gov.za/south-african-reserve-bank-sarb-new-banknotes-official-circulation-date-announced",
                "Правительство ЮАР — official circulation date announced"
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
      }
    }
  },
  "south-korea": {
    "ru": {
      "title": "Вона — Южная Корея",
      "facts": [
        [
          "Эмитент",
          "Банк Кореи (Bank of Korea, 한국은행)"
        ],
        [
          "Валюта",
          "южнокорейская вона (KRW)"
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
                "Служба культурного наследия Кореи — «1000원 지폐 속 퇴계의 이상향»"
              ],
              [
                "https://en.numista.com/201806",
                "Numista — 1000 Won 2007 (каталог)"
              ]
            ]
          }
        ]
      }
    }
  },
  "sri-lanka": {
    "ru": {
      "title": "Шри-ланкийская рупия — Шри-Ланка",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Шри-Ланки (Central Bank of Sri Lanka)"
        ],
        [
          "Валюта",
          "шри-ланкийская рупия (LKR)"
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
                "Numista — 100 Rupees (каталог)"
              ]
            ]
          }
        ]
      }
    }
  },
  "tajikistan": {
    "ru": {
      "title": "Сомони — Таджикистан",
      "facts": [
        [
          "Эмитент",
          "Национальный банк Таджикистана (Бонки миллии Тоҷикистон)"
        ],
        [
          "Валюта",
          "таджикский сомони (TJS)"
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
                "National Bank of Tajikistan — Banknotes (EN)"
              ],
              [
                "https://www.realbanknotes.com/banknote/40611-Tajikistan-p16a-10-Somoni-from-1999",
                "RealBanknotes — 10 сомони 1999 (каталог)"
              ]
            ]
          }
        ]
      }
    }
  },
  "thailand": {
    "ru": {
      "title": "Бат — Таиланд",
      "facts": [
        [
          "Эмитент",
          "Банк Таиланда (Bank of Thailand)"
        ],
        [
          "Валюта",
          "тайский бат (THB)"
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
      }
    }
  },
  "trinidad-and-tobago": {
    "ru": {
      "title": "Доллар Тринидада и Тобаго — Тринидад и Тобаго",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Тринидада и Тобаго (Central Bank of Trinidad and Tobago)"
        ],
        [
          "Валюта",
          "доллар Тринидада и Тобаго (TTD)"
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
                "Central Bank of Trinidad and Tobago — Upgraded $1 note"
              ],
              [
                "https://central-bank.org.tt/sites/default/files/press_releases/currency%20notes%20security%20features%20notice.pdf",
                "Central Bank of Trinidad and Tobago — уведомление об изменении защитных элементов (PDF)"
              ],
              [
                "https://www.central-bank.org.tt/completion-transition-polymer-banknotes/",
                "Central Bank of Trinidad and Tobago — Completion of Transition to Polymer Banknotes"
              ],
              [
                "https://www.finance.gov.tt/2021/06/04/completion-of-transition-to-polymer-bank-notes/",
                "Министерство финансов Тринидада и Тобаго — Completion of Transition to Polymer Bank Notes"
              ],
              [
                "https://en.numista.com/204244",
                "Numista — 1 Dollar (Trinidad and Tobago)"
              ]
            ]
          }
        ]
      }
    }
  },
  "turkey": {
    "ru": {
      "title": "Турецкая лира — Турция",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Турецкой Республики (Türkiye Cumhuriyet Merkez Bankası)"
        ],
        [
          "Валюта",
          "турецкая лира (TRY)"
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
      }
    }
  },
  "uae": {
    "ru": {
      "title": "Дирхам — ОАЭ",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Объединённых Арабских Эмиратов (Central Bank of the UAE)"
        ],
        [
          "Валюта",
          "дирхам ОАЭ (AED)"
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
      }
    }
  },
  "united-kingdom": {
    "ru": {
      "title": "Фунт стерлингов — Великобритания",
      "facts": [
        [
          "Эмитент",
          "Королевский банк Шотландии (The Royal Bank of Scotland plc)"
        ],
        [
          "Валюта",
          "фунт стерлингов (GBP)"
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
                "NatWest Group Heritage Hub — Current Royal Bank of Scotland £5 note"
              ],
              [
                "https://www.natwestgroup.com/heritage/subjects/banknotes/current-issue-banknotes.html",
                "NatWest Group Heritage Hub — Current issue banknotes"
              ],
              [
                "https://ostreet.co.uk/project/rbs-peoples-money-design/",
                "O Street — RBS: The People's Money (кейс студии)"
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
      }
    }
  },
  "united-states": {
    "ru": {
      "title": "Доллар США — США",
      "facts": [
        [
          "Эмитент",
          "Федеральная резервная система США (Federal Reserve System)"
        ],
        [
          "Валюта",
          "доллар США (USD)"
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
      }
    }
  },
  "uzbekistan": {
    "ru": {
      "title": "Сум — Узбекистан",
      "facts": [
        [
          "Эмитент",
          "Центральный банк Республики Узбекистан (Ўзбекистон Республикаси Марказий банки)"
        ],
        [
          "Валюта",
          "узбекский сум (UZS)"
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
      }
    }
  },
  "vietnam": {
    "ru": {
      "title": "Донг — Вьетнам",
      "facts": [
        [
          "Эмитент",
          "Государственный банк Вьетнама (Ngân hàng Nhà nước Việt Nam)"
        ],
        [
          "Валюта",
          "вьетнамский донг (VND)"
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
                "State Bank of Vietnam — Vietnamese Currency"
              ]
            ]
          }
        ]
      }
    }
  },
  "zimbabwe": {
    "ru": {
      "title": "Доллар Зимбабве — Зимбабве",
      "facts": [
        [
          "Эмитент",
          "Резервный банк Зимбабве (Reserve Bank of Zimbabwe)"
        ],
        [
          "Валюта",
          "зимбабвийский доллар (ZWN)"
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
      }
    }
  }
};
