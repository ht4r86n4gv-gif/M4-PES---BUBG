import React, { useState, useMemo } from 'react';
import { 
  Star, Search, Shield, Zap, Award, ChevronDown, ChevronUp, 
  Copy, Check, Heart, Sparkles, Filter, Info, Share2
} from 'lucide-react';
import { all250Players, PLAYER_CATEGORIES, PlayerCategoryId } from '../data/players250Data';
import { PlayerBuild } from '../types';
import { sounds } from '../utils/audio';

const POSITIONS = ['ALL', 'CF', 'SS', 'LWF', 'RWF', 'AMF', 'CMF', 'DMF', 'CB', 'LB', 'RB', 'GK'];

export const PlayersView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PlayerCategoryId>('all');
  const [selectedPosition, setSelectedPosition] = useState('ALL');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(all250Players[0]?.id || null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState(24);

  // Favorites in localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('m4_favorite_players');
      return saved ? JSON.parse(saved) : ['messi-bt', 'ronaldo-epic', 'yamal-st'];
    } catch {
      return ['messi-bt', 'ronaldo-epic'];
    }
  });

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playClick();
    setFavorites(prev => {
      const updated = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem('m4_favorite_players', JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  const toggleExpand = (id: string) => {
    sounds.playClick();
    setExpandedId(prev => (prev === id ? null : id));
  };

  const handleCopyBuild = (player: PlayerBuild, e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playClick();
    const isGK = player.position.includes('GK');
    const text = isGK
      ? `تطوير ${player.arabicName} (ماكس ${player.maxRating}) في eFootball 2026:
• حراسة المرمى 1 (القفز): +${player.buildPoints.lowerBody}
• حراسة المرمى 2 (الوصول): +${player.buildPoints.aerial}
• حراسة المرمى 3 (رد الفعل): +${player.buildPoints.defending}
عبر تطبيق M4 PES ⚡`
      : `تطوير ${player.arabicName} (ماكس ${player.maxRating}) في eFootball 2026:
• تسديد: +${player.buildPoints.shooting}
• مراوغة: +${player.buildPoints.dribbling}
• خفة/تسارع: +${player.buildPoints.dexterity}
• جزء سفلي/سرعة: +${player.buildPoints.lowerBody}
• كرات هوائية: +${player.buildPoints.aerial}
• دفاع: +${player.buildPoints.defending}
عبر تطبيق M4 PES ⚡`;

    navigator.clipboard.writeText(text);
    setCopiedId(player.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter players
  const filteredPlayers = useMemo(() => {
    return all250Players.filter(p => {
      const q = searchTerm.trim().toLowerCase();
      const matchesSearch = 
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.arabicName.includes(q) ||
        p.clubOrCountry.toLowerCase().includes(q) ||
        p.position.toLowerCase().includes(q) ||
        p.skills.some(s => s.toLowerCase().includes(q));

      const matchesCat = selectedCategory === 'all' || p.categoryGroup === selectedCategory;
      const matchesPos = selectedPosition === 'ALL' || p.position.includes(selectedPosition);
      const matchesFav = !onlyFavorites || favorites.includes(p.id);

      return matchesSearch && matchesCat && matchesPos && matchesFav;
    });
  }, [searchTerm, selectedCategory, selectedPosition, onlyFavorites, favorites]);

  const visiblePlayers = filteredPlayers.slice(0, displayCount);

  // Card badge color helper
  const getBadgeStyle = (cardType: PlayerBuild['cardType']) => {
    switch (cardType) {
      case 'Big Time':
        return 'bg-gradient-to-r from-red-600 to-amber-600 text-white border-red-500/50';
      case 'Epic':
        return 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-black border-amber-400/60';
      case 'Show Time':
        return 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400/50';
      case 'Highlight':
        return 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400/50';
      case 'Young Talent':
        return 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-emerald-400/50';
      case 'Legend':
        return 'bg-gradient-to-r from-amber-700 to-yellow-800 text-amber-200 border-amber-600/40';
      case 'Standard':
      default:
        return 'bg-slate-800 text-slate-200 border-slate-700';
    }
  };

  return (
    <div className="pb-32 pt-4 px-3 sm:px-4 max-w-2xl mx-auto space-y-4 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 p-4 sm:p-5 border border-blue-800/40 shadow-xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold mb-1.5">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>قاعدة بيانات 250 لاعب رسمية 100%</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              تطويرات لاعبي إي فوتبول 2026
            </h1>
            <p className="text-xs text-slate-300 mt-1 max-w-md leading-relaxed">
              توزيعات نقاط المهارة (Progression Points) الحقيقية من داخل اللعبة بدون تقييمات وهمية.
            </p>
          </div>
          <div className="shrink-0 text-center bg-black/40 px-3 py-2 rounded-2xl border border-white/10">
            <span className="text-[10px] text-slate-400 block font-medium">إجمالي اللاعبين</span>
            <span className="text-xl font-black text-amber-400">250</span>
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10 text-center">
          <div className="p-1.5 rounded-xl bg-white/5">
            <span className="text-[10px] text-slate-400 block">أعلى ماكس</span>
            <span className="text-xs font-bold text-emerald-400">106 (ميسي/بيليه)</span>
          </div>
          <div className="p-1.5 rounded-xl bg-white/5">
            <span className="text-[10px] text-slate-400 block">تصنيف البطاقات</span>
            <span className="text-xs font-bold text-amber-300">5 أقسام رسمية</span>
          </div>
          <div className="p-1.5 rounded-xl bg-white/5">
            <span className="text-[10px] text-slate-400 block">المفضلة لديك</span>
            <span className="text-xs font-bold text-rose-400">{favorites.length} لاعب</span>
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setDisplayCount(24);
          }}
          placeholder="ابحث بالاسم، المركز، النادي، المهارة (مثال: ميسي، كرويف، فييرا، Double Touch)..."
          className="w-full bg-slate-900/90 border border-slate-800 focus:border-amber-500/60 rounded-2xl py-3 pr-10 pl-10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all shadow-inner"
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

      {/* Category Pills (5 Groups) */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span className="font-semibold flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <span>اختر فئة البطاقات:</span>
          </span>
          <button
            onClick={() => {
              sounds.playClick();
              setOnlyFavorites(!onlyFavorites);
            }}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
              onlyFavorites
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            <Heart className={`w-3 h-3 ${onlyFavorites ? 'fill-white' : 'text-rose-400'}`} />
            <span>المفضلة ({favorites.length})</span>
          </button>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {PLAYER_CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat.id && !onlyFavorites;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  sounds.playClick();
                  setSelectedCategory(cat.id);
                  setOnlyFavorites(false);
                  setDisplayCount(24);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md shadow-amber-500/25 scale-[1.02]'
                    : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                }`}
              >
                <span>{cat.badge}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Position Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {POSITIONS.map(pos => {
          const isActive = selectedPosition === pos;
          return (
            <button
              key={pos}
              onClick={() => {
                sounds.playClick();
                setSelectedPosition(pos);
                setDisplayCount(24);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800/80 hover:text-white'
              }`}
            >
              {pos === 'ALL' ? 'كل المراكز' : pos}
            </button>
          );
        })}
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1 pt-1">
        <span>عرض {visiblePlayers.length} من أصل {filteredPlayers.length} لاعب</span>
        {filteredPlayers.length > 0 && (
          <span className="text-[11px] text-amber-400/90 font-medium">اضغط على أي لاعب لعرض نقاط التطوير والمهارات</span>
        )}
      </div>

      {/* Players List */}
      <div className="space-y-3">
        {filteredPlayers.length === 0 ? (
          <div className="p-10 text-center bg-slate-900/70 rounded-3xl border border-slate-800 space-y-2">
            <Info className="w-8 h-8 text-slate-500 mx-auto" />
            <p className="text-sm font-bold text-white">لم يتم العثور على لاعبين مطابقين</p>
            <p className="text-xs text-slate-400">جرب البحث باسم آخر أو إزالة عوامل التصفية الحالية.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPosition('ALL');
                setOnlyFavorites(false);
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
            >
              إعادة ضبط الفلاتر
            </button>
          </div>
        ) : (
          visiblePlayers.map(player => {
            const isExpanded = expandedId === player.id;
            const isFav = favorites.includes(player.id);
            const isCopied = copiedId === player.id;
            const isGK = player.position.includes('GK');

            return (
              <div
                key={player.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden shadow-lg ${
                  isExpanded
                    ? 'bg-slate-900 border-amber-500/50 shadow-amber-500/5'
                    : 'bg-slate-900/85 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Main Card Summary Bar */}
                <div
                  onClick={() => toggleExpand(player.id)}
                  className="p-3 sm:p-3.5 flex items-center justify-between gap-3 cursor-pointer select-none"
                >
                  {/* Left: Avatar + Identity */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-amber-500/30 bg-slate-950 shrink-0 shadow-inner">
                      <img 
                        src={player.image} 
                        alt={player.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-slate-950/85 text-[9px] text-amber-300 text-center font-black py-0.5 border-t border-amber-500/30">
                        {player.rating}
                      </div>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-black border ${getBadgeStyle(player.cardType)}`}>
                          {player.cardType}
                        </span>
                        <span className="text-[10px] text-cyan-400 font-bold bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-800/40">
                          {player.position}
                        </span>
                        {player.playStyle && (
                          <span className="text-[9px] text-slate-400 hidden sm:inline">
                            · {player.playStyle}
                          </span>
                        )}
                      </div>

                      <h3 className="font-black text-white text-sm sm:text-base mt-1 truncate">
                        {player.arabicName}
                      </h3>
                      <p className="text-[11px] text-slate-400 truncate">
                        {player.clubOrCountry}
                      </p>
                    </div>
                  </div>

                  {/* Right: Max Rating + Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="text-left bg-amber-500/10 px-2.5 py-1.5 rounded-xl border border-amber-500/20">
                      <span className="text-[9px] text-amber-300 block font-medium">الماكس</span>
                      <span className="text-sm sm:text-base font-black text-amber-400">
                        {player.maxRating}
                      </span>
                    </div>

                    <button
                      onClick={(e) => toggleFavorite(player.id, e)}
                      aria-label="إضافة للمفضلة"
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                        isFav 
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' 
                          : 'bg-slate-800/80 text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
                    </button>

                    <button 
                      aria-label={isExpanded ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}
                      className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Card Details */}
                {isExpanded && (
                  <div className="px-3.5 pb-4 pt-1.5 border-t border-slate-800/80 space-y-3 bg-slate-950/60 animate-fadeIn">
                    
                    {/* Tactical Explanation */}
                    <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-900/40 text-xs text-slate-200 leading-relaxed">
                      <span className="text-amber-400 font-bold ml-1">تحليل التكتيك:</span>
                      {player.description}
                    </div>

                    {/* Build Points Allocation Section */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 fill-amber-400" />
                          <span>التوزيع المثالي لنقاط المهارة (Progression Points):</span>
                        </h4>

                        <button
                          onClick={(e) => handleCopyBuild(player, e)}
                          className="flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 font-bold transition-all border border-amber-500/30"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-300">تم النسخ بنجاح!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>نسخ التدريب</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Progression Grid */}
                      {isGK ? (
                        <div className="grid grid-cols-3 gap-2">
                          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                            <span className="text-[10px] text-slate-400 block">حراسة 1 (القفز والارتقاء)</span>
                            <p className="text-sm font-black text-amber-400 mt-0.5">+{player.buildPoints.lowerBody} نقطة</p>
                          </div>
                          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                            <span className="text-[10px] text-slate-400 block">حراسة 2 (الوصول للمرمى)</span>
                            <p className="text-sm font-black text-amber-400 mt-0.5">+{player.buildPoints.aerial} نقطة</p>
                          </div>
                          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                            <span className="text-[10px] text-slate-400 block">حراسة 3 (سرعة الاستجابة)</span>
                            <p className="text-sm font-black text-amber-400 mt-0.5">+{player.buildPoints.defending} نقطة</p>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                            <span className="text-[10px] text-slate-400 block">التسديد</span>
                            <p className="text-xs sm:text-sm font-black text-white mt-0.5">+{player.buildPoints.shooting}</p>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                            <span className="text-[10px] text-slate-400 block">المراوغة</span>
                            <p className="text-xs sm:text-sm font-black text-white mt-0.5">+{player.buildPoints.dribbling}</p>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                            <span className="text-[10px] text-slate-400 block">خفة وتسارع</span>
                            <p className="text-xs sm:text-sm font-black text-white mt-0.5">+{player.buildPoints.dexterity}</p>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                            <span className="text-[10px] text-slate-400 block">جزء سفلي</span>
                            <p className="text-xs sm:text-sm font-black text-white mt-0.5">+{player.buildPoints.lowerBody}</p>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                            <span className="text-[10px] text-slate-400 block">كرات هوائية</span>
                            <p className="text-xs sm:text-sm font-black text-white mt-0.5">+{player.buildPoints.aerial}</p>
                          </div>
                          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center">
                            <span className="text-[10px] text-slate-400 block">الدفاع</span>
                            <p className="text-xs sm:text-sm font-black text-white mt-0.5">+{player.buildPoints.defending}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Stats Radar Summary Bars */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="space-y-1 bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                        <div className="flex justify-between text-[10px]">
                          <span className="text-slate-400">التسديد والإنهاء</span>
                          <span className="font-bold text-white">{player.shooting}</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-amber-400 h-full rounded-full" style={{ width: `${Math.min(100, player.shooting)}%` }} />
                        </div>
                      </div>

                      <div className="space-y-1 bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                        <div className="flex justify-between text-[10px]">
                          <span className="text-slate-400">التمرير وصناعة اللعب</span>
                          <span className="font-bold text-white">{player.passing}</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${Math.min(100, player.passing)}%` }} />
                        </div>
                      </div>

                      <div className="space-y-1 bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                        <div className="flex justify-between text-[10px]">
                          <span className="text-slate-400">المراوغة والتحكم</span>
                          <span className="font-bold text-white">{player.dribbling}</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${Math.min(100, player.dribbling)}%` }} />
                        </div>
                      </div>

                      <div className="space-y-1 bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                        <div className="flex justify-between text-[10px]">
                          <span className="text-slate-400">السرعة وخفة الحركة</span>
                          <span className="font-bold text-white">{player.dexterity}</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-purple-400 h-full rounded-full" style={{ width: `${Math.min(100, player.dexterity)}%` }} />
                        </div>
                      </div>
                    </div>

                    {/* Special Skills */}
                    <div className="space-y-1.5 pt-1">
                      <h4 className="text-[11px] font-bold text-blue-300 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span>أبرز مهارات اللاعب (Player Skills):</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {player.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="text-[10px] px-2 py-0.5 rounded-lg bg-blue-950 text-blue-300 border border-blue-900/60 font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Load More Button */}
      {visiblePlayers.length < filteredPlayers.length && (
        <div className="pt-2 text-center">
          <button
            onClick={() => {
              sounds.playClick();
              setDisplayCount(prev => prev + 24);
            }}
            className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-900/30 transition-all active:scale-[0.98]"
          >
            عرض المزيد من اللاعبين (متبقي {filteredPlayers.length - visiblePlayers.length} لاعب) ⚡
          </button>
        </div>
      )}

    </div>
  );
};
