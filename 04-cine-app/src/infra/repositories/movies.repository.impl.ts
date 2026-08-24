import { MoviesRepository } from '../../core/repositories/movies.repository';
import { MoviesApi } from '../api/movies/movies.api';
import { MovieMapper } from '../mappers/movie.mapper';

export class MoviesRepositoryImpl extends MoviesRepository {
  constructor(private readonly moviesApi: MoviesApi) {
    super();
  }

  async getNowPlayingMovies() {
    const response = await this.moviesApi.getNowPlayingMovies();

    return response.results.map(MovieMapper.fromResponse);
  }
}