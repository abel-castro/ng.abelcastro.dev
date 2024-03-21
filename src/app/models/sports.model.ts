export type Team = {
  position: number;
  name: string;
  points: number;
}

export type League = {
  name: string;
  slug: string;
  logo?: string;
  teams: Team[];
}

export interface LeagueResults extends League{
  results: Result[]
}

export type Result = {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
}

export type LeagueStandingsData = {
  english_premier_league: League;
  spanish_la_liga: League;
  german_bundesliga: League;
  french_ligue_1: League;
  italian_seria_a: League;
  austrian_bundesliga: League;
}


export type LeagueResultsData = {
  english_premier_league: LeagueResults;
  spanish_la_liga: LeagueResults;
  german_bundesliga: LeagueResults;
  french_ligue_1: LeagueResults;
  italian_seria_a: LeagueResults;
  austrian_bundesliga: LeagueResults;
}
