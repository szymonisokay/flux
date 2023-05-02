export interface User {
  _id: string;
  username: string;
  firstname?: string;
  lastname?: string;
  email: string;
  avatar?: string;
  password: string;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserLoginData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface UserRegisterData {
  email: string;
  username: string;
  password: string;
}

export interface UserWithToken {
  user: User;
  token: string;
}
