import React from 'react';
import { MoviesSection } from './PopularMoviesSection';
import { useUpcomingMovies } from '../../hooks/useUpcomingMovies';

/**
 * Componente contenedor (View) para la sección de películas próximas a estrenarse.
 *
 * Arquitectura: View = ViewModel (useUpcomingMovies) + Presentation (MoviesSection)
 * Reutiliza el componente genérico MoviesSection para evitar duplicación de código.
 */
export const UpcomingMoviesView = () => {
  const { movies, isLoading, errorMessage, retry } = useUpcomingMovies();

  return (
    <MoviesSection
      movies={movies}
      isLoading={isLoading}
      errorMessage={errorMessage}
      onRetry={retry}
    />
  );
};
