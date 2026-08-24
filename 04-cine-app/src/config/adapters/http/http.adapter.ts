export abstract class HttpAdapter {
  abstract get<T>(
    url: string,
    options?: {
      params?: Record<string, string>;
      headers?: Record<string, string>;
    },
  ): Promise<T>;
}
