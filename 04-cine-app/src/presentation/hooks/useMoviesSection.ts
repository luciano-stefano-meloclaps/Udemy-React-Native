import { useCallback, useEffect, useState } from 'react';
import { Movie } from '../../infra/api/movies/movies.types';

/**
 * Función que obtiene las películas de una API.
 * Los hooks específicos de cada sección la implementarán.
 */
type FetchMoviesFunction = () => Promise<Movie[]>;

/**
 * Resultado del hook useMoviesSection.
 * Contiene el estado y las acciones disponibles para una sección de películas.
 */
export interface UseMoviesSectionResult {
  /** Lista de películas obtenidas */
  movies: Movie[];
  /** Indica si se está cargando la información */
  isLoading: boolean;
  /** Mensaje de error si algo falló, null si todo está bien */
  errorMessage: string | null;
  /** Función para reintentar cargar las películas */
  retry: () => Promise<void>;
}

/**
 * Hook genérico y reutilizable para obtener y gestionar secciones de películas.
 *
 * Este hook abstrae la lógica común de carga, manejo de errores y reintentos
 * para cualquier tipo de sección de películas (popular, top rated, upcoming, etc).
 *
 * @param fetchMoviesFunction - Función asíncrona que obtiene las películas de la API
 * @param sectionName - Nombre de la sección para los logs de error
 * @returns Objeto con películas, estado de carga, errores y función para reintentar
 *
 * @example
 * ```typescript
 * const { movies, isLoading, errorMessage, retry } = useMoviesSection(
 *   getPopularMovies,
 *   'películas populares'
 * );
 * ```
 */
export const useMoviesSection = (
  fetchMoviesFunction: FetchMoviesFunction,
  sectionName: string,
): UseMoviesSectionResult => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /**
   * Ejecuta la carga de películas y maneja errores.
   * Se utiliza useCallback para evitar recrear la función en cada render.
   */
  const retry = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const loadedMovies = await fetchMoviesFunction();
      setMovies(loadedMovies);
    } catch (error) {
      console.error(`Error cargando ${sectionName}:`, error);
      setErrorMessage(
        `No pudimos cargar ${sectionName}. Por favor, intenta de nuevo.`,
      );
    } finally {
      setIsLoading(false);
    }
  }, [fetchMoviesFunction, sectionName]);

  /**
   * Carga las películas cuando el componente se monta.
   * El hook solo se ejecuta una vez al montar.
   */
  useEffect(() => {
    retry();
  }, [retry]);

  return {
    movies,
    isLoading,
    errorMessage,
    retry,
  };
};
