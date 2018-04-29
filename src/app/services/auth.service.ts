import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  userStatus = false;
  constructor() { }
  isLogedIn() {
    return this.userStatus;
  }
}
