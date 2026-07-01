import { useEffect, useRef, useState } from 'react';

/* ─── CUSTOM SVG ICONS ─── */

const IconSectional = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect x="6" y="4" width="36" height="40" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <rect x="9" y="7" width="30" height="7" rx="1" fill="currentColor" opacity="0.9" />
    <rect x="9" y="16" width="30" height="7" rx="1" fill="currentColor" opacity="0.7" />
    <rect x="9" y="25" width="30" height="7" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="9" y="34" width="30" height="7" rx="1" fill="currentColor" opacity="0.3" />
    <path d="M30 4 L30 44" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
  </svg>
);

const IconSideDoor = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect x="6" y="4" width="36" height="40" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <rect x="24" y="4" width="18" height="40" rx="2" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
    <rect x="12" y="14" width="8" height="16" rx="1" fill="currentColor" opacity="0.85" />
    <circle cx="17" cy="22" r="1.2" fill="white" />
    <rect x="12" y="36" width="8" height="3" rx="0.5" fill="currentColor" opacity="0.4" />
  </svg>
);

const IconSlidingGate = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect x="4" y="10" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <rect x="4" y="10" width="4" height="28" rx="1" fill="currentColor" opacity="0.9" />
    <rect x="20" y="14" width="2" height="20" fill="currentColor" opacity="0.15" />
    <rect x="26" y="14" width="2" height="20" fill="currentColor" opacity="0.15" />
    <rect x="32" y="14" width="2" height="20" fill="currentColor" opacity="0.15" />
    <path d="M14 30 L20 24 L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    <path d="M38 20 L44 24 L38 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
  </svg>
);

const IconHighSpeed = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect x="6" y="8" width="36" height="32" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <rect x="8" y="22" width="32" height="2" fill="currentColor" opacity="0.4" />
    <rect x="8" y="28" width="32" height="2" fill="currentColor" opacity="0.4" />
    <rect x="8" y="34" width="32" height="2" fill="currentColor" opacity="0.4" />
    <path d="M34 14 L40 18 L34 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    <line x1="10" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <line x1="10" y1="16" x2="14" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
  </svg>
);

const IconRollerShutter = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect x="6" y="4" width="36" height="40" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <rect x="6" y="4" width="36" height="6" rx="1" fill="currentColor" opacity="0.85" />
    <line x1="9" y1="14" x2="39" y2="14" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    <line x1="9" y1="19" x2="39" y2="19" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
    <line x1="9" y1="24" x2="39" y2="24" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
    <line x1="9" y1="29" x2="39" y2="29" stroke="currentColor" strokeWidth="1.2" opacity="0.2" />
    <line x1="9" y1="34" x2="39" y2="34" stroke="currentColor" strokeWidth="1.2" opacity="0.1" />
    <line x1="10" y1="38" x2="38" y2="38" stroke="currentColor" strokeWidth="1.2" opacity="0.1" />
  </svg>
);

const IconFireRated = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect x="6" y="4" width="36" height="40" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M24 10 L32 17 L30 24 L26 28 L24 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    <path d="M24 38 L22 28 L18 24 L16 17 L24 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
  </svg>
);

const IconPanoramic = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect x="6" y="4" width="36" height="40" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <rect x="9" y="7" width="30" height="7" rx="1" fill="currentColor" opacity="0.2" />
    <rect x="9" y="16" width="30" height="7" rx="1" fill="currentColor" opacity="0.15" />
    <rect x="9" y="25" width="30" height="7" rx="1" fill="currentColor" opacity="0.1" />
    <rect x="9" y="34" width="30" height="7" rx="1" fill="currentColor" opacity="0.05" />
    <line x1="24" y1="7" x2="24" y2="41" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
    <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="0.6" opacity="0.15" />
  </svg>
);

const IconControl = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.9" />
    <line x1="24" y1="10" x2="24" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    <line x1="24" y1="34" x2="24" y2="38" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    <line x1="10" y1="24" x2="14" y2="24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    <line x1="34" y1="24" x2="38" y2="24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const IconVentilation = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect x="10" y="14" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M18 20 L22 24 L18 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    <path d="M30 20 L26 24 L30 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    <path d="M10 8 L14 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M38 8 L34 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M10 40 L14 34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <path d="M38 40 L34 34" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
  </svg>
);

const IconCurtain = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
    <rect x="6" y="4" width="36" height="40" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M10 4 Q16 14 10 24 Q16 34 10 44" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.9" />
    <path d="M38 4 Q32 14 38 24 Q32 34 38 44" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    <path d="M18 4 Q22 14 18 24 Q22 34 18 44" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
    <path d="M30 4 Q26 14 30 24 Q26 34 30 44" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
  </svg>
);

const iconMap = {
  sectional: IconSectional,
  sideDoor: IconSideDoor,
  sliding: IconSlidingGate,
  highSpeed: IconHighSpeed,
  roller: IconRollerShutter,
  fire: IconFireRated,
  panoramic: IconPanoramic,
  control: IconControl,
  ventilation: IconVentilation,
  curtain: IconCurtain,
};

/* ─── ENRICHED PRODUCT DATA ─── */

const productsData = [
  {
    id: 'sectional',
    number: '01',
    icon: 'sectional',
    title: 'Սեկցիոն դարպասներ',
    subtitle: 'Prestige · Trend',
    img: '/images/section-door.avif',
    gallery: ['/images/sectional_1.jpg', '/images/sectional_2.jpg', '/images/sectional_3.jpg'],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԵՐԿՈՒ ՍԵՐԻԱՅԻ ԸՆՏՐՈՒԹՅՈՒՆ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Համեմատեք բյուջետային <strong className="text-white/80">Trend</strong> սերիայի և պրեմիում <strong className="text-white/80">Prestige</strong> սերիայի սեկցիոն դարպասները։ Prestige-ն ապահովում է բարձրացված էներգաարդյունավետություն, յուրահատուկ կոնստրուկտիվ լուծումներ և ձևավորման անսահմանափակ տարբերակներ: Trend-ը գնի և որակի օպտիմալ համադրություն է՝ էներգաարդյունավետությամբ և անվտանգության տարրերով ստանդարտ կոմպլեկտում:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԷՆԵՐԳԱԱՐԴՅՈՒՆԱՎԵՏՈՒԹՅՈՒՆ ԵՎ ՄԵԿՈՒՍԱՑՈՒՄ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Բոլոր մոդելները հագեցված են պոլիուրեթանային (PUR) փրփուրի միջուկով, որն ապահովում է գերազանց ջերմամեկուսացում՝ U-value 1,35–0,99 W/(m²·K): Trend-ի 40 մմ պանելները և Prestige-ի 45 մմ պանելները զգալիորեն նվազեցնում են ջերմության կորուստը և ապահովում հարմարավետ միկրոկլիմա:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԿՈՌՈԶԻԱՅԻ ԴԻՄԱԴՐՈՒԹՅՈՒՆ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Բազմաշերտ PUR–PA ծածկույթը (20–25 մկմ պոլիուրեթան + 16 մկմ ցինկ) դիմանում է 750 ժամ աղային լակի փորձարկմանը, ինչը համապատասխանում է 15 տարվա շահագործմանը ծովափնյա գոտում: 10 տարվա հակակոռոզիոն երաշխիքը հաստատում է արտադրանքի երկարակեցությունը:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ՍՄԱՐԹ ԱՎՏՈՄԱՏԱՑՈՒՄ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Դարպասները համատեղելի են խելացի տան համակարգերի, հեռակառավարման և IoT հարթակների հետ: Կրկնակի գլանային հանգույցները (Prestige) և EPDM կնիքներն ապահովում են լուռ ու սահուն աշխատանք: Էլեկտրաշարժիչը հագեցված է արտակարգ ձեռքով բացման մեխանիզմով:</p>
      </div>
    </>,
    series: [
      {
        name: 'Prestige',
        desc: 'Բարձրացված էներգաարդյունավետություն, յուրահատուկ կոնստրուկտիվ լուծումներ, ձևավորման անսահմանափակ տարբերակներ։ 45 մմ սենդվիչ-պանելներ, կրկնակի EPDM կնիքներ, չժանգոտվող պողպատից կոմպլեկտացիա։',
      },
      {
        name: 'Trend',
        desc: 'Գնի և որակի օպտիմալ համադրություն, էներգաարդյունավետություն, անվտանգության տարրեր ստանդարտ կոմպլեկտում։ 40 մմ PUR փրփուրով պանելներ, ցինկապատ պողպատե կոմպլեկտացիա։',
      },
    ],
    specs: [
      { label: 'Պանելի հաստությունը', value: '40 մմ (Trend) / 45 մմ (Prestige)' },
      { label: 'Պողպատե թերթի հաստությունը', value: '0,4–0,5 մմ (ցինկապատ)' },
      { label: 'Ջերմամեկուսացում (U-value)', value: '1,35 W/(m²·K) — 0,99 W/(m²·K)' },
      { label: 'Ձայնամեկուսացում', value: 'Մինչև 30 dB' },
      { label: 'Հողմածանցման դաս (EN 12424)', value: 'Class 3–4 (մինչև 120 կմ/ժ)' },
      { label: 'Զսպանակների ցիկլայնություն', value: '25 000 (ստանդարտ) / մինչև 100 000' },
      { label: 'Կնիքներ', value: 'EPDM (միաթև Trend / երկթև Prestige)' },
      { label: 'Ծածկույթ', value: 'PUR–PA 20–25 մկմ + ցինկ 16 մկմ' },
      { label: 'Աղային լակի դիմադրություն', value: '750 ժամ (15 տարի ափամերձ գոտում)' },
      { label: 'Ռելսեր', value: '2" ցինկապատ պողպատ, կնքված գնդիկավոր առանցքակալներ' },
      { label: 'Անվտանգություն', value: 'Anti-finger trap, ֆոտոպատնեշ, անվտանգության եզր' },
      { label: 'Առավելագույն չափ', value: '8000 × 6000 մմ' },
      { label: 'Երաշխիք', value: '10 տարի հակակոռոզիոն / 2 տարի մեխանիզմ' },
    ],
    benefits: [
      { title: 'Էներգաարդյունավետություն', desc: 'PUR փրփուրի միջուկն ապահովում է գերազանց ջերմամեկուսացում՝ նվազեցնելով ջեռուցման ծախսերը մինչև 30%:' },
      { title: 'Կոռոզիայի դիմադրություն', desc: 'Բազմաշերտ PUR–PA ծածկույթը դիմանում է 750 ժամ աղային լակի փորձարկմանը:' },
      { title: 'Լուռ աշխատանք', desc: 'Կրկնակի գլանային հանգույցները և EPDM կնիքներն ապահովում են հանգիստ և սահուն աշխատանք:' },
      { title: 'Սմարթ ավտոմատացում', desc: 'Համատեղելի է խելացի տան համակարգերի, հեռակառավարման և IoT հարթակների հետ:' },
    ],
    features: [
      '45 մմ սենդվիչ-պանելներ Prestige',
      '40 մմ PUR փրփուր Trend',
      'Կրկնակի EPDM կնիքներ',
      '10 տարի հակակոռոզիոն երաշխիք',
      'Տեղադրում՝ 7–15 օր',
    ],
  },
  {
    id: 'side-door',
    number: '02',
    icon: 'sideDoor',
    title: 'Կողային դռներ',
    subtitle: 'Alutech · Side Door',
    img: '/images/side-door.avif',
    gallery: ['/images/side-door_1.jpg', '/images/side-door_2.jpg', '/images/side-door_3.jpg'],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԱՌԱՆՁԻՆ ՄՈՒՏՔ</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">Alutech</strong> կողային դռներն ապահովում են հարմարավետ առանձին մուտք և ելք ավտոտնակից՝ առանց հիմնական դարպասը բացելու: Դրանք հերմետիկ փակվում են՝ թույլ չտալով սառը օդի, խոնավության և փոշու ներթափանցումը տարածք: Հարմար են ինչպես առանձին կանգնած, այնպես էլ տան հետ կցված ավտոտնակների համար:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ՄԻԱՍՆԱԿԱՆ ԴԻԶԱՅՆ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Դուռը պատրաստվում է նույն սենդվիչ-պանելներից, ինչ հիմնական դարպասը, և ձևավորվում է միասնական ոճով՝ նույն RAL գույնով և ռելիեֆով: 3D կարգավորվող չժանգոտվող կախանցքները թույլ են տալիս ճշգրիտ տեղադրում երեք հարթություններում:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">7 ՊԱՏՃԱՌ ԸՆՏՐԵԼՈՒ</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">Բարձր որակ</strong>, <strong className="text-white/80">հուսալիություն</strong>, <strong className="text-white/80">պատվերով արտադրություն</strong>, <strong className="text-white/80">միասնական ոճ</strong>, <strong className="text-white/80">հերմետիկություն</strong>, <strong className="text-white/80">անվտանգություն</strong> և <strong className="text-white/80">երկար ծառայության ժամկետ</strong>: Բազմակետային փականքի համակարգը ապահովում է կողպման 3+ կետ, իսկ EPDM պարագծային կնիքները բացառում են նախագծերը:</p>
      </div>
    </>,
    series: [
      {
        name: 'Alutech Side Door',
        desc: 'Առանձին մուտք ավտոտնակի համար, պատրաստված դարպասների հետ միասնական ոճով։ Կողային դուռը հագեցված է 3D կարգավորվող կախանցքերով, բազմակետային փականքով և EPDM պարագծային կնիքներով:',
      },
    ],
    specs: [
      { label: 'Կոնստրուկցիա', value: 'Սենդվիչ-պանել (նույնը, ինչ սեկցիոն դարպասներինը)' },
      { label: 'Պանելի հաստությունը', value: '40 մմ / 45 մմ' },
      { label: 'Շրջանակ', value: 'Ցինկապատ պողպատե goalpost frame' },
      { label: 'Կախանցքներ', value: '3D կարգավորվող, չժանգոտվող պողպատ' },
      { label: 'Փականք', value: 'Բազմակետային փականքի համակարգ' },
      { label: 'Կնիքներ', value: 'EPDM պարագծային կնիք' },
      { label: 'Բացման կողմ', value: 'Ձախ/աջ, ներքև/արտաքին բացում' },
      { label: 'Գունավորում', value: 'RAL ցանկացած գույն (համապատասխան դարպասին)' },
      { label: 'Ապակեպատում', value: 'PC պոլիկարբոնատ (ըստ ցանկության)' },
      { label: 'Երաշխիք', value: '2 տարի' },
    ],
    benefits: [
      { title: 'Միասնական ոճ', desc: 'Դուռը նույն դիզայնով և գույնով է, ինչ հիմնական դարպասը:' },
      { title: 'Հերմետիկություն', desc: 'EPDM պարագծային կնիքները բացառում են նախագծերը և փոշին:' },
      { title: '3D կարգավորում', desc: 'Կախանցքները թույլ են տալիս ճշգրիտ կարգավորել դիրքը:' },
      { title: 'Բազմակետային անվտանգություն', desc: 'Փականքի համակարգն ապահովում է կողպման 3+ կետ:' },
    ],
    features: [
      'Alutech, անհատական չափերով',
      'Միասնական դիզայն դարպասների հետ',
      'EPDM պարագծային կնիք',
      '3D կարգավորվող կախանցքներ',
      'Տեղադրում՝ 7–15 օր',
    ],
  },
  {
    id: 'roller',
    number: '03',
    icon: 'roller',
    title: 'Ռոլետային դարպասներ',
    subtitle: 'Prestige · Trend',
    img: '/images/rolling-door.webp',
    gallery: ['/images/roller_1.jpg', '/images/roller_2.jpg', '/images/roller_3.jpeg'],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԵՐԿՈՒ ՍԵՐԻԱՅԻ ԸՆՏՐՈՒԹՅՈՒՆ</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">Prestige</strong> սերիան էքստրուդացված ալյումինե պրոֆիլներով՝ բարձր խտության PU փրփուրի լցոնքով և ուժեղացված հակավանդալային պաշտպանությամբ: <strong className="text-white/80">Trend</strong> սերիան գլանաձև պողպատե պրոֆիլներով տնտեսական տարբերակ է՝ հանրաճանաչ RAL գույներով և բազային անվտանգությամբ:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԿՈՄՊԱԿՏ ԵՎ ԺԱՄԱՆԱԿԱԿԻՑ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Ռոլետային դարպասները տեղադրվում են բացվածքի վերին մասում՝ ինտեգրված shutter box-ով, չզբաղեցնելով ներքին կամ արտաքին տարածք: Հարմար են ցանկացած ճարտարապետական ոճի հետ: Արագ պատվերով արտադրություն և <strong className="text-white/80">2 տարվա պաշտոնական երաշխիք</strong>:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԲԱԶՄԱՇԵՐՏ ՊԱՇՏՊԱՆՈՒԹՅՈՒՆ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Կոտրմակայունության ապացուցված պաշտպանություն՝ anti-lift brackets, anti-drill կողպեքներ և ամրացված ուղղորդիչներ: Հասանելի է նաև հակահրդեհային EI60 սերտիֆիկացում: Տուբուլյար էլեկտրաշարժիչը (230V) հագեցված է արտակարգ ձեռքով բացման մեխանիզմով:</p>
      </div>
    </>,
    series: [
      {
        name: 'Prestige',
        desc: 'Էքստրուդացված ալյումինե պրոֆիլներ՝ բարձր խտության PU փրփուրի լցոնքով, ուժեղացված հակավանդալային պաշտպանությամբ:',
      },
      {
        name: 'Trend',
        desc: 'Գլանաձև պրոֆիլներ ստանդարտ լցոնքով, հանրաճանաչ RAL գույներով, բազային հակավանդալային պաշտպանությամբ:',
      },
    ],
    specs: [
      { label: 'Պրոֆիլներ', value: 'Էքստրուդացված ալյումին (Prestige) / պողպատ (Trend)' },
      { label: 'Լցոնք', value: 'Բարձր խտության PU փրփուր / ստանդարտ' },
      { label: 'Շյուղ (Shutter box)', value: 'Ինտեգրված, փոշեներկված, ալյումինե' },
      { label: 'Ուղղորդիչներ', value: 'Ալյումինե էքստրուզիա՝ խոզանակային կնիքներով' },
      { label: 'Շարժիչ', value: 'Տուբուլյար, 230V, արտակարգ ձեռքով բացում' },
      { label: 'Անվտանգություն', value: 'Anti-lift, anti-drill, ֆոտոպատնեշ' },
      { label: 'Առավելագույն լայնություն', value: '6000 մմ' },
      { label: 'Առավելագույն մակերես', value: '16 մ²' },
      { label: 'Հողմածանցում', value: 'Class 2–3' },
      { label: 'RAL երանգներ', value: '13+ ստանդարտ գույներ' },
      { label: 'Երաշխիք', value: '2 տարի' },
    ],
    benefits: [
      { title: 'Կոմպակտություն', desc: 'Տեղադրվում է բացվածքի վերին մասում՝ չզբաղեցնելով տարածք:' },
      { title: 'Հակավանդալային պաշտպանություն', desc: 'Anti-lift brackets և ամրացված ուղղորդիչներ:' },
      { title: 'Հրդեհային դիմադրություն', desc: 'Ըստ ցանկության՝ մինչև EI60 սերտիֆիկացում:' },
      { title: 'Արագ պատվեր', desc: 'Արտադրության արագ ցիկլ — ստանդարտ չափերի առկայություն:' },
    ],
    features: [
      'Ալյումինե էքստրուդացված պրոֆիլներ',
      'PU փրփուրի ջերմամեկուսացում',
      'Ինտեգրված shutter box',
      'Արագ արտադրություն',
      'Տեղադրում՝ 7–15 օր',
    ],
  },
  {
    id: 'sliding',
    number: '04',
    icon: 'sliding',
    title: 'Ավտոմատ հետադարձ դարպասներ',
    subtitle: 'Cantilever · Trackless',
    img: '/images/industial-door.avif',
    gallery: ['/images/sliding_1.jpg', '/images/sliding_2.jpg', '/images/sliding_3.jpg'],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">12 ՏԵՍԱԿԻ ՄՈՆՏԱԺ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Մոնտաժի <strong className="text-white/80">12 տեսակները</strong> թույլ են տալիս հաշվի առնել ցանկացած տարածքի առանձնահատկությունները և առավել արդյունավետ օգտագործել աշխատանքային տարածքը: Կանտիլևերային անռելս համակարգը վերացնում է գետնի ռելսերի կարիքը՝ թույլ տալով տեղադրում թեքությունների և անհարթ մակերևույթների վրա:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԵՐԿՈՒ ՍԵՐԻԱՅԻ ԸՆՏՐՈՒԹՅՈՒՆ</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">ProPlus</strong>-ը (45 մմ պանելներ) նախատեսված է բարձր էներգաարդյունավետության պահանջներ ունեցող տարածքների համար: <strong className="text-white/80">ProTrend</strong>-ը (40 մմ պանելներ) իդեալական է այն օբյեկտների համար, որտեղ չկան խիստ պահանջներ ջերմամեկուսացման նկատմամբ: Երկու սերիաներն էլ աշխատում են մինչև 15 000 մմ բացվածքով:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">AI ՄՈՒՏՔԻ ՎԵՐԱՀՍԿՈՒՄ</h3>
        <p className="mt-2 leading-relaxed text-white/50">ProPlus-ը հագեցված է AI համարանիշի ճանաչմամբ ինտեգրված տեսախցիկով՝ ապահովելով առանցբանալի մուտք: Շարժիչը (0,5–1,5 HP) աշխատում է 230/400V 3-ֆազ լարմամբ: Պահեստային մարտկոցը երաշխավորում է աշխատանքը հոսանքազրկման դեպքում:</p>
      </div>
    </>,
    series: [
      {
        name: 'ProPlus',
        desc: '45 մմ սենդվիչ-պանելներ, բարձր էներգաարդյունավետություն, AI համարանիշի ճանաչմամբ ինտեգրված տեսախցիկ:',
      },
      {
        name: 'ProTrend',
        desc: '40 մմ պանելներ, շարժիչ մինչև 27′ բացվածքի համար, ֆոտոպատնեշ ստանդարտ:',
      },
    ],
    specs: [
      { label: 'Պանելներ', value: '45 մմ (ProPlus) / 40 մմ (ProTrend)' },
      { label: 'Համակարգ', value: 'Կանտիլևերային (անռելս)' },
      { label: 'Հակակշիռ', value: '50% դարպասի երկարությունից' },
      { label: 'Առավելագույն բացվածք', value: 'Մինչև 15 000 մմ' },
      { label: 'Շարժիչ', value: '0,5–1,5 HP, 230/400V 3-ֆազ' },
      { label: 'Արագություն', value: '0,2–0,4 մ/վ' },
      { label: 'Կառավարում', value: 'AI համարանիշի ճանաչում, սմարթֆոն, պուլտ' },
      { label: 'Անվտանգություն', value: 'Ֆոտոպատնեշ, եզրային սենսորներ, ազդանշանային լույս' },
      { label: 'Զսպանակներ', value: '50 000 – 100 000 ցիկլ' },
      { label: 'Մարտկոց', value: 'Պահեստային սնուցում անջատման դեպքում' },
      { label: 'Երաշխիք', value: '2 տարի' },
    ],
    benefits: [
      { title: 'Անռելս տեխնոլոգիա', desc: 'Կանտիլևերային համակարգը վերացնում է գետնի ռելսերի կարիքը:' },
      { title: 'AI մուտքի վերահսկում', desc: 'Համարանիշի ավտոմատ ճանաչում, առանցբանալի մուտք:' },
      { title: '12 մոնտաժային տարբերակ', desc: 'Հարմար ցանկացած տեղանքի և տարածքի համար:' },
      { title: 'Էներգաարդյունավետություն', desc: '45 մմ PUR պանելներ — միջազգային ստանդարտների մակարդակով:' },
    ],
    features: [
      'Կանտիլևերային անռելս համակարգ',
      'AI համարանիշի ճանաչում',
      'Առավելագույն բացվածք՝ մինչև 15 մ',
      '50–100K ցիկլ զսպանակներ',
      'Տեղադրում՝ 7–15 օր',
    ],
  },
  {
    id: 'high-speed',
    number: '05',
    icon: 'highSpeed',
    title: 'Արագընթաց դարպասներ',
    subtitle: 'TurboFlex · TurboRoll',
    img: '/images/High-speed-gates.webp',
    gallery: ['/images/high-speed_1.jpg', '/images/high-speed_2.jpg', '/images/high-speed_3.jpg'],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԵՐԿՈՒ ՏԵԽՆՈԼՈԳԻԱ</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">TurboFlex</strong> ռուլոնային դարպասները ճկուն PVC վարագույրով իդեալական են արտադրական և լոգիստիկ ցիկլերի համար: <strong className="text-white/80">TurboRoll</strong> սպիրալային դարպասները կոշտ ալյումինե սլատներով ապահովում են բարձր դիմադրություն քամու ծանրաբեռնվածությանը: Երկու մոդելներն էլ հագեցված են հաճախականային փոխակերպիչով և PLC կառավարմամբ:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԳԵՐԱՐԱԳՈՒԹՅՈՒՆ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Բացման արագությունը մինչև <strong className="text-white/80">2 մ/վ</strong>, փակմանը՝ 1 մ/վ: Աշխատանքային ռեսուրսը՝ մինչև <strong className="text-white/80">1 500 000</strong> ցիկլ: Սա կրճատում է աշխատանքային ցիկլը 70%-ով և ապահովում մինչև 10 տարի ինտենսիվ շահագործում: Արագ փակումը նվազեցնում է ջերմության կորուստը 40%-ով:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԴԻՄԱԿԱՅՈՒԹՅՈՒՆ ԵՎ ԱՆՎՏԱՆԳՈՒԹՅՈՒՆ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Հողմածանցման դասը՝ Class 3–4 (մինչև 120 կմ/ժ): Աշխատանքային ջերմաստիճանային միջակայքը՝ −30°C-ից մինչև +60°C: Ստորին զգայուն անվտանգության եզրը և ֆոտոպատնեշները բացառում են վթարները: 2 տարվա Alutech պաշտոնական երաշխիք:</p>
      </div>
    </>,
    series: [
      {
        name: 'TurboFlex',
        desc: 'Ռուլոնային տիպի արագընթաց դարպասներ ճկուն վարագույրով: Բացման արագությունը՝ մինչև 2 մ/վ:',
      },
      {
        name: 'TurboRoll',
        desc: 'Սպիրալային տիպի դարպասներ ալյումինե կոշտ սլատներով: 1 500 000 ցիկլ ռեսուրս:',
      },
    ],
    specs: [
      { label: 'Բացման արագություն', value: 'Մինչև 2,0 մ/վ (TurboRoll)' },
      { label: 'Փակման արագություն', value: 'Մինչև 1,0 մ/վ' },
      { label: 'Ցիկլի ռեսուրս', value: '1 500 000 ցիկլ' },
      { label: 'TurboFlex', value: 'Ռուլոնային, ճկուն PVC վարագույր' },
      { label: 'TurboRoll', value: 'Սպիրալային, ալյումինե կոշտ սլատներ' },
      { label: 'Հողմածանցում', value: 'Class 3–4' },
      { label: 'Շարժիչ', value: 'Inverter + PLC' },
      { label: 'Անվտանգության եզր', value: 'Ստորին զգայուն եզր' },
      { label: 'Առավելագույն չափ', value: '5000 × 5000 մմ' },
      { label: 'Ջերմաստիճանային միջակայք', value: '−30°C … +60°C' },
      { label: 'Երաշխիք', value: '2 տարի (Alutech)' },
    ],
    benefits: [
      { title: 'Գերարագություն', desc: '2 մ/վ արագությունը կրճատում է աշխատանքային ցիկլը 70%-ով:' },
      { title: '1.5 մլն ցիկլ', desc: 'Բարձր ռեսուրս — մինչև 10 տարի ինտենսիվ շահագործում:' },
      { title: 'Էներգախնայողություն', desc: 'Արագ փակումը նվազեցնում է ջերմության կորուստը 40%-ով:' },
      { title: 'PLC ինտեգրում', desc: 'Համատեղելի է ART/AC կառավարման համակարգերի և IoT-ի հետ:' },
    ],
    features: [
      'Բացում մինչև 2 մ/վ',
      '1 500 000 ցիկլ ռեսուրս',
      'Inverter + PLC կառավարում',
      'Անվտանգության եզր + ֆոտոպատնեշ',
      'Տեղադրում՝ 7–15 օր',
    ],
  },
  {
    id: 'fire-rated',
    number: '06',
    icon: 'fire',
    title: 'Հակահրդեհային սեկցիոն դարպասներ',
    subtitle: 'ProFire · EI60',
    img: '/images/fire-rated-sectional-doors.webp',
    gallery: ['/images/fire-rated_1.jpg', '/images/fire-rated_2.jpg', '/images/fire-rated_3.jpg'],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ՀՐԴԵՀԻ ՏԵՂԱՅՆԱՑՈՒՄ</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">ProFire</strong> դարպասները նախատեսված են հրդեհի տեղայնացման համար: Պաշտպանում են կրակի և ծխի տարածումից այն տարածքներում, որոնք գտնվում են հրդեհի աղբյուրին հարակից: Հրդեհակայունության սահմանը՝ <strong className="text-white/80">EI60</strong> (60 րոպե ամբողջականության և ջերմամեկուսացման պահպանում):</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ՍԵՐՏԻՖԻԿԱՑՈՒՄ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Սերտիֆիկացված <strong className="text-white/80">ԵԱՏՄ</strong> (ԵԱԷՍ) և համապատասխանում է EN 13241 ստանդարտին: Անկախ փորձարկումները հաստատում են, որ դարպասները պահպանում են ամբողջականությունը և զսպում հրդեհը 60 րոպե: Intumescent կնիքները բարձր ջերմաստիճանում ընդարձակվում են 10x՝ կնքելով բոլոր ճեղքերը:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԱՎՏՈՄԱՏ ԱԿՏԻՎԱՑՈՒՄ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Դարպասները կարող են ավտոմատ փակվել ջերմազգայուն տարրի (fusible link) կամ ծխի դետեկտորի միջոցով: Համատեղելի են շենքի հրդեհային ազդանշանման համակարգի հետ: Պանելի միջուկը միներալային բուրդ կամ հրդեհադիմացկուն փրփուր է՝ 0,5–0,7 մմ ցինկապատ պողպատե երեսպատմամբ:</p>
      </div>
    </>,
    series: [
      {
        name: 'ProFire EI60',
        desc: 'Հակահրդեհային սեկցիոն դարպասներ EI60 սերտիֆիկացմամբ: Պահպանում են ամբողջականությունը 60 րոպե:',
      },
    ],
    specs: [
      { label: 'Հրդեհակայունության սահման', value: 'EI 60 (60 րոպե)' },
      { label: 'Սերտիֆիկացում', value: 'ԵԱՏՄ (EAC), EN 13241' },
      { label: 'Պանելի միջուկ', value: 'Միներալային բուրդ / հրդեհադիմացկուն փրփուր' },
      { label: 'Պողպատե թերթ', value: '0,5–0,7 մմ ցինկապատ պողպատ' },
      { label: 'Կնիքներ', value: 'Intumescent (ընդարձակվող) կնիքներ' },
      { label: 'Փակման մեխանիզմ', value: 'Ավտոմատ (fusible link / smoke detector)' },
      { label: 'Ռելսեր', value: 'Ծանր duty ցինկապատ' },
      { label: 'Առավելագույն չափ', value: '6000 × 5000 մմ' },
      { label: 'Կիրառություն', value: 'Հրդեհային կուպե, պահեստներ, արդյունաբերություն' },
      { label: 'Երաշխիք', value: '2 տարի' },
    ],
    benefits: [
      { title: '60 րոպե պաշտպանություն', desc: 'Ամբողջական EI60 — միջազգային հակահրդեհային ստանդարտ:' },
      { title: 'Intumescent կնիքներ', desc: 'Բարձր ջերմաստիճանում ընդարձակվում են 10x, կնքելով բոլոր ճեղքերը:' },
      { title: 'Ինտեգրում հրդեհային ազդանշանման', desc: 'Համատեղելի է շենքի հրդեհային անվտանգության համակարգի հետ:' },
      { title: 'EAC սերտիֆիկատ', desc: 'Պաշտոնական սերտիֆիկացում ԵԱՏՄ տարածքում:' },
    ],
    features: [
      'EI60 հրդեհակայունություն',
      'Intumescent կնիքներ',
      'Ավտոմատ փակման համակարգ',
      'EAC սերտիֆիկացում',
      'Տեղադրում՝ 7–15 օր',
    ],
  },
  {
    id: 'panoramic',
    number: '07',
    icon: 'panoramic',
    title: 'Պանորամային դարպասներ',
    subtitle: 'Alutech · Full-View',
    img: '/images/panorama-gate.jpg',
    gallery: ['/images/panoramic_1.jpg', '/images/panoramic_2.jpg', '/images/panoramic_3.jpg'],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԹԱՓԱՆՑԻԿՈՒԹՅՈՒՆ ԵՎ ԼՈՒՅՍ</h3>
        <p className="mt-2 leading-relaxed text-white/50"><strong className="text-white/80">Alutech</strong> պանորամային դարպասները կոփված ապակու կամ PMMA Choc պոլիկարբոնատի շնորհիվ ապահովում են ցերեկային լույսի առավելագույն ներթափանցում: PMMA Choc-ը 200x ավելի ամուր է, քան սովորական ապակին: Ապակեպատման տարբերակներ՝ թափանցիկ, մգեցված, մատացված, ռեֆլեկտիվ:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԴԻԶԱՅՆ ԵՎ ԷՍԹԵՏԻԿԱ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Անոդացված ալյումինե պրոֆիլները (45–60 մմ) ապահովում են նրբագիծ ժամանակակից տեսք: Գունային լայն ընտրանին (RAL + անոդացման երանգներ) թույլ է տալիս ներդաշնակ համադրել ցանկացած շենքի ֆասադի հետ: Իդեալական են ցուցասրահների, ավտոսրահների և առևտրի կենտրոնների համար:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԴԻՄԱԿԱՅՈՒԹՅՈՒՆ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Հողմածանցման դասը Class 2–3: Ջերմամեկուսացումը՝ U-value 1,8–2,2 W/(m²·K): Անոդացված ծածկույթը պաշտպանում է ուլտրամանուշակագույն ճառագայթումից և մեխանիկական մաշումից: Հասանելի է ինչպես ավտոմատ, այնպես էլ մեխանիկական կառավարում:</p>
      </div>
    </>,
    series: [
      {
        name: 'Alutech Panoramic',
        desc: 'Անոդացված ալյումինե պրոֆիլներ կոփված ապակու կամ PMMA Choc պոլիկարբոնատային լցոնքով:',
      },
    ],
    specs: [
      { label: 'Շրջանակ', value: 'Անոդացված ալյումին (45–60 մմ)' },
      { label: 'Լցոնք', value: 'Կոփված ապակի / PMMA Choc պոլիկարբոնատ' },
      { label: 'Ջերմամեկուսացում (U-value)', value: '1,8–2,2 W/(m²·K)' },
      { label: 'Հողմածանցում', value: 'Class 2–3' },
      { label: 'Գունավորում', value: 'RAL / անոդացման երանգներ' },
      { label: 'Ապակեպատման տարբերակներ', value: 'Թափանցիկ, մգեցված, մատացված, ռեֆլեկտիվ' },
      { label: 'Կիրառություն', value: 'Ցուցասրահներ, ավտոսրահներ, առևտրի կենտրոններ' },
      { label: 'Երաշխիք', value: '2 տարի' },
    ],
    benefits: [
      { title: 'Առավելագույն թափանցիկություն', desc: 'Կոփված ապակին ապահովում է բնական լույսի ազատ մուտք:' },
      { title: 'Ցնցակայունություն', desc: 'PMMA Choc պոլիկարբոնատը 200x ավելի ամուր է, քան սովորական ապակին:' },
      { title: 'Ժամանակակից էսթետիկա', desc: 'Նրբագիծ ալյումինե պրոֆիլներ ցանկացած ճարտարապետական ոճի համար:' },
      { title: 'Գունային ընտրանի', desc: 'RAL ցանկացած գույն + անոդացման տասնյակ երանգներ:' },
    ],
    features: [
      'Անոդացված ալյումին 45–60 մմ',
      'Կոփված ապակի / PC պոլիկարբոնատ',
      'Բնական լույսի առավելագույն ներթափանցում',
      'RAL + անոդացման երանգներ',
      'Տեղադրում՝ 7–15 օր',
    ],
  },
  {
    id: 'curtain',
    number: '08',
    icon: 'curtain',
    title: 'Հրդեհապաշտպան վարագույրներ',
    subtitle: 'EI 60 · EI 180 · E60',
    img: '/images/pre-fire-curtain.avif',
    gallery: ['/images/curtain_1.jpg', '/images/curtain_2.jpg', '/images/curtain_3.jpg'],
    deepDescription: <>
      <div className="mt-10 first:mt-0">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">«ԳԱՐՄՈՇԿԱ» ՏԻՊԻ ՊԱՇՏՊԱՆՈՒԹՅՈՒՆ</h3>
        <p className="mt-2 leading-relaxed text-white/50">«<strong className="text-white/80">Գարմոշկա</strong>» (accordion) տիպի ավտոմատ հրդեհապաշտպան վարագույրները հրդեհի դեպքում ձևավորում են փակ տարածք՝ թույլ չտալով կրակի և ծխի տարածումը ամբողջ շենքով մեկ: Հրդեհապաշտպան տարբերակները (EI 60, EI 180) իջեցվում են մինչև հատակ, ծխապաշտպանները (E60)՝ սահմանված մակարդակի:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԵՐԱՇԽԻՔԱՎՈՐՎԱԾ ՈՐԱԿ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Սերտիֆիկացված <strong className="text-white/80">EI 60</strong> (60 րոպե), <strong className="text-white/80">EI 180</strong> (180 րոպե) և <strong className="text-white/80">E60</strong> ծխապաշտպանություն: EAC սերտիֆիկատ: Հրդեհադիմացկուն գործվածքը intumescent շերտերով ապահովում է կրակի և ծխի լրիվ արգելափակում: Ակտիվանում է ծխի դետեկտորից կամ հրդեհային ազդանշանման համակարգից:</p>
      </div>
      <div className="mt-10">
        <h3 className="font-bold uppercase tracking-wider text-white/80 text-sm">ԱՌԱՆՑ ՈՒՂՂՈՐԴԻՉՆԵՐԻ</h3>
        <p className="mt-2 leading-relaxed text-white/50">Ամրացվում են <strong className="text-white/80">առաստաղին առանց ուղղորդիչների</strong>՝ հնարավորություն տալով փակել բարդ ձևի կոնստրուկցիաներ (L-ձև, U-ձև): Իդեալական են ատրիումների, առևտրի կենտրոնների և բաց հատակագծման շենքերի համար: Նվազագույն սպասարկում՝ տարեկան ստուգում:</p>
      </div>
    </>,
    series: [
      {
        name: 'EI 60 / EI 180 / E60',
        desc: '«Գարմոշկա» տիպի ավտոմատ հրդեհապաշտպան և ծխապաշտպան վարագույրներ:',
      },
    ],
    specs: [
      { label: 'Տիպ', value: '«Գարմոշկա» (accordion) հրդեհապաշտպան վարագույր' },
      { label: 'Հրդեհակայունություն', value: 'EI 60 / EI 180 / E60' },
      { label: 'Սերտիֆիկացում', value: 'EAC' },
      { label: 'Մոնտաժ', value: 'Առաստաղային, առանց ուղղորդիչների' },
      { label: 'Նյութ', value: 'Հրդեհադիմացկուն գործվածք + intumescent շերտ' },
      { label: 'Ակտիվացում', value: 'Ծխի դետեկտոր / հրդեհային ազդանշանում' },
      { label: 'EI 180', value: '180 րոպե ամբողջականության և ջերմամեկուսացման պահպանում' },
      { label: 'E60', value: '60 րոպե ամբողջականություն (ծխի արգելափակում)' },
      { label: 'Բարդ կոնֆիգուրացիաներ', value: 'Հնարավոր են L-ձև, U-ձև և այլ բարդ ձևեր' },
      { label: 'Կիրառություն', value: 'Ատրիումներ, ԱԿ, բաց հատակագծման շենքեր' },
      { label: 'Երաշխիք', value: '2 տարի' },
    ],
    benefits: [
      { title: 'Առանց ուղղորդիչների', desc: 'Ամրացում առաստաղին — հնարավորություն է տալիս փակել ցանկացած ձևի բացվածք:' },
      { title: 'Մինչև 180 րոպե', desc: 'EI 180 — առավելագույն հրդեհային դիմադրություն շուկայում:' },
      { title: 'Համատեղելիություն', desc: 'Ինտեգրվում է շենքի հրդեհային ազդանշանման համակարգին:' },
      { title: 'Նվազագույն սպասարկում', desc: 'Ինքնաակտիվացող, ստուգվում է տարեկան ռեժիմով:' },
    ],
    features: [
      'EI 60 / EI 180 / E60',
      'Առաստաղային ամրացում (առանց ուղղորդիչների)',
      'Intumescent հակահրդեհային շերտեր',
      'Ինտեգրում հրդեհային ազդանշանման',
      'Տեղադրում՝ 7–15 օր',
    ],
  },
];

/* ─── OTHER DATA ─── */

const allServices = [
  { icon: 'sectional', label: 'Սեկցիոն դարպասներ' },
  { icon: 'roller', label: 'Ռոլետային դարպասներ' },
  { icon: 'fire', label: 'Հակահրդեհային դռներ/դարպասներ' },
  { icon: 'panoramic', label: 'Պանորամային դարպասներ' },
  { icon: 'fire', label: 'Հակահրդեհային սեկցիոն համակարգեր' },
  { icon: 'ventilation', label: 'Օդափոխության համակարգեր' },
  { icon: 'highSpeed', label: 'Արագընթաց դարպասներ' },
  { icon: 'control', label: 'Ավտոմատ կառավարման համակարգեր' },
  { icon: 'curtain', label: 'Հրդեհապաշտպան վարագույրներ' },
  { icon: 'sideDoor', label: 'Կողային մուտքի դռներ' },
];

const advantages = [
  {
    num: '01',
    title: 'Որակի վերահսկողություն',
    desc: 'Ներկված ալյումինի և պողպատե ժապավենի յուրաքանչյուր մակերես անցնում է խիստ փորձարկումներ՝ կպչունության, կոռոզիայի և ուլտրամանուշակագույն ճառագայթման դիմադրության համար։',
  },
  {
    num: '02',
    title: 'Բարձրտեխնոլոգիական անոդացված ծածկույթ',
    desc: 'Անոդացված ալյումինե պրոֆիլներն ապահովում են բարձր պաշտպանություն ուլտրամանուշակագույն ճառագայթումից, խոնավությունից և մեխանիկական մաշումից՝ պահպանելով անթերի ճարտարապետական տեսքը տասնամյակներ շարունակ։',
  },
  {
    num: '03',
    title: 'Միջազգային սերտիֆիկացում',
    desc: 'ISO 9001:2015 և ISO 14001:2015 սերտիֆիկացված։ Բոլոր արտադրանքները անկախ փորձարկված և հավատարմագրված են TÜV International Certification-ի կողմից։',
  },
  {
    num: '04',
    title: 'Alutech-ի պաշտոնական գործընկեր',
    desc: 'Որպես Alutech-ի լիազորված ներկայացուցիչ, մենք մատակարարում ենք իսկական եվրոպական արտադրության դարպասային համակարգեր՝ արտադրողի լրիվ երաշխիքով։',
  },
];

const certifications = [
  'ISO 9001:2015', 'ISO 14001:2015', 'TÜV Certified',
  'Alutech Official Partner', 'CE Marked', 'EAC Certified',
];

const faqs = [
  {
    q: 'Ի՞նչ տեսակի դարպասներ եք առաջարկում',
    a: 'Մենք առաջարկում ենք՝ Սեկցիոն դարպասներ, Ռոլետային դարպասներ, Արդյունաբերական դարպասներ, Հակահրդեհային դարպասներ, Հակահրդեհային վարագույրներ, Հակահրդեհային դռներ, Ավտոմատ կառավարման համակարգեր, Արագընթաց դարպասներ, Պանորամային դարպասներ և Կողային մուտքի դռներ։',
  },
  {
    q: 'Ինչքա՞ն է տևում պատվերի իրականացումը',
    a: 'Պատվերի իրականացումը տևում է 7–15 օր՝ կախված դարպասի տեսակից և բարդությունից։ Ճշգրիտ ժամկետները որոշվում են չափագրումից և պատվերի հաստատումից հետո։',
  },
  {
    q: 'Արդյո՞ք կատարում եք անվճար չափագրում',
    a: 'Այո, մենք առաջարկում ենք անվճար չափագրում և խորհրդատվություն։ Մեր մասնագետն այցելում է ձեր օբյեկտ, կատարում ճշգրիտ չափումներ և տրամադրում անհատական գնային առաջարկ՝ առանց պարտավորության։',
  },
  {
    q: 'Արդյո՞ք դարպասները մեկուսացված են (ջերմա և ձայնա)',
    a: 'Այո, մեր սեկցիոն և արդյունաբերական դարպասները հագեցած են սենդվիչ-պանելներով՝ 40–45 մմ հաստությամբ, որոնք ապահովում են գերազանց ջերմա և ձայնամեկուսացում։ Պանելները լցված են պոլիուրեթանային փրփուրով (PUR):',
  },
  {
    q: 'Ի՞նչ երաշխիք եք տրամադրում',
    a: 'Մենք տրամադրում ենք 2 տարվա պաշտոնական երաշխիք բոլոր ապրանքների համար։ Alutech-ի արտադրանքը երաշխավորվում է արտադրողի կողմից։ Հնարավոր է նաև երաշխիքային սպասարկման պայմանագրի երկարաձգում։',
  },
];

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/digitaldoor.am/' },
  { name: 'Facebook', url: 'https://www.facebook.com/digitaldooram/' },
  { name: 'YouTube', url: 'https://www.youtube.com/@doordigital-k' },
];

/* ─── SCROLL REVEAL HOOK ─── */

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const targets = el.querySelectorAll('.scroll-reveal');
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─── RELATED PRODUCTS ─── */

function RelatedProducts({ products, currentId, onProductClick }) {
  const related = products.filter((p) => p.id !== currentId);

  return (
    <section className="border-b border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-10">
          <span className="font-mono text-xs tracking-[0.2em] text-white/30">ԱՅԼ ԱՊՐԱՆՔՆԵՐ</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Դիտեք նաև</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => {
            const Icon = iconMap[p.icon];
            return (
              <button
                key={p.id}
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); onProductClick(p.id); }}
                className="card-hover group text-left overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} className="img-zoom h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="text-white/40 shrink-0"><Icon /></span>
                    <h3 className="text-base font-bold">{p.title}</h3>
                  </div>
                  <p className="mt-2 text-xs text-white/40">{p.features.slice(0, 2).join(' · ')}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── DYNAMIC PRODUCT PAGE ─── */

function ProductPage({ product, onBack, onProductClick, products }) {
  const pageRef = useRef(null);
  const [imgIdx, setImgIdx] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const allImages = [product.img, ...(product.gallery || [])];
  const prevImg = () => setImgIdx((c) => (c === 0 ? allImages.length - 1 : c - 1));
  const nextImg = () => setImgIdx((c) => (c === allImages.length - 1 ? 0 : c + 1));

  useEffect(() => {
    if (pageRef.current) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased selection:bg-white/20 selection:text-white">

      {/* ─── FIXED HEADER ─── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors duration-300 group"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1">
              <path d="M10 2 L4 8 L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Վերադառնալ կատալոգ
          </button>
          <span className="hidden sm:block text-xs font-mono tracking-[0.2em] text-white/30">DIGITAL DOOR</span>
        </div>
      </header>

      {/* ─── HERO: GENERIC BACKGROUND ─── */}
      <section className="relative h-[45vh] sm:h-[55vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607688968-a2ad6e6791ca?w=1920&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-black/60" />
        <div className="relative mx-auto max-w-7xl px-6 pb-10 lg:px-10 w-full">
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] text-white/30 uppercase">
            <span className="w-8 h-[1px] bg-white/30" />
            {product.number}
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl max-w-3xl">
            {product.title}
          </h1>
          <p className="mt-1 text-sm font-mono tracking-wider text-white/30 uppercase">{product.subtitle}</p>
        </div>
      </section>

      {/* ─── PRODUCT IMAGE / GALLERY ─── */}
      <section className="bg-[#0a0a0a] border-b border-white/[0.06]">
        <div className="relative flex items-center justify-center" style={{ minHeight: '70vh' }}>
          {allImages.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{ opacity: imgIdx === i ? 1 : 0, pointerEvents: imgIdx === i ? 'auto' : 'none' }}
            >
              <img
                src={src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover blur-3xl opacity-30 scale-110"
              />
              <div className="relative h-full w-full flex items-center justify-center px-4 lg:px-8">
                <button onClick={() => setLightbox(src)} className="w-full h-full flex items-center justify-center">
                  <img
                    src={src}
                    alt={`${product.title} — ${i + 1}`}
                    className="max-h-[70vh] lg:max-h-[80vh] w-full object-cover cursor-pointer"
                    style={{
                      maskImage: 'radial-gradient(ellipse at center, black 55%, transparent 100%)',
                      WebkitMaskImage: 'radial-gradient(ellipse at center, black 55%, transparent 100%)',
                    }}
                  />
                </button>
              </div>
            </div>
          ))}
          {allImages.length > 1 && (
            <>
              <button onClick={prevImg} className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-20 text-white/30 hover:text-white transition-all duration-300 hover:-translate-x-1 text-3xl md:text-5xl font-light px-2 py-8">
                〈
              </button>
              <button onClick={nextImg} className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-20 text-white/30 hover:text-white transition-all duration-300 hover:translate-x-1 text-3xl md:text-5xl font-light px-2 py-8">
                〉
              </button>
            </>
          )}
        </div>
        {allImages.length > 1 && (
          <div className="flex justify-center gap-2 pb-8 lg:pb-12">
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIdx(i)}
                className={`h-1 rounded-full transition-all duration-300 ${i === imgIdx ? 'bg-white w-8' : 'bg-white/20 w-4 hover:bg-white/40'}`}
              />
            ))}
          </div>
        )}
      </section>

      {/* ─── DESCRIPTION ─── */}
      <section className="border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-10 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-fade-in-up" style={{ animationFillMode: 'both' }}>
            {product.title}
          </h2>
          <p className="mt-1 text-xs font-mono tracking-wider text-white/30 uppercase animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            {product.subtitle}
          </p>
          <div className="mt-8 text-base leading-relaxed text-white/50 sm:text-lg animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            {product.deepDescription}
          </div>
          <div className="mt-8 flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: '0.25s', animationFillMode: 'both' }}>
            {product.features.map((f) => (
              <span key={f} className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs text-white/40">
                <span className="block h-[1px] w-3 bg-white/20 shrink-0" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERIES ─── */}
      {product.series.length > 0 && (
        <section className="border-b border-white/[0.06] bg-[#0a0a0a]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="mb-10">
              <span className="font-mono text-xs tracking-[0.2em] text-white/30">ՍԵՐԻԱՅԻ ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Հասանելի սերիաներ</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {product.series.map((s, i) => (
                <div
                  key={s.name}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'both' }}
                >
                  <h3 className="text-xl font-bold">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/40">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── TECHNICAL SPECIFICATIONS ─── */}
      <section className="border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-10">
            <span className="font-mono text-xs tracking-[0.2em] text-white/30">ՏԵԽՆԻԿԱԿԱՆ ԲՆՈՒԹԱԳՐԵՐ</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Տեխնիկական բնութագրեր</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {product.specs.map((spec, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-4 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}
              >
                <span className="text-xs font-mono tracking-wider text-white/30 uppercase shrink-0 min-w-[40%]">
                  {spec.label}
                </span>
                <span className="text-sm text-white/70 text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-10">
            <span className="font-mono text-xs tracking-[0.2em] text-white/30">ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Ինչու ընտրել այս համակարգը</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {product.benefits.map((b, i) => (
              <div
                key={b.title}
                className="border-t border-white/[0.08] pt-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                <h3 className="text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/40">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELATED PRODUCTS ─── */}
      <RelatedProducts products={products} currentId={product.id} onProductClick={onProductClick} />

      {/* ─── CTA ─── */}
      <section className="bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:py-32">
          <div className="animate-fade-in-up" style={{ animationFillMode: 'both' }}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Պատվիրել {product.title.toLowerCase()}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/40">
              Լրացրեք հայտը անվճար չափագրման և անհատական գնային առաջարկի համար:
            </p>
            <a
              href="#"
              className="magnetic-btn group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0a0a] hover:bg-white/90 transition-all duration-300"
            >
              Լրացնել հայտ
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/[0.06] bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-wider text-white/20">
            <span>&copy; {new Date().getFullYear()} Digital Door.</span>
            <button onClick={onBack} className="text-white/30 hover:text-white transition-colors duration-300">
              &larr; Վերադառնալ կատալոգ
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono tracking-wider text-white/30">
            <a href="tel:+37433505022" className="hover:text-white transition-colors duration-300">+374 33 50 50 22</a>
            {socialLinks.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ─── LIGHTBOX ─── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white text-3xl font-light transition-colors duration-300 z-10"
          >
            &#10005;
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-screen max-w-full p-4 object-contain cursor-zoom-out"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

/* ─── HOME PAGE ─── */

function HomePage({ onProductClick }) {
  const catalogRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const advantagesRef = useScrollReveal();
  const faqRef = useScrollReveal();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased selection:bg-white/20 selection:text-white">

      {/* ─── HEADER ─── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-lg font-bold tracking-tight text-white">DIGITAL</span>
            <span className="text-lg font-light tracking-tight text-white/40 group-hover:text-white/60 transition-colors">DOOR</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/50">
            <a href="#" className="relative py-1 hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Գլխավոր</a>
            <a href="#catalog" className="relative py-1 hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Կատալոգ</a>
            <a href="#services" className="relative py-1 hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Ծառայություններ</a>
            <a href="#faq" className="relative py-1 hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">ՀՏՀ</a>
            <a href="#" className="relative py-1 hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Կապ</a>
          </nav>
          <a href="#" className="magnetic-btn hidden sm:inline-flex items-center rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white hover:border-white/60 transition-all duration-300">Լրացնել հայտ</a>
          <button className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Open menu">
            <span className="block h-[1.5px] w-5 bg-white/70" />
            <span className="block h-[1.5px] w-5 bg-white/70" />
            <span className="block h-[1.5px] w-5 bg-white/70" />
          </button>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600607688968-a2ad6e6791ca?w=1920&q=85" alt="" className="h-full w-full object-cover animate-ken-burns" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-10 lg:pt-40 lg:pb-32 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] text-white/40 uppercase animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <span className="w-8 h-[1px] bg-white/30" />«Smart» դարպասների տեղադրում և ավտոմատացում
            </div>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tighter sm:text-7xl lg:text-8xl animate-fade-in-up" style={{ animationDelay: '0.25s', animationFillMode: 'both' }}>
              Խելացի դարպասների<br /><span className="text-white/30">տեղադրում և ավտոմատացում։</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/40 sm:text-lg animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              Digital Door-ը մատակարարում և տեղադրում է պրեմիում ավտոմատացված դարպասային համակարգեր բնակելի, կոմերցիոն և արդյունաբերական օբյեկտների համար։ Alutech-ի պաշտոնական ներկայացուցիչը Հայաստանում 2015 թվականից։
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.55s', animationFillMode: 'both' }}>
              <a href="#catalog" className="magnetic-btn group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0a0a] hover:bg-white/90 transition-all duration-300">
                Դիտել կատալոգը<span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
              <a href="#" className="magnetic-btn group inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:border-white/50 transition-all duration-300">
                Անվճար չափագրում<span className="inline-block text-white/40 text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-glow">
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── CATALOG ─── */}
      <section id="catalog" ref={catalogRef} className="border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
          <div className="mb-16 scroll-reveal">
            <span className="font-mono text-xs tracking-[0.25em] text-white/30">01 // Ապրանքատեսականի</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Դռներ և Դարպասներ</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/35">Ծանոթացեք մեր արտադրանքի ամբողջական տեսականուն։ Յուրաքանչյուր համակարգ հասանելի է մի քանի սերիաներով՝ մուտքայինից մինչև պրեմիում։</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {productsData.map((product) => {
              const Icon = iconMap[product.icon];
              return (
                <article key={product.id} className="card-hover group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={product.img} alt={product.title} className="img-zoom h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                  </div>
                  <div className="absolute top-5 left-5 flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-white/30">
                    <span className="text-white/50">{product.number}</span>
                    <span className="w-6 h-[1px] bg-white/20" />
                  </div>
                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 text-white/60 shrink-0"><Icon /></div>
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold leading-snug sm:text-2xl">{product.title}</h3>
                        <p className="mt-1 text-xs font-mono tracking-wider text-white/30 uppercase">{product.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-white/40">{product.features.slice(0, 2).join(' · ')}…</p>
                    <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-white/35">
                          <span className="block h-[1px] w-3 bg-white/20 shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => onProductClick(product.id)} className="magnetic-btn group/btn mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors duration-300">
                      Իմանալ ավելին<span className="inline-block transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:opacity-100 opacity-60">&rarr;</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FULL-BLEED IMAGE BREAK ─── */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden border-b border-white/[0.06]">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85" alt="" className="h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <span className="font-mono text-xs tracking-[0.25em] text-white/40">2015-ից</span>
            <blockquote className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-light italic leading-snug text-white/80 max-w-2xl">
              &ldquo;Բարձրակարգ արտադրանք, որի որակը հաստատված է ԱՊՀ-ի, Եվրոպայի և Ամերիկայի առաջատար հավատարմագրված կազմակերպությունների սերտիֆիկատներով։&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" ref={servicesRef} className="border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
          <div className="mb-16 scroll-reveal">
            <span className="font-mono text-xs tracking-[0.25em] text-white/30">02 // Մեր ծառայությունները</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Ինչ ենք առաջարկում</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/35">Digital Door-ն առաջարկում է արտադրանք ինչպես կենցաղային, այնպես էլ արդյունաբերական օգտագործման համար՝ արտադրողի երաշխիքով։</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {allServices.map((svc) => {
              const Icon = iconMap[svc.icon];
              return (
                <div key={svc.label} className="scroll-reveal group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm font-medium text-white/50 hover:bg-white/[0.05] hover:text-white/80 hover:border-white/[0.12] transition-all duration-300">
                  <span className="text-white/30 group-hover:text-white/50 transition-colors duration-300 shrink-0"><Icon /></span>
                  {svc.label}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ADVANTAGES ─── */}
      <section ref={advantagesRef} className="border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
          <div className="mb-16 scroll-reveal">
            <span className="font-mono text-xs tracking-[0.25em] text-white/30">03 // Առավելություններ</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Ինչու <span className="text-white/30">Digital Door</span></h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            {advantages.map((adv) => (
              <div key={adv.num} className="scroll-reveal border-t border-white/[0.08] pt-6">
                <span className="font-mono text-xs tracking-[0.2em] text-white/20">{adv.num}</span>
                <h3 className="mt-3 text-2xl font-bold">{adv.title}</h3>
                <p className="mt-3 leading-relaxed text-white/40 max-w-md">{adv.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap gap-3 scroll-reveal">
            {certifications.map((c) => (
              <span key={c} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-xs font-mono tracking-wider text-white/30">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" ref={faqRef} className="relative overflow-hidden border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1920&q=85" alt="" className="h-full w-full object-cover opacity-20" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-32">
          <div className="bg-[#0a0a0a]/70 backdrop-blur-sm rounded-2xl border border-white/[0.06] p-8 lg:p-12">
            <div className="mb-16 scroll-reveal text-center">
              <span className="font-mono text-xs tracking-[0.25em] text-white/30">04 // ՀՏՀ</span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Հաճախ տրվող հարցեր</h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/35">Ամենատարածված հարցերը մեր հաճախորդների կողմից։</p>
            </div>
            <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="scroll-reveal rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-300">
                  <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="flex w-full items-center justify-between px-6 py-5 text-left text-sm font-medium text-white/70 hover:text-white transition-colors duration-200">
                    <span>{faq.q}</span>
                    <span className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/40">
                        <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-5 text-sm leading-relaxed text-white/40 border-t border-white/[0.06] pt-4">{faq.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="border-b border-white/[0.06] bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:py-32">
          <div className="scroll-reveal">
            <span className="font-mono text-xs tracking-[0.25em] text-white/30">05 // Կապ</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Անվճար չափագրում տեղում</h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/40">Մենք այցելում ենք ձեր օբյեկտ, կատարում ճշգրիտ չափագրում և տրամադրում անհատական գնային առաջարկ՝ առանց պարտավորության։</p>
            <a href="#" className="magnetic-btn group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0a0a] hover:bg-white/90 transition-all duration-300">
              Լրացնել հայտ<span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1 scroll-reveal">
              <a href="#" className="flex items-center gap-2 group">
                <span className="text-lg font-bold tracking-tight text-white">DIGITAL</span>
                <span className="text-lg font-light tracking-tight text-white/40 group-hover:text-white/60 transition-colors">DOOR</span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-white/30 max-w-xs">«Smart» դարպասների տեղադրում և ավտոմատացում։ Alutech-ի պաշտոնական ներկայացուցիչը Հայաստանում 2015 թվականից։</p>
            </div>
            <div className="scroll-reveal">
              <h4 className="text-xs font-mono tracking-[0.2em] text-white/30 uppercase">Արագ հղումներ</h4>
              <ul className="mt-4 space-y-3">
                {['Գլխավոր', 'Կատալոգ', 'Ծառայություններ', 'ՀՏՀ', 'Կապ', 'Գաղտնիության քաղաքականություն'].map((link) => (
                  <li key={link}><a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-300">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="scroll-reveal">
              <h4 className="text-xs font-mono tracking-[0.2em] text-white/30 uppercase">Կապ</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/40">
                <li><a href="tel:+37433505022" className="hover:text-white transition-colors duration-300">+374 33 50 50 22</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Լրացնել ձևաթուղթ</a></li>
                <li>Երևան, Հայաստան</li>
                <li>Երկ–Ուրբ 09:00 – 18:00</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/[0.06] pt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono tracking-wider text-white/30">
              <a href="tel:+37433505022" className="hover:text-white transition-colors duration-300">+374 33 50 50 22</a>
              {socialLinks.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                  {s.name}
                </a>
              ))}
            </div>
            <span className="text-xs font-mono tracking-wider text-white/20">&copy; {new Date().getFullYear()} Digital Door.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── APP (Mock Router) ─── */

function App() {
  const [currentView, setCurrentView] = useState({ page: 'home', productId: null });

  const handleProductClick = (productId) => {
    setCurrentView({ page: 'product', productId });
  };

  const handleBackToCatalog = () => {
    setCurrentView({ page: 'home', productId: null });
  };

  if (currentView.page === 'product') {
    const product = productsData.find((p) => p.id === currentView.productId);
    if (!product) return <HomePage onProductClick={handleProductClick} />;
    return <ProductPage key={product.id} product={product} onBack={handleBackToCatalog} onProductClick={handleProductClick} products={productsData} />;
  }

  return <HomePage onProductClick={handleProductClick} />;
}

export default App;
