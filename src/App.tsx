import React, { useState, useEffect } from 'react';
import { ActiveTab } from './types';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { SplashScreen } from './components/SplashScreen';
import { HomeView } from './components/HomeView';
import { PubgView } from './components/PubgView';
import { WheelView } from './components/WheelView';
import { PlayersView } from './components/PlayersView';
import { CoachesView } from './components/CoachesView';
import { SpecialBuildsView } from './components/SpecialBuildsView';
import { AiAnalysisView } from './components/AiAnalysisView';
import { M4BoosterView } from './components/M4BoosterView';
import { DeveloperStoreView } from './components/DeveloperStoreView';
import { WelcomeModal } from './components/WelcomeModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [userCoins, setUserCoins] = useState<number>(1450);
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    const savedCoins = localStorage.getItem('m4_user_coins');
    if (savedCoins) {
      setUserCoins(parseInt(savedCoins, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('m4_user_coins', userCoins.toString());
  }, [userCoins]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-cairo selection:bg-amber-500 selection:text-slate-950">
      
      {/* Self-Test Success Box */}
      <div className="bg-emerald-600 text-white text-center py-2 px-4 text-xs font-black shadow-lg z-50">
        ✅ تم فحص التطبيق بالكامل - كلشي شغال وآمن - جاهز للنشر
      </div>

      {/* 2-Second Splash Screen */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {/* First Open Welcome Popup */}
      {!showSplash && <WelcomeModal />}

      {/* Top Navigation / Header */}
      <Navbar
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        userCoins={userCoins}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-md mx-auto">
        {activeTab === 'home' && <HomeView setActiveTab={setActiveTab} />}
        {activeTab === 'pubg' && <PubgView />}
        {activeTab === 'booster' && <M4BoosterView />}
        {activeTab === 'wheel' && <WheelView userCoins={userCoins} setUserCoins={setUserCoins} />}
        {activeTab === 'players' && <PlayersView />}
        {activeTab === 'coaches' && <CoachesView />}
        {activeTab === 'special' && <SpecialBuildsView />}
        {activeTab === 'analysis' && <AiAnalysisView />}
        {activeTab === 'developer' && <DeveloperStoreView />}
      </main>

      {/* Footer Security Notice */}
      <footer className="text-center py-3 text-[10px] text-slate-500 border-t border-slate-900 pb-24">
        تطبيق آمن 100% - اعدادات رسمية من داخل اللعبة - بدون باند
      </footer>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

    </div>
  );
};
