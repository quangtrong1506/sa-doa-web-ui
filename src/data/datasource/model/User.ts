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

export type { User };