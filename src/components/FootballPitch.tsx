import React from 'react';
import { CoachPitchPosition } from '../types';

interface FootballPitchProps {
  formation: string;
  positions: CoachPitchPosition[];
  selectedPosition?: string | null;
  onSelectPosition?: (pos: string) => void;
  interactive?: boolean;
}

export const FootballPitch: React.FC<FootballPitchProps> = ({
  formation,
  positions,
  selectedPosition,
  onSelectPosition,
  interactive = true,
}) => {
  return (
    <div className="relative w-full aspect-[4/5] max-w-[340px] mx-auto rounded-3xl overflow-hidden border-2 border-emerald-500/50 shadow-2xl bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-950 p-2">
      {/* Grass Stripes Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[repeating-linear-gradient(0deg,#000_0px,#000_24px,#fff_24px,#fff_48px)]" />

      {/* Pitch Markings */}
      <div className="absolute inset-3 border-2 border-white/40 rounded-2xl pointer-events-none">
        {/* Halfway Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/40 -translate-y-1/2" />
        {/* Center Circle */}
        <div className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/40" />
        {/* Center Spot */}
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60" />
        {/* Top Penalty Box (Opponent) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-14 border-b-2 border-x-2 border-white/40 rounded-b-lg" />
        {/* Top Goal Box */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-6 border-b-2 border-x-2 border-white/40" />
        {/* Bottom Penalty Box (My Team) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-14 border-t-2 border-x-2 border-white/40 rounded-t-lg" />
        {/* Bottom Goal Box */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-6 border-t-2 border-x-2 border-white/40" />
      </div>

      {/* Formation Badge Overlay */}
      <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-slate-950/80 border border-amber-400/60 text-amber-300 text-[11px] font-black shadow-md">
        {formation}
      </div>

      {/* Players on Pitch */}
      <div className="relative w-full h-full">
        {positions.map((item, idx) => {
          const isSelected = selectedPosition === item.pos;
          const isGK = item.pos === 'GK';
          const isDef = item.pos.includes('B') || item.pos.includes('WB');
          const isMid = item.pos.includes('M');
          const isAtt = item.pos.includes('F') || item.pos === 'CF' || item.pos === 'SS';

          let pinBg = 'bg-blue-600 border-blue-400 text-white';
          if (isGK) pinBg = 'bg-amber-600 border-amber-400 text-white';
          else if (isDef) pinBg = 'bg-emerald-600 border-emerald-400 text-white';
          else if (isMid) pinBg = 'bg-indigo-600 border-indigo-400 text-white';
          else if (isAtt) pinBg = 'bg-rose-600 border-rose-400 text-white';

          return (
            <div
              key={`${item.pos}-${idx}`}
              onClick={() => interactive && onSelectPosition && onSelectPosition(item.pos)}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className={`absolute flex flex-col items-center cursor-pointer transition-transform duration-200 ${
                interactive ? 'hover:scale-125' : ''
              } ${isSelected ? 'scale-125 z-20' : 'z-10'}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-[9px] border-2 shadow-lg transition-all ${pinBg} ${
                  isSelected ? 'ring-4 ring-amber-400 animate-pulse' : ''
                }`}
              >
                {item.pos}
              </div>
              <span className="mt-0.5 text-[8px] font-bold text-slate-100 bg-slate-950/80 px-1 py-0.2 rounded leading-tight shadow">
                {item.pos}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
