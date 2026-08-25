import { useCallback, useEffect, useState } from 'react';
import { THE_MOVIE_DB_KEY } from '@env';
import { getPopularMovies } from '../../infra/api/movies/movies.model';
import { Movie } from '../../infra/api/movies/movies.types';

export interface UsePopularMoviesResult {
  popularMovies: Movie[];
  isLoading: boolean;
  errorMessage: string | null;
  reloadPopularMovies: () => Promise<void>;
}

export const usePopularMovies = (): UsePopularMoviesResult => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const reloadPopularMovies = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const popularMoviesResponse = await getPopularMovies(
        THE_MOVIE_DB_KEY.trim(),
      );

      setPopularMovies(popularMoviesResponse.results);
    } catch (error) {
      console.error('Error cargando peliculas populares:', error);
      setErrorMessage('No pudimos cargar las peliculas populares.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Cargamos las peliculas cuando la pantalla aparece por primera vez.
    reloadPopularMovies();
  }, [reloadPopularMovies]);

  return {
    popularMovies,
    isLoading,
    errorMessage,
    reloadPopularMovies,
  };
};
