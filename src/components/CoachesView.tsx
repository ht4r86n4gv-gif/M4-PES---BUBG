import React, { useState, useEffect, useMemo } from 'react';
import { Award, Search, Sparkles, Heart, Filter, ChevronDown, Check, Trophy, Shield, Users } from 'lucide-react';
import { all50Coaches } from '../data/coaches50Data';
import { Coach } from '../types';
import { sounds } from '../utils/audio';
import { CoachDetailModal } from './CoachDetailModal';

export const CoachesView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('الكل');
  const [selectedFormation, setSelectedFormation] = useState('الكل');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Load favorites from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('m4_favorite_coaches');
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch (e) {
      // Ignore storage errors
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem('m4_favorite_coaches', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  // Distinct styles & formations for filter buttons
  const styles = ['الكل', 'استحواذ', 'ضغط عالي', 'متوازن', 'دفاعي', 'هجومي', 'هجمة مرتدة'];
  const formations = ['الكل', '4-3-3', '4-2-3-1', '3-5-2', '5-3-2', '3-2-2-3', '4-4-2', '3-4-2-1', '3-4-3', '4-3-1-2', '4-2-2-2', '3-3-3-1'];

  // Filtered coaches
  const filteredCoaches = useMemo(() => {
    return all50Coaches.filter(coach => {
      const matchesSearch =
        coach.arabicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coach.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coach.formation.includes(searchTerm) ||
        coach.team.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStyle = selectedStyle === 'الكل' || coach.playStyleArabic.includes(selectedStyle);
      const matchesFormation = selectedFormation === 'الكل' || coach.formation === selectedFormation;
      const matchesFavorite = !onlyFavorites || favorites.includes(coach.id);

      return matchesSearch && matchesStyle && matchesFormation && matchesFavorite;
    });
  }, [searchTerm, selectedStyle, selectedFormation, onlyFavorites, favorites]);

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="pb-28 pt-4 px-4 max-w-md mx-auto space-y-4 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-1 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold">
          <Award className="w-4 h-4 text-amber-400" />
          <span>منفذ المدربين الاحترافي - 50 مدرب</span>
        </div>
        <h1 className="text-xl font-black text-white">المدربين - 50 مدرب مع التشكيلات</h1>
        <p className="text-xs text-slate-400">
          دليل شامل لكل مدربي إي فوتبول: خطط على أرضية الملعب، أساليب اللعب، وبناء اللاعبين.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="ابحث باسم المدرب (غوارديولا، كلوب...) أو الخطة (4-3-3)..."
          className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500/60 rounded-2xl py-3 pr-10 pl-4 text-xs text-white placeholder-slate-500 focus:outline-none transition-all shadow-inner"
        />
      </div>

      {/* Favorites Toggle & Stats */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => {
            sounds.playClick();
            setOnlyFavorites(!onlyFavorites);
          }}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
            onlyFavorites
              ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-white' : 'text-rose-400'}`} />
          <span>مدربيني المفضلين ({favorites.length})</span>
        </button>

        <span className="text-[11px] text-slate-400 font-bold">
          عدد المدربين: <span className="text-amber-400">{filteredCoaches.length}</span> من 50
        </span>
      </div>

      {/* Style Filter Horizontal Slider */}
      <div className="space-y-1">
        <span className="text-[10px] text-slate-400 font-bold block">فلترة حسب أسلوب اللعب:</span>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {styles.map(style => (
            <button
              key={style}
              onClick={() => {
                sounds.playClick();
                setSelectedStyle(style);
              }}
              className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedStyle === style
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* Formation Filter Horizontal Slider */}
      <div className="space-y-1">
        <span className="text-[10px] text-slate-400 font-bold block">فلترة حسب الخطة:</span>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {formations.map(f => (
            <button
              key={f}
              onClick={() => {
                sounds.playClick();
                setSelectedFormation(f);
              }}
              className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedFormation === f
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Top 5 Notice */}
      <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2">
        <Trophy className="w-4 h-4 text-amber-400 flex-shrink-0" />
        <span className="text-[11px] text-amber-300 font-bold">
          المدربون الخمسة الأوائل محاطون بإطار ذهبي ملكي (Top 5 Meta)
        </span>
      </div>

      {/* Coaches List (All 50) */}
      <div className="space-y-3">
        {filteredCoaches.length === 0 ? (
          <div className="p-8 text-center bg-slate-900/60 rounded-2xl border border-slate-800 space-y-2">
            <p className="text-xs text-slate-400">لم يتم العثور على مدرب يطابق معايير البحث.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedStyle('الكل');
                setSelectedFormation('الكل');
                setOnlyFavorites(false);
              }}
              className="text-xs text-amber-400 font-bold underline"
            >
              إعادة ضبط الفلاتر
            </button>
          </div>
        ) : (
          filteredCoaches.map((coach) => {
            const isFav = favorites.includes(coach.id);
            const isTop5 = coach.isTop5;

            return (
              <div
                key={coach.id}
                onClick={() => {
                  sounds.playClick();
                  setSelectedCoach(coach);
                }}
                className={`relative rounded-2xl bg-slate-900/90 hover:bg-slate-900 p-3.5 transition-all shadow-lg cursor-pointer space-y-2.5 hover:scale-[1.01] ${
                  isTop5
                    ? 'border-2 border-amber-400/90 shadow-amber-500/10 gold-glow'
                    : 'border border-slate-800 hover:border-blue-500/40'
                }`}
              >
                {/* Top Badge for Top 5 */}
                {isTop5 && (
                  <div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-full shadow">
                    <Trophy className="w-3 h-3" />
                    <span>توب 5 الميتا</span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  {/* Photo Left / RTL Info Right */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-amber-500/40 bg-slate-950 flex-shrink-0 flex items-center justify-center">
                      {!imageErrors[coach.id] ? (
                        <img
                          src={coach.image}
                          alt={coach.arabicName}
                          onError={() => handleImageError(coach.id)}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-tr from-amber-600 to-blue-700 flex items-center justify-center text-white font-black text-lg">
                          {coach.arabicName.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-black border border-amber-500/30">
                          {coach.formation}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                          {coach.playStyleArabic}
                        </span>
                      </div>
                      <h3 className="font-black text-white text-base mt-0.5">{coach.arabicName}</h3>
                      <p className="text-[11px] text-slate-400">{coach.name} • {coach.team}</p>
                    </div>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      sounds.playClick();
                      toggleFavorite(coach.id);
                    }}
                    className={`p-2 rounded-xl transition-all ${
                      isFav ? 'text-rose-500' : 'text-slate-500 hover:text-rose-400'
                    }`}
                    title="حفظ للمفضلة"
                  >
                    <Heart className={`w-5 h-5 ${isFav ? 'fill-rose-500' : ''}`} />
                  </button>
                </div>

                {/* Boost tag */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-[11px] text-amber-400 font-bold truncate max-w-[75%]">
                    <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{coach.boost}</span>
                  </div>
                  <span className="text-[11px] text-blue-400 font-bold flex items-center gap-0.5">
                    <span>التفاصيل</span>
                    <span>←</span>
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Full Details Modal */}
      {selectedCoach && (
        <CoachDetailModal
          coach={selectedCoach}
          isFavorite={favorites.includes(selectedCoach.id)}
          onToggleFavorite={toggleFavorite}
          onClose={() => setSelectedCoach(null)}
        />
      )}

    </div>
  );
};
