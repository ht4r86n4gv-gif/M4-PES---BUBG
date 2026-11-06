import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, Copy, Check, Search, HelpCircle, Sliders, Crosshair, 
  AlertTriangle, Smartphone, ChevronDown, ChevronUp, Zap, Sparkles, X, Eye,
  Settings, Flame, Play, Globe, BellOff
} from 'lucide-react';
import { pubgCodesList, pubgWeaponGuides, defaultManualSensitivity, ManualSensitivityPreset } from '../data/pubgData';
import { PubgSensitivityCode } from '../types';
import { PubgLauncherModal } from './PubgLauncherModal';
import { sounds } from '../utils/audio';

export const PubgView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [copiedManual, setCopiedManual] = useState(false);
  const [howToModalCode, setHowToModalCode] = useState<PubgSensitivityCode | null>(null);
  const [activeSubTab, setActiveSubTab] = useState<'codes' | 'manual' | 'weapons'>('codes');

  // PUBG Launcher States
  const [isLauncherModalOpen, setIsLauncherModalOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState('الشرق الأوسط');
  const [selectedMode, setSelectedMode] = useState('كلاسيك');
  const [autoClean, setAutoClean] = useState(true);
  const [dnd, setDnd] = useState(false);

  // Interactive Manual Sliders State
  const [manualValues, setManualValues] = useState<ManualSensitivityPreset>(defaultManualSensitivity);

  const categories = [
    { id: 'all', label: 'الكل (10 أجهزة)', badge: '🔥' },
    { id: 'iphone', label: 'آيفون', badge: '🍏' },
    { id: 'samsung', label: 'سامسونج', badge: '📱' },
    { id: 'xiaomi', label: 'شاومي / Poco', badge: '⚡' },
    { id: 'ipad', label: 'آيباد', badge: '💻' },
    { id: 'infinix', label: 'إنفينكس / تكنو', badge: '✨' },
    { id: 'nogeneric', label: 'بدون جيروسكوب', badge: '🎯' },
    { id: 'gyro', label: 'جيروسكوب محترفين', badge: '👑' },
  ];

  // Filtered Codes
  const filteredCodes = useMemo(() => {
    return pubgCodesList.filter(item => {
      const q = searchTerm.trim().toLowerCase();
      const matchesSearch = 
        !q ||
        item.deviceName.toLowerCase().includes(q) ||
        item.bestFor.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q) ||
        item.code.includes(q);

      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  const handleCopyCode = (code: PubgSensitivityCode, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sounds.playClick();
    navigator.clipboard.writeText(code.code);
    setCopiedCodeId(code.id);
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  const handleCopyManualValues = () => {
    sounds.playClick();
    const text = `🎮 إعدادات حساسية ببجي موبايل الرسمية (M4 PES):
• كاميرا منظور شخص ثالث (TPP): ${manualValues.cameraNoScope}%
• كاميرا نقطة حمراء (Red Dot): ${manualValues.cameraRedDot}%
• حساسية ADS (إطلاق النار): ${manualValues.adsRedDot}%
• حساسية سكوب 3x ADS: ${manualValues.ads3x}%
• حساسية سكوب 4x ADS: ${manualValues.ads4x}%
• حساسية جيروسكوب (بدون سكوب): ${manualValues.gyroNoScope}%
• حساسية جيروسكوب سكوب 3x: ${manualValues.gyro3x}%
• حساسية جيروسكوب سكوب 6x/8x: ${manualValues.gyro6x}% / ${manualValues.gyro8x}%
✅ إعدادات رسمية آمنة 100% بدون باند عبر تطبيق M4`;

    navigator.clipboard.writeText(text);
    setCopiedManual(true);
    setTimeout(() => setCopiedManual(false), 2500);
  };

  return (
    <div className="pb-32 pt-4 px-3 sm:px-4 max-w-2xl mx-auto space-y-4 animate-fadeIn">
      
      {/* Top Banner - Safe Sensitivity Guarantee */}
      <div 
        style={{
          background: 'linear-gradient(135deg, rgba(20,30,70,0.85), rgba(15,23,42,0.95))',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
        }}
        className="relative overflow-hidden rounded-3xl p-4 sm:p-5 border border-amber-500/30 text-center space-y-2.5"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>اعدادات رسمية من داخل اللعبة - آمنة 100% ولا تسبب باند ✅</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center gap-2">
          <span>حساسية بوبجي موبايل</span>
          <span className="text-amber-400">PUBG Mobile</span>
          <span>🔫</span>
        </h1>

        <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
          أكواد جاهزة محدثة لجميع الهواتف والآيباد + ثبات ليزري للـ M416 والـ AKM بدون أي برامج خارجية أو ملفات كونفك خطرة.
        </p>

        {/* 3 Main View Tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900/90 rounded-2xl border border-slate-800 mt-2">
          <button
            onClick={() => {
              sounds.playClick();
              setActiveSubTab('codes');
            }}
            className={`py-2 px-1 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 ${
              activeSubTab === 'codes'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>📋 أكواد الأجهزة</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              setActiveSubTab('manual');
            }}
            className={`py-2 px-1 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 ${
              activeSubTab === 'manual'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🎛️ حساسية يدوية</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              setActiveSubTab('weapons');
            }}
            className={`py-2 px-1 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 ${
              activeSubTab === 'weapons'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🎯 ضبط الأسلحة</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* PUBG LAUNCHER HERO CARD: منفذ بوبجي 🚀                    */}
      {/* ======================================================== */}
      <div 
        style={{
          background: 'linear-gradient(135deg, rgba(80,20,20,0.65), rgba(30,15,20,0.85), rgba(40,10,10,0.9))',
          boxShadow: '0 15px 35px rgba(239,68,68,0.18), inset 0 1px 0 rgba(255,255,255,0.15)',
        }}
        className="rounded-3xl border-2 border-red-500/40 p-4 sm:p-5 space-y-4 relative overflow-hidden shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-red-600 via-orange-500 to-amber-500 p-0.5 shadow-lg shadow-orange-500/30 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-lg">
                🔫
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-base sm:text-lg font-black text-white">منفذ بوبجي 🚀</h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 font-bold border border-red-500/30">
                  RAM Cleaner
                </span>
              </div>
              <p className="text-[11px] text-slate-300">تنظيف الذاكرة، خفض الحرارة، ودخول سريع للعبة</p>
            </div>
          </div>

          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-xl border border-emerald-500/30 font-bold hidden sm:inline">
            بدون باند ✅
          </span>
        </div>

        {/* STEP 3 - PRE-LAUNCH SETTINGS */}
        <div className="p-3 rounded-2xl bg-slate-950/85 border border-slate-800 space-y-2.5 text-xs">
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-bold">
            <span className="flex items-center gap-1 text-slate-300">
              <Settings className="w-3.5 h-3.5 text-orange-400" />
              <span>إعدادات الدخول المباشر:</span>
            </span>
            <span className="text-orange-400">تخصيص السيرفر والنمط</span>
          </div>

          {/* Server Selector */}
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 block font-medium">اختر السيرفر:</span>
            <div className="grid grid-cols-3 gap-1.5">
              {['الشرق الأوسط', 'أوروبا', 'آسيا'].map((srv) => (
                <button
                  key={srv}
                  onClick={() => {
                    sounds.playClick();
                    setSelectedServer(srv);
                  }}
                  className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all ${
                    selectedServer === srv
                      ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-md'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {srv}
                </button>
              ))}
            </div>
          </div>

          {/* Mode Selector */}
          <div className="space-y-1 pt-0.5">
            <span className="text-[10px] text-slate-400 block font-medium">اختر نمط اللعب:</span>
            <div className="grid grid-cols-3 gap-1.5">
              {['كلاسيك', 'ساحة (TDM)', 'روم ومستودع'].map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    sounds.playClick();
                    setSelectedMode(m);
                  }}
                  className={`py-1.5 px-2 rounded-xl text-xs font-bold transition-all ${
                    selectedMode === m
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow-md font-black'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles: Auto Clean & DND */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-800/80">
            {/* Auto Clean Toggle */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[11px] font-bold text-slate-200">تنظيف تلقائي قبل الدخول ✅</span>
              <button
                onClick={() => {
                  sounds.playClick();
                  setAutoClean(!autoClean);
                }}
                className={`w-10 h-5 rounded-full transition-colors relative p-0.5 ${autoClean ? 'bg-emerald-500' : 'bg-slate-800'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${autoClean ? 'translate-x-0' : '-translate-x-5'}`} />
              </button>
            </div>

            {/* Do Not Disturb Toggle */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[11px] font-bold text-slate-200">وضع عدم الازعاج 🔕</span>
              <button
                onClick={() => {
                  sounds.playClick();
                  setDnd(!dnd);
                }}
                className={`w-10 h-5 rounded-full transition-colors relative p-0.5 ${dnd ? 'bg-orange-500' : 'bg-slate-800'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${dnd ? 'translate-x-0' : '-translate-x-5'}`} />
              </button>
            </div>
          </div>

        </div>

        {/* BIG GRADIENT LAUNCH BUTTON: منفذ بوبجي 🚀 */}
        <button
          onClick={() => {
            sounds.playClick();
            setIsLauncherModalOpen(true);
          }}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-slate-950 font-black text-base sm:text-lg shadow-xl shadow-red-600/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3 border border-orange-400/50"
        >
          <Flame className="w-6 h-6 text-slate-950 fill-current animate-bounce" />
          <span>منفذ بوبجي 🚀 (دخول بوبجي مع تنظيف الرام)</span>
        </button>
      </div>

      {/* PUBG Launcher Full Screen Cleaning Modal */}
      <PubgLauncherModal
        isOpen={isLauncherModalOpen}
        onClose={() => setIsLauncherModalOpen(false)}
        server={selectedServer}
        mode={selectedMode}
        autoClean={autoClean}
        dnd={dnd}
      />

      {/* ======================================================== */}
      {/* SECTION 1: READY CODES (أكواد حساسية جاهزة)              */}
      {/* ======================================================== */}
      {activeSubTab === 'codes' && (
        <div className="space-y-3.5 animate-fadeIn">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="دور على جهازك... (ايفون 13، S24، بوكو، ايباد، جيروسكوب)"
              className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500/60 rounded-2xl py-3 pr-10 pl-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all shadow-inner"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute left-3.5 top-3 text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded-md bg-slate-800"
              >
                مسح
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  sounds.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{cat.badge}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Codes List */}
          <div className="space-y-3">
            {filteredCodes.length === 0 ? (
              <div className="p-8 text-center bg-slate-900/60 rounded-3xl border border-slate-800 space-y-2">
                <p className="text-sm font-bold text-white">لم يتم العثور على كود مطابق لبحثك</p>
                <p className="text-xs text-slate-400">جرب كتابة اسم جهازك أو اختر "الكل" لعرض جميع الأجهزة.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-3.5 py-1.5 bg-blue-600 text-white rounded-xl text-xs font-bold"
                >
                  عرض كافة الأكواد
                </button>
              </div>
            ) : (
              filteredCodes.map(codeItem => {
                const isCopied = copiedCodeId === codeItem.id;
                return (
                  <div
                    key={codeItem.id}
                    className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-3.5 sm:p-4 space-y-3 transition-all shadow-lg"
                  >
                    {/* Device Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            {codeItem.type}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                            {codeItem.fingers} أصابع
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-1.5">
                          <Smartphone className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{codeItem.deviceName}</span>
                        </h3>
                      </div>

                      <span className="text-[10px] text-emerald-400 bg-emerald-950/70 border border-emerald-800/40 px-2 py-1 rounded-lg shrink-0 font-bold">
                        محدث للسيزون الحالي ✅
                      </span>
                    </div>

                    {/* Best For Tag */}
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                      <div className="text-slate-400 text-[11px] mb-0.5 flex items-center gap-1">
                        <Crosshair className="w-3.5 h-3.5 text-amber-400" />
                        <span className="font-bold text-amber-400">مثالي لـ:</span>
                        <span className="text-slate-200">{codeItem.bestFor}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                        {codeItem.description}
                      </p>
                    </div>

                    {/* Code Display Box */}
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-amber-500/30 gap-2">
                      <div className="min-w-0">
                        <span className="text-[9px] text-slate-400 block">كود الحساسية (Cloud Code):</span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-amber-300 tracking-wider truncate block direction-ltr text-left">
                          {codeItem.code}
                        </span>
                      </div>

                      <button
                        onClick={(e) => handleCopyCode(codeItem, e)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                          isCopied
                            ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                            : 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 hover:brightness-110 shadow-md shadow-amber-500/20'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>تم النسخ!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>نسخ الكود 📋</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Action: How to activate button */}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => {
                          sounds.playClick();
                          setHowToModalCode(codeItem);
                        }}
                        className="text-xs text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                        <span>كيف تفعله في اللعبة؟ (خطوة بخطوة)</span>
                      </button>

                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <span>سكوب 3x جيرو: {codeItem.specs.gyro3x}%</span>
                      </div>
                    </div>

                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* SECTION 2: MANUAL SENSITIVITY (حساسية يدوية)             */}
      {/* ======================================================== */}
      {activeSubTab === 'manual' && (
        <div className="space-y-4 animate-fadeIn">
          
          <div className="p-3.5 rounded-2xl bg-blue-950/30 border border-blue-800/40 text-xs text-slate-200 leading-relaxed flex items-start gap-2.5">
            <Sliders className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-400">الحساسية اليدوية للمحترفين:</p>
              <p className="text-[11px] text-slate-300 mt-0.5">
                إذا انتهت صلاحية كود السحابة، يمكنك إدخال هذه الأرقام الذهبية الموصى بها يدوياً في إعدادات الحساسية داخل PUBG لتحصل على أقصى ثبات.
              </p>
            </div>
          </div>

          {/* Quick Sliders Card */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <h3 className="text-sm font-black text-white flex items-center gap-1.5">
                <span>🎚️ أشرطة التحكم المباشرة</span>
              </h3>
              <button
                onClick={handleCopyManualValues}
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold hover:bg-amber-500/30 transition-all"
              >
                {copiedManual ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>تم نسخ الأرقام!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>نسخ كل القيم 📋</span>
                  </>
                )}
              </button>
            </div>

            {/* Slider 1: Camera TPP */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-slate-200">حساسية الكاميرا (منظور شخص ثالث TPP):</span>
                <span className="font-black text-amber-400 font-mono">{manualValues.cameraNoScope}%</span>
              </div>
              <input
                type="range"
                min="80"
                max="180"
                value={manualValues.cameraNoScope}
                onChange={(e) => setManualValues({ ...manualValues, cameraNoScope: Number(e.target.value) })}
                className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>بطيئة (ثبات)</span>
                <span>المثالي: 120%</span>
                <span>سريعة (دوران)</span>
              </div>
            </div>

            {/* Slider 2: ADS Sensitivity */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-slate-200">حساسية ADS (نقطة حمراء - Red Dot):</span>
                <span className="font-black text-amber-400 font-mono">{manualValues.adsRedDot}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="120"
                value={manualValues.adsRedDot}
                onChange={(e) => setManualValues({ ...manualValues, adsRedDot: Number(e.target.value) })}
                className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>سحب ثقيل</span>
                <span>المثالي: 90%</span>
                <span>سحب خفيف</span>
              </div>
            </div>

            {/* Slider 3: Gyroscope Sensitivity */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-slate-200">حساسية الجيروسكوب (Gyroscope No Scope):</span>
                <span className="font-black text-amber-400 font-mono">{manualValues.gyroNoScope}%</span>
              </div>
              <input
                type="range"
                min="200"
                max="400"
                value={manualValues.gyroNoScope}
                onChange={(e) => setManualValues({ ...manualValues, gyroNoScope: Number(e.target.value) })}
                className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>200%</span>
                <span>المثالي: 300% - 350%</span>
                <span>400% (أقصى سرعة)</span>
              </div>
            </div>

            {/* Slider 4: Gyroscope 3x Scope */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-slate-200">حساسية جيروسكوب سكوب 3x (M416 الليزري):</span>
                <span className="font-black text-amber-400 font-mono">{manualValues.gyro3x}%</span>
              </div>
              <input
                type="range"
                min="180"
                max="340"
                value={manualValues.gyro3x}
                onChange={(e) => setManualValues({ ...manualValues, gyro3x: Number(e.target.value) })}
                className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>180%</span>
                <span>المثالي: 270%</span>
                <span>340%</span>
              </div>
            </div>

          </div>

          {/* Detailed Breakdown Grid */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>جدول أرقام السكوبات الموصى بها بالكامل:</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">سكوب 2x</span>
                <span className="font-bold text-white text-xs block mt-0.5">كاميرا: 42%</span>
                <span className="text-[10px] text-amber-400 block">جيرو: 300%</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">سكوب 3x</span>
                <span className="font-bold text-white text-xs block mt-0.5">كاميرا: 32%</span>
                <span className="text-[10px] text-amber-400 block">جيرو: 270%</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">سكوب 4x</span>
                <span className="font-bold text-white text-xs block mt-0.5">كاميرا: 24%</span>
                <span className="text-[10px] text-amber-400 block">جيرو: 220%</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">سكوب 6x و 8x</span>
                <span className="font-bold text-white text-xs block mt-0.5">كاميرا: 16% / 12%</span>
                <span className="text-[10px] text-amber-400 block">جيرو: 130% / 85%</span>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* SECTION 3: WEAPON SETUP (افضل اعدادات حسب السلاح)        */}
      {/* ======================================================== */}
      {activeSubTab === 'weapons' && (
        <div className="space-y-3 animate-fadeIn">
          
          <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs text-slate-200">
            <span className="font-bold text-amber-400">💡 سر الاحتراف الحقيقي:</span> الحساسية وحدها لا تكفي بدون قطع السلاح الصحيحة (المقبض، الفوهة، ونوع السكوب). إليك أفضل توليفة لكل سلاح:
          </div>

          {pubgWeaponGuides.map(guide => (
            <div 
              key={guide.id}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-4 space-y-3 shadow-lg"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center font-black text-amber-400 text-xs">
                    {guide.name.slice(0, 3)}
                  </div>
                  <div>
                    <h3 className="font-black text-white text-sm sm:text-base">{guide.name}</h3>
                    <p className="text-[11px] text-slate-400">{guide.arabicName}</p>
                  </div>
                </div>

                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-mono">
                  رصاص: {guide.ammo}
                </span>
              </div>

              {/* Attachments recommendation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] text-amber-400 font-bold block">المقبض الموصى به:</span>
                  <p className="text-[11px] text-slate-300 mt-0.5">{guide.recommendedGrip}</p>
                </div>

                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] text-cyan-400 font-bold block">الفوهة (Muzzle):</span>
                  <p className="text-[11px] text-slate-300 mt-0.5">{guide.recommendedMuzzle}</p>
                </div>

                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-[10px] text-purple-400 font-bold block">أفضل سكوب:</span>
                  <p className="text-[11px] text-slate-300 mt-0.5">{guide.recommendedScope}</p>
                </div>
              </div>

              {/* Sensitivity & Recoil Control Tips */}
              <div className="p-2.5 rounded-xl bg-blue-950/30 border border-blue-900/40 text-xs space-y-1">
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-blue-300">نصيحة الحساسية:</strong> {guide.sensitivityTips}
                </p>
                <p className="text-slate-300 text-[11px]">
                  <strong className="text-emerald-300">التحكم بالارتداد:</strong> {guide.recoilControl}
                </p>
              </div>

            </div>
          ))}

        </div>
      )}

      {/* ======================================================== */}
      {/* WARNING BOX AT BOTTOM                                   */}
      {/* ======================================================== */}
      <div 
        style={{
          background: 'linear-gradient(135deg, rgba(80,10,10,0.5), rgba(30,10,20,0.7))',
        }}
        className="rounded-2xl border border-red-500/40 p-4 space-y-1.5 shadow-xl text-right animate-fadeIn"
      >
        <div className="flex items-center gap-2 text-rose-400 font-bold text-xs sm:text-sm">
          <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
          <span>تنبيه أمان رسمي وحماية الحسابات ⚠️</span>
        </div>
        <p className="text-xs text-rose-200/90 leading-relaxed font-medium">
          لا تحمل أي برنامج خارجي أو ملف كونفك (Config) أو تعديلات GFX غير رسمية؛ راح ينحظر حسابك باند نهائي 10 سنين. جميع أكوادنا هنا رسمية 100% من داخل إعدادات السحابة باللعبة وبدون أي تعديل على ملفات النظام.
        </p>
      </div>

      {/* ======================================================== */}
      {/* MODAL: HOW TO ACTIVATE CODE (كيف تفعله؟)                 */}
      {/* ======================================================== */}
      {howToModalCode && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-sm w-full p-5 space-y-4 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setHowToModalCode(null)}
              className="absolute left-4 top-4 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                شرح تفعيل الكود السحابي ☁️
              </span>
              <h3 className="text-base font-black text-white">
                طريقة تطبيق الحساسية في PUBG
              </h3>
              <p className="text-xs text-slate-400">
                لجهاز: <span className="text-white font-bold">{howToModalCode.deviceName}</span>
              </p>
            </div>

            {/* Step-by-step list */}
            <div className="space-y-2.5 text-xs text-slate-200">
              <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-950 border border-slate-800">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <p>افتح لعبة <strong>PUBG Mobile</strong> واضغط على رمز الترس (<strong>الإعدادات ⚙️</strong>).</p>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-950 border border-slate-800">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </span>
                <p>من القائمة الجانبية، اختر تبويب <strong>الحساسية (Sensitivity)</strong>.</p>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-950 border border-slate-800">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </span>
                <p>انقر على أيقونة السحابة في الأسفل: <strong>إدارة السحابة (Cloud Layout Management)</strong>.</p>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-950 border border-slate-800">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-xs">
                  4
                </span>
                <p>اضغط على <strong>البحث عن طريقة سحابية</strong>، والصق الكود التالي:</p>
              </div>
            </div>

            {/* Code Box Inside Modal */}
            <div className="p-3 rounded-2xl bg-slate-950 border border-amber-500/50 flex items-center justify-between">
              <span className="font-mono text-xs font-black text-amber-300">
                {howToModalCode.code}
              </span>
              <button
                onClick={() => handleCopyCode(howToModalCode)}
                className="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-black text-xs hover:bg-amber-400 transition-all flex items-center gap-1"
              >
                {copiedCodeId === howToModalCode.id ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-950" />
                    <span>تم النسخ</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>نسخ</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200">
              <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">
                5
              </span>
              <p>اضغط على <strong>معاينة (Preview)</strong> ثم <strong>استخدام المخطط (Use Layout)</strong> لحفظ الثبات فوراً!</p>
            </div>

            <button
              onClick={() => setHowToModalCode(null)}
              className="w-full py-2.5 rounded-xl bg-slate-800 text-white font-bold text-xs hover:bg-slate-700 transition-all"
            >
              فهمت ذلك، إغلاق النافذة
            </button>

          </div>
        </div>
      )}

    </div>
  );
};
