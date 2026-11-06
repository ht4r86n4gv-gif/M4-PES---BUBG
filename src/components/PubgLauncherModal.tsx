import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, Play, Flame, RefreshCw, Cpu, Gauge, 
  ExternalLink, BellOff, Globe, Crosshair, Sparkles, Check
} from 'lucide-react';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface PubgLauncherModalProps {
  isOpen: boolean;
  onClose: () => void;
  server: string;
  mode: string;
  autoClean: boolean;
  dnd: boolean;
}

export const PubgLauncherModal: React.FC<PubgLauncherModalProps> = ({
  isOpen,
  onClose,
  server,
  mode,
  autoClean,
  dnd,
}) => {
  const [progress, setProgress] = useState(0);
  const [stepText, setStepText] = useState('جاري فحص الذاكرة العشوائية...');
  const [isCompleted, setIsCompleted] = useState(false);
  const [ramPercent, setRamPercent] = useState(85);
  const [tempValue, setTempValue] = useState(38);
  const [showToast, setShowToast] = useState<string | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setIsCompleted(false);
      setRamPercent(85);
      setTempValue(38);
      setShowToast(null);
      setShowInstallPrompt(false);
      return;
    }

    sounds.playClick();

    // 4 seconds total animation (100 ticks of 40ms)
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      // Smooth RAM and Temp drop
      if (currentProgress <= 100) {
        // RAM drops from 85% to 45%
        const newRam = Math.round(85 - (currentProgress / 100) * 40);
        setRamPercent(newRam);

        // Temp drops from 38C to 33C
        const newTemp = Math.round(38 - (currentProgress / 100) * 5);
        setTempValue(newTemp);
      }

      // Step text changing at requested percentage markers
      if (currentProgress < 30) {
        setStepText('جاري فحص الذاكرة العشوائية...');
      } else if (currentProgress < 60) {
        setStepText('تم تحرير 450MB من الرام ✅');
      } else if (currentProgress < 80) {
        setStepText('جاري مسح الملفات المؤقتة...');
      } else if (currentProgress < 95) {
        setStepText('تم مسح الذاكرة العشوائية ✅');
      } else if (currentProgress < 100) {
        setStepText('جاري تحسين الايم والفريمات...');
      } else {
        setStepText('جهازك صار جاهز 🔥');
        setIsCompleted(true);
        sounds.playWinFanfare();
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLaunchGame = () => {
    sounds.playClick();
    setShowToast('تم الدخول بنجاح، بالتوفيق 🏆');

    const ua = navigator.userAgent;
    const isIos = /iphone|ipad|ipod/i.test(ua);

    if (isIos) {
      // iOS Deep link for PUBG Mobile
      window.location.href = 'pubgmobile://';
    } else {
      // Android Intent for PUBG Mobile Global
      const androidIntent = 'intent://launch#Intent;package=com.tencent.ig;scheme=pubgmobile;end';
      window.location.href = androidIntent;
    }

    // Set fallback timeout if user stays in browser (app not installed)
    setTimeout(() => {
      setShowInstallPrompt(true);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 overflow-hidden animate-fadeIn text-center select-none">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 inset-x-4 max-w-sm mx-auto z-50 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-3.5 rounded-2xl shadow-2xl border border-emerald-400 font-black text-xs sm:text-sm animate-bounce flex items-center justify-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-white" />
          <span>{showToast}</span>
        </div>
      )}

      {/* Top Bar with Close Button */}
      <div className="flex items-center justify-between w-full max-w-md mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-red-500/30">
            🔫
          </div>
          <div className="text-right">
            <span className="text-[10px] text-orange-400 font-bold block">منفذ بوبجي M4</span>
            <h2 className="text-sm font-black text-white">منظف الرام والدخول المباشر</h2>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Central Animation Area */}
      <div className="w-full max-w-md mx-auto space-y-4 my-auto">
        
        {/* Top Header Text */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-black">
            <span>جاري تنظيف جهازك... 🧹</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
            {stepText}
          </h3>
        </div>

        {/* Circular RAM Cleaner Gauge */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto flex items-center justify-center">
          {/* Animated Background Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-slate-900 shadow-inner" />
          
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="42%"
              className="text-slate-800"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
            />
            <circle
              cx="50%"
              cy="50%"
              r="42%"
              strokeWidth="10"
              strokeDasharray={260}
              strokeDashoffset={260 - (260 * progress) / 100}
              strokeLinecap="round"
              stroke="url(#pubg-gradient)"
              fill="transparent"
              className="transition-all duration-100 ease-out"
            />
            <defs>
              <linearGradient id="pubg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Info */}
          <div className="absolute text-center space-y-0.5">
            <span className="text-[10px] text-slate-400 block font-bold">الذاكرة المستخدمة</span>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {ramPercent}%
            </div>
            <div className="text-[11px] font-black text-emerald-400">
              {isCompleted ? '45% (خفيفة وسلسة)' : 'جاري التحرير...'}
            </div>
          </div>
        </div>

        {/* Progress Bar (0% -> 100%) */}
        <div className="space-y-1 max-w-sm mx-auto">
          <div className="flex justify-between text-xs font-bold text-slate-400">
            <span>نسبة الإنجاز</span>
            <span className="text-amber-400 font-mono">{progress}%</span>
          </div>
          <div className="w-full h-3 bg-slate-900 rounded-full p-0.5 border border-slate-800 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-full transition-all duration-75 shadow-lg shadow-orange-500/30"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Live Stats Grid */}
        <div className="grid grid-cols-2 gap-2.5 max-w-sm mx-auto text-center pt-2">
          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800">
            <span className="text-[10px] text-slate-400 block">استهلاك الرام</span>
            <p className="text-xs sm:text-sm font-black text-amber-300 mt-0.5">
              85% ← <span className="text-emerald-400 font-black">{ramPercent}%</span>
            </p>
            <span className="text-[9px] text-emerald-400 font-bold block mt-0.5">
              تم توفير: 1.2GB رام
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800">
            <span className="text-[10px] text-slate-400 block">حرارة الهاتف المقدرة</span>
            <p className="text-xs sm:text-sm font-black text-rose-300 mt-0.5">
              38° ← <span className="text-emerald-400 font-black">{tempValue}°C</span>
            </p>
            <span className="text-[9px] text-cyan-300 font-bold block mt-0.5">
              تبريد وحفظ الفريمات ❄️
            </span>
          </div>
        </div>

        {/* Selected Config Info */}
        <div className="flex items-center justify-around p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 max-w-sm mx-auto">
          <div className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px]">السيرفر: <strong>{server}</strong></span>
          </div>
          <div className="flex items-center gap-1">
            <Crosshair className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px]">النمط: <strong>{mode}</strong></span>
          </div>
          {dnd && (
            <div className="flex items-center gap-1 text-emerald-400">
              <BellOff className="w-3.5 h-3.5" />
              <span className="text-[11px]">عدم إزعاج</span>
            </div>
          )}
        </div>

      </div>

      {/* Bottom Action Buttons (Shown after 100% completion) */}
      <div className="w-full max-w-md mx-auto space-y-2 pt-2">
        {isCompleted ? (
          <div className="space-y-2 animate-fadeIn">
            <button
              onClick={handleLaunchGame}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-black text-base sm:text-lg shadow-2xl shadow-emerald-500/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 animate-pulse"
            >
              <Play className="w-6 h-6 fill-current" />
              <span>ادخل للعبة بوبجي الآن 🎮</span>
            </button>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold transition-all border border-slate-800"
            >
              رجوع
            </button>
          </div>
        ) : (
          <div className="p-3 text-xs text-slate-500">
            <span>جاري إعداد بيئة اللعب الفائقة... يرجى الانتظار</span>
          </div>
        )}

        {/* Fallback Install Prompt */}
        {showInstallPrompt && (
          <div className="p-3 rounded-2xl bg-slate-900 border border-amber-500/40 text-xs space-y-2 animate-fadeIn text-center">
            <p className="text-amber-300 font-bold">
              بوبجي مو مثبتة على جهازك؟ حملها مباشرة من المتجر الرسمي:
            </p>
            <div className="flex items-center justify-center gap-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.tencent.ig"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-blue-600 text-white font-bold text-[11px] flex items-center gap-1 hover:bg-blue-500"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>متجر Google Play</span>
              </a>
              <a
                href="https://apps.apple.com/app/pubg-mobile/id1330123889"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-slate-800 text-white font-bold text-[11px] flex items-center gap-1 hover:bg-slate-700"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>متجر App Store</span>
              </a>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
