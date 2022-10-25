interface UserModel {
  id?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  role: { name: string };
  customer: { name: string };
}

enum ROLE {
  SUPERADMIN = 'Super Admin',
  ADMIN = 'Admin',
  SUBSCRIBER = 'Subscriber',
}

export { ROLE, UserModel };
