import React, { useState, useEffect } from 'react';
import { Disc, Sparkles, Trophy, Clock, CheckCircle2, MessageCircle, Gift, Share2, Award, Video, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

interface WheelPrizeItem {
  id: number;
  title: string;
  arabicTitle: string;
  weight: number;
  stock: number;
  status: 'active' | 'coming_soon' | 'filler' | 'hard_luck';
  color: string;
  image: string;
  icon: string;
}

export const WheelView: React.FC<{ userCoins: number; setUserCoins: React.Dispatch<React.SetStateAction<number>> }> = ({ userCoins, setUserCoins }) => {
  const prizes: WheelPrizeItem[] = [
    {
      id: 1,
      title: 'Suarez Epic',
      arabicTitle: 'سواريز 1/100',
      weight: 1,
      stock: 1,
      status: 'active',
      color: 'from-amber-600 to-yellow-700',
      image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&auto=format&fit=crop&q=80',
      icon: '⚽'
    },
    {
      id: 2,
      title: '150 Coins',
      arabicTitle: '150 كوينز',
      weight: 0,
      stock: 0,
      status: 'coming_soon',
      color: 'from-blue-700 to-indigo-900',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=400&auto=format&fit=crop&q=80',
      icon: '🪙'
    },
    {
      id: 3,
      title: 'Casillas Epic',
      arabicTitle: 'كاسياس',
      weight: 0,
      stock: 0,
      status: 'coming_soon',
      color: 'from-emerald-700 to-teal-900',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&auto=format&fit=crop&q=80',
      icon: '🧤'
    },
    {
      id: 4,
      title: '250 Coins',
      arabicTitle: '250 كوينز',
      weight: 0,
      stock: 0,
      status: 'coming_soon',
      color: 'from-amber-700 to-yellow-900',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&auto=format&fit=crop&q=80',
      icon: '🪙'
    },
    {
      id: 5,
      title: 'iPad Pro',
      arabicTitle: 'ايباد برو',
      weight: 0,
      stock: 0,
      status: 'coming_soon',
      color: 'from-purple-700 to-pink-900',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&auto=format&fit=crop&q=80',
      icon: '📱'
    },
    {
      id: 6,
      title: '10 M4 Points',
      arabicTitle: '10 نقاط M4',
      weight: 0.5,
      stock: 999,
      status: 'filler',
      color: 'from-slate-700 to-slate-900',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80',
      icon: '🪙'
    },
    {
      id: 7,
      title: '50 M4 Points',
      arabicTitle: '50 نقطة M4',
      weight: 0.5,
      stock: 999,
      status: 'filler',
      color: 'from-blue-900 to-slate-950',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&auto=format&fit=crop&q=80',
      icon: '👑'
    },
    {
      id: 8,
      title: 'Try Again',
      arabicTitle: 'حظ أوفر',
      weight: 98,
      stock: 999,
      status: 'hard_luck',
      color: 'from-slate-800 to-slate-950',
      image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&auto=format&fit=crop&q=80',
      icon: '🔄'
    },
  ];

  const recentWinners = [
    { name: 'أحمد العراقي', prize: '10 نقاط M4', time: 'منذ دقيقتين' },
    { name: 'محمد البصري', prize: '50 نقطة M4', time: 'منذ 5 دقائق' },
    { name: 'علي كريم', prize: '10 نقاط M4', time: 'منذ 10 دقائق' },
    { name: 'كرار الحلفي', prize: 'محاولة إضافية', time: 'منذ 15 دقيقة' },
  ];

  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<WheelPrizeItem | null>(null);
  const [canSpin, setCanSpin] = useState(true);
  const [extraSpins, setExtraSpins] = useState(0);
  const [timeLeft, setTimeLeft] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const lastSpin = localStorage.getItem('m4_last_spin');
    const savedExtra = localStorage.getItem('m4_extra_spins');
    if (savedExtra) setExtraSpins(parseInt(savedExtra, 10));

    if (lastSpin) {
      const lastTime = parseInt(lastSpin, 10);
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000;
      if (now - lastTime < oneDay && extraSpins <= 0) {
        setCanSpin(false);
        const remaining = oneDay - (now - lastTime);
        const hours = Math.floor(remaining / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${hours} ساعة و ${minutes} دقيقة`);
      } else {
        setCanSpin(true);
      }
    }
  }, [extraSpins]);

  const handleWatchVideo = () => {
    sounds.playClick();
    alert('جاري محاكاة مشاهدة الفيديو... حصلت على محاولة إضافية مجانية! 🎥🎉');
    const newExtra = extraSpins + 1;
    setExtraSpins(newExtra);
    localStorage.setItem('m4_extra_spins', newExtra.toString());
    setCanSpin(true);
    setShowModal(false);
  };

  const handleShareApp = () => {
    sounds.playClick();
    const newExtra = extraSpins + 1;
    setExtraSpins(newExtra);
    localStorage.setItem('m4_extra_spins', newExtra.toString());
    setCanSpin(true);
    alert('تمت إضافة محاولة إضافية مجانية لحسابك! 🎉');
  };

  const spinWheel = () => {
    if (spinning || (!canSpin && extraSpins <= 0)) return;
    setSpinning(true);
    sounds.playClick();

    const totalWeight = prizes.reduce((sum, p) => sum + (p.status === 'coming_soon' || p.stock <= 0 ? 0 : p.weight), 0);
    let rand = Math.random() * totalWeight;
    let selected = prizes[7];

    for (const prize of prizes) {
      if (prize.status === 'coming_soon' || prize.stock <= 0) continue;
      if (rand < prize.weight) {
        selected = prize;
        break;
      }
      rand -= prize.weight;
    }

    const prizeIndex = prizes.findIndex(p => p.id === selected.id);
    const segmentAngle = 360 / prizes.length;
    const targetDeg = 1800 + (prizes.length - 1 - prizeIndex) * segmentAngle + segmentAngle / 2;

    setRotation(targetDeg);

    let ticks = 0;
    const tickInterval = setInterval(() => {
      sounds.playTick();
      ticks++;
      if (ticks > 30) clearInterval(tickInterval);
    }, 150);

    setTimeout(() => {
      clearInterval(tickInterval);
      setSpinning(false);
      setWonPrize(selected);
      setShowModal(true);

      if (selected.status === 'hard_luck') {
        setUserCoins(prev => prev + 5);
        sounds.playClick();
      } else {
        sounds.playWinFanfare();
        confetti({
          particleCount: 140,
          spread: 90,
          origin: { y: 0.6 }
        });
      }

      if (extraSpins > 0) {
        const remainingExtra = extraSpins - 1;
        setExtraSpins(remainingExtra);
        localStorage.setItem('m4_extra_spins', remainingExtra.toString());
      } else {
        const now = Date.now();
        localStorage.setItem('m4_last_spin', now.toString());
        setCanSpin(false);
        setTimeLeft('24 ساعة');
      }
    }, 5000);
  };

  const whatsappMessage = wonPrize 
    ? encodeURIComponent(`مرحباً M4! لقد ربحت "${wonPrize.arabicTitle}" من عجلة الحظ في تطبيق M4 PES. أريد استلام جائزتي!`)
    : encodeURIComponent('مرحباً M4، جئت من تطبيق M4 PES.');

  return (
    <div className="pb-28 pt-4 px-4 max-w-md mx-auto space-y-6 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold">
          <Disc className="w-4 h-4 animate-spin" />
          <span>عجلة حظ M4 PES الكبرى</span>
        </div>
        <h1 className="text-xl font-black text-white">🎡 أدر عجلة M4 واربح سواريز الأسطوري!</h1>
        <p className="text-xs text-slate-400">
          لك محاولة مجانية كل يوم. شارك التطبيق أو شاهد فيديو للحصول على محاولات إضافية.
        </p>
      </div>

      {/* Wheel Container (Bigger size w-88 h-88) */}
      <div className="relative flex flex-col items-center justify-center py-4">
        
        {/* Pointer */}
        <div className="absolute top-0 z-20 w-8 h-10 bg-amber-400 clip-triangle shadow-lg transform -translate-y-2 border-2 border-slate-950"></div>

        <div className="relative w-88 h-88 rounded-full border-4 border-amber-500/80 shadow-2xl blue-glow bg-slate-900 p-2 overflow-hidden flex items-center justify-center">
          
          {/* Spinning Wheel Disk (5 Seconds animation with images) */}
          <div
            className="w-full h-full rounded-full relative transition-all duration-[5000ms] cubic-bezier(0.1, 0.8, 0.1, 1)"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {prizes.map((p, idx) => {
              const angle = idx * (360 / prizes.length);
              return (
                <div
                  key={p.id}
                  className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-95 flex flex-col items-center justify-start pt-4 text-white font-bold text-[10px] border border-slate-900/50 overflow-hidden`}
                  style={{
                    clipPath: 'polygon(50% 50%, 0% 0%, 100% 0%)',
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: '50% 50%'
                  }}
                >
                  <div className="transform rotate-90 flex flex-col items-center mt-3 space-y-1">
                    <div className="w-9 h-9 rounded-xl overflow-hidden border border-amber-400/60 shadow-md bg-slate-950 flex-shrink-0">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[9px] font-black drop-shadow text-amber-300 whitespace-nowrap">{p.arabicTitle}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Spin Button */}
          <button
            onClick={spinWheel}
            disabled={spinning || (!canSpin && extraSpins <= 0)}
            className="absolute z-10 w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-500 to-amber-600 border-4 border-slate-950 shadow-2xl flex flex-col items-center justify-center text-slate-950 font-black text-xs hover:scale-105 active:scale-95 transition-all disabled:opacity-75"
          >
            <Sparkles className="w-4 h-4 mb-0.5" />
            <span>{spinning ? 'تدور...' : 'دوّر الآن'}</span>
          </button>

        </div>
      </div>

      {/* Chances & Share Extra Spin */}
      <div className="space-y-3 text-center">
        {canSpin || extraSpins > 0 ? (
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
            <span className="text-xs font-bold text-amber-300">
              {extraSpins > 0 ? `لديك ${extraSpins} محاولة إضافية!` : 'لك محاولة مجانية كل يوم 🎡'}
            </span>
            <button
              onClick={handleShareApp}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>محاولة إضافية مجانية</span>
            </button>
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 text-xs font-bold">
              <Clock className="w-4 h-4" />
              <span>لقد استخدمت لفتك اليومية</span>
            </div>
            <p className="text-xs text-slate-400">ستفتح المحاولة القادمة خلال: <span className="text-white font-bold">{timeLeft}</span></p>
            <button
              onClick={handleWatchVideo}
              className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow"
            >
              <Video className="w-4 h-4" />
              <span>شاهد فيديو لمحاولة إضافية مجانية</span>
            </button>
          </div>
        )}
      </div>

      {/* Prizes Status List with Real Images */}
      <div className="space-y-2 pt-2">
        <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>جوائز عجلة M4 الكبرى وحالة المخزون</span>
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {prizes.filter(p => p.status !== 'hard_luck' && p.status !== 'filler').map((p) => (
            <div key={p.id} className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-amber-500/40 bg-slate-950 flex-shrink-0">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-black text-white">{p.arabicTitle}</p>
                  <p className="text-[10px] text-amber-400">مخزون محدود حصري</p>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${p.status === 'active' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-slate-800 text-slate-400'}`}>
                {p.status === 'active' ? 'متاح الآن' : 'قريباً'}
              </span>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-slate-400 text-center pt-1">الجوائز الكبرى محدودة - الحظ يقرر</p>
      </div>

      {/* Recent Winners List */}
      <div className="space-y-2 pt-2">
        <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-emerald-400" />
          <span>آخر الفائزين في عجلة M4</span>
        </h3>
        <div className="space-y-2">
          {recentWinners.map((w, wIdx) => (
            <div key={wIdx} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-[10px]">🏆</span>
                <span className="font-bold text-white">{w.name}</span>
              </div>
              <div className="text-left">
                <span className="text-amber-400 font-bold block">{w.prize}</span>
                <span className="text-[9px] text-slate-500">{w.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Won Prize Modal with Big Image */}
      {showModal && wonPrize && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-sm rounded-3xl bg-slate-900 border-2 border-amber-500 p-6 text-center space-y-4 shadow-2xl gold-glow">
            
            {wonPrize.status === 'hard_luck' ? (
              <>
                <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-4xl mx-auto overflow-hidden">
                  <img src={wonPrize.image} alt="Try again" className="w-full h-full object-cover opacity-60" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-base font-black text-white">حظ أوفر 😅 جرب باجر، حظك قريب!</h2>
                  <p className="text-xs text-amber-400 font-bold">
                    تمت إضافة +5 نقاط تعويضية إلى رصيدك 🪙
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setShowModal(false);
                      spinWheel();
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>دوّر مرة ثانية</span>
                  </button>
                  <button
                    onClick={handleWatchVideo}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Video className="w-4 h-4" />
                    <span>شاهد فيديو لمحاولة إضافية</span>
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all"
                  >
                    إغلاق
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="w-28 h-28 rounded-2xl border-2 border-amber-400 overflow-hidden mx-auto shadow-xl bg-slate-950">
                  <img src={wonPrize.image} alt={wonPrize.title} className="w-full h-full object-cover" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    مبروك الفوز! 🎉
                  </span>
                  <h2 className="text-lg font-black text-white pt-2">ربحت {wonPrize.arabicTitle}!</h2>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    مبروك جائزتك الكبرى من عجلة M4! تواصل الآن لاستلامها.
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/9647809678270?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>تواصل لاستلام الجائزة عبر الواتساب</span>
                  </a>
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all"
                  >
                    إغلاق
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
