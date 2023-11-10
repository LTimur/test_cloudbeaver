import { makeObservable, observable, action } from 'mobx';

class AuthStore {
  login = '';
  password = '';
  createTimestamp: Date | null = null;
  updateTimestamp: Date | null = null;

  constructor() {
  makeObservable(this, {
    login: observable,
    password: observable,  
    setLogin: action,
    setPassword: action,
    setCreateTimestamp: action
  })
}

setLogin(value: string) {
  this.login = value;
}

setPassword(value: string) {
  this.password = value;
}

setCreateTimestamp(value: Date) {
  this.createTimestamp = value;
}

setUpdateTimestamp(value: Date) {
  this.updateTimestamp = value;
}

}

export const authStore = new AuthStore();

