import React from 'react';
import { MoviesSection } from './MoviesSection';
import { usePopularMovies } from '../../viewmodels/movies';

/**
 * Componente contenedor (View) que conecta el ViewModel con los componentes visuales.
 *
 * Responsabilidades:
 * - Obtener datos del hook usePopularMovies (ViewModel layer)
 * - Pasar esos datos al componente presentacional MoviesSection
 *
 * Arquitectura: View = ViewModel (Hook) + Presentation (Component)
 */
export const PopularMoviesView = () => {
  const { movies, isLoading, errorMessage, retry } = usePopularMovies();

  return (
    <MoviesSection
      movies={movies}
      isLoading={isLoading}
      errorMessage={errorMessage}
      onRetry={retry}
    />
  );
};
