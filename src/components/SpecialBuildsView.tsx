import React from 'react';
import { Sparkles, Trophy, Zap, CheckCircle2, Shield } from 'lucide-react';
import { mockSpecialBuilds } from '../data/efootballData';
import { sounds } from '../utils/audio';

export const SpecialBuildsView: React.FC = () => {
  return (
    <div className="pb-28 pt-4 px-4 max-w-md mx-auto space-y-4 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-1 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>التطويرات الخاصة والبطولات الكبرى</span>
        </div>
        <h1 className="text-xl font-black text-white">بناءات لاعبي الإيبيك والبوستر الاحترافية</h1>
        <p className="text-xs text-slate-400">أسرار محترفي eFootball Mobile للسيطرة على مباريات الدرجة الأولى (Division 1).</p>
      </div>

      {/* Special Builds List */}
      <div className="space-y-4">
        {mockSpecialBuilds.map((build) => (
          <div
            key={build.id}
            onClick={() => sounds.playClick()}
            className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 p-4 transition-all shadow-lg space-y-3"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    {build.category}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                    {build.rating}
                  </span>
                </div>
                <h3 className="font-black text-white text-base mt-1.5">{build.arabicTitle}</h3>
                <p className="text-[11px] text-slate-400">بواسطة: {build.author} • اللاعب: {build.targetPlayer}</p>
              </div>
            </div>

            <div className="space-y-2 pt-1 border-t border-slate-800/80">
              <h4 className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                <span>أبرز تفاصيل التطوير:</span>
              </h4>
              <ul className="space-y-1.5">
                {build.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stat allocation pills */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {Object.entries(build.statAllocation).map(([key, val], sIdx) => (
                <span key={sIdx} className="text-[10px] px-2.5 py-1 rounded-xl bg-slate-950 text-amber-300 border border-slate-800 font-bold">
                  {key}: +{val}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
