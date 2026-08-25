import React from 'react';
import { PopularMoviesSection } from './PopularMoviesSection';
import { usePopularMovies } from '../../hooks/usePopularMovies';

// Este componente conecta el ViewModel con los componentes visuales.
// La pantalla Home solo necesita renderizar este componente.
export const PopularMoviesView = () => {
  const { popularMovies, isLoading, errorMessage, reloadPopularMovies } =
    usePopularMovies();

  return (
    <PopularMoviesSection
      movies={popularMovies}
      isLoading={isLoading}
      errorMessage={errorMessage}
      onRetry={reloadPopularMovies}
    />
  );
};
