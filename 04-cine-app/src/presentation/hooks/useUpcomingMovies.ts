import { THE_MOVIE_DB_KEY } from '@env';
import { getUpcomingMovies } from '../../infra/api/movies/movies.model';
import {
  useMoviesSection,
  UseMoviesSectionResult,
} from './useMoviesSection';

/**
 * Hook específico para obtener películas que próximamente se estrenarán.
 * Utiliza el hook genérico useMoviesSection con la función getUpcomingMovies.
 *
 * @returns Objeto con películas upcoming, estado de carga, errores y función para reintentar
 */
export const useUpcomingMovies = (): UseMoviesSectionResult => {
  const fetchUpcomingMovies = async () => {
    const response = await getUpcomingMovies(THE_MOVIE_DB_KEY.trim());
    return response.results;
  };

  return useMoviesSection(fetchUpcomingMovies, 'películas próximas a estrenarse');
};
