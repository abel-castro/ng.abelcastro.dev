export interface Team {
    position: number;
    name: string;
    points: number;
  }



export interface League {
  name: string
  slug: string
  logo?: string
  teams: Team[];
} 



export interface LeaguesData {
  "english_premier_league": League;
  "spanish_la_liga": League;
  "german_bundesliga": League;
  "french_ligue_1": League;
  "italian_seria_a": League;
  "austrian_bundesliga": League;
}