import { Movie } from '../../core/entities/movie.entity';
import { MovieResponse } from '../api/movies/movies.types';

export class MovieMapper {
  static fromResponse(movie: MovieResponse): Movie {
    return {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      posterPath: movie.poster_path,
      backdropPath: movie.backdrop_path,
      releaseDate: movie.release_date,
      voteAverage: movie.vote_average,
    };
  }
}
