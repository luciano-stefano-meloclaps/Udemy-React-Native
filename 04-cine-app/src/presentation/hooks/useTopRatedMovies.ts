import { THE_MOVIE_DB_KEY } from '@env';
import { getTopRatedMovies } from '../../infra/api/movies/movies.model';
import {
  useMoviesSection,
  UseMoviesSectionResult,
} from './useMoviesSection';

/**
 * Hook específico para obtener películas mejor calificadas.
 * Utiliza el hook genérico useMoviesSection con la función getTopRatedMovies.
 *
 * @returns Objeto con películas top rated, estado de carga, errores y función para reintentar
 */
export const useTopRatedMovies = (): UseMoviesSectionResult => {
  const fetchTopRatedMovies = async () => {
    const response = await getTopRatedMovies(THE_MOVIE_DB_KEY.trim());
    return response.results;
  };

  return useMoviesSection(fetchTopRatedMovies, 'películas mejor calificadas');
};
