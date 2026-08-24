import { HttpAdapter } from './http.adapter';

type FetchOptions = {
  params?: Record<string, string>;
  headers?: Record<string, string>;
};

export class FetchAdapter extends HttpAdapter {
  constructor(
    private readonly baseUrl: string,
    private readonly defaultOptions: FetchOptions = {},
  ) {
    super();
  }

  async get<T>(url: string, options: FetchOptions = {}): Promise<T> {
    const requestUrl = new URL(url, this.baseUrl);
    const params = {
      ...this.defaultOptions.params,
      ...options.params,
    };

    Object.entries(params).forEach(([key, value]) => {
      requestUrl.searchParams.set(key, value);
    });

    const response = await fetch(requestUrl.toString(), {
      method: 'GET',
      headers: {
        ...this.defaultOptions.headers,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json() as Promise<T>;
  }
}