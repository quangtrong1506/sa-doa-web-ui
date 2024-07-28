declare type RoleProps = 'admin' | 'user' | 'collaborator';
declare type StatusProps = 'active' | 'inactive' | 'banned' | 'deleted';
declare type GetRoleLabel = (role: RoleProps) => string | null;
declare type GetStatusLabel = (status: StatusProps) => string | null;

declare interface UserProps {
   id: string;
   name: string;
   email: string;
   password: string;
   role: RoleProps;
   avatar?: string;
   status: StatusProps;
}

export type { GetRoleLabel, GetStatusLabel, RoleProps, StatusProps, UserProps };
export = { GetRoleLabel, GetStatusLabel, RoleProps, StatusProps, UserProps };
