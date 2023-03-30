export interface User {
  id: string;
  username: string;
  email: string;
  image: string;
  roles: string[];
}

export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserRegisterData {
  email: string;
  username: string;
  password: string;
}
