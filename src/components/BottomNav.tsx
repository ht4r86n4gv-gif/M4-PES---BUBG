import React from 'react';
import { Home, Disc, Star, Award, ShieldCheck, Sparkles, UserCheck, Zap, Crosshair } from 'lucide-react';
import { ActiveTab } from '../types';
import { sounds } from '../utils/audio';

interface BottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home' as ActiveTab, label: 'بيس ⚽', icon: Home },
    { id: 'pubg' as ActiveTab, label: 'بوبجي 🔫', icon: Crosshair },
    { id: 'booster' as ActiveTab, label: 'معزز M4', icon: Zap },
    { id: 'wheel' as ActiveTab, label: 'العجلة', icon: Disc },
    { id: 'players' as ActiveTab, label: 'اللاعبين', icon: Star },
    { id: 'coaches' as ActiveTab, label: 'المدربين', icon: Award },
    { id: 'special' as ActiveTab, label: 'تطويرات', icon: Sparkles },
    { id: 'analysis' as ActiveTab, label: 'التحليل', icon: ShieldCheck },
    { id: 'developer' as ActiveTab, label: 'M4 PES', icon: UserCheck },
  ];

  const handleTabClick = (id: ActiveTab) => {
    sounds.playClick();
    setActiveTab(id);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-t border-blue-900/40 pb-safe shadow-2xl">
      <div className="max-w-md mx-auto px-1 py-1.5 flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-amber-400 bg-amber-950/50 border border-amber-500/30 shadow-md shadow-amber-500/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
              }`}
            >
              <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'text-amber-400 animate-bounce' : ''}`} />
              <span className="text-[9px] font-semibold tracking-tight whitespace-nowrap">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
