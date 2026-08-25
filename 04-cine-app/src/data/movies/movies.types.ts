/**
 * Película con la información básica necesaria para mostrarla en la UI.
 *
 * Nota: Los nombres de propiedades (snake_case) vienen directamente de la API de TMDB.
 * Se mantienen así para simplificar el mapeo y la deserialización JSON.
 *
 * @property id - Identificador único de la película en TMDB
 * @property title - Título de la película en el idioma solicitado
 * @property overview - Descripción/sinopsis de la película
 * @property poster_path - Ruta del póster (necesita URL base de TMDB)
 * @property backdrop_path - Ruta de la imagen de fondo (banner grande)
 * @property release_date - Fecha de estreno en formato YYYY-MM-DD
 * @property vote_average - Calificación promedio (0-10)
 */
export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
};

/**
 * Respuesta de la API de TMDB cuando se solicitan películas.
 *
 * TMDB devuelve las películas dentro del array "results" junto con información
 * de paginación para manejar grandes volúmenes de datos.
 *
 * @property page - Número de página actual (comienza en 1)
 * @property results - Array con las películas de esta página
 * @property total_pages - Total de páginas disponibles
 * @property total_results - Total de películas en toda la base de datos
 */
export type PopularMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
