type FetcherConfig = {
   baseURL?: string;
   headers?: Record<string, string>;
};

class APIClient {
   private readonly baseURL: string;
   private readonly headers: Record<string, string>;

   constructor(config: FetcherConfig = {}) {
      this.baseURL = config.baseURL || '';
      this.headers = config.headers || {
         'Content-Type': 'application/json',
      };
   }

   private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
      const url = this.baseURL + endpoint;
      const response = await fetch(url, {
         ...options,
         headers: {
            ...this.headers,
            ...options?.headers,
         },
      });

      if (!response.ok) {
         throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
   }

   _get<T>(endpoint: string, options?: RequestInit): Promise<T> {
      return this.request(endpoint, { ...options, method: 'GET' });
   }

   _post<T>(endpoint: string, body: unknown, options?: RequestInit): Promise<T> {
      return this.request(endpoint, {
         ...options,
         method: 'POST',
         body: JSON.stringify(body),
      });
   }

   _put<T>(endpoint: string, body: unknown, options?: RequestInit): Promise<T> {
      return this.request(endpoint, {
         ...options,
         method: 'PUT',
         body: JSON.stringify(body),
      });
   }

   _delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
      return this.request(endpoint, { ...options, method: 'DELETE' });
   }
}

export { APIClient };
export type { FetcherConfig };
