import { THE_MOVIE_DB_KEY } from '@env';
import { getPopularMovies } from '../../infra/api/movies/movies.model';
import {
  useMoviesSection,
  UseMoviesSectionResult,
} from './useMoviesSection';

/**
 * Hook específico para obtener películas populares.
 * Utiliza el hook genérico useMoviesSection con la función getPopularMovies.
 *
 * @returns Objeto con películas populares, estado de carga, errores y función para reintentar
 */
export const usePopularMovies = (): UseMoviesSectionResult => {
  const fetchPopularMovies = async () => {
    const response = await getPopularMovies(THE_MOVIE_DB_KEY.trim());
    return response.results;
  };

  return useMoviesSection(fetchPopularMovies, 'películas populares');
};
