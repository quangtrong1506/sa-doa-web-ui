import { APIClient, FetcherConfig } from './API';
import { MyResponse } from '@/data/datasource/model/api/response/MyResponse';
import { User } from '@/data/datasource/model';
import { MyPage } from '@/data/datasource/model/api/response/MyPage';

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

  async findAll(token: String): Promise<MyResponse<MyPage<User[]>>> {
    return this._get<MyResponse<MyPage<User[]>>>(`/users`, {
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