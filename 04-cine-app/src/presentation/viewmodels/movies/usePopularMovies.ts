import { useCallback, useEffect, useState } from 'react';
import { THE_MOVIE_DB_KEY } from '@env';
import { getPopularMovies, Movie } from '../../../data/movies';

/**
 * Resultado del hook usePopularMovies.
 * Contiene el estado y las acciones disponibles para películas populares.
 */
export interface UsePopularMoviesResult {
  /** Lista de películas populares obtenidas */
  movies: Movie[];
  /** Indica si se está cargando la información */
  isLoading: boolean;
  /** Mensaje de error si algo falló, null si todo está bien */
  errorMessage: string | null;
  /** Función para reintentar cargar las películas */
  retry: () => Promise<void>;
}

/**
 * Hook especializado para obtener películas populares.
 *
 * ViewModel para la sección "Películas Populares".
 * Gestiona completamente:
 * - Carga de datos desde la capa Data (movies.api)
 * - Estados de carga y error
 * - Reintentos en caso de falla
 *
 * IMPORTANTE: Este hook es independiente y no depende de otros hooks custom.
 * Esto garantiza que siempre se ejecute en el mismo orden (Rules of Hooks).
 *
 * @returns Objeto con películas, estado, errores y función retry
 */
export const usePopularMovies = (): UsePopularMoviesResult => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /**
   * Carga las películas desde la API.
   * Memoizada para evitar recrearse en cada render.
   */
  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await getPopularMovies(THE_MOVIE_DB_KEY.trim());
      setMovies(response.results);
    } catch (error) {
      console.error('Error cargando películas populares:', error);
      setErrorMessage(
        'No pudimos cargar las películas populares. Por favor, intenta de nuevo.',
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Función de retry que ejecuta la carga nuevamente.
   * Se memoiza para que los consumidores del hook no triggereen renders innecesarios.
   */
  const retry = useCallback(async () => {
    await fetchMovies();
  }, [fetchMovies]);

  /**
   * Ejecuta la carga cuando el componente se monta.
   * Solo se ejecuta una vez gracias a la dependencia vacía.
   */
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return {
    movies,
    isLoading,
    errorMessage,
    retry,
  };
};
