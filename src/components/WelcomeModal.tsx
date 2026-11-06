import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, Zap, Crosshair, X, Flame } from 'lucide-react';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface WelcomeModalProps {
  onClose?: () => void;
  forceOpen?: boolean;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose, forceOpen = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
      return;
    }
    // Check if shown before
    const hasSeen = localStorage.getItem('m4_welcome_popup_seen');
    if (!hasSeen) {
      // Show on first open
      const timer = setTimeout(() => {
        setIsOpen(true);
        sounds.playWinFanfare();
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.5 }
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [forceOpen]);

  const handleClose = () => {
    sounds.playClick();
    localStorage.setItem('m4_welcome_popup_seen', 'true');
    setIsOpen(false);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn select-none">
      <div 
        style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.92), rgba(20, 30, 70, 0.92), rgba(15, 23, 42, 0.95))',
          boxShadow: '0 25px 60px rgba(0,0,0,0.7), 0 0 40px rgba(255, 215, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.2)',
        }}
        className="relative max-w-sm w-full rounded-3xl border-2 border-amber-400/80 p-5 sm:p-6 text-center space-y-4 animate-scaleUp overflow-hidden shadow-2xl"
      >
        {/* Soft Ambient Background Glow */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute left-3.5 top-3.5 w-8 h-8 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* M4 Logo with Crown */}
        <div className="relative mx-auto w-20 h-20 pt-1">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl bg-slate-950 flex items-center justify-center mx-auto">
            <img
              src="/assets/aistudio/6CE98591-751C-4AAA-AAEF-4640D50464CC_fd32959b.jpeg"
              alt="M4 Logo"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Gold Crown Badge */}
          <div className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 border border-slate-950 flex items-center justify-center shadow-lg text-sm">
            👑
          </div>
        </div>

        {/* EXACT Title */}
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-black text-white leading-snug">
            🏆 أهلاً بك في M4 PES & PUBG ⚽
          </h2>
        </div>

        {/* EXACT Messages */}
        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
          <p className="text-xs sm:text-sm font-bold text-amber-300 leading-relaxed">
            استمتع بأقوى الأدوات والميزات، وكن دائماً في القمة! 🔥
          </p>
          <p className="text-xs font-semibold text-slate-200 leading-relaxed">
            نتمنى لك تجربة ممتعة ومليئة بالانتصارات 💛
          </p>
        </div>

        {/* Features: آمن 100% - منفذ سريع - بيس + بوبجي */}
        <div className="grid grid-cols-3 gap-1.5 pt-1 text-[11px] font-bold">
          <div className="p-2 rounded-xl bg-slate-950/70 border border-emerald-500/30 text-emerald-300 flex flex-col items-center justify-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>آمن 100%</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-950/70 border border-orange-500/30 text-orange-300 flex flex-col items-center justify-center gap-1">
            <Zap className="w-4 h-4 text-orange-400" />
            <span>منفذ سريع</span>
          </div>

          <div className="p-2 rounded-xl bg-slate-950/70 border border-blue-500/30 text-blue-300 flex flex-col items-center justify-center gap-1">
            <Crosshair className="w-4 h-4 text-cyan-400" />
            <span>بيس + بوبجي</span>
          </div>
        </div>

        {/* CTA Button: ابدأ الآن 🔥 */}
        <button
          onClick={handleClose}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-base shadow-xl shadow-amber-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Flame className="w-5 h-5 text-slate-950 fill-current animate-bounce" />
          <span>ابدأ الآن 🔥</span>
        </button>

      </div>
    </div>
  );
};
