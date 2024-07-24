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
type IUserRole = keyof typeof UserRole;

export default UserRole;
export type { IUserRole };
