interface Customer {
  id: string;
  name: string;
  email: string;
  password: string;
}

export class CustomerImpl implements Customer {
  email: string = "Chưa đăng nhập";
  id: string = "";
  name: string = "Tài khoản";
  password: string = '';

}

export type {Customer}