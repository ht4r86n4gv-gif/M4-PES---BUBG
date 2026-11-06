import { PlayerBuild } from '../../types';
import { createPlayer } from './playerHelper';

export const standardTop50: PlayerBuild[] = [
  createPlayer('courtois-std', 'Thibaut Courtois', 'تيبو كورتوا (ستاندرد GP)', 'GK', 'ريال مدريد / بلجيكا', 84, 95, 'Standard', 'standard_top',
    [35, 60, 45, 80, 82, 94, 95], [0, 0, 0, 4, 8, 12],
    ['Penalty Saver', 'GK High Punt'],
    'أعلى حارس GP تقييماً في إي فوتبول 2026، عملاق بلجيكي يسد كل زوايا المرمى.', 'حارس دفاعي (Defensive GK)'),

  createPlayer('alisson-std', 'Alisson Becker', 'أليسون بيكر (ستاندرد GP)', 'GK', 'ليفربول / البرازيل', 83, 94, 'Standard', 'standard_top',
    [35, 66, 45, 82, 84, 92, 93], [0, 0, 0, 4, 8, 12],
    ['One-on-One', 'GK Low Punt'],
    'حارس ليفربول الأفضل بالتصدي للانفرادات وسرعة البديهة في إبعاد الكرات الصعبة.', 'حارس هجومي (Offensive GK)'),

  createPlayer('vandijk-std', 'Virgil van Dijk', 'فيرجيل فان دايك (ستاندرد GP)', 'CB', 'ليفربول / هولندا', 84, 94, 'Standard', 'standard_top',
    [58, 76, 68, 76, 80, 92, 95], [0, 4, 0, 6, 8, 14, 2],
    ['Aerial Superiority', 'Interception', 'Blocker', 'Heading'],
    'صخرة دفاعية بالـ GP تقطع أي كرة عرضية وتوقف أقوى مهاجمي الخصم بهدوء.', 'بناء اللعب (Build Up)'),

  createPlayer('rudiger-std', 'Antonio Rüdiger', 'أنطونيو روديغر (ستاندرد GP)', 'CB', 'ريال مدريد / ألمانيا', 82, 93, 'Standard', 'standard_top',
    [52, 70, 68, 82, 86, 90, 94], [0, 2, 0, 8, 8, 14, 2],
    ['Interception', 'Blocker', 'Fighting Spirit'],
    'المدافع الأشرس والأسرع ببطاقات الـ GP، يفتك الكرات بقوة جسمانية هائلة.', 'المدمر (Destroyer)'),

  createPlayer('saliba-std', 'William Saliba', 'ويليام صليبا (ستاندرد GP)', 'CB', 'آرسنال / فرنسا', 82, 93, 'Standard', 'standard_top',
    [50, 74, 72, 82, 85, 88, 95], [0, 2, 2, 8, 6, 14, 2],
    ['Interception', 'Blocker', 'Man Marking'],
    'هدوء وسرعة فائقة في تغطية المساحات الخلفية، صمام أمان لخط الدفاع.', 'بناء اللعب (Build Up)'),

  createPlayer('theo-std', 'Theo Hernández', 'ثيو هيرنانديز (ستاندرد GP)', 'LB', 'ميلان / فرنسا', 82, 93, 'Standard', 'standard_top',
    [76, 76, 82, 92, 94, 80, 82], [4, 4, 6, 12, 2, 8, 4],
    ['Speedster', 'Pinpoint Crossing', 'Interception'],
    'أفضل ظهير أيسر هجومي بنقاط GP، سرعة صاروخية تمزق دفاعات الأطراف.', 'ظهير هجومي'),

  createPlayer('hakimi-std', 'Achraf Hakimi', 'أشرف حكيمي (ستاندرد GP)', 'RB', 'باريس سان جيرمان / المغرب', 82, 93, 'Standard', 'standard_top',
    [75, 80, 84, 94, 95, 76, 82], [4, 4, 8, 12, 2, 8, 4],
    ['Speedster', 'Pinpoint Crossing', 'Interception'],
    'فخر العرب وأسرع ظهير أيمن، مساندة هجومية مذهلة وتغطية دفاعية سريعة.', 'ظهير هجومي'),

  createPlayer('davies-std', 'Alphonso Davies', 'ألفونسو ديفيز (ستاندرد GP)', 'LB', 'بايرن ميونخ / كندا', 82, 93, 'Standard', 'standard_top',
    [72, 76, 84, 96, 97, 74, 80], [2, 4, 8, 14, 0, 8, 4],
    ['Speedster', 'Interception', 'Pinpoint Crossing'],
    'سرعة 97 تتفوق على أي جناح في السباقات الثنائية وتغلق الجهة اليسرى.', 'ظهير هجومي'),

  createPlayer('kimmich-std', 'Joshua Kimmich', 'جوشوا كيميتش (ستاندرد GP)', 'RB/DMF', 'بايرن ميونخ / ألمانيا', 83, 93, 'Standard', 'standard_top',
    [76, 92, 84, 82, 85, 74, 88], [2, 8, 6, 8, 0, 8, 8],
    ['Pinpoint Crossing', 'Weighted Pass', 'Interception'],
    'صانع ألعاب وعين سحرية من مركز الظهير أو الارتكاز، دقة تمرير استثنائية.', 'المايسترو (Orchestrator)'),

  createPlayer('tchouameni-std', 'Aurélien Tchouaméni', 'أوريليان تشواميني (ستاندرد GP)', 'DMF', 'ريال مدريد / فرنسا', 82, 93, 'Standard', 'standard_top',
    [72, 84, 80, 82, 86, 88, 94], [2, 4, 4, 8, 6, 14, 4],
    ['Interception', 'Blocker', 'Aerial Superiority'],
    'حائط صد قوي في خط الارتكاز، يجمع بين القوة البدنية وقطع الكرات الدقيق.', 'ارتكاز دفاعي (Anchor Man)'),

  createPlayer('mbappe-std', 'Kylian Mbappé', 'كيليان مبابي (ستاندرد GP)', 'CF/LWF', 'ريال مدريد / فرنسا', 86, 96, 'Standard', 'standard_top',
    [93, 78, 91, 96, 97, 74, 44], [10, 6, 10, 10, 0, 0, 2],
    ['Double Touch', 'First-time Shot', 'Speedster'],
    'أعلى بطاقة مهاجم GP تقييماً (ماكس 96)، سرعة خيالية وإنهاء كروي دقيق.', 'قناص (Goal Poacher)'),

  createPlayer('haaland-std', 'Erling Haaland', 'إيرلينغ هالاند (ستاندرد GP)', 'CF', 'مانشستر سيتي / النرويج', 85, 95, 'Standard', 'standard_top',
    [95, 68, 78, 91, 92, 92, 48], [11, 2, 8, 10, 6, 0],
    ['Heading', 'Acrobatic Finishing', 'Super-sub'],
    'ماكينة أهداف بدنية بـ GP، إنهاء مباشر وقوي يصعب إيقافه داخل الصندوق.', 'قناص (Goal Poacher)'),

  createPlayer('debruyne-std', 'Kevin De Bruyne', 'كيفين دي بروين (ستاندرد GP)', 'AMF', 'مانشستر سيتي / بلجيكا', 85, 95, 'Standard', 'standard_top',
    [86, 96, 86, 82, 84, 72, 64], [6, 10, 8, 6, 0, 2, 8],
    ['Through Passing', 'Weighted Pass', 'Long Range Shooting'],
    'أفضل صانع ألعاب GP في اللعبة، يوزع الكرات بمليمترية نادرة للمهاجمين.', 'صانع ألعاب متقدم'),

  createPlayer('rodri-std', 'Rodri', 'رودري (ستاندرد GP)', 'DMF', 'مانشستر سيتي / إسبانيا', 85, 95, 'Standard', 'standard_top',
    [78, 90, 84, 80, 84, 88, 95], [2, 6, 4, 8, 6, 14, 4],
    ['Interception', 'Blocker', 'Weighted Pass'],
    'حجر زاوية الارتكاز، يحافظ على توازن الفريق دفاعياً وهجومياً بكل اقتدار.', 'ارتكاز دفاعي (Anchor Man)'),

  createPlayer('salah-std', 'Mohamed Salah', 'محمد صلاح (ستاندرد GP)', 'RWF', 'ليفربول / مصر', 84, 94, 'Standard', 'standard_top',
    [91, 82, 92, 92, 91, 72, 48], [9, 4, 10, 8, 0, 0, 4],
    ['Long Range Curler', 'First-time Shot', 'Outside Curler'],
    'تسديد مقوس وإنهاء لا يخيب على الجناح الأيمن، خيار GP هجومي من الطراز الرفيع.', 'جناح متوغل'),

  createPlayer('kane-std', 'Harry Kane', 'هاري كين (ستاندرد GP)', 'CF', 'بايرن ميونخ / إنجلترا', 84, 94, 'Standard', 'standard_top',
    [95, 86, 80, 80, 82, 85, 50], [11, 6, 6, 6, 4, 0, 4],
    ['Through Passing', 'First-time Shot', 'Heading'],
    'هداف متكامل يربط بين خط الوسط والهجوم بفضل رؤيته وتمريراته الذكية.', 'مهاجم متراجع'),

  createPlayer('vinicius-std', 'Vinícius Júnior', 'فينيسيوس جونيور (ستاندرد GP)', 'LWF', 'ريال مدريد / البرازيل', 84, 94, 'Standard', 'standard_top',
    [84, 78, 95, 96, 95, 66, 40], [6, 6, 12, 10, 0, 0, 4],
    ['Double Touch', 'Speedster', 'Flip Flap'],
    'مراوغ ممتع وسريع جداً، يفكك التكتلات على الطرف الأيسر بسهولة.', 'جناح متوغل'),

  createPlayer('bellingham-std', 'Jude Bellingham', 'جود بيلينغهام (ستاندرد GP)', 'AMF/CMF', 'ريال مدريد / إنجلترا', 84, 94, 'Standard', 'standard_top',
    [86, 86, 88, 88, 88, 85, 80], [6, 4, 6, 6, 4, 6, 4],
    ['Hole Player', 'One-touch Pass', 'Interception'],
    'توازن بدني وفني نادر لبطاقة GP، يتقدم للتسجيل ويساعد في الافتكاك.', 'لاعب متسلل (Hole Player)'),

  createPlayer('bernardo-std', 'Bernardo Silva', 'برناردو سيلفا (ستاندرد GP)', 'CMF/RWF', 'مانشستر سيتي / البرتغال', 83, 93, 'Standard', 'standard_top',
    [78, 90, 94, 88, 86, 65, 72], [4, 6, 12, 6, 0, 4, 6],
    ['Sole Control', 'Through Passing', 'Track Back'],
    'تحكم بالكرة لا يفقدها أبداً، يخرج الفريق من الضغط العالي بسلاسة فائقة.', 'صانع ألعاب متقدم'),

  createPlayer('musiala-std', 'Jamal Musiala', 'جمال موسيالا (ستاندرد GP)', 'AMF/LWF', 'بايرن ميونخ / ألمانيا', 83, 93, 'Standard', 'standard_top',
    [84, 84, 96, 92, 88, 66, 50], [6, 6, 12, 8, 0, 0, 4],
    ['Double Touch', 'Marseille Turn', 'Sole Control'],
    'خفة ورشاقة أفعوانية في المراوغة، يخترق الدفاعات المغلقة في الأمتار الأخيرة.', 'صانع ألعاب متقدم'),

  createPlayer('saka-std', 'Bukayo Saka', 'بوكايو ساكا (ستاندرد GP)', 'RWF', 'آرسنال / إنجلترا', 83, 93, 'Standard', 'standard_top',
    [84, 85, 91, 90, 89, 72, 60], [6, 4, 10, 8, 0, 2, 4],
    ['Pinpoint Crossing', 'Double Touch', 'Long Range Curler'],
    'جناح أيمن متزن وفعال، يجمع بين السرعة والمراوغة والعرضيات الدقيقة.', 'جناح متوغل'),

  createPlayer('foden-std', 'Phil Foden', 'فيل فودين (ستاندرد GP)', 'AMF/RWF', 'مانشستر سيتي / إنجلترا', 83, 93, 'Standard', 'standard_top',
    [86, 88, 93, 90, 88, 64, 54], [6, 6, 10, 8, 0, 0, 4],
    ['Sole Control', 'One-touch Pass', 'Through Passing'],
    'تحكم وثبات في المساحات الضيقة، يمرر ويسدد ويهدد المرمى باستمرار.', 'صانع ألعاب متقدم'),

  createPlayer('pedri-std', 'Pedri', 'بيدري (ستاندرد GP)', 'CMF', 'برشلونة / إسبانيا', 83, 93, 'Standard', 'standard_top',
    [76, 92, 92, 88, 84, 65, 72], [2, 8, 10, 6, 0, 4, 6],
    ['Through Passing', 'One-touch Pass', 'Sole Control'],
    'هدوء وذكاء تكتيكي في توزيع الكرات، عقل وسط الملعب الهجومي.', 'المايسترو (Orchestrator)'),

  createPlayer('valverde-std', 'Federico Valverde', 'فيديريكو فالفيردي (ستاندرد GP)', 'CMF', 'ريال مدريد / أوروغواي', 83, 93, 'Standard', 'standard_top',
    [84, 85, 84, 89, 94, 78, 80], [6, 4, 6, 8, 2, 6, 4],
    ['Long Range Shooting', 'Track Back', 'Interception'],
    'محارب Box-to-Box حقيقي بطاقة لا تنفد وتسديدات قوية من مسافات بعيدة.', 'شامل الملعب (Box-to-Box)'),

  createPlayer('rice-std', 'Declan Rice', 'ديكلان رايس (ستاندرد GP)', 'DMF', 'آرسنال / إنجلترا', 83, 93, 'Standard', 'standard_top',
    [74, 84, 82, 84, 88, 86, 93], [2, 4, 4, 6, 4, 12, 4],
    ['Interception', 'Blocker', 'Fighting Spirit'],
    'حضور بدني قوي وتدخلات ناجحة في عمق وسط الملعب لإحباط هجمات الخصم.', 'المدمر (Destroyer)'),

  createPlayer('lewandowski-std', 'Robert Lewandowski', 'روبرت ليفاندوفسكي (ستاندرد GP)', 'CF', 'برشلونة / بولندا', 83, 93, 'Standard', 'standard_top',
    [93, 76, 84, 84, 84, 84, 46], [9, 2, 8, 6, 4, 0, 2],
    ['First-time Shot', 'Heading', 'Penalty Specialist'],
    'هداف الصندوق الكلاسيكي، يقتنص الكرات العرضية والمرتدة بروعة.', 'قناص (Goal Poacher)'),

  createPlayer('son-std', 'Son Heung-min', 'سون هيونغ مين (ستاندرد GP)', 'LWF/CF', 'توتنهام / كوريا الجنوبية', 83, 93, 'Standard', 'standard_top',
    [90, 80, 89, 91, 92, 72, 46], [8, 4, 10, 8, 0, 0, 2],
    ['Long Range Curler', 'First-time Shot', 'Double Touch'],
    'إنهاء وتسديد بكلتا القدمين بنفس القوة والدقة، سلاح فتاك في المرتدات.', 'جناح متوغل'),

  createPlayer('griezmann-std', 'Antoine Griezmann', 'أنطوان غريزمان (ستاندرد GP)', 'SS/AMF', 'أتلتيكو مدريد / فرنسا', 83, 93, 'Standard', 'standard_top',
    [87, 88, 88, 86, 85, 76, 64], [6, 6, 8, 6, 2, 2, 4],
    ['Through Passing', 'One-touch Pass', 'Track Back'],
    'ذكاء تحرك وصناعة لعب متقنة، يساعد في الدفاع ويقتنص الأهداف الحاسمة.', 'لاعب متسلل (Hole Player)'),

  createPlayer('lautaro-std', 'Lautaro Martínez', 'لاوتارو مارتينيز (ستاندرد GP)', 'CF', 'إنتر / الأرجنتين', 83, 93, 'Standard', 'standard_top',
    [91, 78, 86, 88, 88, 84, 52], [8, 4, 8, 6, 4, 0, 2],
    ['Heading', 'First-time Shot', 'Fighting Spirit'],
    'روح قتالية واقتناص شجاع للكرات داخل منطقة الجزاء مع تسديدات دقيقة.', 'قناص (Goal Poacher)'),

  createPlayer('bastoni-std', 'Alessandro Bastoni', 'أليساندرو باستوني (ستاندرد GP)', 'CB', 'إنتر / إيطاليا', 83, 93, 'Standard', 'standard_top',
    [54, 84, 76, 80, 82, 86, 93], [0, 4, 2, 6, 6, 12, 4],
    ['Interception', 'Blocker', 'Weighted Pass'],
    'قلب دفاع أيسر أنيق، مهارة خروج بالكرة وتمريرات بينية متقنة.', 'بناء اللعب (Build Up)'),

  createPlayer('marquinhos-std', 'Marquinhos', 'ماركينيوس (ستاندرد GP)', 'CB', 'باريس سان جيرمان / البرازيل', 83, 93, 'Standard', 'standard_top',
    [56, 80, 75, 82, 84, 88, 94], [0, 2, 2, 6, 6, 12, 2],
    ['Interception', 'Blocker', 'Captaincy'],
    'قائد متزن في قلب الدفاع، ارتقاء وتدخلات نظيفة تمنع خطورة المهاجمين.', 'بناء اللعب (Build Up)'),

  createPlayer('rubendias-std', 'Rúben Dias', 'روبن دياز (ستاندرد GP)', 'CB', 'مانشستر سيتي / البرتغال', 83, 93, 'Standard', 'standard_top',
    [52, 74, 68, 76, 80, 90, 95], [0, 2, 0, 4, 8, 14, 2],
    ['Interception', 'Blocker', 'Aerial Superiority'],
    'صخرة دفاعية تمنح الأمان لمنطقة الجزاء بقوة التحام ورأسيات قاطعة.', 'المدمر (Destroyer)'),

  createPlayer('odegaard-std', 'Martin Ødegaard', 'مارتن أوديغارد (ستاندرد GP)', 'AMF', 'آرسنال / النرويج', 83, 93, 'Standard', 'standard_top',
    [84, 93, 91, 86, 84, 65, 58], [6, 8, 10, 6, 0, 0, 8],
    ['Through Passing', 'Visionary Pass', 'Sole Control'],
    'تمريرات بينية تكسر خطوط الدفاع وتضع المهاجمين في وضعيات تسجيل مباشرة.', 'صانع ألعاب متقدم'),

  createPlayer('gvardiol-std', 'Joško Gvardiol', 'يوشكو غفارديول (ستاندرد GP)', 'CB/LB', 'مانشستر سيتي / كرواتيا', 82, 92, 'Standard', 'standard_top',
    [68, 80, 78, 84, 88, 84, 91], [0, 2, 4, 6, 4, 10, 2],
    ['Interception', 'Blocker', 'Aerial Superiority'],
    'قوة وصلابة وسرعة عالية في الخط الخلفي، يجيد التغطية كقلب دفاع أو ظهير.', 'بناء اللعب (Build Up)'),

  createPlayer('barella-std', 'Nicolò Barella', 'نيكولو باريلا (ستاندرد GP)', 'CMF', 'إنتر / إيطاليا', 82, 92, 'Standard', 'standard_top',
    [80, 88, 88, 89, 91, 72, 81], [4, 4, 6, 8, 0, 6, 4],
    ['Through Passing', 'Interception', 'Fighting Spirit'],
    'دينامو الوسط الإيطالي، حركة مستمرة وضغط قوي لاستعادة الكرة بسرعة.', 'شامل الملعب (Box-to-Box)'),

  createPlayer('bruno-std', 'Bruno Fernandes', 'برونو فيرنانديز (ستاندرد GP)', 'AMF', 'مانشستر يونايتد / البرتغال', 82, 92, 'Standard', 'standard_top',
    [84, 92, 85, 84, 84, 70, 68], [6, 8, 6, 6, 0, 2, 8],
    ['Through Passing', 'Long Range Shooting', 'One-touch Pass'],
    'صانع أهداف متمرس، يرسل كرات طولية وساقطة تضرب مصيدة التسلل.', 'لاعب متسلل (Hole Player)'),

  createPlayer('camavinga-std', 'Eduardo Camavinga', 'إدواردو كامافينغا (ستاندرد GP)', 'CMF/LB', 'ريال مدريد / فرنسا', 82, 92, 'Standard', 'standard_top',
    [74, 86, 88, 87, 88, 76, 84], [2, 4, 8, 6, 0, 8, 4],
    ['Interception', 'Double Touch', 'Fighting Spirit'],
    'مهارة افتكاك رائعة ومرونة بالتحرك في الوسط أو سد ثغرة الظهير الأيسر.', 'شامل الملعب (Box-to-Box)'),

  createPlayer('terstegen-std', 'Marc-André ter Stegen', 'تير شتيغن (ستاندرد GP)', 'GK', 'برشلونة / ألمانيا', 83, 93, 'Standard', 'standard_top',
    [35, 72, 45, 82, 84, 91, 92], [0, 0, 0, 4, 8, 12],
    ['GK Low Punt', 'Penalty Saver', 'One-on-One'],
    'حارس برشلونة، براعة فائقة في الخروج بالكرة وبناء الهجمات من الخلف.', 'حارس هجومي (Offensive GK)'),

  createPlayer('ederson-std', 'Ederson Moraes', 'إيدرسون مورايس (ستاندرد GP)', 'GK', 'مانشستر سيتي / البرازيل', 82, 92, 'Standard', 'standard_top',
    [35, 84, 45, 82, 84, 90, 91], [0, 0, 0, 4, 8, 12],
    ['Low Lofted Pass', 'GK Low Punt'],
    'أفضل حارس ممرر في اللعبة، كرات طولية تصل مباشرة إلى أقدام المهاجمين.', 'حارس هجومي (Offensive GK)'),

  createPlayer('oblak-std', 'Jan Oblak', 'يان أوبلاك (ستاندرد GP)', 'GK', 'أتلتيكو مدريد / سلوفينيا', 82, 92, 'Standard', 'standard_top',
    [35, 60, 45, 82, 84, 93, 94], [0, 0, 0, 4, 8, 12],
    ['Penalty Saver', 'GK High Punt'],
    'الجدار السلوفيني، ثبات مذهل في التصدي للكرات القوية والزوايا الضيقة.', 'حارس دفاعي (Defensive GK)'),

  createPlayer('maignan-std', 'Mike Maignan', 'مايك ماينان (ستاندرد GP)', 'GK', 'ميلان / فرنسا', 82, 92, 'Standard', 'standard_top',
    [35, 70, 45, 84, 85, 91, 92], [0, 0, 0, 4, 8, 12],
    ['GK Low Punt', 'Penalty Saver'],
    'تصديات بهلوانية وسرعة رد فعل ممتازة في حماية الشباك من الأهداف.', 'حارس هجومي (Offensive GK)'),

  createPlayer('donnarumma-std', 'Gianluigi Donnarumma', 'جانلويجي دوناروما (ستاندرد GP)', 'GK', 'باريس سان جيرمان / إيطاليا', 82, 92, 'Standard', 'standard_top',
    [35, 62, 45, 82, 84, 93, 93], [0, 0, 0, 4, 8, 12],
    ['Penalty Saver', 'GK High Punt'],
    'طول فارع يساعده على حصد الكرات الهوائية ومنع التسديدات الساقطة.', 'حارس دفاعي (Defensive GK)'),

  createPlayer('kobel-std', 'Gregor Kobel', 'غريغور كوبيل (ستاندرد GP)', 'GK', 'دورتموند / سويسرا', 82, 92, 'Standard', 'standard_top',
    [35, 64, 45, 82, 84, 91, 92], [0, 0, 0, 4, 8, 12],
    ['GK High Punt', 'Penalty Saver'],
    'حارس دورتموند المتميز، تصديات حاسمة وردات فعل سريعة جداً.', 'حارس دفاعي (Defensive GK)'),

  createPlayer('macallister-std', 'Alexis Mac Allister', 'أليكسيس ماك أليستر (ستاندرد GP)', 'CMF/DMF', 'ليفربول / الأرجنتين', 82, 92, 'Standard', 'standard_top',
    [80, 90, 87, 84, 84, 68, 80], [4, 6, 6, 6, 0, 6, 6],
    ['One-touch Pass', 'Through Passing', 'Interception'],
    'ضابط إيقاع الوسط، تمريرات ذكية وربط سلس بين الخطوط الخلفية والأمامية.', 'المايسترو (Orchestrator)'),

  createPlayer('arnold-std', 'Trent Alexander-Arnold', 'ترينت ألكسندر-أرنولد (ستاندرد GP)', 'RB', 'ليفربول / إنجلترا', 82, 92, 'Standard', 'standard_top',
    [78, 94, 82, 82, 85, 70, 78], [2, 8, 4, 6, 0, 6, 8],
    ['Pinpoint Crossing', 'Curl Specialist', 'Weighted Pass'],
    'عرضيات لا تصد وكرات ثابتة خطيرة من الظهير الأيمن الأكثر إبداعاً.', 'ظهير صانع ألعاب'),

  createPlayer('carvajal-std', 'Dani Carvajal', 'داني كارفخال (ستاندرد GP)', 'RB', 'ريال مدريد / إسبانيا', 82, 92, 'Standard', 'standard_top',
    [68, 82, 80, 85, 88, 76, 86], [0, 4, 4, 8, 2, 8, 4],
    ['Interception', 'Fighting Spirit', 'Pinpoint Crossing'],
    'مقاتل الرواق الأيمن، خبرة دفاعية وتغطية متقنة ضد أعتى أجنحة الخصم.', 'ظهير هجومي'),

  createPlayer('dilorenzo-std', 'Giovanni Di Lorenzo', 'جيوفاني دي لورينزو (ستاندرد GP)', 'RB', 'نابولي / إيطاليا', 81, 91, 'Standard', 'standard_top',
    [66, 80, 78, 84, 87, 78, 85], [0, 4, 4, 8, 2, 8, 4],
    ['Interception', 'Pinpoint Crossing', 'Captaincy'],
    'ظهير أيمن متوازن يقدم أداءً تكتيكياً رفيعاً طوال الـ 90 دقيقة.', 'ظهير هجومي'),

  createPlayer('osimhen-std', 'Victor Osimhen', 'فيكتور أوسيمين (ستاندرد GP)', 'CF', 'غالاتا سراي / نيجيريا', 82, 92, 'Standard', 'standard_top',
    [90, 70, 80, 92, 91, 88, 44], [8, 0, 6, 8, 4, 0],
    ['Heading', 'Speedster', 'First-time Shot'],
    'سرعة وانطلاقات في المساحة مع ارتقاء هائل بالرأسيات المباغتة.', 'قناص (Goal Poacher)'),

  createPlayer('leao-std', 'Rafael Leão', 'رافاييل لياو (ستاندرد GP)', 'LWF', 'ميلان / البرتغال', 82, 92, 'Standard', 'standard_top',
    [86, 78, 92, 93, 94, 80, 42], [7, 4, 10, 8, 2, 0, 2],
    ['Double Touch', 'Speedster', 'Outside Curler'],
    'قوة انطلاق وسرعة خطية تتجاوز أي ظهير في الثنائيات المفتوحة.', 'جناح متوغل'),

  createPlayer('alvarez-std', 'Julián Álvarez', 'جوليان ألفاريز (ستاندرد GP)', 'CF/SS', 'أتلتيكو مدريد / الأرجنتين', 82, 92, 'Standard', 'standard_top',
    [89, 80, 87, 90, 89, 72, 58], [7, 4, 8, 8, 0, 0, 4],
    ['First-time Shot', 'Through Passing', 'Fighting Spirit'],
    'مهاجم ذكي يضغط على قلوب دفاع الخصم ويقتنص الأهداف بحرفية.', 'قناص (Goal Poacher)')
];
