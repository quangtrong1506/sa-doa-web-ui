// src/utils/BaseAPI.ts
import { APIClient, FetcherConfig } from './API';
import { MyPage } from '@/data/datasource/model/api/response/MyPage';
import { MyResponse } from '@/data/datasource/model/api/response/MyResponse';

class BaseAPI<T> extends APIClient {
   private readonly resource: string;

   constructor(resource: string, config?: FetcherConfig) {
      super(config);
      this.resource = resource;
   }

   async findByID(id: string): Promise<T> {
      return this._get<T>(`/${this.resource}/${id}`);
   }

   async findOne(query: Record<string, any>): Promise<T> {
      const queryString = new URLSearchParams(query).toString();
      return this._get<T>(`/${this.resource}?${queryString}`);
   }

   async findAll(): Promise<T[]> {
      return this._get<T[]>(`/${this.resource}`);
   }

  async findAllWithToken(token: string): Promise<MyResponse<MyPage<T[]>>> {
    return this._get<MyResponse<MyPage<T[]>>>(`/${this.resource}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

   async find(query: Record<string, any>): Promise<T[]> {
      const queryString = new URLSearchParams(query).toString();
      return this._get<T[]>(`/${this.resource}?${queryString}`);
   }
}

export default BaseAPI;
