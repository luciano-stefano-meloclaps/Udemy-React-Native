import { useEffect } from 'react';
import { THE_MOVIE_DB_KEY } from '@env';
import { createMoviesApi } from '../../infra/api/movies/movies.api';
import { MoviesRepositoryImpl } from '../../infra/repositories/movies.repository.impl';

export const useMovie = () => {
  useEffect(() => {
    const moviesApi = createMoviesApi(THE_MOVIE_DB_KEY.trim());
    const moviesRepository = new MoviesRepositoryImpl(moviesApi);

    moviesRepository
      .getNowPlayingMovies()
      .then(movies => console.log('Peliculas en cartelera:', movies))
      .catch(error => console.error('Error cargando peliculas:', error));
  }, []);
};
