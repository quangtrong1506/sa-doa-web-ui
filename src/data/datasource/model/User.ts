import { Status } from '@/data/datasource/model/Status';
import { Role } from '@/data/datasource/model/Role';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  password: string;
  role: Role;
  status: Status;
}

export class CustomerImpl implements User {
  email: string = 'Chưa đăng nhập';
  id: string = '';
  name: string = 'Tài khoản';
  password: string = '';
  role = Role.User;
  status = Status.Active;
}

export type { User };