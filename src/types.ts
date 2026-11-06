export type ActiveTab = 'home' | 'pubg' | 'wheel' | 'players' | 'coaches' | 'special' | 'analysis' | 'booster' | 'developer';

export interface PubgSensitivityCode {
  id: string;
  deviceName: string;
  category: 'iphone' | 'samsung' | 'xiaomi' | 'ipad' | 'infinix' | 'nogeneric' | 'gyro';
  code: string;
  type: string; // e.g. 'جيروسكوب كامل' | 'بدون جيروسكوب' | '4 أصابع' | '5 أصابع'
  hasGyro: boolean;
  fingers: number;
  bestFor: string;
  description: string;
  specs: {
    cameraNoScope: number;
    cameraRedDot: number;
    ads3x: number;
    ads4x: number;
    gyro3x: number;
  };
}

export interface PubgWeaponGuide {
  id: string;
  name: string;
  arabicName: string;
  ammo: string;
  recommendedGrip: string;
  recommendedMuzzle: string;
  recommendedScope: string;
  sensitivityTips: string;
  recoilControl: string;
}

export interface PlayerBuild {
  id: string;
  name: string;
  arabicName: string;
  position: string;
  clubOrCountry: string;
  rating: number;
  maxRating: number;
  cardType: 'Epic' | 'Big Time' | 'Show Time' | 'Highlight' | 'Featured' | 'Standard' | 'Legend' | 'Young Talent';
  categoryGroup?: 'epic_bigtime' | 'showtime_highlight' | 'standard_top' | 'young_talents' | 'legends_free';
  image: string;
  shooting: number;
  passing: number;
  dribbling: number;
  dexterity: number;
  lowerBody: number;
  aerial: number;
  defending: number;
  buildPoints: {
    shooting: number;
    dribbling: number;
    dexterity: number;
    lowerBody: number;
    aerial: number;
    defending: number;
    passing?: number;
    gk1?: number;
    gk2?: number;
    gk3?: number;
  };
  skills: string[];
  description: string;
  playStyle?: string;
  weakFoot?: string;
}

export interface CoachPositionDevelopment {
  pos: string;
  role: string;
  development: string;
}

export interface CoachPitchPosition {
  pos: string;
  x: number; // percentage on pitch
  y: number; // percentage on pitch
}

export interface Coach {
  id: string;
  name: string;
  arabicName: string;
  team: string;
  formation: string;
  playStyle: string;
  playStyleArabic: string;
  proficiency: number;
  boost: string;
  description: string;
  image: string;
  styleExplanation?: string[];
  playerDevelopments?: CoachPositionDevelopment[];
  pitchPositions?: CoachPitchPosition[];
  isTop5?: boolean;
}

export interface SpecialBuild {
  id: string;
  title: string;
  arabicTitle: string;
  category: 'Epic Booster' | 'Tournament Meta' | 'F2P Beast' | 'Defensive Wall';
  author: string;
  targetPlayer: string;
  rating: string;
  details: string[];
  statAllocation: Record<string, number>;
}

export interface WheelPrize {
  id: number;
  title: string;
  arabicTitle: string;
  type: 'coins' | 'account' | 'discount' | 'training' | 'try_again';
  value: string;
  color: string;
  icon: string;
}

export interface AnalysisResult {
  overallRating: string;
  coachAdvice: string;
  defenseWeakness: string;
  slowPlayers: string;
  suggestions: string[];
}
