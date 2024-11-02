import BaseAPI from './baseApi';

export type User = {
   id: string;
   name: string;
   email: string;
};

class UserAPI extends BaseAPI<User> {
   constructor() {
      super('user', {
         baseURL: 'https://sa-doa-be.vercel.app',
      });
   }

   // Hàm để tạo người dùng mới
   async createUser(data: Partial<User>, token: string): Promise<User> {
      return this._post<User>('/', data, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
   }

   // Hàm để cập nhật người dùng theo ID
   async updateUser(id: string, data: Partial<User>, token: string): Promise<User> {
      return this._put<User>(`/${id}`, data, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
   }
}

const userAPI = new UserAPI();
export { userAPI };
