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
  }
};
