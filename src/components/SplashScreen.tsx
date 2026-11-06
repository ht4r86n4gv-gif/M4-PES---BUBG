import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

export const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 2000); // exactly 2 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-36 h-36 rounded-3xl overflow-hidden border-2 border-amber-400 shadow-2xl gold-glow bg-slate-900 flex items-center justify-center animate-bounce">
        <img
          src="/assets/aistudio/6CE98591-751C-4AAA-AAEF-4640D50464CC_fd32959b.jpeg"
          alt="M4 PES Splash Icon"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-6 text-center space-y-2">
        <h1 className="text-2xl font-black gold-gradient-text tracking-wider">M4 PES</h1>
        <p className="text-xs text-slate-400 font-bold">جاري تحميل التطبيق الاحترافي...</p>
        <div className="flex items-center justify-center gap-1.5 pt-2 text-amber-400">
          <RefreshCw className="w-4 h-4 animate-spin" />
          <span className="text-[10px]">استعداد كامل 60 / 120 FPS</span>
        </div>
      </div>
    </div>
  );
};
