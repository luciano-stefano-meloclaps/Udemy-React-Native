export type MovieResponse = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
};

export type NowPlayingResponse = {
  page: number;
  results: MovieResponse[];
  total_pages: number;
  total_results: number;
};
