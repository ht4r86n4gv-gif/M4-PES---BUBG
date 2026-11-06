import React from 'react';
import { Volume2, VolumeX, Coins } from 'lucide-react';
import { ActiveTab } from '../types';
import { sounds } from '../utils/audio';

interface NavbarProps {
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  userCoins: number;
  activeTab?: ActiveTab;
  setActiveTab?: (val: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  soundEnabled, 
  setSoundEnabled, 
  userCoins, 
  activeTab = 'home', 
  setActiveTab 
}) => {
  const toggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    sounds.soundEnabled = newState;
    if (newState) sounds.playClick();
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-blue-900/40 px-3 py-2.5 shadow-lg shadow-black/40">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        
        {/* Store Logo & Title with Exact Uploaded Icon */}
        <div 
          onClick={() => setActiveTab && setActiveTab('home')}
          className="flex items-center gap-2 cursor-pointer select-none shrink-0"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-amber-400/50 shadow-md shadow-blue-500/20 bg-slate-950 flex items-center justify-center">
            <img
              src="/assets/aistudio/6CE98591-751C-4AAA-AAEF-4640D50464CC_fd32959b.jpeg"
              alt="M4 PES Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-black text-base tracking-wide gold-gradient-text">M4 PES</span>
              <span className="text-[9px] px-1.5 py-0.2 bg-blue-600/30 text-blue-300 font-bold rounded border border-blue-500/30">Pro</span>
            </div>
            <p className="text-[9px] text-slate-400">تطبيق الاحتراف</p>
          </div>
        </div>

        {/* Main Tab Switcher: بيس ⚽ vs بوبجي 🔫 */}
        {setActiveTab && (
          <div className="flex items-center p-1 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('home');
              }}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                activeTab !== 'pubg'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              بيس ⚽
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('pubg');
              }}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'pubg'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              بوبجي 🔫
            </button>
          </div>
        )}

        {/* Right Actions: Coins & Sound */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="flex items-center gap-1 bg-slate-900/90 border border-amber-500/30 px-2 py-1 rounded-full shadow-inner">
            <Coins className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-bold text-amber-300">{userCoins}</span>
          </div>

          <button
            onClick={toggleSound}
            className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all"
            title={soundEnabled ? 'كتم الصوت' : 'تشغيل الصوت'}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-blue-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
          </button>
        </div>

      </div>
    </header>
  );
};
