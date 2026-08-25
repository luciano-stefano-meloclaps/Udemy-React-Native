import React from 'react';
import { PopularMoviesSection } from './PopularMoviesSection';
import { usePopularMovies } from '../../hooks/usePopularMovies';

/**
 * Componente contenedor (View) que conecta el ViewModel con los componentes visuales.
 *
 * Este componente es responsable de:
 * 1. Obtener datos usando el hook usePopularMovies (ViewModel)
 * 2. Pasar esos datos al componente de presentación PopularMoviesSection
 *
 * Patrón de arquitectura: View = ViewModel + Presentation Component
 */
export const PopularMoviesView = () => {
  const { movies, isLoading, errorMessage, retry } = usePopularMovies();

  return (
    <PopularMoviesSection
      movies={movies}
      isLoading={isLoading}
      errorMessage={errorMessage}
      onRetry={retry}
    />
  );
};
