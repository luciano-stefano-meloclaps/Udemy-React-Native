import { PopularMoviesResponse } from './movies.types';

const MOVIES_API_BASE_URL = 'https://api.themoviedb.org/3';

/**
 * Realiza una solicitud genérica a la API de TMDB para obtener películas.
 *
 * @param movieDatabaseApiKey - Clave de API de TMDB
 * @param endpoint - Endpoint específico (ej: 'popular', 'top_rated', 'upcoming')
 * @returns Respuesta con la lista de películas
 * @throws Error si la solicitud falla
 */
const fetchMoviesFromTmdb = async (
  movieDatabaseApiKey: string,
  endpoint: string,
): Promise<PopularMoviesResponse> => {
  const movieUrl = `${MOVIES_API_BASE_URL}/movie/${endpoint}?api_key=${movieDatabaseApiKey}&language=es-ES`;

  try {
    const response = await fetch(movieUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // fetch no lanza un error automáticamente cuando recibe un 4xx o 5xx.
    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: ${response.statusText}`,
      );
    }

    return (await response.json()) as PopularMoviesResponse;
  } catch (error) {
    console.error(`Error en fetchMoviesFromTmdb [${endpoint}]:`, error);
    throw error;
  }
};

/**
 * Obtiene las películas más populares en este momento según TMDB.
 *
 * @param movieDatabaseApiKey - Clave de API de TMDB
 * @returns Respuesta con películas populares
 */
export const getPopularMovies = async (
  movieDatabaseApiKey: string,
): Promise<PopularMoviesResponse> => {
  return fetchMoviesFromTmdb(movieDatabaseApiKey, 'popular');
};

/**
 * Obtiene las películas mejor calificadas en TMDB.
 *
 * @param movieDatabaseApiKey - Clave de API de TMDB
 * @returns Respuesta con películas mejor calificadas
 */
export const getTopRatedMovies = async (
  movieDatabaseApiKey: string,
): Promise<PopularMoviesResponse> => {
  return fetchMoviesFromTmdb(movieDatabaseApiKey, 'top_rated');
};

/**
 * Obtiene las películas que próximamente se estrenarán.
 *
 * @param movieDatabaseApiKey - Clave de API de TMDB
 * @returns Respuesta con películas próximas a estrenarse
 */
export const getUpcomingMovies = async (
  movieDatabaseApiKey: string,
): Promise<PopularMoviesResponse> => {
  return fetchMoviesFromTmdb(movieDatabaseApiKey, 'upcoming');
};
