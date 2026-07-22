export const productsData = [
  {
    id: 'sectional',
    number: '01',
    icon: 'sectional',
    title: 'Секционные ворота',
    subtitle: 'Prestige · Trend',
    img: '/images/section-door.avif',
    gallery: [],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ВЫБОР ИЗ ДВУХ СЕРИЙ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Сравните бюджетную серию <strong className="text-white/80">Trend</strong> и премиум-серию <strong className="text-white/80">Prestige</strong> секционных ворот. Prestige обеспечивает повышенную энергоэффективность, уникальные конструктивные решения и неограниченные варианты оформления. Trend — оптимальное соотношение цены и качества с энергоэффективностью и элементами безопасности в стандартной комплектации.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ЭНЕРГОЭФФЕКТИВНОСТЬ И ТЕПЛОИЗОЛЯЦИЯ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Все модели оснащены сердечником из полиуретанового (PUR) пенопласта, обеспечивающим отличную теплоизоляцию с U-value 1,35–0,99 Вт/(м²·K). Панели Trend толщиной 40 мм и Prestige толщиной 45 мм значительно снижают теплопотери и обеспечивают комфортный микроклимат.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">КОРРОЗИОННАЯ СТОЙКОСТЬ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Многослойное покрытие PUR–PA (20–25 мкм полиуретан + 16 мкм цинк) выдерживает 750 часов испытаний в камере солевого тумана, что соответствует 15 годам эксплуатации в прибрежной зоне. 10-летняя антикоррозийная гарантия подтверждает долговечность изделия.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">УМНАЯ АВТОМАТИКА</h3>
        <p className="mt-2 leading-relaxed text-white/50">Ворота совместимы с системами умного дома, дистанционного управления и IoT-платформами. Двойные роликовые петли (Prestige) и уплотнители EPDM обеспечивают бесшумную и плавную работу. Электродвигатель оснащен механизмом аварийного ручного открывания.</p>
      </div>
    </>,
    series: [
      {
        name: 'Prestige',
        desc: 'Повышенная энергоэффективность, уникальные конструктивные решения, неограниченные варианты оформления. 45 мм сэндвич-панели, двойные уплотнители EPDM, комплектация из нержавеющей стали.',
      },
      {
        name: 'Trend',
        desc: 'Оптимальное соотношение цены и качества, энергоэффективность, элементы безопасности в стандартной комплектации. 40 мм панели с PUR пеной, оцинкованная стальная комплектация.',
      },
    ],
    specs: [
      { label: 'Толщина панели', value: '40 мм (Trend) / 45 мм (Prestige)' },
      { label: 'Толщина стального листа', value: '0,4–0,5 мм (оцинкованный)' },
      { label: 'Теплоизоляция (U-value)', value: '1,35 Вт/(м²·K) — 0,99 Вт/(м²·K)' },
      { label: 'Звукоизоляция', value: 'До 30 dB' },
      { label: 'Класс ветронагрузки (EN 12424)', value: 'Class 3–4 (до 120 км/ч)' },
      { label: 'Цикличность пружин', value: '25 000 (стандарт) / до 100 000' },
      { label: 'Уплотнители', value: 'EPDM (одностворчатый Trend / двустворчатый Prestige)' },
      { label: 'Покрытие', value: 'PUR–PA 20–25 мкм + цинк 16 мкм' },
      { label: 'Солевой туман', value: '750 часов (15 лет в прибрежной зоне)' },
      { label: 'Рельсы', value: '2" оцинкованная сталь, герметичные шарикоподшипники' },
      { label: 'Безопасность', value: 'Anti-finger trap, фотобарьер, защитная кромка' },
      { label: 'Максимальный размер', value: '8000 × 6000 мм' },
      { label: 'Гарантия', value: '10 лет антикоррозия / 2 года механизм' },
    ],
    benefits: [
      { title: 'Энергоэффективность', desc: 'Сердечник из PUR пенопласта обеспечивает отличную теплоизоляцию, снижая расходы на отопление до 30%.' },
      { title: 'Коррозионная стойкость', desc: 'Многослойное покрытие PUR–PA выдерживает 750 часов солевого тумана.' },
      { title: 'Бесшумная работа', desc: 'Двойные роликовые петли и уплотнители EPDM обеспечивают тихую и плавную работу.' },
      { title: 'Умная автоматика', desc: 'Совместимость с системами умного дома, дистанционного управления и IoT-платформами.' },
    ],
    features: [
      '45 мм сэндвич-панели Prestige',
      '40 мм PUR пенопласт Trend',
      'Двойные уплотнители EPDM',
      '10 лет антикоррозийной гарантии',
      'Монтаж: 7–15 дней',
    ],
  },
  {
    id: 'side-door',
    number: '02',
    icon: 'sideDoor',
    title: 'Боковые двери',
    subtitle: 'Alutech · Side Door',
    img: '/images/side-door.avif',
    gallery: [],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ОТДЕЛЬНЫЙ ВХОД</h3>
        <p className="mt-2 leading-relaxed text-white/50">Боковые двери <strong className="text-white/80">Alutech</strong> обеспечивают удобный отдельный вход и выход из гаража без открывания основных ворот. Они герметично закрываются, предотвращая проникновение холодного воздуха, влаги и пыли в помещение. Подходят как для отдельно стоящих, так и для пристроенных гаражей.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ЕДИНЫЙ ДИЗАЙН</h3>
        <p className="mt-2 leading-relaxed text-white/50">Дверь изготавливается из тех же сэндвич-панелей, что и основные ворота, и оформляется в едином стиле с одинаковым цветом RAL и рельефом. 3D регулируемые петли из нержавеющей стали позволяют точно выставить положение в трех плоскостях.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">7 ПРИЧИН ВЫБРАТЬ</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">Высокое качество</strong>, <strong className="text-white/80">надежность</strong>, <strong className="text-white/80">изготовление на заказ</strong>, <strong className="text-white/80">единый стиль</strong>, <strong className="text-white/80">герметичность</strong>, <strong className="text-white/80">безопасность</strong> и <strong className="text-white/80">долгий срок службы</strong>. Многоточечная система запирания обеспечивает 3+ точки блокировки, а периметральные уплотнители EPDM исключают сквозняки.</p>
      </div>
    </>,
    series: [
      {
        name: 'Alutech Side Door',
        desc: 'Отдельный вход для гаража, выполненный в едином стиле с воротами. Боковая дверь оснащена 3D регулируемыми петлями, многоточечным замком и периметральными уплотнителями EPDM.',
      },
    ],
    specs: [
      { label: 'Конструкция', value: 'Сэндвич-панель (аналогично секционным воротам)' },
      { label: 'Толщина панели', value: '40 мм / 45 мм' },
      { label: 'Рама', value: 'Оцинкованная сталь goalpost frame' },
      { label: 'Петли', value: '3D регулируемые, нержавеющая сталь' },
      { label: 'Замок', value: 'Многоточечная система запирания' },
      { label: 'Уплотнители', value: 'Периметральный уплотнитель EPDM' },
      { label: 'Сторона открывания', value: 'Левая/правая, внутреннее/наружное открывание' },
      { label: 'Окраска', value: 'Любой цвет RAL (в соответствии с воротами)' },
      { label: 'Остекление', value: 'PC поликарбонат (опционально)' },
      { label: 'Гарантия', value: '2 года' },
    ],
    benefits: [
      { title: 'Единый стиль', desc: 'Дверь выполнена в том же дизайне и цвете, что и основные ворота.' },
      { title: 'Герметичность', desc: 'Периметральные уплотнители EPDM исключают сквозняки и пыль.' },
      { title: '3D регулировка', desc: 'Петли позволяют точно отрегулировать положение двери.' },
      { title: 'Многоточечная безопасность', desc: 'Система запирания обеспечивает 3+ точки блокировки.' },
    ],
    features: [
      'Alutech, индивидуальные размеры',
      'Единый дизайн с воротами',
      'Периметральный уплотнитель EPDM',
      '3D регулируемые петли',
      'Монтаж: 7–15 дней',
    ],
  },
  {
    id: 'roller',
    number: '03',
    icon: 'roller',
    title: 'Роллетные ворота',
    subtitle: 'Prestige · Trend',
    img: '/images/rolling-door.webp',
    gallery: ['/images/roller_1.jpg', '/images/roller_2.jpg', '/images/roller_3.jpeg'],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ВЫБОР ИЗ ДВУХ СЕРИЙ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Серия <strong className="text-white/80">Prestige</strong> — экструдированные алюминиевые профили с наполнением из PU пенопласта высокой плотности и усиленной антивандальной защитой. Серия <strong className="text-white/80">Trend</strong> — экономичный вариант с вальцованными стальными профилями, популярными цветами RAL и базовой безопасностью.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">КОМПАКТНОСТЬ И СОВРЕМЕННОСТЬ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Роллетные ворота устанавливаются в верхней части проема с интегрированным shutter box, не занимая внутреннее или наружное пространство. Подходят для любого архитектурного стиля. Быстрое изготовление на заказ и <strong className="text-white/80">2 года официальной гарантии</strong>.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">МНОГОСЛОЙНАЯ ЗАЩИТА</h3>
        <p className="mt-2 leading-relaxed text-white/50">Доказанная защита от взлома: anti-lift brackets, противосверлильные замки и усиленные направляющие. Также доступна противопожарная сертификация EI60. Тубулярный электродвигатель (230V) оснащен механизмом аварийного ручного открывания.</p>
      </div>
    </>,
    series: [
      {
        name: 'Prestige',
        desc: 'Экструдированные алюминиевые профили с наполнением из PU пенопласта высокой плотности, усиленная антивандальная защита.',
      },
      {
        name: 'Trend',
        desc: 'Вальцованные профили со стандартным наполнением, популярные цвета RAL, базовая антивандальная защита.',
      },
    ],
    specs: [
      { label: 'Профили', value: 'Экструдированный алюминий (Prestige) / сталь (Trend)' },
      { label: 'Наполнение', value: 'PU пенопласт высокой плотности / стандартный' },
      { label: 'Shutter box', value: 'Интегрированный, порошковая окраска, алюминий' },
      { label: 'Направляющие', value: 'Алюминиевая экструзия с щеточными уплотнителями' },
      { label: 'Привод', value: 'Тубулярный, 230V, аварийное ручное открывание' },
      { label: 'Безопасность', value: 'Anti-lift, anti-drill, фотобарьер' },
      { label: 'Максимальная ширина', value: '6000 мм' },
      { label: 'Максимальная площадь', value: '16 м²' },
      { label: 'Ветронагрузка', value: 'Class 2–3' },
      { label: 'Оттенки RAL', value: '13+ стандартных цветов' },
      { label: 'Гарантия', value: '2 года' },
    ],
    benefits: [
      { title: 'Компактность', desc: 'Устанавливается в верхней части проема, не занимая пространства.' },
      { title: 'Антивандальная защита', desc: 'Anti-lift brackets и усиленные направляющие.' },
      { title: 'Огнестойкость', desc: 'Опционально до сертификации EI60.' },
      { title: 'Быстрый заказ', desc: 'Короткий производственный цикл — наличие стандартных размеров.' },
    ],
    features: [
      'Экструдированные алюминиевые профили',
      'Теплоизоляция PU пенопластом',
      'Интегрированный shutter box',
      'Быстрое производство',
      'Монтаж: 7–15 дней',
    ],
  },
  {
    id: 'sliding',
    number: '04',
    icon: 'sliding',
    title: 'Автоматические откатные ворота',
    subtitle: 'Cantilever · Trackless',
    img: '/images/industial-door.avif',
    gallery: [],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">12 ВИДОВ МОНТАЖА</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">12 видов монтажа</strong> позволяют учесть особенности любой территории и наиболее эффективно использовать рабочее пространство. Консольная безрельсовая система исключает необходимость в наземных рельсах, обеспечивая установку на уклонах и неровных поверхностях.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ВЫБОР ИЗ ДВУХ СЕРИЙ</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">ProPlus</strong> (45 мм панели) предназначен для помещений с высокими требованиями к энергоэффективности. <strong className="text-white/80">ProTrend</strong> (40 мм панели) идеален для объектов без строгих требований к теплоизоляции. Обе серии работают с проемами до 15 000 мм.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ИИ-КОНТРОЛЬ ДОСТУПА</h3>
        <p className="mt-2 leading-relaxed text-white/50">ProPlus оснащен встроенной камерой с ИИ-распознаванием номерных знаков, обеспечивая беспарольный доступ. Привод (0,5–1,5 HP) работает от напряжения 230/400V 3-фазного тока. Резервная батарея гарантирует работу при отключении электроэнергии.</p>
      </div>
    </>,
    series: [
      {
        name: 'ProPlus',
        desc: '45 мм сэндвич-панели, высокая энергоэффективность, встроенная камера с ИИ-распознаванием номерных знаков.',
      },
      {
        name: 'ProTrend',
        desc: '40 мм панели, привод для проемов до 27\', фотобарьер в стандартной комплектации.',
      },
    ],
    specs: [
      { label: 'Панели', value: '45 мм (ProPlus) / 40 мм (ProTrend)' },
      { label: 'Система', value: 'Консольная (безрельсовая)' },
      { label: 'Противовес', value: '50% от длины ворот' },
      { label: 'Максимальный проем', value: 'До 15 000 мм' },
      { label: 'Привод', value: '0,5–1,5 HP, 230/400V 3-фазный' },
      { label: 'Скорость', value: '0,2–0,4 м/с' },
      { label: 'Управление', value: 'ИИ-распознавание номеров, смартфон, пульт' },
      { label: 'Безопасность', value: 'Фотобарьер, краевые датчики, сигнальная лампа' },
      { label: 'Пружины', value: '50 000 – 100 000 циклов' },
      { label: 'Батарея', value: 'Резервное питание при отключении' },
      { label: 'Гарантия', value: '2 года' },
    ],
    benefits: [
      { title: 'Безрельсовая технология', desc: 'Консольная система исключает необходимость в наземных рельсах.' },
      { title: 'ИИ-контроль доступа', desc: 'Автоматическое распознавание номерных знаков, беспарольный доступ.' },
      { title: '12 вариантов монтажа', desc: 'Подходит для любого рельефа и пространства.' },
      { title: 'Энергоэффективность', desc: '45 мм PUR панели на уровне международных стандартов.' },
    ],
    features: [
      'Консольная безрельсовая система',
      'ИИ-распознавание номерных знаков',
      'Максимальный проем: до 15 м',
      'Пружины на 50–100K циклов',
      'Монтаж: 7–15 дней',
    ],
  },
  {
    id: 'high-speed',
    number: '05',
    icon: 'highSpeed',
    title: 'Быстроходные ворота',
    subtitle: 'TurboFlex · TurboRoll',
    img: '/images/High-speed-gates.webp',
    gallery: [],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ДВЕ ТЕХНОЛОГИИ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Рулонные ворота <strong className="text-white/80">TurboFlex</strong> с гибкой ПВХ шторой идеальны для производственных и логистических циклов. Спиральные ворота <strong className="text-white/80">TurboRoll</strong> с жесткими алюминиевыми ламелями обеспечивают высокую устойчивость к ветровой нагрузке. Обе модели оснащены частотным преобразователем и PLC-управлением.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">СВЕРХВЫСОКАЯ СКОРОСТЬ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Скорость открывания до <strong className="text-white/80">2 м/с</strong>, закрывания — 1 м/с. Рабочий ресурс — до <strong className="text-white/80">1 500 000</strong> циклов. Это сокращает рабочий цикл на 70% и обеспечивает до 10 лет интенсивной эксплуатации. Быстрое закрытие снижает теплопотери на 40%.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ДОЛГОВЕЧНОСТЬ И БЕЗОПАСНОСТЬ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Класс ветронагрузки: Class 3–4 (до 120 км/ч). Рабочий диапазон температур: от −30°C до +60°C. Нижняя чувствительная безопасная кромка и фотобарьеры исключают аварии. 2 года официальной гарантии Alutech.</p>
      </div>
    </>,
    series: [
      {
        name: 'TurboFlex',
        desc: 'Быстроходные ворота рулонного типа с гибкой шторой. Скорость открывания до 2 м/с.',
      },
      {
        name: 'TurboRoll',
        desc: 'Ворота спирального типа с жесткими алюминиевыми ламелями. Ресурс 1 500 000 циклов.',
      },
    ],
    specs: [
      { label: 'Скорость открывания', value: 'До 2,0 м/с (TurboRoll)' },
      { label: 'Скорость закрывания', value: 'До 1,0 м/с' },
      { label: 'Циклический ресурс', value: '1 500 000 циклов' },
      { label: 'TurboFlex', value: 'Рулонный, гибкая ПВХ штора' },
      { label: 'TurboRoll', value: 'Спиральный, жесткие алюминиевые ламели' },
      { label: 'Ветронагрузка', value: 'Class 3–4' },
      { label: 'Привод', value: 'Inverter + PLC' },
      { label: 'Защитная кромка', value: 'Нижняя чувствительная кромка' },
      { label: 'Максимальный размер', value: '5000 × 5000 мм' },
      { label: 'Температурный диапазон', value: '−30°C … +60°C' },
      { label: 'Гарантия', value: '2 года (Alutech)' },
    ],
    benefits: [
      { title: 'Сверхвысокая скорость', desc: 'Скорость 2 м/с сокращает рабочий цикл на 70%.' },
      { title: '1,5 млн циклов', desc: 'Высокий ресурс — до 10 лет интенсивной эксплуатации.' },
      { title: 'Энергосбережение', desc: 'Быстрое закрытие снижает теплопотери на 40%.' },
      { title: 'PLC-интеграция', desc: 'Совместимость с системами управления ART/AC и IoT.' },
    ],
    features: [
      'Открывание до 2 м/с',
      'Ресурс 1 500 000 циклов',
      'Inverter + PLC управление',
      'Защитная кромка + фотобарьер',
      'Монтаж: 7–15 дней',
    ],
  },
  {
    id: 'fire-rated',
    number: '06',
    icon: 'fire',
    title: 'Противопожарные секционные ворота',
    subtitle: 'ProFire · EI60',
    img: '/images/fire-rated-sectional-doors.webp',
    gallery: [],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ЛОКАЛИЗАЦИЯ ПОЖАРА</h3>
        <p className="mt-2 leading-relaxed text-white/50">Ворота <strong className="text-white/80">ProFire</strong> предназначены для локализации пожара. Предотвращают распространение огня и дыма в помещения, прилегающие к очагу возгорания. Предел огнестойкости: <strong className="text-white/80">EI60</strong> (60 минут сохранения целостности и теплоизоляции).</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">СЕРТИФИКАЦИЯ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Сертифицированы по стандартам <strong className="text-white/80">ЕАЭС (EAC)</strong> и соответствуют EN 13241. Независимые испытания подтверждают, что ворота сохраняют целостность и сдерживают огонь в течение 60 минут. Intumescent уплотнители при высокой температуре расширяются в 10 раз, герметизируя все зазоры.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">АВТОМАТИЧЕСКАЯ АКТИВАЦИЯ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Ворота могут автоматически закрываться посредством термочувствительного элемента (fusible link) или дымового извещателя. Совместимы с системой пожарной сигнализации здания. Сердечник панели — минеральная вата или огнестойкий пенопласт с облицовкой из оцинкованной стали 0,5–0,7 мм.</p>
      </div>
    </>,
    series: [
      {
        name: 'ProFire EI60',
        desc: 'Противопожарные секционные ворота с сертификацией EI60. Сохраняют целостность в течение 60 минут.',
      },
    ],
    specs: [
      { label: 'Предел огнестойкости', value: 'EI 60 (60 минут)' },
      { label: 'Сертификация', value: 'EAC (ЕАЭС), EN 13241' },
      { label: 'Сердечник панели', value: 'Минеральная вата / огнестойкий пенопласт' },
      { label: 'Стальной лист', value: '0,5–0,7 мм оцинкованная сталь' },
      { label: 'Уплотнители', value: 'Intumescent (расширяющиеся) уплотнители' },
      { label: 'Механизм закрытия', value: 'Автоматический (fusible link / smoke detector)' },
      { label: 'Рельсы', value: 'Усиленные оцинкованные' },
      { label: 'Максимальный размер', value: '6000 × 5000 мм' },
      { label: 'Применение', value: 'Противопожарные отсеки, склады, промышленность' },
      { label: 'Гарантия', value: '2 года' },
    ],
    benefits: [
      { title: '60 минут защиты', desc: 'Полный EI60 — международный противопожарный стандарт.' },
      { title: 'Intumescent уплотнители', desc: 'Расширяются в 10 раз при высокой температуре, герметизируя зазоры.' },
      { title: 'Интеграция с пожарной сигнализацией', desc: 'Совместимость с системой пожарной безопасности здания.' },
      { title: 'Сертификат EAC', desc: 'Официальная сертификация на территории ЕАЭС.' },
    ],
    features: [
      'Огнестойкость EI60',
      'Intumescent уплотнители',
      'Автоматическая система закрытия',
      'Сертификация EAC',
      'Монтаж: 7–15 дней',
    ],
  },
  {
    id: 'panoramic',
    number: '07',
    icon: 'panoramic',
    title: 'Панорамные ворота',
    subtitle: 'Alutech · Full-View',
    img: '/images/panorama-gate.jpg',
    gallery: [],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ПРОЗРАЧНОСТЬ И СВЕТ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Панорамные ворота <strong className="text-white/80">Alutech</strong> благодаря закаленному стеклу или поликарбонату PMMA Choc обеспечивают максимальное проникновение дневного света. PMMA Choc в 200 раз прочнее обычного стекла. Варианты остекления: прозрачное, тонированное, матовое, рефлективное.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ДИЗАЙН И ЭСТЕТИКА</h3>
        <p className="mt-2 leading-relaxed text-white/50">Анодированные алюминиевые профили (45–60 мм) обеспечивают изящный современный вид. Широкий выбор цветов (RAL + оттенки анодирования) позволяет гармонично сочетать с любым фасадом здания. Идеальны для выставочных залов, автосалонов и торговых центров.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ДОЛГОВЕЧНОСТЬ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Класс ветронагрузки: Class 2–3. Теплоизоляция: U-value 1,8–2,2 Вт/(м²·K). Анодированное покрытие защищает от ультрафиолетового излучения и механического износа. Доступно как автоматическое, так и механическое управление.</p>
      </div>
    </>,
    series: [
      {
        name: 'Alutech Panoramic',
        desc: 'Анодированные алюминиевые профили с заполнением из закаленного стекла или поликарбоната PMMA Choc.',
      },
    ],
    specs: [
      { label: 'Рама', value: 'Анодированный алюминий (45–60 мм)' },
      { label: 'Заполнение', value: 'Закаленное стекло / PMMA Choc поликарбонат' },
      { label: 'Теплоизоляция (U-value)', value: '1,8–2,2 Вт/(м²·K)' },
      { label: 'Ветронагрузка', value: 'Class 2–3' },
      { label: 'Окраска', value: 'RAL / оттенки анодирования' },
      { label: 'Варианты остекления', value: 'Прозрачное, тонированное, матовое, рефлективное' },
      { label: 'Применение', value: 'Выставочные залы, автосалоны, торговые центры' },
      { label: 'Гарантия', value: '2 года' },
    ],
    benefits: [
      { title: 'Максимальная прозрачность', desc: 'Закаленное стекло обеспечивает свободное проникновение естественного света.' },
      { title: 'Ударопрочность', desc: 'Поликарбонат PMMA Choc в 200 раз прочнее обычного стекла.' },
      { title: 'Современная эстетика', desc: 'Изящные алюминиевые профили для любого архитектурного стиля.' },
      { title: 'Выбор цветов', desc: 'Любой цвет RAL + десятки оттенков анодирования.' },
    ],
    features: [
      'Анодированный алюминий 45–60 мм',
      'Закаленное стекло / PC поликарбонат',
      'Максимальное проникновение естественного света',
      'RAL + оттенки анодирования',
      'Монтаж: 7–15 дней',
    ],
  },
  {
    id: 'curtain',
    number: '08',
    icon: 'curtain',
    title: 'Противопожарные шторы',
    subtitle: 'EI 60 · EI 180 · E60',
    img: '/images/pre-fire-curtain.avif',
    gallery: [],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ЗАЩИТА ТИПА «ГАРМОШКА»</h3>
        <p className="mt-2 leading-relaxed text-white/50">Автоматические противопожарные шторы типа «<strong className="text-white/80">гармошка</strong>» (accordion) в случае пожара формируют замкнутое пространство, предотвращая распространение огня и дыма по всему зданию. Противопожарные версии (EI 60, EI 180) опускаются до пола, дымозащитные (E60) — до заданного уровня.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ГАРАНТИРОВАННОЕ КАЧЕСТВО</h3>
        <p className="mt-2 leading-relaxed text-white/50">Сертифицированы <strong className="text-white/80">EI 60</strong> (60 минут), <strong className="text-white/80">EI 180</strong> (180 минут) и <strong className="text-white/80">E60</strong> дымозащита. Сертификат EAC. Огнестойкая ткань с intumescent слоями обеспечивает полную блокировку огня и дыма. Активируются от дымового извещателя или системы пожарной сигнализации.</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">БЕЗ НАПРАВЛЯЮЩИХ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Крепятся к <strong className="text-white/80">потолку без направляющих</strong>, позволяя перекрывать конструкции сложной формы (L-образные, U-образные). Идеальны для атриумов, торговых центров и зданий со свободной планировкой. Минимальное обслуживание — ежегодная проверка.</p>
      </div>
    </>,
    series: [
      {
        name: 'EI 60 / EI 180 / E60',
        desc: 'Автоматические противопожарные и дымозащитные шторы типа «гармошка».',
      },
    ],
    specs: [
      { label: 'Тип', value: 'Противопожарная штора «гармошка» (accordion)' },
      { label: 'Огнестойкость', value: 'EI 60 / EI 180 / E60' },
      { label: 'Сертификация', value: 'EAC' },
      { label: 'Монтаж', value: 'Потолочный, без направляющих' },
      { label: 'Материал', value: 'Огнестойкая ткань + intumescent слой' },
      { label: 'Активация', value: 'Дымовой извещатель / пожарная сигнализация' },
      { label: 'EI 180', value: '180 минут сохранения целостности и теплоизоляции' },
      { label: 'E60', value: '60 минут целостности (блокировка дыма)' },
      { label: 'Сложные конфигурации', value: 'Возможны L-образные, U-образные и другие сложные формы' },
      { label: 'Применение', value: 'Атриумы, ТЦ, здания со свободной планировкой' },
      { label: 'Гарантия', value: '2 года' },
    ],
    benefits: [
      { title: 'Без направляющих', desc: 'Крепление к потолку — возможность перекрытия проемов любой формы.' },
      { title: 'До 180 минут', desc: 'EI 180 — максимальная огнестойкость на рынке.' },
      { title: 'Совместимость', desc: 'Интеграция с системой пожарной сигнализации здания.' },
      { title: 'Минимальное обслуживание', desc: 'Самоактивирующиеся, проверка ежегодно.' },
    ],
    features: [
      'EI 60 / EI 180 / E60',
      'Потолочный монтаж (без направляющих)',
      'Intumescent противопожарные слои',
      'Интеграция с пожарной сигнализацией',
      'Монтаж: 7–15 дней',
    ],
  },
];
