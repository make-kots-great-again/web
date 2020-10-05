import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() {
  }

  validateRegister(user) {
    return !(!user.email || !user.password || !user.username);
  }

  validateLogin(user) {
    return !(!user.pseudo || !user.password);
  }
}
