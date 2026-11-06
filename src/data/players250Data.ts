import { PlayerBuild } from '../types';
import { epicBigTime50 } from './players/epicBigTime50';
import { showtimeHighlight50 } from './players/showtimeHighlight50';
import { standardTop50 } from './players/standardTop50';
import { youngTalents50 } from './players/youngTalents50';
import { legendsFree50 } from './players/legendsFree50';

export { epicBigTime50, showtimeHighlight50, standardTop50, youngTalents50, legendsFree50 };

export const all250Players: PlayerBuild[] = [
  ...epicBigTime50,
  ...showtimeHighlight50,
  ...standardTop50,
  ...youngTalents50,
  ...legendsFree50,
];

export const PLAYER_CATEGORIES = [
  { id: 'all', label: 'الكل (250 لاعب)', count: 250, badge: '🔥' },
  { id: 'epic_bigtime', label: 'Epic & Big Time (50)', count: 50, badge: '👑' },
  { id: 'showtime_highlight', label: 'Show Time & Highlight (50)', count: 50, badge: '⚡' },
  { id: 'standard_top', label: 'Standard Top Rated (50)', count: 50, badge: '⭐' },
  { id: 'young_talents', label: 'مواهب شابة (50)', count: 50, badge: '💎' },
  { id: 'legends_free', label: 'أساطير مجانية (50)', count: 50, badge: '🏆' },
] as const;

export type PlayerCategoryId = typeof PLAYER_CATEGORIES[number]['id'];
