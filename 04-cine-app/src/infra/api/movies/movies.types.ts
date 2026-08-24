// Estos nombres de propiedades vienen directamente de la respuesta de TMDB.
// Por eso mantienen el formato snake_case de la API.
export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
};

// TMDB devuelve las peliculas dentro de results junto con datos de paginacion.
export type PopularMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
