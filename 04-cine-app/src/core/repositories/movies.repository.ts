import { Movie } from '../entities/movie.entity';

export abstract class MoviesRepository {
  abstract getNowPlayingMovies(): Promise<Movie[]>;
}