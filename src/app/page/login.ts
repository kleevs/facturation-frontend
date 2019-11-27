import { ajax } from '../../tool/ajax';

export class Login {

  email: string;
  password: string;
  
  constructor() {
  }

  signin() {
    ajax('/accounts/login', { 
      method: 'POST',
      data: {
        login: this.email,
        password: this.password
      }
    }).then(_ => location.href = '/');
  }
}