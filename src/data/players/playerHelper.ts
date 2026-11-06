import { PlayerBuild } from '../../types';

export function createPlayer(
  id: string,
  name: string,
  arabicName: string,
  position: string,
  club: string,
  rating: number,
  maxRating: number,
  cardType: PlayerBuild['cardType'],
  categoryGroup: PlayerBuild['categoryGroup'],
  stats: [number, number, number, number, number, number, number], // shoot, pass, drib, dext, lower, aerial, def
  build: [number, number, number, number, number, number, number?], // shoot, drib, dext, lower, aerial, def, pass?
  skills: string[],
  desc: string,
  playStyle?: string
): PlayerBuild {
  return {
    id,
    name,
    arabicName,
    position,
    clubOrCountry: club,
    rating,
    maxRating,
    cardType,
    categoryGroup,
    image: `https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=160&auto=format&fit=crop&q=80`,
    shooting: stats[0],
    passing: stats[1],
    dribbling: stats[2],
    dexterity: stats[3],
    lowerBody: stats[4],
    aerial: stats[5],
    defending: stats[6],
    buildPoints: {
      shooting: build[0],
      dribbling: build[1],
      dexterity: build[2],
      lowerBody: build[3],
      aerial: build[4],
      defending: build[5],
      passing: build[6] || 0,
    },
    skills,
    description: desc,
    playStyle: playStyle || 'أسلوب لعب مميز'
  };
}
