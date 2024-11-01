import { Status } from '@/data/datasource/model/Status';
import { Role } from '@/data/datasource/model/Role';

interface User {
  id: string;
  name: string;
  fullName?: string;
  email: string;
  phone?: string;
  avatar?: string;
  password: string;
  bio?: string;
  role: Role;
  status: Status;
}

export type { User };