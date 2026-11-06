import { Coach, CoachPositionDevelopment, CoachPitchPosition } from '../types';

// Helper to generate pitch positions
const getPitchPositions = (formation: string): CoachPitchPosition[] => {
  switch (formation) {
    case '4-3-3':
      return [
        { pos: 'GK', x: 50, y: 88 },
        { pos: 'LB', x: 16, y: 70 },
        { pos: 'CB', x: 38, y: 74 },
        { pos: 'CB', x: 62, y: 74 },
        { pos: 'RB', x: 84, y: 70 },
        { pos: 'DMF', x: 50, y: 54 },
        { pos: 'CMF', x: 32, y: 40 },
        { pos: 'CMF', x: 68, y: 40 },
        { pos: 'LWF', x: 18, y: 20 },
        { pos: 'CF', x: 50, y: 15 },
        { pos: 'RWF', x: 82, y: 20 },
      ];
    case '4-2-3-1':
      return [
        { pos: 'GK', x: 50, y: 88 },
        { pos: 'LB', x: 16, y: 70 },
        { pos: 'CB', x: 38, y: 74 },
        { pos: 'CB', x: 62, y: 74 },
        { pos: 'RB', x: 84, y: 70 },
        { pos: 'DMF', x: 38, y: 55 },
        { pos: 'DMF', x: 62, y: 55 },
        { pos: 'AMF', x: 50, y: 36 },
        { pos: 'LMF', x: 18, y: 34 },
        { pos: 'RMF', x: 82, y: 34 },
        { pos: 'CF', x: 50, y: 15 },
      ];
    case '3-5-2':
      return [
        { pos: 'GK', x: 50, y: 88 },
        { pos: 'CB', x: 26, y: 74 },
        { pos: 'CB', x: 50, y: 76 },
        { pos: 'CB', x: 74, y: 74 },
        { pos: 'DMF', x: 50, y: 56 },
        { pos: 'LMF', x: 14, y: 44 },
        { pos: 'CMF', x: 35, y: 42 },
        { pos: 'CMF', x: 65, y: 42 },
        { pos: 'RMF', x: 86, y: 44 },
        { pos: 'CF', x: 38, y: 18 },
        { pos: 'CF', x: 62, y: 18 },
      ];
    case '5-3-2':
      return [
        { pos: 'GK', x: 50, y: 88 },
        { pos: 'LWB', x: 12, y: 68 },
        { pos: 'CB', x: 31, y: 75 },
        { pos: 'CB', x: 50, y: 77 },
        { pos: 'CB', x: 69, y: 75 },
        { pos: 'RWB', x: 88, y: 68 },
        { pos: 'DMF', x: 50, y: 52 },
        { pos: 'CMF', x: 34, y: 40 },
        { pos: 'CMF', x: 66, y: 40 },
        { pos: 'CF', x: 38, y: 18 },
        { pos: 'CF', x: 62, y: 18 },
      ];
    case '3-2-2-3':
      return [
        { pos: 'GK', x: 50, y: 88 },
        { pos: 'CB', x: 26, y: 74 },
        { pos: 'CB', x: 50, y: 76 },
        { pos: 'CB', x: 74, y: 74 },
        { pos: 'DMF', x: 36, y: 56 },
        { pos: 'DMF', x: 64, y: 56 },
        { pos: 'AMF', x: 35, y: 38 },
        { pos: 'AMF', x: 65, y: 38 },
        { pos: 'LWF', x: 18, y: 20 },
        { pos: 'CF', x: 50, y: 15 },
        { pos: 'RWF', x: 82, y: 20 },
      ];
    case '4-3-1-2':
      return [
        { pos: 'GK', x: 50, y: 88 },
        { pos: 'LB', x: 16, y: 70 },
        { pos: 'CB', x: 38, y: 74 },
        { pos: 'CB', x: 62, y: 74 },
        { pos: 'RB', x: 84, y: 70 },
        { pos: 'DMF', x: 50, y: 54 },
        { pos: 'CMF', x: 30, y: 44 },
        { pos: 'CMF', x: 70, y: 44 },
        { pos: 'AMF', x: 50, y: 32 },
        { pos: 'CF', x: 38, y: 16 },
        { pos: 'CF', x: 62, y: 16 },
      ];
    case '4-2-2-2':
      return [
        { pos: 'GK', x: 50, y: 88 },
        { pos: 'LB', x: 16, y: 70 },
        { pos: 'CB', x: 38, y: 74 },
        { pos: 'CB', x: 62, y: 74 },
        { pos: 'RB', x: 84, y: 70 },
        { pos: 'DMF', x: 38, y: 54 },
        { pos: 'DMF', x: 62, y: 54 },
        { pos: 'AMF', x: 28, y: 34 },
        { pos: 'AMF', x: 72, y: 34 },
        { pos: 'CF', x: 38, y: 16 },
        { pos: 'CF', x: 62, y: 16 },
      ];
    case '3-4-2-1':
      return [
        { pos: 'GK', x: 50, y: 88 },
        { pos: 'CB', x: 26, y: 74 },
        { pos: 'CB', x: 50, y: 76 },
        { pos: 'CB', x: 74, y: 74 },
        { pos: 'LMF', x: 14, y: 48 },
        { pos: 'CMF', x: 38, y: 52 },
        { pos: 'CMF', x: 62, y: 52 },
        { pos: 'RMF', x: 86, y: 48 },
        { pos: 'AMF', x: 34, y: 30 },
        { pos: 'AMF', x: 66, y: 30 },
        { pos: 'CF', x: 50, y: 15 },
      ];
    case '3-4-3':
      return [
        { pos: 'GK', x: 50, y: 88 },
        { pos: 'CB', x: 26, y: 74 },
        { pos: 'CB', x: 50, y: 76 },
        { pos: 'CB', x: 74, y: 74 },
        { pos: 'LMF', x: 14, y: 48 },
        { pos: 'CMF', x: 38, y: 50 },
        { pos: 'CMF', x: 62, y: 50 },
        { pos: 'RMF', x: 86, y: 48 },
        { pos: 'LWF', x: 20, y: 22 },
        { pos: 'CF', x: 50, y: 15 },
        { pos: 'RWF', x: 80, y: 22 },
      ];
    case '3-3-3-1':
      return [
        { pos: 'GK', x: 50, y: 88 },
        { pos: 'CB', x: 26, y: 74 },
        { pos: 'CB', x: 50, y: 76 },
        { pos: 'CB', x: 74, y: 74 },
        { pos: 'DMF', x: 50, y: 58 },
        { pos: 'CMF', x: 30, y: 50 },
        { pos: 'CMF', x: 70, y: 50 },
        { pos: 'AMF', x: 20, y: 34 },
        { pos: 'AMF', x: 50, y: 32 },
        { pos: 'AMF', x: 80, y: 34 },
        { pos: 'CF', x: 50, y: 15 },
      ];
    case '4-4-2':
    default:
      return [
        { pos: 'GK', x: 50, y: 88 },
        { pos: 'LB', x: 16, y: 70 },
        { pos: 'CB', x: 38, y: 74 },
        { pos: 'CB', x: 62, y: 74 },
        { pos: 'RB', x: 84, y: 70 },
        { pos: 'LMF', x: 16, y: 44 },
        { pos: 'CMF', x: 38, y: 48 },
        { pos: 'CMF', x: 62, y: 48 },
        { pos: 'RMF', x: 84, y: 44 },
        { pos: 'CF', x: 40, y: 18 },
        { pos: 'CF', x: 60, y: 18 },
      ];
  }
};

// Helper for development guidelines per formation & style
const getPlayerDevelopments = (formation: string, style: string): CoachPositionDevelopment[] => {
  const isPossession = style.includes('استحواذ');
  const isDefensive = style.includes('دفاعي');
  const isCounter = style.includes('مرتدة');
  const isPress = style.includes('ضغط');

  return [
    {
      pos: 'GK',
      role: isPossession ? 'حارس مرمى هجومي (Offensive Goalkeeper)' : 'حارس مرمى دفاعي (Defensive Goalkeeper)',
      development: 'التركيز على القفز + سرعة ردة الفعل + التمركز السليم لمنع التسديدات البعيدة.'
    },
    {
      pos: 'CB',
      role: isPossession ? 'قلب دفاع بناء اللعب (Build Up)' : 'مدافع قاطع شرس (Destroyer)',
      development: 'التمرير المنخفض + القوة البدنية + الالتحام والشراسة لضمان أمان منطقة الجزاء.'
    },
    {
      pos: formation.includes('3-') || formation.includes('5-') ? 'LWB / RWB' : 'LB / RB',
      role: isDefensive ? 'ظهير ذو ميل دفاعي (Defensive Fullback)' : 'ظهير هجومي متقدم (Fullback Finisher)',
      development: 'السرعة العالية + دقة العرضيات والكرات الطولية + قدرة التحمل واللياقة البدنية.'
    },
    {
      pos: 'DMF',
      role: 'محور ارتكاز ارتكازي صريح (Anchor Man)',
      development: 'قطع الكرة + الوعي التكتيكي الدفاعي + البنية الجسمانية لتعطيل المرتدات.'
    },
    {
      pos: 'CMF / AMF',
      role: isCounter ? 'لاعب هجوم من الخلف (Hole Player)' : 'صانع ألعاب متقدم (Creative Playmaker)',
      development: 'دقة التمرير البيني + المراوغة في المساحات الضيقة + التسديد المركز من خارج المنطقة.'
    },
    {
      pos: 'CF',
      role: isPress ? 'قناص أهداف ومتحرك سريع (Goal Poacher)' : 'مهاجم صندوق كلاسيكي (Target Man)',
      development: 'إنهاء الهجمات (Finishing 90+) + التسارع الفوري + الوعي الهجومي بالتحرك خلف الدفاع.'
    }
  ];
};

// Helper for 3 lines style explanation
const getStyleExplanation = (name: string, style: string, formation: string): string[] => {
  return [
    `يعتمد المدرب ${name} على منظومة تكتيكية بنظام (${formation}) تهدف لتطبيق أسلوب "${style}".`,
    `يركز الفريق على السيطرة السريعة على مفاتيح الملعب، تحريك خطوط الدعم بانسجام وتقارب المساحات.`,
    `تتطلب هذه الخطة لاعبين يتميزون بالسرعة والذكاء التكتيكي للتحول السريع وتطبيق تعليمات المدرب بدقة.`
  ];
};

// List of high quality curated photos with stable fallback
const coachImages = [
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
];

// Raw coach definitions from user prompt
const rawCoaches = [
  { id: 'guardiola', num: 1, name: 'Pep Guardiola', arabicName: 'غوارديولا', formation: '4-3-3', style: 'استحواذ', boost: '+1 تحكم بالكرة وتمرير دقيق', team: 'مانشستر سيتي' },
  { id: 'klopp', num: 2, name: 'Jurgen Klopp', arabicName: 'كلوب', formation: '4-3-3', style: 'ضغط عالي', boost: '+1 سرعة ولياقة بدنية', team: 'ليفربول السابق' },
  { id: 'ancelotti', num: 3, name: 'Carlo Ancelotti', arabicName: 'انشيلوتي', formation: '4-3-3', style: 'متوازن', boost: '+1 وعي هجومي وتوازن', team: 'ريال مدريد' },
  { id: 'xabi-alonso', num: 4, name: 'Xabi Alonso', arabicName: 'تشابي الونسو', formation: '3-2-2-3', style: 'استحواذ', boost: '+1 تسرع وتمرير منخفض', team: 'باير ليفركوزن' },
  { id: 'arteta', num: 5, name: 'Mikel Arteta', arabicName: 'ارتيتا', formation: '4-3-3', style: 'استحواذ', boost: '+1 تمرير بيني وضغط', team: 'أرسنال' },
  { id: 'simeone', num: 6, name: 'Diego Simeone', arabicName: 'سيميوني', formation: '5-3-2', style: 'دفاعي', boost: '+1 شراسة واعتراض دفاعي', team: 'أتلتيكو مدريد' },
  { id: 'mourinho', num: 7, name: 'Jose Mourinho', arabicName: 'مورينيو', formation: '4-2-3-1', style: 'هجمة مرتدة', boost: '+1 ارتداد دفاعي وسرعة', team: 'فنربخشة' },
  { id: 'zidane', num: 8, name: 'Zinedine Zidane', arabicName: 'زيدان', formation: '4-3-1-2', style: 'هجومي', boost: '+1 مراوغة وإنهاء', team: 'أساطير مدريد' },
  { id: 'flick', num: 9, name: 'Hansi Flick', arabicName: 'فليك', formation: '4-2-3-1', style: 'ضغط عالي', boost: '+1 سرعة هجومية وانقضاض', team: 'برشلونة' },
  { id: 'conte', num: 10, name: 'Antonio Conte', arabicName: 'كونتي', formation: '3-5-2', style: 'دفاعي', boost: '+1 لياقة وقتالية', team: 'نابولي' },
  { id: 'tuchel', num: 11, name: 'Thomas Tuchel', arabicName: 'توخيل', formation: '3-4-2-1', style: 'متوازن', boost: '+1 انضباط تكتيكي', team: 'إنجلترا' },
  { id: 'nagelsmann', num: 12, name: 'Julian Nagelsmann', arabicName: 'ناغلسمان', formation: '4-2-2-2', style: 'هجومي', boost: '+1 تسديد من بعيد وسرعة', team: 'منتخب ألمانيا' },
  { id: 'deschamps', num: 13, name: 'Didier Deschamps', arabicName: 'ديشامب', formation: '4-2-3-1', style: 'متوازن', boost: '+1 تماسك دفاعي', team: 'منتخب فرنسا' },
  { id: 'southgate', num: 14, name: 'Gareth Southgate', arabicName: 'ساوثغيت', formation: '3-4-3', style: 'دفاعي', boost: '+1 كرات هوائية', team: 'إنجلترا السابق' },
  { id: 'scaloni', num: 15, name: 'Lionel Scaloni', arabicName: 'سكالوني', formation: '4-3-3', style: 'متوازن', boost: '+1 قتالية وروح الفريق', team: 'منتخب الأرجنتين' },
  { id: 'enrique', num: 16, name: 'Luis Enrique', arabicName: 'لويس انريكي', formation: '4-3-3', style: 'استحواذ', boost: '+1 تدوير الكرة السريع', team: 'باريس سان جيرمان' },
  { id: 'pochettino', num: 17, name: 'Mauricio Pochettino', arabicName: 'بوتشيتينو', formation: '4-2-3-1', style: 'ضغط عالي', boost: '+1 استخلاص الكرة', team: 'منتخب أمريكا' },
  { id: 'ten-hag', num: 18, name: 'Erik ten Hag', arabicName: 'تن هاغ', formation: '4-2-3-1', style: 'استحواذ', boost: '+1 تحولات هجومية', team: 'مانشستر يونايتد السابق' },
  { id: 'de-zerbi', num: 19, name: 'Roberto De Zerbi', arabicName: 'دي زيربي', formation: '4-2-3-1', style: 'استحواذ', boost: '+1 بناء اللعب من الخلف', team: 'مارسيليا' },
  { id: 'allegri', num: 20, name: 'Massimiliano Allegri', arabicName: 'اليغري', formation: '3-5-2', style: 'دفاعي', boost: '+1 إغلاق المساحات', team: 'يوفنتوس السابق' },
  { id: 'inzaghi', num: 21, name: 'Simone Inzaghi', arabicName: 'انزاغي', formation: '3-5-2', style: 'هجمة مرتدة', boost: '+1 تحول هجومي مزدوج', team: 'إنتر ميلان' },
  { id: 'sarri', num: 22, name: 'Maurizio Sarri', arabicName: 'ساري', formation: '4-3-3', style: 'استحواذ', boost: '+1 تمريرات قصيرة دقيقة', team: 'لاتسيو السابق' },
  { id: 'spalletti', num: 23, name: 'Luciano Spalletti', arabicName: 'سباليتي', formation: '4-3-3', style: 'هجومي', boost: '+1 تحرك بين الخطوط', team: 'منتخب إيطاليا' },
  { id: 'gasperini', num: 24, name: 'Gian Piero Gasperini', arabicName: 'جاسبريني', formation: '3-4-2-1', style: 'هجومي', boost: '+1 ضغط رجل لرجل', team: 'أتالانتا' },
  { id: 'xavi', num: 25, name: 'Xavi Hernandez', arabicName: 'تشافي', formation: '4-3-3', style: 'استحواذ', boost: '+1 فتح أطراف الملعب', team: 'برشلونة السابق' },
  { id: 'koeman', num: 26, name: 'Ronald Koeman', arabicName: 'كومان', formation: '4-3-3', style: 'متوازن', boost: '+1 كرات ثابتة ودقة تسديد', team: 'منتخب هولندا' },
  { id: 'bielsa', num: 27, name: 'Marcelo Bielsa', arabicName: 'بيلسا', formation: '3-3-3-1', style: 'ضغط عالي', boost: '+1 لياقة بدنية فائقة', team: 'منتخب الأوروغواي' },
  { id: 'vieira-c', num: 28, name: 'Patrick Vieira', arabicName: 'فييرا', formation: '4-3-3', style: 'متوازن', boost: '+1 هيمنة خط الوسط', team: 'ستراسبورغ السابق' },
  { id: 'lampard', num: 29, name: 'Frank Lampard', arabicName: 'لامبارد', formation: '4-3-3', style: 'هجومي', boost: '+1 دخول الصندوق والتسديد', team: 'كوفنتري' },
  { id: 'gerrard', num: 30, name: 'Steven Gerrard', arabicName: 'جيرارد', formation: '4-3-3', style: 'متوازن', boost: '+1 تسديدات بعيدة المدى', team: 'الاتفاق' },
  { id: 'pellegrini', num: 31, name: 'Manuel Pellegrini', arabicName: 'بيليغريني', formation: '4-2-3-1', style: 'استحواذ', boost: '+1 سلاسة التمرير', team: 'ريال بيتيس' },
  { id: 'emery', num: 32, name: 'Unai Emery', arabicName: 'ايمري', formation: '4-4-2', style: 'متوازن', boost: '+1 مصيدة تسلل دقيقة', team: 'أستون فيلا' },
  { id: 'silva', num: 33, name: 'Marco Silva', arabicName: 'ماركو سيلفا', formation: '4-2-3-1', style: 'هجومي', boost: '+1 كرات عرضية سريعة', team: 'فولهام' },
  { id: 'iraola', num: 34, name: 'Andoni Iraola', arabicName: 'ايراولا', formation: '4-3-3', style: 'ضغط عالي', boost: '+1 استعادة الكرة سريعا', team: 'بورنموث' },
  { id: 'howe', num: 35, name: 'Eddie Howe', arabicName: 'هاو', formation: '4-3-3', style: 'هجومي', boost: '+1 اندفاع هجومي وسرعة', team: 'نيوكاسل' },
  { id: 'kompany', num: 36, name: 'Vincent Kompany', arabicName: 'كومباني', formation: '4-3-3', style: 'استحواذ', boost: '+1 ضغط متقدم وجرأة', team: 'بايرن ميونخ' },
  { id: 'motta', num: 37, name: 'Thiago Motta', arabicName: 'موتا', formation: '4-2-3-1', style: 'استحواذ', boost: '+1 حركية عالية وتبادل مراكز', team: 'يوفنتوس' },
  { id: 'fabregas', num: 38, name: 'Cesc Fabregas', arabicName: 'فابريغاس', formation: '4-3-3', style: 'استحواذ', boost: '+1 رؤية الملعب والتمرير', team: 'كومو' },
  { id: 'rooney', num: 39, name: 'Wayne Rooney', arabicName: 'روني', formation: '4-2-3-1', style: 'متوازن', boost: '+1 روح قتالية وقوة بدنية', team: 'بليموث' },
  { id: 'carrick', num: 40, name: 'Michael Carrick', arabicName: 'كاريك', formation: '4-2-3-1', style: 'متوازن', boost: '+1 توازن إيقاع اللعب', team: 'ميدلسبره' },
  { id: 'gattuso', num: 41, name: 'Gennaro Gattuso', arabicName: 'جاتوزو', formation: '4-3-3', style: 'دفاعي', boost: '+1 شراسة وافتكاك', team: 'هايدوك سبليت' },
  { id: 'pirlo', num: 42, name: 'Andrea Pirlo', arabicName: 'بيرلو', formation: '4-3-3', style: 'استحواذ', boost: '+1 تمريرات ساقطة خلف المدافعين', team: 'سامبدوريا' },
  { id: 'moyes', num: 43, name: 'David Moyes', arabicName: 'دافيد مويس', formation: '4-2-3-1', style: 'دفاعي', boost: '+1 دفاع المنطقة والكرات الهوائية', team: 'وست هام السابق' },
  { id: 'lopetegui', num: 44, name: 'Julen Lopetegui', arabicName: 'لوبيتيغي', formation: '4-3-3', style: 'متوازن', boost: '+1 اتساع رقعة اللعب', team: 'وست هام' },
  { id: 'valverde', num: 45, name: 'Ernesto Valverde', arabicName: 'فالفيردي', formation: '4-4-2', style: 'متوازن', boost: '+1 تحول تكتيكي صلب', team: 'أتلتيك بيلباو' },
  { id: 'garcia', num: 46, name: 'Rudi Garcia', arabicName: 'غارسيا', formation: '4-3-3', style: 'هجومي', boost: '+1 أجنحة سريعة', team: 'نابولي السابق' },
  { id: 'conceicao', num: 47, name: 'Sergio Conceicao', arabicName: 'كونسيكاو', formation: '4-4-2', style: 'ضغط عالي', boost: '+1 ضغط بدني خانق', team: 'بورتو السابق' },
  { id: 'fonseca', num: 48, name: 'Paulo Fonseca', arabicName: 'فونسيكا', formation: '4-2-3-1', style: 'استحواذ', boost: '+1 خلق مساحات هجومية', team: 'ميلان' },
  { id: 'tudor', num: 49, name: 'Igor Tudor', arabicName: 'تودور', formation: '3-4-2-1', style: 'ضغط عالي', boost: '+1 اندفاع بدني مباشر', team: 'لاتسيو السابق' },
  { id: 'amorim', num: 50, name: 'Ruben Amorim', arabicName: 'أموريم', formation: '3-4-3', style: 'هجومي', boost: '+1 هجوم ثلاثي خاطف', team: 'مانشستر يونايتد' }
];

export const all50Coaches: Coach[] = rawCoaches.map((c, index) => {
  const isTop5 = index < 5;
  const image = coachImages[index % coachImages.length];

  return {
    id: c.id,
    name: c.name,
    arabicName: c.arabicName,
    team: c.team,
    formation: c.formation,
    playStyle: c.style,
    playStyleArabic: c.style,
    proficiency: 85 + (50 - index) % 5,
    boost: c.boost,
    description: `المدرب ${c.arabicName} يقود أسلوب ${c.style} بتشكيلة ${c.formation} المتطورة في إي فوتبول موبايل.`,
    image,
    isTop5,
    styleExplanation: getStyleExplanation(c.arabicName, c.style, c.formation),
    playerDevelopments: getPlayerDevelopments(c.formation, c.style),
    pitchPositions: getPitchPositions(c.formation)
  };
});
