import { GetRoleLabel, GetStatusLabel, RoleProps, StatusProps } from './user';
const USER_ROLE = {
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
} as {
   [keyof in RoleProps]: {
      value: string;
      label: string;
   };
};
const STATUS = {
   active: {
      value: 'active',
      label: 'Active',
   },
   banned: {
      value: 'banned',
      label: 'Đã khoá',
   },
   deleted: {
      value: 'deleted',
      label: 'Đã xoá',
   },
   inactive: {
      value: 'inactive',
      label: 'Chưa kích hoạt',
   },
} as {
   [keyof in StatusProps]: {
      value: StatusProps;
      label: string;
   };
};
const getRoleLabel: GetRoleLabel = (role: RoleProps) => {
   return USER_ROLE[role].label || null;
};
const getStatusLabel: GetStatusLabel = (role: StatusProps) => {
   return STATUS[role].label || null;
};

export { getRoleLabel, getStatusLabel };
