export interface IUserLogin {
  username: string;
  password: string;
}
export interface IUserRegister extends IUserLogin {
  email: string;
  confirmPassword: string;
  terms: boolean;
}
