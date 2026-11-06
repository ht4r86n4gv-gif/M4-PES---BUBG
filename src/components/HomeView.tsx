import React from 'react';
import { Disc, Star, Award, Sparkles, ShieldCheck, UserCheck, Zap, Trophy, Flame, ChevronLeft } from 'lucide-react';
import { ActiveTab } from '../types';
import { sounds } from '../utils/audio';

interface HomeViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab }) => {
  const handleNav = (tab: ActiveTab) => {
    sounds.playClick();
    setActiveTab(tab);
  };

  const menuItems = [
    {
      id: 'booster' as ActiveTab,
      title: 'معزز الألعاب M4 Booster',
      subtitle: 'تسريع الرام، تبريد المعالج، وتشغيل إي فوتبول بأعلى أداء',
      icon: Zap,
      gradient: 'from-emerald-600 via-teal-500 to-amber-500',
      badge: 'جديد ومهم',
      shadow: 'shadow-emerald-500/20'
    },
    {
      id: 'wheel' as ActiveTab,
      title: '🎡 عجلة حظ M4 PES',
      subtitle: 'اربح سواريز الأسطوري، كوينز، ومكافآت يومية',
      icon: Disc,
      gradient: 'from-amber-600 via-yellow-500 to-amber-700',
      badge: 'مجاناً كل يوم',
      shadow: 'shadow-amber-500/20'
    },
    {
      id: 'players' as ActiveTab,
      title: 'اللاعبين - 250 لاعب',
      subtitle: 'أفضل تدريب رسمي لـ 250 لاعب في إي فوتبول 2026',
      icon: Star,
      gradient: 'from-blue-600 via-indigo-600 to-blue-800',
      badge: '250 لاعب رسمي ⭐',
      shadow: 'shadow-blue-500/20'
    },
    {
      id: 'coaches' as ActiveTab,
      title: 'المدربين - 50 مدرب',
      subtitle: 'دليل شامل لـ 50 مدرب مع التشكيلات وتطوير المراكز',
      icon: Award,
      gradient: 'from-purple-600 via-indigo-600 to-blue-700',
      badge: '50 مدرب كامل',
      shadow: 'shadow-purple-500/20'
    },
    {
      id: 'special' as ActiveTab,
      title: 'التطويرات الخاصة',
      subtitle: 'تدريب لاعبي إيبيك وبوستر للبطولات الكبرى',
      icon: Sparkles,
      gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
      badge: 'ميتا البطولات',
      shadow: 'shadow-emerald-500/20'
    },
    {
      id: 'analysis' as ActiveTab,
      title: 'حلل تشكيلتك',
      subtitle: 'ارفع صورة تشكيلتك واعرف نقاط الضعف والعلاج',
      icon: ShieldCheck,
      gradient: 'from-rose-600 via-red-600 to-amber-600',
      badge: 'تحليل فوري',
      shadow: 'shadow-rose-500/20'
    },
    {
      id: 'developer' as ActiveTab,
      title: 'متجر ومطور M4 PES',
      subtitle: 'تواصل مباشر مع M4، حسابات، وخدمات الدعم',
      icon: UserCheck,
      gradient: 'from-amber-500 via-orange-600 to-yellow-600',
      badge: 'دعم 24/7',
      shadow: 'shadow-amber-500/20'
    },
  ];

  return (
    <div className="pb-28 pt-4 px-4 max-w-md mx-auto space-y-5 animate-fadeIn">
      
      {/* Hero Banner - iOS Glassmorphism */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(0,40,120,0.65), rgba(120,0,200,0.35), rgba(0,180,255,0.25))',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: '1px solid rgba(255,255,255,0.25)',
          borderRadius: '28px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
          padding: '22px 18px',
        }}
        className="relative overflow-hidden flex flex-col items-center text-center gap-3 animate-fadeIn"
      >
        {/* Soft background ambient light */}
        <div className="absolute -top-12 -left-12 w-36 h-36 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Badge "🏆 رسالة من M4" */}
        <div
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,215,0,0.6)',
            color: '#FFD700',
            fontSize: '13px',
            boxShadow: '0 2px 10px rgba(255,215,0,0.25), inset 0 1px 0 rgba(255,255,255,0.4)',
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full font-black tracking-wide z-10"
        >
          <span>🏆 رسالة من M4</span>
        </div>

        {/* 2. Title */}
        <h1
          style={{
            background: 'linear-gradient(90deg, #ffffff 20%, #FFD700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            margin: '8px 0',
          }}
          className="text-[23px] sm:text-[26px] font-black leading-tight text-center z-10"
        >
          أهلاً بك في M4 PES ⚽
        </h1>

        {/* 4. Button "ابدأ الآن ⚡" Full Width */}
        <div className="w-full pt-1 z-10">
          <button
            onClick={() => {
              sounds.playClick();
              document.getElementById('app-features')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              background: 'linear-gradient(90deg, #FFD700, #FF8A00)',
              color: '#000000',
              fontSize: '17px',
              borderRadius: '16px',
              height: '52px',
              boxShadow: '0 8px 20px rgba(255,170,0,0.4)',
            }}
            className="w-full font-black flex items-center justify-center gap-2 transition-all active:scale-95 hover:brightness-105 group"
          >
            <span>ابدأ الآن ⚡</span>
            <ChevronLeft className="w-5 h-5 text-black transform group-hover:-translate-x-1 transition-transform animate-pulse" />
          </button>
        </div>
      </div>

      {/* Section Header */}
      <div id="app-features" className="flex items-center justify-between pt-1 scroll-mt-20">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span>أقسام التطبيق الرئيسية</span>
        </h2>
        <span className="text-xs text-slate-400">7 أدوات احترافية</span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-2 gap-3.5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-emerald-500/50 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full blur-xl group-hover:bg-emerald-500/15 transition-all duration-500"></div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5 shadow-md ${item.shadow} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-slate-950/80 rounded-[10px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-400 group-hover:text-amber-400 font-bold transition-colors">
                <span>فتح القسم</span>
                <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
