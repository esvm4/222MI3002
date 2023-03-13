export interface IAccount {
  email: string;
  password: string;
}

export class CAccount {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
