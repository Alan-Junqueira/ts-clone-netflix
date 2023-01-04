type Season = {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: null
  season_number: number
}

type Genre = {
  id: number;
  name: string
}

export type Info = {
  adult: boolean
  backdrop_path: string | null;
  episode_run_time: number[]
  first_air_date: string;
  genres: Genre[]
  homepage: string
  id: number;
  in_production: boolean;
  languages: string[]
  last_air_date: string;
  last_episode_to_air: any;
  name: string;
  networks: any
  next_episode_to_air: any
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any
  production_countries: any
  seasons: Season[]
  spoken_languages: any;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}