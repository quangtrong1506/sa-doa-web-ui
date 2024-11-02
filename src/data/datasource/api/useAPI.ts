// src/utils/UserAPI.ts
import BaseAPI from './baseApi';

export type User = {
   id: string;
   name: string;
   email: string;
   // Thêm các trường khác nếu cần
};

const userAPI = new BaseAPI<User>('users', {
   baseURL: 'https://api.example.com',
   headers: {
      Authorization: 'Bearer YOUR_TOKEN',
   },
});

export { userAPI };
