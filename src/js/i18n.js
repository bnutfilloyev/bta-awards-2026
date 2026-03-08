/**
 * BTA Awards 2026 - i18n System
 * Uzbek, Russian, English
 */

const translations = {
  uz: {
    nav: {
      about: "Biz haqimizda",
      pricing: "Tariflar",
      venue: "Tadbir joyi",
      gallery: "Galereya",
      nominations: "Nominatsiyalar",
      judges: "Hakamlar",
      contact: "Aloqa",
      register: "Ro'yxatdan o'tish"
    },
    hero: {
      year: "18 Aprel 2026",
      title: "BTA",
      subtitle: "AWARDS",
      description: "O’zbekistonda ta’lim va tibbiyot sohasidagi 1-raqamli taqdirlash marosimi",
      stats: {
        years: "Yillik tajriba",
        participants: "Ishtirokchilar",
        nominations: "Nominatsiyalar"
      },
      cta: {
        primary: "Ro'yxatdan o'tish",
        secondary: "Batafsil ma'lumot"
      },
      scroll: "Pastga"
    },
    countdown: {
      label: "Maxsus Taklif",
      title: "BTA Awards 2026 uchun maxsus taklif!",
      subtitle: "Har bir bosqichda narx oshib boradi. Eng yaxshi imkoniyat — hozir.",
      days: "Kun",
      hours: "Soat",
      minutes: "Daqiqa",
      seconds: "Soniya",
      card1: {
        title: "Erta ro'yxatdan o'tish",
        desc: "Erta ro'yxatdan o'tganlar uchun maksimal imtiyoz",
        date: "25-martgacha",
        discount: "-20%"
      },
      card2: {
        title: "Yakuniy bosqich",
        desc: "Yakuni yaqinlashmoqda. So'nggi imkoniyat",
        date: "10-Aprel",
        discount: "-10%"
      }
    },
    about: {
      label: "Biz haqimizda",
      title: "BTA Awards",
      fullTitle: "BTA Awards — bu ta'lim va tibbiyot sohasida faoliyat yuritayotgan fidoyi mutaxassislarni e'tirof etish va ularning mehnatini keng jamoatchilikka tanitish maqsadida tashkil etilgan professional mukofot loyihasidir.",
      mission: "Bizning asosiy maqsadimiz — o'z ishiga sadoqat bilan yondashayotgan, real natija berayotgan, jamiyat rivojiga hissa qo'shayotgan mutaxassislarni aniqlash va ularni munosib qadrlash.",
      highlight: "BTA Awards shunchaki mukofot topshirish marosimi emas.",
      points: [
        "Bu — professional hamjamiyatni birlashtiruvchi platforma.",
        "Bu — tajriba almashish, yangi tanishuvlar va hamkorliklar maydoni.",
        "Bu — shaxsiy brend va professional mavqeini mustahkamlash imkoniyati."
      ],
      process: "Loyiha doirasida: Soha vakillari o'z faoliyatini taqdim etadi, mustaqil hakamlar hay'ati tomonidan baholash amalga oshiriladi, eng munosib nomzodlar saralanadi va g'oliblar tantanali marosimda e'lon qilinadi.",
      principles: "Biz shaffoflik, adolat va professional yondashuv tamoyillariga amal qilamiz. Baholash jarayoni taqdim etilgan ma'lumotlar, real natijalar va kasbiy faoliyat asosida amalga oshiriladi.",
      closing: "BTA Awards — bu o'z ishiga chin dildan xizmat qilayotgan mutaxassislar uchun e'tirof va yangi bosqich sari qadam.",
      features: {
        professional: {
          title: "Professional tanlov",
          desc: "Tajribali hakamlar hay'ati tomonidan baholash"
        },
        coverage: {
          title: "Keng qamrov",
          desc: "Butun O'zbekiston bo'ylab ishtirokchilar"
        },
        award: {
          title: "Nufuzli mukofot",
          desc: "Soha yetakchilarining e'tirofi"
        }
      },
      experience: "Yillik tajriba"
    },
    venue: {
      label: "18.04.2026",
      title: "Tadbir Joyi",
      subtitle: "Nufuzli restoranda o'tkaziladi",
      location: "Toshkent",
      restaurant: "Santini Restaurant",
      description: "BTA Awards 2026 tantanali marosimi zamonaviy interyer va nufuzli restoranda o'tkaziladi. Qulay joylashuv, professional xizmat ko'rsatish va zamonaviy jihozlar tadbirning yuqori darajada o'tishini ta'minlaydi.",
      date: "Aprel 2026",
      startTime: "Boshlanish vaqti",
      duration: "Tadbir davomiyligi",
      address: "SANTINI",
      street: "Chinobod ko'chasi 63, Toshkent"
    },
    gallery: {
      label: "Galereya",
      title: "Tadbir lavhalari",
      subtitle: "BTA Awards tadbiri 14 yildan buyon o'tkazib kelinmoqda"
    },
    pricing: {
      label: "Tariflar",
      title: "Ishtirok tariflari",
      subtitle: "O'zingizga mos tarifni tanlang",
      popular: "Mashhur",
      select: "Tanlash",
      currency: "so'm",
      until: "gacha",
      details: "Batafsil ma'lumot",
      silver: {
        name: "ISHTIROKCHI — SILVER",
        shortDesc: "Tadbirida ishtirok • Sertifikat • Red Carpet",
        desc: "Mutaxassis bo'lishni endi boshlayotganlar, mutaxassis bo'lmagan lekin tadbirga qatnashishni istaganlar, mutaxassislarning o'rtog'lari va yaqinlari uchun.",
        date25: "25-martgacha",
        date10: "10-aprelgacha",
        price25: "1 099 000",
        price10: "1 299 000",
        features: ["Tadbirida ishtirok", "Sertifikat", "Red Carpet + Networking"]
      },
      gold: {
        name: "NAMINATSIYA — GOLD",
        shortDesc: "Silver + Nominatsiya • Sahna e'tirofi",
        desc: "O'z sohasida faol mutaxassislar uchun. Nominatsiyaga nomzodlik faqat hakamlar tasdiqlagandan so'ng beriladi.",
        date25: "25-martgacha",
        date10: "10-aprelgacha",
        price25: "2 218 000",
        price10: "2 460 000",
        features: ["Silver + Nominatsiya", "Sahna e'tirofi", "Statuetka (g'oliblarga)"]
      },
      pro: {
        name: "PRO",
        shortDesc: "Gold + Old qator • Rasmiy post",
        desc: "O'z shaxsiy brendi va obro'sini kuchaytirmoqchi bo'lgan mutaxassislar uchun.",
        date25: "25-martgacha",
        date10: "10-aprelgacha",
        price25: "4 310 000",
        price10: "4 920 000",
        features: ["Gold + Old qator", "Rasmiy post/story", "Premium statuetka"]
      },
      vip: {
        name: "VIP",
        shortDesc: "Pro + 100% statuetka • Brend reklamasi",
        desc: "Soha yetakchilari, markaz egalari va shaxsiy/brend PR'ga e'tibor beruvchilar uchun.",
        date25: "25-martgacha",
        date10: "10-aprelgacha",
        price25: "7 390 000",
        price10: "8 620 000",
        features: ["Pro + 100% statuetka", "Brend reklamasi", "VIP networking"]
      }
    },
    ambassador: {
      label: "Ambassador",
      title: "Daromad hisoblagichi",
      subtitle: "O'z daromadingizni hisoblang",
      commission: "Sizning daromadingiz",
      level: "Daraja",
      inputs: {
        silver: "Silver ishtirokchilar",
        gold: "Gold ishtirokchilar",
        pro: "Pro ishtirokchilar",
        vip: "VIP ishtirokchilar"
      },
      levels: {
        beginner: "Boshlang'ich",
        ambassador: "Ambassador",
        top: "Top Ambassador",
        pro: "Pro Ambassador",
        super: "Super Ambassador"
      }
    },
    judges: {
      label: "Hakamlar",
      title: "Hakamlar hay'ati",
      subtitle: "Tajribali mutaxassislar va soha yetakchilari",
      cards: {
        sabina: {
          name: "Sabina Azizova",
          role: "Asoschi • Logoped",
          desc: "Logopedi Uzbekistan markazlari asoschisi. Logopediya yo'nalishi bo'yicha nazoratchi."
        },
        nasiba: {
          name: "Nasiba Yakubova",
          role: "Ambassador • Mentor",
          desc: "KUMNAMU academy asoschisi. Xalq ta'limi a'lochisi, xalqaro darajadagi mentor."
        },
        zuhra: {
          name: "Zuhra Sattarova",
          role: "ABA mutaxassisi",
          desc: "Autizm spektri bo'yicha amaliyotchi. ABA sohasida yetakchi mutaxassis."
        },
        abdulaziz: {
          name: "Abdulaziz Ummatov",
          role: "Reabilitolog • Ambassador",
          desc: "Deti Med bosh reabilitologi. 5 yillik tajriba. Xalqaro malaka oshirgan."
        },
        madina: {
          name: "Madina Yuldasheva",
          role: "Nevrolog • Ambassador",
          desc: "Shifokor-nevrolog. Kognitiv reabilitatsiya jamoasi rahbari."
        }
      }
    },
    contact: {
      label: "Aloqa",
      title: "Biz bilan bog'laning",
      subtitle: "Savollaringiz bormi? Bizga murojaat qiling",
      info: {
        phone: "Telefon",
        instagram: "Instagram",
        telegram: "Telegram",
        address: "Manzil",
        addressValue: "Toshkent, O'zbekiston"
      },
      form: {
        name: "Ism familya",
        phone: "Telefon raqam",
        field: "Qaysi soha vakilisiz",
        message: "Xabar / Fikr va takliflar",
        send: "Yuborish"
      }
    },
    cta: {
      title: "BTA Awards 2026 da qatnashing",
      description: "O'zbekistoning eng nufuzli biznes taqdirlash marosimida ishtirok eting. O'z imkoniyatingizni qo'ldan boy bermang!",
      button: "Ro'yxatdan o'tish"
    },
    footer: {
      description: "O'zbekistoning eng nufuzli biznes va texnologiya sohasidagi yillik taqdirlash marosimi",
      links: "Tez havolalar",
      contact: "Aloqa",
      copyright: "Barcha huquqlar himoyalangan."
    },
    modal: {
      register: {
        title: "Ro'yxatdan o'tish",
        firstname: "Ism",
        lastname: "Familiya",
        phone: "Telefon",
        telegram: "Telegram username",
        field: "Sohangiz / Faoliyat yo'nalishingiz",
        company: "Kompaniya",
        select: "Tanlang",
        submit: "Yuborish"
      }
    }
  },
  ru: {
    nav: {
      about: "О нас",
      pricing: "Тарифы",
      venue: "Место проведения",
      gallery: "Галерея",
      nominations: "Номинации",
      judges: "Жюри",
      contact: "Контакты",
      register: "Регистрация"
    },
    hero: {
      year: "18 Апреля 2026",
      title: "BTA",
      subtitle: "AWARDS",
      description: "Церемония награждения №1 в сфере образования и медицины в Узбекистане",
      stats: {
        years: "Лет опыта",
        participants: "Участников",
        nominations: "Номинаций"
      },
      cta: {
        primary: "Регистрация",
        secondary: "Подробнее"
      },
      scroll: "Вниз"
    },
    countdown: {
      label: "Специальное предложение",
      title: "Специальное предложение для BTA Awards 2026!",
      subtitle: "Цена растет на каждом этапе. Лучшая возможность — сейчас.",
      days: "Дней",
      hours: "Часов",
      minutes: "Минут",
      seconds: "Секунд",
      card1: {
        title: "Ранняя регистрация",
        desc: "Максимальная выгода для ранней регистрации",
        date: "до 25 марта",
        discount: "-20%"
      },
      card2: {
        title: "Финальный этап",
        desc: "Финал приближается. Последний шанс",
        date: "10 Апреля",
        discount: "-10%"
      }
    },
    about: {
      label: "О нас",
      title: "BTA Awards",
      fullTitle: "BTA Awards — это профессиональная наградная программа, созданная для признания и популяризации самоотверженных специалистов, работающих в сферах образования и медицины.",
      mission: "Наша главная цель — выявить и достойно оценить специалистов, которые преданно подходят к своей работе, дают реальные результаты и вносят вклад в развитие общества.",
      highlight: "BTA Awards — это не просто церемония вручения наград.",
      points: [
        "Это — платформа, объединяющая профессиональное сообщество.",
        "Это — площадка для обмена опытом, новых знакомств и партнерств.",
        "Это — возможность укрепить личный бренд и профессиональную позицию."
      ],
      process: "В рамках проекта: Представители сфер представляют свою деятельность, проводится оценка независимым жюри, отбираются достойнейшие номинанты и победители объявляются на торжественной церемонии.",
      principles: "Мы придерживаемся принципов прозрачности, справедливости и профессионального подхода. Процесс оценки осуществляется на основе представленных данных, реальных результатов и профессиональной деятельности.",
      closing: "BTA Awards — это признание для специалистов, которые искренне служат своему делу, и шаг к новому уровню.",
      features: {
        professional: {
          title: "Профессиональный отбор",
          desc: "Оценка опытным жюри"
        },
        coverage: {
          title: "Широкий охват",
          desc: "Участники со всего Узбекистана"
        },
        award: {
          title: "Престижная награда",
          desc: "Признание лидеров отрасли"
        }
      },
      experience: "Лет опыта"
    },
    venue: {
      label: "18.04.2026",
      title: "Место проведения",
      subtitle: "Проводится в престижном ресторане",
      location: "Ташкент",
      restaurant: "Santini Restaurant",
      description: "Торжественная церемония BTA Awards 2026 пройдет в современном интерьере престижного ресторана. Удобное расположение, профессиональное обслуживание и современное оборудование обеспечат проведение мероприятия на высшем уровне.",
      date: "Апрель 2026",
      startTime: "Время начала",
      duration: "Длительность мероприятия",
      address: "SANTINI",
      street: "ул. Чинобод 63, Ташкент"
    },
    gallery: {
      label: "Галерея",
      title: "Моменты мероприятия",
      subtitle: "BTA Awards проводится уже 14 лет"
    },
    pricing: {
      label: "Тарифы",
      title: "Тарифы участия",
      subtitle: "Выберите подходящий тариф",
      popular: "Популярный",
      select: "Выбрать",
      currency: "сум",
      until: "до",
      details: "Подробная информация",
      silver: {
        name: "УЧАСТНИК — SILVER",
        shortDesc: "Участие • Сертификат • Red Carpet",
        desc: "Для тех, кто только начинает свой путь в профессии, не является специалистом, но хочет принять участие, а также для друзей и близких специалистов.",
        date25: "25 марта",
        date10: "10 апреля",
        price25: "1 099 000",
        price10: "1 299 000",
        features: ["Участие в мероприятии", "Сертификат", "Red Carpet + Нетворкинг"]
      },
      gold: {
        name: "НОМИНАНТ — GOLD",
        shortDesc: "Silver + Номинация • Признание на сцене",
        desc: "Для активных специалистов в своей сфере. Кандидатура в номинацию утверждается только после одобрения жюри.",
        date25: "25 марта",
        date10: "10 апреля",
        price25: "2 218 000",
        price10: "2 460 000",
        features: ["Silver + Номинация", "Признание на сцене", "Статуэтка (победителям)"]
      },
      pro: {
        name: "PRO",
        shortDesc: "Gold + Первый ряд • Пост в соцсетях",
        desc: "Для специалистов, которые хотят укрепить свой личный бренд и репутацию.",
        date25: "25 марта",
        date10: "10 апреля",
        price25: "4 310 000",
        price10: "4 920 000",
        features: ["Gold + Первый ряд", "Пост/сторис в соцсетях", "Премиум статуэтка"]
      },
      vip: {
        name: "VIP",
        shortDesc: "Pro + 100% статуэтка • Реклама бренда",
        desc: "Для лидеров отрасли, владельцев центров и тех, кто уделяет внимание личному/брендовому PR.",
        date25: "25 марта",
        date10: "10 апреля",
        price25: "7 390 000",
        price10: "8 620 000",
        features: ["Pro + 100% статуэтка", "Реклама бренда", "VIP нетворкинг"]
      }
    },
    ambassador: {
      label: "Ambassador",
      title: "Калькулятор дохода",
      subtitle: "Рассчитайте свой доход",
      commission: "Ваш доход",
      level: "Уровень",
      inputs: {
        silver: "Silver участники",
        gold: "Gold участники",
        pro: "Pro участники",
        vip: "VIP участники"
      },
      levels: {
        beginner: "Начальный",
        ambassador: "Ambassador",
        top: "Top Ambassador",
        pro: "Pro Ambassador",
        super: "Super Ambassador"
      }
    },
    judges: {
      label: "Жюри",
      title: "Состав жюри",
      subtitle: "Опытные специалисты и лидеры отрасли",
      cards: {
        sabina: {
          name: "Сабина Азизова",
          role: "Основатель • Логопед",
          desc: "Основатель центров Логопеди Узбекистан. Куратор направления логопедии."
        },
        nasiba: {
          name: "Насиба Якубова",
          role: "Амбассадор • Ментор",
          desc: "Основатель KUMNAMU academy. Отличник народного образования, международный ментор."
        },
        zuhra: {
          name: "Зухра Саттарова",
          role: "ABA специалист",
          desc: "Практик по аутизму. Ведущий специалист в области ABA."
        },
        abdulaziz: {
          name: "Абдулазиз Умматов",
          role: "Реабилитолог • Амбассадор",
          desc: "Главный реабилитолог Deti Med. 5 лет опыта. Стажировался за рубежом."
        },
        madina: {
          name: "Мадина Юлдашева",
          role: "Невролог • Амбассадор",
          desc: "Врач-невролог. Руководитель команды когнитивной реабилитации."
        }
      }
    },
    contact: {
      label: "Контакты",
      title: "Свяжитесь с нами",
      subtitle: "Есть вопросы? Обратитесь к нам",
      info: {
        phone: "Телефон",
        instagram: "Instagram",
        telegram: "Telegram",
        address: "Адрес",
        addressValue: "Ташкент, Узбекистан"
      },
      form: {
        name: "Имя фамилия",
        phone: "Номер телефона",
        field: "Представитель какой сферы",
        message: "Сообщение / Отзывы и предложения",
        send: "Отправить"
      }
    },
    cta: {
      title: "Примите участие в BTA Awards 2026",
      description: "Примите участие в самой престижной бизнес-церемонии награждения Узбекистана. Не упустите свой шанс!",
      button: "Регистрация"
    },
    footer: {
      description: "Самая престижная ежегодная церемония награждения в сфере бизнеса и технологий Узбекистана",
      links: "Быстрые ссылки",
      contact: "Контакты",
      copyright: "Все права защищены."
    },
    modal: {
      register: {
        title: "Регистрация",
        firstname: "Имя",
        lastname: "Фамилия",
        phone: "Телефон",
        telegram: "Telegram username",
        field: "Ваша сфера / Направление деятельности",
        company: "Компания",
        select: "Выберите",
        submit: "Отправить"
      }
    }
  },
  en: {
    nav: {
      about: "About Us",
      pricing: "Pricing",
      venue: "Venue",
      gallery: "Gallery",
      nominations: "Nominations",
      judges: "Judges",
      contact: "Contact",
      register: "Register"
    },
    hero: {
      year: "18 April 2026",
      title: "BTA",
      subtitle: "AWARDS",
      description: "Uzbekistan's #1 Awards Ceremony in Education and Healthcare",
      stats: {
        years: "Years Experience",
        participants: "Participants",
        nominations: "Nominations"
      },
      cta: {
        primary: "Register Now",
        secondary: "Learn More"
      },
      scroll: "Scroll Down"
    },
    countdown: {
      label: "Special Offer",
      title: "Special offer for BTA Awards 2026!",
      subtitle: "Price increases at each stage. Best opportunity is now.",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      card1: {
        title: "Early Registration",
        desc: "Maximum benefit for early registrants",
        date: "until March 25",
        discount: "-20%"
      },
      card2: {
        title: "Final Stage",
        desc: "Final is approaching. Last chance",
        date: "April 10",
        discount: "-10%"
      }
    },
    about: {
      label: "About Us",
      title: "BTA Awards",
      fullTitle: "BTA Awards is a professional awards program created to recognize and promote dedicated professionals working in education and healthcare, and to showcase their work to the wider community.",
      mission: "Our main goal is to identify and duly appreciate professionals who are dedicated to their work, deliver real results, and contribute to the development of society.",
      highlight: "BTA Awards is not just an awards ceremony.",
      points: [
        "It is a platform that unites the professional community.",
        "It is a venue for exchanging experience, new acquaintances and partnerships.",
        "It is an opportunity to strengthen personal brand and professional standing."
      ],
      process: "Within the project: Industry representatives present their activities, evaluation is carried out by an independent jury, the most worthy nominees are selected and winners are announced at a gala ceremony.",
      principles: "We adhere to the principles of transparency, fairness and professional approach. The evaluation process is carried out on the basis of submitted data, real results and professional activities.",
      closing: "BTA Awards is recognition for professionals who truly serve their cause, and a step towards a new level.",
      features: {
        professional: {
          title: "Professional Selection",
          desc: "Evaluation by experienced jury"
        },
        coverage: {
          title: "Wide Coverage",
          desc: "Participants from all over Uzbekistan"
        },
        award: {
          title: "Prestigious Award",
          desc: "Recognition by industry leaders"
        }
      },
      experience: "Years Experience"
    },
    venue: {
      label: "18.04.2026",
      title: "Event Venue",
      subtitle: "Held in a prestigious restaurant",
      location: "Tashkent",
      restaurant: "Santini Restaurant",
      description: "The BTA Awards 2026 gala ceremony will be held in a modern interior of a prestigious restaurant. Convenient location, professional service and modern equipment will ensure the event is held at the highest level.",
      date: "April 2026",
      startTime: "Start time",
      duration: "Event duration",
      address: "SANTINI",
      street: "63 Chinobod str., Tashkent"
    },
    gallery: {
      label: "Gallery",
      title: "Event Moments",
      subtitle: "BTA Awards has been held for 14 years"
    },
    pricing: {
      label: "Pricing",
      title: "Participation Tariffs",
      subtitle: "Choose the right tariff for you",
      popular: "Popular",
      select: "Select",
      currency: "uzs",
      until: "until",
      details: "More details",
      silver: {
        name: "PARTICIPANT — SILVER",
        shortDesc: "Participation • Certificate • Red Carpet",
        desc: "For those just starting their professional journey, non-specialists who want to attend, and friends and relatives of specialists.",
        date25: "March 25",
        date10: "April 10",
        price25: "1 099 000",
        price10: "1 299 000",
        features: ["Event participation", "Certificate", "Red Carpet + Networking"]
      },
      gold: {
        name: "NOMINEE — GOLD",
        shortDesc: "Silver + Nomination • Stage recognition",
        desc: "For active professionals in their field. Nomination candidacy is granted only after jury approval.",
        date25: "March 25",
        date10: "April 10",
        price25: "2 218 000",
        price10: "2 460 000",
        features: ["Silver + Nomination", "Stage recognition", "Trophy (winners)"]
      },
      pro: {
        name: "PRO",
        shortDesc: "Gold + Front row • Social media post",
        desc: "For professionals who want to strengthen their personal brand and reputation.",
        date25: "March 25",
        date10: "April 10",
        price25: "4 310 000",
        price10: "4 920 000",
        features: ["Gold + Front row", "Official post/story", "Premium trophy"]
      },
      vip: {
        name: "VIP",
        shortDesc: "Pro + 100% trophy • Brand advertising",
        desc: "For industry leaders, center owners and those who focus on personal/brand PR.",
        date25: "March 25",
        date10: "April 10",
        price25: "7 390 000",
        price10: "8 620 000",
        features: ["Pro + 100% trophy", "Brand advertising", "VIP networking"]
      }
    },
    ambassador: {
      label: "Ambassador",
      title: "Income Calculator",
      subtitle: "Calculate your earnings",
      commission: "Your Earnings",
      level: "Level",
      inputs: {
        silver: "Silver participants",
        gold: "Gold participants",
        pro: "Pro participants",
        vip: "VIP participants"
      },
      levels: {
        beginner: "Beginner",
        ambassador: "Ambassador",
        top: "Top Ambassador",
        pro: "Pro Ambassador",
        super: "Super Ambassador"
      }
    },
    judges: {
      label: "Judges",
      title: "Jury Panel",
      subtitle: "Experienced specialists and industry leaders",
      cards: {
        sabina: {
          name: "Sabina Azizova",
          role: "Founder • Speech Therapist",
          desc: "Founder of Logopedi Uzbekistan centers. Curator of speech therapy direction."
        },
        nasiba: {
          name: "Nasiba Yakubova",
          role: "Ambassador • Mentor",
          desc: "Founder of KUMNAMU academy. Honored education worker, international mentor."
        },
        zuhra: {
          name: "Zuhra Sattarova",
          role: "ABA Specialist",
          desc: "Autism spectrum practitioner. Leading specialist in ABA field."
        },
        abdulaziz: {
          name: "Abdulaziz Ummatov",
          role: "Rehabilitologist • Ambassador",
          desc: "Chief rehabilitologist at Deti Med. 5 years experience. Interned abroad."
        },
        madina: {
          name: "Madina Yuldasheva",
          role: "Neurologist • Ambassador",
          desc: "Physician-neurologist. Head of cognitive rehabilitation team."
        }
      }
    },
    contact: {
      label: "Contact",
      title: "Get in Touch",
      subtitle: "Have questions? Contact us",
      info: {
        phone: "Phone",
        instagram: "Instagram",
        telegram: "Telegram",
        address: "Address",
        addressValue: "Tashkent, Uzbekistan"
      },
      form: {
        name: "Full name",
        phone: "Phone number",
        field: "Which field do you represent",
        message: "Message / Feedback and suggestions",
        send: "Send"
      }
    },
    cta: {
      title: "Join BTA Awards 2026",
      description: "Participate in Uzbekistan's most prestigious business awards ceremony. Don't miss your opportunity!",
      button: "Register Now"
    },
    footer: {
      description: "Uzbekistan's most prestigious annual awards ceremony in business and technology",
      links: "Quick Links",
      contact: "Contact",
      copyright: "All rights reserved."
    },
    modal: {
      register: {
        title: "Register",
        firstname: "First Name",
        lastname: "Last Name",
        phone: "Phone",
        telegram: "Telegram username",
        field: "Your field / Area of expertise",
        company: "Company",
        select: "Select",
        submit: "Submit"
      }
    }
  }
};

class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('bta-language') || 'uz';
    this.init();
  }

  init() {
    this.updatePage();
    this.setupEventListeners();
    document.documentElement.lang = this.currentLang;
  }

  setupEventListeners() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.target.dataset.lang;
        this.setLanguage(lang);
      });
    });
  }

  setLanguage(lang) {
    if (!translations[lang]) return;

    this.currentLang = lang;
    localStorage.setItem('bta-language', lang);
    document.documentElement.lang = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('bg-gold-500', btn.dataset.lang === lang);
      btn.classList.toggle('text-dark-900', btn.dataset.lang === lang);
      btn.classList.toggle('text-gray-400', btn.dataset.lang !== lang);
    });

    this.updatePage();

    // Trigger event for other components
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  updatePage() {
    const t = translations[this.currentLang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const value = this.getNestedValue(t, key);
      if (value) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = value;
        } else {
          el.textContent = value;
        }
      }
    });
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
      return current?.[key];
    }, obj);
  }

  t(key) {
    return this.getNestedValue(translations[this.currentLang], key) || key;
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18n();
});

export { I18n, translations };
