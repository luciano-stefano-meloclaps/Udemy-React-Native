import { useEffect } from 'react';
import { THE_MOVIE_DB_KEY } from '@env';
import { getPopularMovies } from '../../infra/api/movies/movies.model';

export const usePopularMovies = () => {
  useEffect(() => {
    // Esta funcion se ejecuta cuando se muestra la pantalla que usa el hook.
    const loadPopularMovies = async () => {
      try {
        const popularMoviesResponse = await getPopularMovies(
          THE_MOVIE_DB_KEY.trim(),
        );

        console.log('Peliculas populares:', popularMoviesResponse.results);
      } catch (error) {
        console.error('Error cargando peliculas populares:', error);
      }
    };

    // Iniciamos la peticion sin bloquear el renderizado de la pantalla.
    loadPopularMovies();
  }, []);
};