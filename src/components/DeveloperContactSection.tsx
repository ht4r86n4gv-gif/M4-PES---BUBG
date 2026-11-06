import React from 'react';
import { MessageCircle, Send, Crown, ExternalLink } from 'lucide-react';
import { sounds } from '../utils/audio';

export const DeveloperContactSection: React.FC = () => {
  const handleWhatsApp = () => {
    sounds.playClick();
    window.open('https://wa.me/9647809678270?text=هلا%20M4%20اريد%20استفسر%20عن%20التطبيق', '_blank');
  };

  const handleTelegram = () => {
    sounds.playClick();
    window.open('https://t.me/L0043', '_blank');
  };

  const handleChannel = () => {
    sounds.playClick();
    window.open('https://t.me/L0043', '_blank');
  };

  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 p-5 shadow-xl space-y-4">
      <div className="text-center space-y-1">
        <h3 className="text-base font-black text-white flex items-center justify-center gap-2">
          <Crown className="w-5 h-5 text-amber-400" />
          <span>تواصل مع المطور</span>
        </h3>
        <p className="text-xs text-slate-300 font-bold">
          مطور التطبيق: M4 - للاستفسار والاعلان والدعم
        </p>
      </div>

      <div className="space-y-3">
        {/* 1. WhatsApp Button - Main & Glowing Green */}
        <button
          onClick={handleWhatsApp}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-500 text-white font-black text-sm shadow-xl shadow-emerald-600/30 flex items-center justify-between transition-all active:scale-95 border border-emerald-400/40"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="tracking-wide">تواصل عبر الواتساب</span>
          </div>
          <ExternalLink className="w-4 h-4 text-emerald-200" />
        </button>

        {/* 2. Telegram Button - Blue */}
        <button
          onClick={handleTelegram}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 hover:from-blue-500 hover:to-sky-500 text-white font-black text-sm shadow-xl shadow-blue-600/30 flex items-center justify-between transition-all active:scale-95 border border-blue-400/40"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <Send className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="tracking-wide">تواصل عبر التليكرام</span>
          </div>
          <ExternalLink className="w-4 h-4 text-blue-200" />
        </button>

        {/* 3. Developer Channel Button - Gold */}
        <button
          onClick={handleChannel}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/30 flex items-center justify-between transition-all active:scale-95 border border-amber-300/50"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-950/20 flex items-center justify-center">
              <Crown className="w-5 h-5 text-slate-950" />
            </div>
            <span className="tracking-wide">قناة المطور</span>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-900" />
        </button>
      </div>
    </div>
  );
};
