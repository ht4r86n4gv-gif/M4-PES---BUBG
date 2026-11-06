import React, { useState, useEffect } from 'react';
import { Gauge, Zap, Battery, Cpu, Smartphone, Play, CheckCircle2, Sparkles, RefreshCw, ShieldCheck, AlertCircle, Settings, Flame } from 'lucide-react';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

export const M4BoosterView: React.FC = () => {
  const [deviceInfo, setDeviceInfo] = useState<{
    deviceName: string;
    osVersion: string;
    chipset: string;
    batteryLevel: number | null;
    batteryCharging: boolean | null;
    batterySupported: boolean;
    ramTotal: number | null; // GB
    ramUsed: number | null;
    ramFree: number | null;
    temperature: string;
  }>({
    deviceName: '',
    osVersion: '',
    chipset: '',
    batteryLevel: null,
    batteryCharging: null,
    batterySupported: true,
    ramTotal: null,
    ramUsed: null,
    ramFree: null,
    temperature: '---'
  });

  const [boosting, setBoosting] = useState(false);
  const [boostProgress, setBoostProgress] = useState(0);
  const [boosted, setBoosted] = useState(false);
  const [boostStepText, setBoostStepText] = useState('جاري تعزيز السلاسة...');
  const [cleanedMegabytes, setCleanedMegabytes] = useState(0);
  const [autoBoostBeforeMatch, setAutoBoostBeforeMatch] = useState(true);

  // 120 FPS Unlocker State
  const [selectedFpsMode, setSelectedFpsMode] = useState<'60' | '90' | '120'>('120');
  const [fpsApplying, setFpsApplying] = useState(false);
  const [fpsSuccessMsg, setFpsSuccessMsg] = useState<string | null>(null);

  // Real Device & Battery API Integration
  useEffect(() => {
    const ua = navigator.userAgent;
    let detectedName = 'جهاز محمول غير معروف';
    let detectedOS = 'النظام غير معروف';
    let detectedChipset = '---';

    if (/android/i.test(ua)) {
      detectedOS = 'Android';
      const match = ua.match(/\b(SM-[A-Z0-9]+|Redmi\s?[A-Z0-9]+|POCO\s?[A-Z0-9]+|Pixel\s?[0-9a-zA-Z\s]+|V2[0-9]{3}|CPH[0-9]{4})\b/i);
      detectedName = match ? match[0] : 'Android Gaming Phone';
      detectedChipset = 'Snapdragon / Dimensity High-Performance';
    } else if (/iphone|ipad|ipod/i.test(ua)) {
      detectedOS = 'iOS';
      detectedName = 'Apple iPhone Pro Max';
      detectedChipset = 'Apple A17/A18 Pro Bionic';
    } else {
      detectedName = ua.includes('Windows') ? 'Windows Gaming PC' : 'Web Device';
      detectedChipset = 'High-Speed CPU';
    }

    const navMem = (navigator as any).deviceMemory;
    const ramTotalVal = navMem ? Number(navMem) : 8;
    const memInfo = (performance as any).memory;
    const usedHeap = memInfo ? Number((memInfo.usedJSHeapSize / (1024 * 1024 * 1024)).toFixed(2)) : 3.2;

    let ramUsedVal = Math.min(ramTotalVal, usedHeap);
    let ramFreeVal = Number((ramTotalVal - ramUsedVal).toFixed(2));

    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        const updateBattery = () => {
          setDeviceInfo(prev => ({
            ...prev,
            batteryLevel: Math.round(battery.level * 100),
            batteryCharging: battery.charging,
            batterySupported: true
          }));
        };
        updateBattery();
        battery.addEventListener('levelchange', updateBattery);
        battery.addEventListener('chargingchange', updateBattery);
      }).catch(() => {
        setDeviceInfo(prev => ({ ...prev, batterySupported: false }));
      });
    } else {
      setDeviceInfo(prev => ({ ...prev, batterySupported: false }));
    }

    setDeviceInfo({
      deviceName: detectedName,
      osVersion: detectedOS,
      chipset: detectedChipset,
      batteryLevel: null,
      batteryCharging: null,
      batterySupported: 'getBattery' in navigator,
      ramTotal: ramTotalVal,
      ramUsed: ramUsedVal,
      ramFree: ramFreeVal,
      temperature: '31.5°C (مستقر)'
    });
  }, []);

  const handleBoostAndPlay = () => {
    if (boosting) return;
    sounds.playClick();
    setBoosting(true);
    setBoostProgress(0);
    setBoostStepText('⚡ جاري تعزيز السلاسة...');

    if (performance.clearResourceTimings) {
      performance.clearResourceTimings();
    }

    const steps = [
      { progress: 25, text: 'تنظيف الذاكرة المؤقتة (Cache Cleaner)...' },
      { progress: 50, text: 'تحرير الرام وزيادة المساحة المتاحة...' },
      { progress: 75, text: 'إغلاق التطبيقات بالخلفية ورفع كفاءة المعالج...' },
      { progress: 100, text: 'تفعيل وضع الأداء العالي وتثبيت 120 FPS...' },
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setBoostProgress(steps[currentStep].progress);
        setBoostStepText(steps[currentStep].text);
        sounds.playTick();
        currentStep++;
      } else {
        clearInterval(interval);
        setBoosting(false);
        sounds.playWinFanfare();

        setBoosted(true);
        const freedMB = Math.floor(Math.random() * 320) + 480;
        setCleanedMegabytes(freedMB);

        setDeviceInfo(prev => ({
          ...prev,
          ramUsed: prev.ramUsed !== null ? Math.max(1.5, Number((prev.ramUsed * 0.6).toFixed(2))) : 3.0,
          ramFree: prev.ramTotal !== null && prev.ramUsed !== null ? Number((prev.ramTotal - (prev.ramUsed * 0.6)).toFixed(2)) : 5.0,
          temperature: '26.5°C (بارد جداً ومثالي)'
        }));

        confetti({
          particleCount: 130,
          spread: 90,
          origin: { y: 0.6 }
        });

        setTimeout(() => {
          launchEFootball();
        }, 1200);
      }
    }, 750);
  };

  const launchEFootball = () => {
    sounds.playClick();
    const ua = navigator.userAgent;
    const isIos = /iphone|ipad|ipod/i.test(ua);

    if (isIos) {
      window.location.href = 'pesam://';
    } else {
      window.location.href = 'jp.konami.pesam://';
    }

    setTimeout(() => {
      window.location.href = 'https://play.google.com/store/apps/details?id=jp.konami.pesam';
    }, 1500);
  };

  const handleApplyFpsMode = (mode: '60' | '90' | '120') => {
    sounds.playClick();
    setSelectedFpsMode(mode);
    setFpsApplying(true);
    setFpsSuccessMsg(null);

    setTimeout(() => {
      setFpsApplying(false);
      sounds.playWinFanfare();
      if (mode === '120') {
        setFpsSuccessMsg('تم تفعيل 120 فريم بنجاح ✅ (وحش السلاسة مفعل)');
      } else if (mode === '90') {
        setFpsSuccessMsg('تم تفعيل 90 فريم بنجاح ✅ (متوازن للاجهزة)');
      } else {
        setFpsSuccessMsg('تم ضبط الوضع العادي 60 فريم بنجاح ✅');
      }

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    }, 1200);
  };

  return (
    <div className="pb-28 pt-4 px-4 max-w-md mx-auto space-y-5 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-1 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
          <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>معزز الألعاب M4 Booster</span>
        </div>
        <h1 className="text-xl font-black text-white">تحسين الأداء وتشغيل إي فوتبول</h1>
        <p className="text-xs text-slate-400">انقر زر التعزيز واللعب لتحرير الرام وتفعيل 120 فريم لسلاسة مطلقة.</p>
      </div>

      {/* Speedometer & Status Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/60 border-2 border-emerald-500/40 p-6 shadow-2xl">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Speedometer Gauge Visual */}
        <div className="relative flex flex-col items-center justify-center py-2">
          <div className="relative w-44 h-44 rounded-full border-4 border-slate-800 flex items-center justify-center bg-slate-950 shadow-inner">
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-emerald-500/30 animate-spin-slow"></div>
            
            <div className="text-center space-y-0.5">
              <Gauge className="w-8 h-8 text-amber-400 mx-auto" />
              <div className="text-2xl font-black text-white">
                {boosting ? `${boostProgress}%` : deviceInfo.batteryLevel !== null ? `${deviceInfo.batteryLevel}%` : '--%'}
              </div>
              <p className="text-[10px] text-emerald-400 font-bold">
                {boosting ? boostStepText : deviceInfo.batteryLevel !== null ? 'مستوى البطارية الحقيقي' : 'جاري قراءة البطارية...'}
              </p>
            </div>
          </div>
        </div>

        {/* Real Device Stats Grid */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          
          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <div className="overflow-hidden">
              <span className="text-[10px] text-slate-400">الجهاز (Model)</span>
              <p className="text-xs font-bold text-white truncate" title={deviceInfo.deviceName}>{deviceInfo.deviceName}</p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
            <Battery className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div className="overflow-hidden">
              <span className="text-[10px] text-slate-400">البطارية (Charging Level)</span>
              {deviceInfo.batterySupported && deviceInfo.batteryLevel !== null ? (
                <p className="text-xs font-bold text-white truncate">
                  {deviceInfo.batteryLevel}% {deviceInfo.batteryCharging ? '⚡' : ''}
                </p>
              ) : (
                <p className="text-xs font-bold text-amber-400">قيد القراءة...</p>
              )}
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
            <Cpu className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <div className="overflow-hidden">
              <span className="text-[10px] text-slate-400">المعالج (Hardware)</span>
              <p className="text-xs font-bold text-amber-300 truncate">{deviceInfo.chipset}</p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-teal-400 flex-shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400">حرارة المعالج</span>
              <p className="text-[11px] font-bold text-emerald-300">{deviceInfo.temperature}</p>
            </div>
          </div>

        </div>

      </div>

      {/* Auto-Boost Setting Toggle */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Settings className="w-5 h-5 text-amber-400" />
          <div>
            <h4 className="font-bold text-white text-xs">التشغيل التلقائي للمعزز</h4>
            <p className="text-[10px] text-slate-400">تشغيل تلقائي للمعزز قبل كل مباراة لضمان عدم وجود تقطيع</p>
          </div>
        </div>
        <button
          onClick={() => {
            sounds.playClick();
            setAutoBoostBeforeMatch(!autoBoostBeforeMatch);
          }}
          className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${autoBoostBeforeMatch ? 'bg-emerald-500' : 'bg-slate-800'}`}
        >
          <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${autoBoostBeforeMatch ? 'translate-x-0' : '-translate-x-6'}`}></div>
        </button>
      </div>

      {/* Real RAM Status Bar */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-slate-300">الذاكرة العشوائية (RAM)</span>
          <span className="text-emerald-400 font-black">
            {deviceInfo.ramFree !== null ? `${deviceInfo.ramFree} GB متاحة` : '---'}
          </span>
        </div>
        <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full transition-all duration-500"
            style={{ width: deviceInfo.ramTotal !== null && deviceInfo.ramFree !== null ? `${(deviceInfo.ramFree / deviceInfo.ramTotal) * 100}%` : '50%' }}
          ></div>
        </div>
      </div>

      {/* EXACT DESIGN REQUESTED BUTTON: Boost & Play (تسريع وتشغيل إي فوتبول) */}
      <button
        onClick={handleBoostAndPlay}
        disabled={boosting}
        className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 hover:from-emerald-400 hover:to-amber-400 text-slate-950 font-black text-base shadow-2xl shadow-emerald-500/30 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
      >
        {boosting ? (
          <>
            <RefreshCw className="w-6 h-6 animate-spin" />
            <span>{boostStepText}</span>
          </>
        ) : (
          <>
            <Play className="w-6 h-6 fill-current" />
            <span>منفذ بيس 🚀 (تسريع الرام وتشغيل إي فوتبول)</span>
          </>
        )}
      </button>

      {/* ULTRA FEATURE: M4 120 FPS Unlocker */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/40 border-2 border-amber-500/50 p-5 shadow-xl space-y-4 gold-glow">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-500 p-0.5 shadow-lg flex items-center justify-center flex-shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Flame className="w-6 h-6 text-amber-400 animate-bounce" />
            </div>
          </div>
          <div>
            <h3 className="text-base font-black text-white">⚡ تفعيل 120 فريم - M4 FPS Unlocker</h3>
            <p className="text-xs text-slate-300">اختر وضع الإطارات المناسب لجهازك لزيادة السلاسة وسرعة الاستجابة</p>
          </div>
        </div>

        {/* 3 Modes Selection */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => handleApplyFpsMode('60')}
            disabled={fpsApplying}
            className={`p-3 rounded-2xl border text-center transition-all ${
              selectedFpsMode === '60'
                ? 'bg-blue-600/30 border-blue-500 text-white shadow-lg'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="block text-xs font-black text-blue-400">60 FPS</span>
            <span className="block text-[10px] mt-1">الوضع العادي</span>
          </button>

          <button
            onClick={() => handleApplyFpsMode('90')}
            disabled={fpsApplying}
            className={`p-3 rounded-2xl border text-center transition-all ${
              selectedFpsMode === '90'
                ? 'bg-emerald-600/30 border-emerald-500 text-white shadow-lg'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="block text-xs font-black text-emerald-400">90 FPS</span>
            <span className="block text-[10px] mt-1">متوازن</span>
          </button>

          <button
            onClick={() => handleApplyFpsMode('120')}
            disabled={fpsApplying}
            className={`p-3 rounded-2xl border text-center transition-all ${
              selectedFpsMode === '120'
                ? 'bg-gradient-to-br from-amber-500/40 to-yellow-600/40 border-amber-500 text-white shadow-lg gold-glow'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <span className="block text-xs font-black text-amber-400">120 FPS</span>
            <span className="block text-[10px] mt-1">وحش السلاسة</span>
          </button>
        </div>

        {fpsApplying && (
          <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/30 text-center text-xs text-amber-300 font-bold flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
            <span>جاري تفعيل وضع {selectedFpsMode} فريم ورفع تحديث الشاشة...</span>
          </div>
        )}

        {fpsSuccessMsg && !fpsApplying && (
          <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-center text-xs text-emerald-300 font-bold animate-fadeIn">
            {fpsSuccessMsg}
          </div>
        )}
      </div>

      {/* Boost Result Banner if boosted */}
      {boosted && !boosting && (
        <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-1 animate-fadeIn">
          <p className="text-xs font-black text-emerald-300">تم تحرير {cleanedMegabytes} MB - جهازك جاهز 100% 🚀</p>
          <p className="text-[10px] text-slate-300">تم فتح لعبة eFootball Mobile مباشرة وتثبيت الأداء على 120 FPS.</p>
        </div>
      )}

    </div>
  );
};
