import { injectable } from 'inversify';
import { authStore } from './AuthStore';
import { db } from './Database';

@injectable()
export class AuthService {
  registerUser(login: string, password: string): void {

  }

  loginUser(login: string, password: string): void {

  }
}

@injectable()
export class UserService {
  getUserInfo(login: string): void {

  }
}