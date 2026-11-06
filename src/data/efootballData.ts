import { PlayerBuild, Coach, SpecialBuild, WheelPrize } from '../types';

export const mockPlayers: PlayerBuild[] = [
  {
    id: 'messi-2024',
    name: 'Lionel Messi',
    arabicName: 'ليونيل ميسي (إبيك - بوسطر)',
    position: 'CF / SS',
    clubOrCountry: 'إنتر ميامي / الأرجنتين',
    rating: 104,
    maxRating: 106,
    cardType: 'Epic',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&auto=format&fit=crop&q=80',
    shooting: 96,
    passing: 95,
    dribbling: 101,
    dexterity: 98,
    lowerBody: 90,
    aerial: 70,
    defending: 50,
    buildPoints: {
      shooting: 10,
      dribbling: 12,
      dexterity: 12,
      lowerBody: 8,
      aerial: 0,
      defending: 0
    },
    skills: ['Double Touch', 'Sole Control', 'One-touch Pass', 'Through Passing', 'Long Range Curler', 'Knuckle Shot'],
    description: 'أفضل لاعب كلاسيكي مع دقة تسديد خيالية ومراوغة لصيقة لا يمكن إيقافها في المساحات الضيقة.'
  },
  {
    id: 'cruyff-epic',
    name: 'Johan Cruyff',
    arabicName: 'يوهان كرويف (إبيك الأساطير)',
    position: 'AMF / SS',
    clubOrCountry: 'برشلونة / هولندا',
    rating: 103,
    maxRating: 105,
    cardType: 'Epic',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&auto=format&fit=crop&q=80',
    shooting: 92,
    passing: 94,
    dribbling: 97,
    dexterity: 96,
    lowerBody: 92,
    aerial: 75,
    defending: 55,
    buildPoints: {
      shooting: 8,
      dribbling: 10,
      dexterity: 12,
      lowerBody: 10,
      aerial: 0,
      defending: 0
    },
    skills: ['One-touch Pass', 'Through Passing', 'Double Touch', 'Sombrero', 'Pinpoint Crossing', 'Outside Curler'],
    description: 'صانع ألعاب من طراز فريد بأسلوب (Hole Player)، يتحرك بدقة في مناطق الجزاء ويسجل و يصنع بكل سهولة.'
  },
  {
    id: 'vieira-epic',
    name: 'Patrick Vieira',
    arabicName: 'باتريك فييرا (حائط الدفاع)',
    position: 'DMF',
    clubOrCountry: 'أرسنال / فرنسا',
    rating: 102,
    maxRating: 104,
    cardType: 'Epic',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&auto=format&fit=crop&q=80',
    shooting: 75,
    passing: 88,
    dribbling: 85,
    dexterity: 89,
    lowerBody: 94,
    aerial: 96,
    defending: 99,
    buildPoints: {
      shooting: 0,
      dribbling: 4,
      dexterity: 8,
      lowerBody: 10,
      aerial: 10,
      defending: 12
    },
    skills: ['Interception', 'Man Marking', 'Acrobatic Clear', 'Captaincy', 'Fighting Spirit', 'One-touch Pass'],
    description: 'أفضل محور ارتكاز دفاعي (Anchor Man) في تاريخ إي فوتبول، يقطع كل الكرات الهوائية والأرضية بشراسة.'
  },
  {
    id: 'maldini-epic',
    name: 'Paolo Maldini',
    arabicName: 'باولو مالديني (الأسطورة الخالدة)',
    position: 'CB / LB',
    clubOrCountry: 'ميلان / إيطاليا',
    rating: 103,
    maxRating: 105,
    cardType: 'Epic',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&auto=format&fit=crop&q=80',
    shooting: 60,
    passing: 84,
    dribbling: 82,
    dexterity: 90,
    lowerBody: 92,
    aerial: 92,
    defending: 101,
    buildPoints: {
      shooting: 0,
      dribbling: 0,
      dexterity: 8,
      lowerBody: 10,
      aerial: 10,
      defending: 14
    },
    skills: ['Interception', 'Man Marking', 'Slide Tackle', 'Acrobatic Clear', 'Captaincy', 'Blocker'],
    description: 'المدافع الأذكى في اللعبة، سرعة عالية وتمركز مثالي يمنع أي مهاجم مهما كانت سرعته.'
  },
  {
    id: 'neymar-showtime',
    name: 'Neymar Jr',
    arabicName: 'نيمار جونيور (شو تايم الساحر)',
    position: 'LWF / AMF',
    clubOrCountry: 'الهلال / البرازيل',
    rating: 103,
    maxRating: 105,
    cardType: 'Show Time',
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&auto=format&fit=crop&q=80',
    shooting: 90,
    passing: 92,
    dribbling: 103,
    dexterity: 98,
    lowerBody: 88,
    aerial: 65,
    defending: 45,
    buildPoints: {
      shooting: 8,
      dribbling: 14,
      dexterity: 12,
      lowerBody: 6,
      aerial: 0,
      defending: 0
    },
    skills: ['Double Touch', 'Flip Flap', 'Sombrero', 'Cut Behind & Turn', 'No Look Pass', 'OTP'],
    description: 'ملك المهارات الفردية في إي فوتبول، مراوغاته تتخطى المدافعين بسلاسة مذهلة.'
  },
  {
    id: 'mbappe-epic',
    name: 'Kylian Mbappé',
    arabicName: 'كيليان مبابي (صاروخ الهجوم)',
    position: 'CF / LWF',
    clubOrCountry: 'ريال مدريد / فرنسا',
    rating: 103,
    maxRating: 105,
    cardType: 'Epic',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&auto=format&fit=crop&q=80',
    shooting: 95,
    passing: 82,
    dribbling: 95,
    dexterity: 99,
    lowerBody: 99,
    aerial: 80,
    defending: 40,
    buildPoints: {
      shooting: 10,
      dribbling: 8,
      dexterity: 12,
      lowerBody: 12,
      aerial: 0,
      defending: 0
    },
    skills: ['Double Touch', 'Sole Control', 'Scotch Move', 'Heading', 'Acrobatic Finishing', 'Fighting Spirit'],
    description: 'أسرع مهاجم في اللعبة، كابوس المدافعين في الهجمات المرتدة السريعة.'
  }
];

export const mockCoaches: Coach[] = [
  {
    id: 'xabi-alonso',
    name: 'Xabi Alonso',
    arabicName: 'تشابي ألونسو',
    team: 'باير لي버كوزن',
    formation: '4-2-1-3 / 3-4-2-1',
    playStyle: 'Quick Counter / Possession',
    playStyleArabic: 'هجوم مرتد سريع + استحواذ',
    proficiency: 88,
    boost: '+1 تسرع +1 تمرير منخفض',
    description: 'المدرب الأكثر طلباً في المتا meta الحالية، يجمع بين شراسة الهجوم المرتد وسلاسة الاستحواذ.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'pep-guardiola',
    name: 'Pep Guardiola',
    arabicName: 'بيب جوارديولا',
    team: 'مانشستر سيتي',
    formation: '4-3-3',
    playStyle: 'Possession Game',
    playStyleArabic: 'لعب الاستحواذ',
    proficiency: 87,
    boost: '+2 تمرير دقيق +1 تحكم بالكرة',
    description: 'خياري المفضل للاعبي التمريرات القصيرة وخلق المساحات الخانقة للمنافس.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'j-cruijff',
    name: 'J. Cruijff',
    arabicName: 'يوهان كرويف (مدرب)',
    team: 'أساطير هولندا',
    formation: '3-4-3 / 4-2-2-2',
    playStyle: 'Out Wide / Quick Counter',
    playStyleArabic: 'الأطراف والهجوم السريع',
    proficiency: 86,
    boost: '+2 سرعة المراوغة +1 تسديد',
    description: 'مدرب هجومي بحت يمنح اللاعبين حرية حركة استثنائية في الثلث الأخير.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'z-zeitz',
    name: 'Z. Zeitz (J. Klopp)',
    arabicName: 'يورغن كلوب (زيتر)',
    team: 'ليفربول السابق',
    formation: '4-3-3',
    playStyle: 'Long Ball Counter',
    playStyleArabic: 'هجوم مرتد طويل',
    proficiency: 85,
    boost: '+2 لياقة بدنية +1 ضغط',
    description: 'المدرب الأقوى للضغط العالي والسرعة الجنونية في استخلاص الكرة من دفاع الخصم.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80'
  }
];

export const mockSpecialBuilds: SpecialBuild[] = [
  {
    id: 'build-1',
    title: 'Epic Messi Ultimate Meta Build',
    arabicTitle: 'تطوير ميسي الأسطوري (ميتا البطولات)',
    category: 'Epic Booster',
    author: 'الساعدي بروفيشنال',
    targetPlayer: 'Lionel Messi (106 Max)',
    rating: '106 Overall',
    details: [
      'توزيع نقاط مخصص لزيادة التوازن والتسديد من خارج الـ 18.',
      'التركيز على التسارع (98) وخفة الحركة لتجاوز المدافعين بثبات.',
      'إضافة مهارة One-touch Pass لتسريع رتم الهجوم.'
    ],
    statAllocation: {
      'التسديد': 10,
      'المراوغة': 12,
      'خفة الحركة': 12,
      'الجزء السفلي': 8
    }
  },
  {
    id: 'build-2',
    title: 'Impenetrable Vieira DMF Wall',
    arabicTitle: 'جدار فييرا المنيع (محور ارتكاز خارق)',
    category: 'Defensive Wall',
    author: 'فريق الساعدي للتحليل',
    targetPlayer: 'Patrick Vieira',
    rating: '104 Overall',
    details: [
      'رفع الدفاع والاعتراض إلى الحد الأقصى (99).',
      'زيادة القدرة الهوائية والالتحامات البدنية لمنع الكرات الطولية.',
      'تثبيت تعليمات فردية: دفاع متقدم / حراسة رجل لرجل.'
    ],
    statAllocation: {
      'الدفاع': 14,
      'القوة البدنية': 10,
      'الكرات الهوائية': 10,
      'السرعة': 8
    }
  },
  {
    id: 'build-3',
    title: 'F2P God Squad 4-2-1-3 Formation Meta',
    arabicTitle: 'تشكيلة المجانيين الخارقة 4-2-1-3',
    category: 'F2P Beast',
    author: 'خبير التكتيك الساعدي',
    targetPlayer: 'تشكيلة كاملة',
    rating: 'تقييم عام 101+',
    details: [
      'اختيار أفضل اللاعبين المجانيين من هدايا كونامي (Showtime & Highlight).',
      'استخدام محورين أحدهما دفاعي بحت والآخر بوكس تو بوكس.',
      'الاعتماد على أجنحة مقلوبة (Inverted Wingers) للتسديد المقوس.'
    ],
    statAllocation: {
      'توازن الفريق': 95,
      'السرعة الدفاعية': 90
    }
  }
];

export const wheelPrizes: WheelPrize[] = [
  { id: 1, title: '1,000 eFootball Coins', arabicTitle: '1,000 عملة إي فوتبول مجاناً!', type: 'coins', value: '1000', color: 'from-amber-500 to-yellow-600', icon: '🪙' },
  { id: 2, title: 'Epic Free Account', arabicTitle: 'حساب إي فوتبول أسطوري (ميسي + رونالدو + فييرا)', type: 'account', value: 'epic_acc', color: 'from-blue-600 to-indigo-700', icon: '👑' },
  { id: 3, title: '50% Store Discount', arabicTitle: 'خصم 50% على خدمات متجر الساعدي', type: 'discount', value: '50', color: 'from-emerald-600 to-teal-700', icon: '🎟️' },
  { id: 4, title: '500 Coins', arabicTitle: '500 عملة إي فوتبول', type: 'coins', value: '500', color: 'from-amber-600 to-yellow-700', icon: '🪙' },
  { id: 5, title: 'Legendary Training Pack', arabicTitle: 'حزمة تطوير لاعبين خارقة (50 برنامج تدريب)', type: 'training', value: 'training', color: 'from-purple-600 to-pink-700', icon: '⚡' },
  { id: 6, title: 'Try Again Tomorrow', arabicTitle: 'حظاً أوفر في المرة القادمة! جرب غداً', type: 'try_again', value: '0', color: 'from-slate-700 to-slate-800', icon: '🔄' },
];
