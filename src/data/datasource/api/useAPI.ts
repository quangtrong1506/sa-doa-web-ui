import BaseAPI from './baseApi';
import { User } from '@/data/datasource/model';

class UserAPI extends BaseAPI<User> {
   constructor() {
      super('users', {
         baseURL: 'https://sa-doa-be.vercel.app',
      });
   }

   // Hàm để tạo người dùng mới
   async signup(data: Partial<User>): Promise<any> {
      return this._post<User>('/auth/register', data);
   }

   async login(data: Partial<User>): Promise<any> {
     return this._post("/auth/login", data)
   }

   // Hàm để cập nhật người dùng theo ID
   async updateUser(id: string, data: Partial<User>, token: string): Promise<User> {
      return this._put<User>(`/users/update`, data, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
   }
}

const userAPI = new UserAPI();
export { userAPI };
