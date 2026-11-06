import { PubgSensitivityCode, PubgWeaponGuide } from '../types';

export const pubgCodesList: PubgSensitivityCode[] = [
  {
    id: 'code-iphone-11-13',
    deviceName: 'آيفون 11 / 12 / 13 (عادي وبرو)',
    category: 'iphone',
    code: '7307-8812-4521-9034-718',
    type: 'جيروسكوب كامل + ثبات عالي',
    hasGyro: true,
    fingers: 4,
    bestFor: 'M416 + AKM (ثبات ليزري للمدى المتوسط)',
    description: 'كود مخصص لمعالجات أبل A13/A14/A15، يعطي سرعة استجابة فائقة للشاشة 60/120Hz مع دقة تصويب ليزرية للسكوبات 3x و 4x.',
    specs: {
      cameraNoScope: 120,
      cameraRedDot: 58,
      ads3x: 32,
      ads4x: 24,
      gyro3x: 275
    }
  },
  {
    id: 'code-iphone-14-16',
    deviceName: 'آيفون 14 / 15 / 16 برو وبرو ماكس',
    category: 'iphone',
    code: '7307-9923-1487-6321-409',
    type: 'جيروسكوب فائق السرعة (120 FPS)',
    hasGyro: true,
    fingers: 4,
    bestFor: 'M416 سكوب 6 محول إلى 3 + مواجهات قريبة',
    description: 'معدل خصيصاً لشاشات ProMotion 120Hz فائقة الحساسية، يمنع ارتداد السلاح ويوفر تحكماً استثنائياً في المواجهات القريبة والبعيدة.',
    specs: {
      cameraNoScope: 125,
      cameraRedDot: 60,
      ads3x: 30,
      ads4x: 22,
      gyro3x: 290
    }
  },
  {
    id: 'code-samsung-s23-s24',
    deviceName: 'سامسونج Galaxy S23 / S24 Ultra',
    category: 'samsung',
    code: '7307-4412-8901-2365-812',
    type: 'جيروسكوب + ADS متوازن',
    hasGyro: true,
    fingers: 4,
    bestFor: 'M416 + سنايبر AWM / M24',
    description: 'أفضل كود لمعالجات سنابدراجون الجيل الثاني والثالث مع شاشات Dynamic AMOLED 120Hz، يقضي تماماً على تشتت الطلقات.',
    specs: {
      cameraNoScope: 118,
      cameraRedDot: 56,
      ads3x: 32,
      ads4x: 25,
      gyro3x: 280
    }
  },
  {
    id: 'code-xiaomi-poco-redmi',
    deviceName: 'شاومي Poco X6 Pro / Redmi Note 13 Pro',
    category: 'xiaomi',
    code: '7307-5561-3419-8720-631',
    type: 'جيروسكوب سريع للمواجهات الحامية',
    hasGyro: true,
    fingers: 4,
    bestFor: 'AKM + M416 + UMP45',
    description: 'حساسية مصممة لمعدل لمس شاومي السريع 480Hz، تمنحك أفضلية في الدوج والبيك السريع بدون أي تأخير استجابة.',
    specs: {
      cameraNoScope: 122,
      cameraRedDot: 62,
      ads3x: 34,
      ads4x: 26,
      gyro3x: 295
    }
  },
  {
    id: 'code-infinix-tecno',
    deviceName: 'إنفينكس وتكنو (جميع الفئات)',
    category: 'infinix',
    code: '7307-2290-7814-5532-119',
    type: 'حساسية ADS معززة + جيروسكوب خفيف',
    hasGyro: true,
    fingers: 3,
    bestFor: 'ثبات الأسلحة التلقائية للمسافات القريبة والمتوسطة',
    description: 'موزونة بدقة للأجهزة الاقتصادية والمتوسطة (معالجات هيليو وجي 99) لضمان عدم حدوث لاغ أو تقطيع أثناء فتح السكوب وإطلاق النار.',
    specs: {
      cameraNoScope: 110,
      cameraRedDot: 52,
      ads3x: 36,
      ads4x: 28,
      gyro3x: 260
    }
  },
  {
    id: 'code-ipad-9-pro',
    deviceName: 'آيباد 9 / 10 / آيباد برو وAir',
    category: 'ipad',
    code: '7307-7714-9023-4187-550',
    type: 'حساسية شاشة عريضة آيباد (iPad View)',
    hasGyro: true,
    fingers: 5,
    bestFor: 'ثبات خرافي M416 سكوب 4 + سنايبر سريع',
    description: 'مضبوطة لنسبة أبعاد شاشات الآيباد الكبيرة (4:3) ومجال الرؤية الواسع 90، تمنحك ثباتاً يشبه الماوس والكيبورد بدقة متناهية.',
    specs: {
      cameraNoScope: 95,
      cameraRedDot: 45,
      ads3x: 25,
      ads4x: 18,
      gyro3x: 240
    }
  },
  {
    id: 'code-no-gyro-beginners',
    deviceName: 'بدون جيروسكوب (للمبتدئين وعشاق اللمس)',
    category: 'nogeneric',
    code: '7307-1189-6652-3341-902',
    type: 'بدون جيروسكوب (سحب أصبع فقط)',
    hasGyro: false,
    fingers: 2,
    bestFor: 'سهولة التحكم وتثبيت السلاح بالسحب لأسفل',
    description: 'أفضل حساسية بدون تشغيل الجيروسكوب، تعتمد على حساسية ADS ذكية تجعل سحب الإبهام كافياً لإيقاف أي ارتداد للسلاح بسهولة.',
    specs: {
      cameraNoScope: 130,
      cameraRedDot: 68,
      ads3x: 42,
      ads4x: 32,
      gyro3x: 0
    }
  },
  {
    id: 'code-full-gyro-pros',
    deviceName: 'جيروسكوب كامل (للاعبين المصنفين والمحترفين)',
    category: 'gyro',
    code: '7307-3398-7712-4409-883',
    type: 'جيروسكوب احترافي كامل 350% / 400%',
    hasGyro: true,
    fingers: 4,
    bestFor: 'تتبع الأهداف السريعة والسيارات + هيد شوت تلقائي',
    description: 'كود بطولات ومحترفين، حساسية سريعة جداً تعتمد على حركة اليد بالكامل لتحويل السلاح إلى ليزر لا يخطئ رأس الخصم إطلاقاً.',
    specs: {
      cameraNoScope: 135,
      cameraRedDot: 75,
      ads3x: 38,
      ads4x: 30,
      gyro3x: 350
    }
  },
  {
    id: 'code-4-fingers-gyro',
    deviceName: 'إعداد 4 أصابع + جيروسكوب متوسط',
    category: 'gyro',
    code: '7307-6641-2298-5570-349',
    type: '4 أصابع (كلاسيكي وسلس)',
    hasGyro: true,
    fingers: 4,
    bestFor: 'الدمج بين سرعة البيك (Peeking) وثبات الإطلاق',
    description: 'توزيع الحساسية الأكثر توازناً للاعبي الـ 4 أصابع، توفر استقراراً ممتازاً بين زر الإطلاق وزر السكوب وتدوير الكاميرا بسلاسة.',
    specs: {
      cameraNoScope: 120,
      cameraRedDot: 58,
      ads3x: 32,
      ads4x: 24,
      gyro3x: 300
    }
  },
  {
    id: 'code-5-fingers-speed',
    deviceName: 'إعداد 5 أصابع (للمنافسة العالية والرومات)',
    category: 'gyro',
    code: '7307-8890-1123-9945-776',
    type: '5 أصابع احترافي (السرعة القصوى)',
    hasGyro: true,
    fingers: 5,
    bestFor: 'الدروب شوت والقفز السريع وسحق الخصوم في المستودع والرومات',
    description: 'حساسية مصممة للضغط العالي ولعب البطولات، تمنحك قدرة على القفز والبيك والانبطاح أثناء تثبيت الإيم على رأس الخصم بدون اهتزاز.',
    specs: {
      cameraNoScope: 128,
      cameraRedDot: 65,
      ads3x: 35,
      ads4x: 27,
      gyro3x: 340
    }
  }
];

export const pubgWeaponGuides: PubgWeaponGuide[] = [
  {
    id: 'weapon-m416',
    name: 'M416',
    arabicName: 'إم فور (سيد الثبات المكتسح)',
    ammo: '5.56mm',
    recommendedGrip: 'المقبض المائل (Angled Foregrip) لتقليل الارتداد الأفقي، أو الرأسي (Vertical Foregrip) للثبات المباشر',
    recommendedMuzzle: 'المعوض (Compensator) أفضل خيار رسمي لإلغاء الاهتزاز',
    recommendedScope: 'سكوب 6x محول إلى 3x، أو سكوب 3x و 4x',
    sensitivityTips: 'اجعل حساسية جيروسكوب سكوب 3 بين 260% إلى 290%، وحساسية ADS بين 30% إلى 34%. هذا يجعل رشاش السلاح كخط ليزر مستقيم.',
    recoilControl: 'اسحب إصبعك أو أمِل جهازك لأسفل بزاوية خفيفة وثابتة بعد الطلقة الخامسة حيث يبدأ الارتداد التصاعدي.'
  },
  {
    id: 'weapon-akm',
    name: 'AKM',
    arabicName: 'إيه كيه إم (وحش الضرر القريب)',
    ammo: '7.62mm',
    recommendedGrip: 'لا يدعم مقبض، لذا الاعتماد الكامل على المعوض والحساسية',
    recommendedMuzzle: 'معوض AR (ضروري جداً لتقليل الارتداد العمودي العنيف)',
    recommendedScope: 'النقطة الحمراء (Red Dot) أو بدون سكوب (Iron Sight)',
    sensitivityTips: 'ارفع حساسية ADS للنقطة الحمراء بمقدار +5% إضافية عن الـ M416، لأن ارتداد رصاص 7.62 أثقل بكثير.',
    recoilControl: 'وجّه دائماً الطلقات الأولى نحو أسفل عنق أو صدر الخصم، وسيرتفع السلاح تلقائياً ليحقق هيد شوت حاسم من الطلقة الثانية.'
  },
  {
    id: 'weapon-snipers',
    name: 'AWM / Kar98k / M24',
    arabicName: 'قناصات الطلقة الواحدة (سنايبر)',
    ammo: 'Magnum .300 / 7.62mm',
    recommendedGrip: 'لا يوجد - استخدم خدة القناص (Cheek Pad) لتقليل اهتزاز المنظار بنسبة 20%',
    recommendedMuzzle: 'كاتم الصوت (Suppressor) لإخفاء مكانك بالكامل وإرباك الخصم',
    recommendedScope: 'سكوب 8x أو 6x',
    sensitivityTips: 'حساسية سكوب 8x يجب أن تكون منخفضة وثابتة (بين 10% إلى 14% كاميرا، و 80% إلى 95% جيروسكوب) لتضمن عدم تحرك المؤشر عن رأس الخصم.',
    recoilControl: 'اضغط زر الإطلاق مع الجيروسكوب ثم أفلته فوراً، وحافظ على الهدوء دون استعجال السكوب.'
  },
  {
    id: 'weapon-ump-uzi',
    name: 'UMP45 / UZI',
    arabicName: 'يو إم بي ويوزي (ملوك الهيب فاير)',
    ammo: '.45 ACP / 9mm',
    recommendedGrip: 'مقبض الليزر (Laser Sight) لتضييق دائرة الرصاص أثناء الهيب فاير',
    recommendedMuzzle: 'كاتم صوت أو معوض SMG',
    recommendedScope: 'نقطة حمراء (Red Dot) أو هولوغرافي',
    sensitivityTips: 'ارفع حساسية منظور الشخص الثالث (TPP No Scope) إلى 125% - 135% لسرعة المراوغة والدوران السريع جداً حول الخصم.',
    recoilControl: 'تحرك يساراً ويميناً (Jiggle Move) مع إبقاء نقطة التصويب في المنتصف بدون فتح السكوب لمسافة أقل من 15 متراً.'
  }
];

export interface ManualSensitivityPreset {
  cameraNoScope: number;
  cameraRedDot: number;
  camera2x: number;
  camera3x: number;
  camera4x: number;
  camera6x: number;
  camera8x: number;
  adsNoScope: number;
  adsRedDot: number;
  ads3x: number;
  ads4x: number;
  gyroNoScope: number;
  gyroRedDot: number;
  gyro3x: number;
  gyro4x: number;
  gyro6x: number;
  gyro8x: number;
}

export const defaultManualSensitivity: ManualSensitivityPreset = {
  cameraNoScope: 120,
  cameraRedDot: 60,
  camera2x: 42,
  camera3x: 32,
  camera4x: 24,
  camera6x: 16,
  camera8x: 12,
  adsNoScope: 115,
  adsRedDot: 90,
  ads3x: 34,
  ads4x: 28,
  gyroNoScope: 350,
  gyroRedDot: 320,
  gyro3x: 270,
  gyro4x: 220,
  gyro6x: 130,
  gyro8x: 85
};
