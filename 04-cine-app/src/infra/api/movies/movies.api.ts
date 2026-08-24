import { FetchAdapter } from '../../../config/adapters/http/fetch.adapter';
import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { NowPlayingResponse } from './movies.types';

const MOVIES_API_BASE_URL = 'https://api.themoviedb.org/3';

export class MoviesApi {
  constructor(
    private readonly http: HttpAdapter,
    private readonly apiKey: string,
  ) {}

  getNowPlayingMovies(): Promise<NowPlayingResponse> {
    return this.http.get<NowPlayingResponse>('/movie/now_playing', {
      params: {
        api_key: this.apiKey,
        language: 'es-ES',
      },
    });
  }
}

export const createMoviesApi = (apiKey: string): MoviesApi => {
  const http = new FetchAdapter(MOVIES_API_BASE_URL);

  return new MoviesApi(http, apiKey);
};