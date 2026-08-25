import React from 'react';
import { MoviesSection } from './MoviesSection';
import { useTopRatedMovies } from '../../viewmodels/movies';

/**
 * Componente contenedor (View) para la sección de películas mejor calificadas.
 *
 * Responsabilidades:
 * - Obtener datos del hook useTopRatedMovies (ViewModel layer)
 * - Pasar datos al componente presentacional MoviesSection
 *
 * Arquitectura: View = ViewModel (Hook) + Presentation (Component)
 */
export const TopRatedMoviesView = () => {
  const { movies, isLoading, errorMessage, retry } = useTopRatedMovies();

  return (
    <MoviesSection
      movies={movies}
      isLoading={isLoading}
      errorMessage={errorMessage}
      onRetry={retry}
    />
  );
};
