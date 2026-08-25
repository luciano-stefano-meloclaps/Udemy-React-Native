import React from 'react';
import { MoviesSection } from './MoviesSection';
import { useUpcomingMovies } from '../../viewmodels/movies';

/**
 * Componente contenedor (View) para la sección de películas próximas a estrenarse.
 *
 * Responsabilidades:
 * - Obtener datos del hook useUpcomingMovies (ViewModel layer)
 * - Pasar datos al componente presentacional MoviesSection
 *
 * Arquitectura: View = ViewModel (Hook) + Presentation (Component)
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
