const UserRole = {
  admin: {
    value: 'admin',
    label: 'Siêu quản trị viên',
  },
  user: {
    value: 'user',
    label: 'Người dùng',
  },
  collaborator: {
    value: 'collaborator',
    label: 'Cộng tác viên',
  },
};
interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: keyof typeof UserRole;
  avatar?: string;
}

export { UserRole };
export type { IUser };
