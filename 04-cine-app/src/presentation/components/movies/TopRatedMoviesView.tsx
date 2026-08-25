import React from 'react';
import { MoviesSection } from './PopularMoviesSection';
import { useTopRatedMovies } from '../../hooks/useTopRatedMovies';

/**
 * Componente contenedor (View) para la sección de películas mejor calificadas.
 *
 * Arquitectura: View = ViewModel (useTopRatedMovies) + Presentation (MoviesSection)
 * Este patrón se repite para cada sección de películas, evitando código duplicado.
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
