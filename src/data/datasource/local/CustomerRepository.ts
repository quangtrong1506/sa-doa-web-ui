import { User } from '@/data/datasource/model/User';

const CUSTOMER_KEY = 'customerStorage';

const saveCustomer = (customer: User) => {
  localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customer));
};

const getCustomer = () => {
  const customer = localStorage.getItem(CUSTOMER_KEY)
  if(customer) {
    return JSON.parse(customer) as User
  }
  return undefined;
};

const deleteCustomer = () => {
  localStorage.removeItem(CUSTOMER_KEY)
};

const CustomerRepository = {
  saveCustomer,
  getCustomer,
  deleteCustomer,
}

export {CustomerRepository}