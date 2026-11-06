import React, { useState } from 'react';
import { Coach } from '../types';
import { FootballPitch } from './FootballPitch';
import { X, Heart, Copy, Check, Sparkles, Trophy, Award, Shield, Zap, ChevronLeft, Share2, Play } from 'lucide-react';
import { sounds } from '../utils/audio';

interface CoachDetailModalProps {
  coach: Coach;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onClose: () => void;
}

export const CoachDetailModal: React.FC<CoachDetailModalProps> = ({
  coach,
  isFavorite,
  onToggleFavorite,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'pitch' | 'tactics' | 'developments'>('pitch');
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);
  const [showPitchPreview, setShowPitchPreview] = useState(false);

  const handleCopy = () => {
    sounds.playClick();
    const textToCopy = `📋 تكتيك وتشكيلة المدرب: ${coach.arabicName} (${coach.name})
⚽ التشكيلة: ${coach.formation}
🎯 أسلوب اللعب: ${coach.playStyleArabic}
⚡ البوست: ${coach.boost}
🏟️ النادي/المنتخب: ${coach.team}

📌 شرح أسلوب اللعب:
${coach.styleExplanation?.join('\n') || coach.description}

💡 أهم تطويرات المراكز:
${coach.playerDevelopments?.map(d => `- ${d.pos} (${d.role}): ${d.development}`).join('\n') || ''}

🔥 مقدم من تطبيق M4 PES`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const fallbackInitial = coach.arabicName ? coach.arabicName.charAt(0) : 'M';

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-md max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-950 border-2 border-amber-500/50 p-4 shadow-2xl gold-glow space-y-4 my-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sounds.playClick();
                onToggleFavorite(coach.id);
              }}
              className={`p-2 rounded-xl border transition-all ${
                isFavorite
                  ? 'bg-rose-500/20 border-rose-500/50 text-rose-400'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-rose-400'
              }`}
              title="إضافة للمفضلة"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>

            <button
              onClick={handleCopy}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 transition-all flex items-center gap-1.5 text-xs font-bold"
              title="نسخ التشكيلة"
            >
              {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
              <span>{copied ? 'تم النسخ!' : 'نسخ التشكيلة'}</span>
            </button>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all"
            title="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Coach Hero Profile */}
        <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/60 border border-slate-800 shadow-lg">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400/60 bg-slate-950 flex-shrink-0 flex items-center justify-center">
            {!imgError ? (
              <img
                src={coach.image}
                alt={coach.arabicName}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-tr from-amber-600 to-blue-700 flex items-center justify-center text-white text-xl font-black">
                {fallbackInitial}
              </div>
            )}
            {coach.isTop5 && (
              <div className="absolute top-1 right-1 bg-amber-500 text-slate-950 text-[9px] font-black px-1 rounded-sm shadow">
                TOP
              </div>
            )}
          </div>

          <div className="overflow-hidden">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-black border border-amber-500/30">
                {coach.formation}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                {coach.playStyleArabic}
              </span>
              <span className="text-[10px] text-slate-400">{coach.team}</span>
            </div>
            <h2 className="text-lg font-black text-white mt-0.5 truncate">{coach.arabicName}</h2>
            <p className="text-[11px] text-slate-400">{coach.name}</p>
          </div>
        </div>

        {/* Boost Banner */}
        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2.5">
          <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 animate-pulse" />
          <div className="text-xs">
            <span className="text-slate-300 font-medium">البوست الإضافي: </span>
            <span className="text-amber-300 font-black">{coach.boost}</span>
          </div>
        </div>

        {/* Navigation Tabs Inside Modal */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('pitch');
            }}
            className={`py-2 px-1 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'pitch'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            التشكيلة الخاصة
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('tactics');
            }}
            className={`py-2 px-1 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'tactics'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            أسلوب اللعب
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('developments');
            }}
            className={`py-2 px-1 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'developments'
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            تطوير اللاعبين
          </button>
        </div>

        {/* Tab 1: Football Pitch Graphic */}
        {activeTab === 'pitch' && (
          <div className="space-y-3 animate-fadeIn">
            <div className="text-center">
              <span className="text-xs text-slate-300 font-bold">
                توزيع مراكز تشكيلة ({coach.formation}) على أرضية الملعب:
              </span>
            </div>

            {coach.pitchPositions && (
              <FootballPitch
                formation={coach.formation}
                positions={coach.pitchPositions}
                selectedPosition={selectedPosition}
                onSelectPosition={(pos) => setSelectedPosition(pos)}
              />
            )}

            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-2">
              <p className="text-xs text-slate-300">
                {selectedPosition
                  ? `المركز المحدد: ${selectedPosition} - انقر على تبويب "تطوير اللاعبين" لمعرفة نصائح التطوير له.`
                  : 'انقر على أي مركز في الملعب لتحديده ومعرفة متطلباته التكتيكية.'}
              </p>

              <button
                onClick={() => {
                  sounds.playWinFanfare();
                  setShowPitchPreview(true);
                  setTimeout(() => setShowPitchPreview(false), 3000);
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Play className="w-4 h-4" />
                <span>جرّب التشكيلة في اللعبة</span>
              </button>

              {showPitchPreview && (
                <div className="p-2 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold animate-fadeIn">
                  تم اعتماد ومحاكاة تشكيلة {coach.arabicName} ({coach.formation}) بنجاح! جاهزة للتطبيق في eFootball.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Tactics Explanation (3 Lines in Arabic) */}
        {activeTab === 'tactics' && (
          <div className="space-y-3 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-xs font-black text-amber-400 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>شرح أسلوب اللعب التكتيكي ({coach.playStyleArabic}):</span>
              </h3>

              <div className="space-y-2.5">
                {coach.styleExplanation?.map((line, lIdx) => (
                  <div key={lIdx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 font-bold text-[10px]">
                      {lIdx + 1}
                    </span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-500/30 space-y-1.5">
              <h4 className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                <span>توصية الساعدي M4 لهذا المدرب:</span>
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                ينصح باستخدام خطة {coach.formation} مع هذا المدرب في مباريات الدرجة الأولى (Division 1) لضمان أعلى معدل سيطرة وخلق فرص هجومية محققة.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Recommended Player Developments per Position */}
        {activeTab === 'developments' && (
          <div className="space-y-3 animate-fadeIn">
            <div className="text-center">
              <span className="text-xs text-slate-300 font-bold">
                أفضل بناء وتطوير لكل مركز لتلائم خطة {coach.arabicName}:
              </span>
            </div>

            <div className="space-y-2.5">
              {coach.playerDevelopments?.map((dev, dIdx) => (
                <div
                  key={dIdx}
                  className="p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/30 transition-all space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {dev.pos}
                    </span>
                    <span className="text-[11px] font-bold text-blue-300">{dev.role}</span>
                  </div>
                  <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                    <span className="text-slate-400 font-bold">التطوير المقترح: </span>
                    {dev.development}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
