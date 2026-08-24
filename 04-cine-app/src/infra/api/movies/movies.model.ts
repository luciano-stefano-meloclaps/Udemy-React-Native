import { PopularMoviesResponse } from './movies.types';

const MOVIES_API_BASE_URL = 'https://api.themoviedb.org/3';

// Consulta las peliculas que TMDB considera mas populares en este momento.
export const getPopularMovies = async (
  movieDatabaseApiKey: string,
): Promise<PopularMoviesResponse> => {
  // Enviamos la API key y pedimos los textos en espanol.
  const popularMoviesUrl = `${MOVIES_API_BASE_URL}/movie/popular?api_key=${movieDatabaseApiKey}&language=es-ES`;

  try {
    const popularMoviesResponse = await fetch(popularMoviesUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // fetch no lanza un error automaticamente cuando recibe un 4xx o 5xx.
    if (!popularMoviesResponse.ok) {
      throw new Error(
        `Error ${popularMoviesResponse.status}: ${popularMoviesResponse.statusText}`,
      );
    }

    return (await popularMoviesResponse.json()) as PopularMoviesResponse;
  } catch (error) {
    console.error('Error en getPopularMovies:', error);
    throw error;
  }
};
