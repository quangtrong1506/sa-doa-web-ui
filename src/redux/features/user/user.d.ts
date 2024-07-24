import { IUserRole } from '@/data/datasource/constants/role.constant';

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: IUserRole;
  avatar?: string;
}

export { UserRole };
export type { IUser };
