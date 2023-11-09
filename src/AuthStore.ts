import { makeObservable, observable, action } from 'mobx';

class AuthStore {
  login = '';
  password = '';

  constructor() {
  makeObservable(this, {
    login: observable,
    password: observable,  
    setLogin: action,
    setPassword: action
  })
}

setLogin(value: string) {
  this.login = value;
}

setPassword(value: string) {
  this.password = value;
}
}

export const authStore = new AuthStore();

