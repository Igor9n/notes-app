import { User } from './user/user.model';
import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private userService: UserService) {
  }

  authUser(user: User) {
    const u = this.userService.getUserByName(user.name);
    if (!u) {
      return { auth: false, error: 'User not found!' };
    } else if (u.password !== user.password) {
      return { auth: false, error: 'Password is incorrect!' };
    }

    return { auth: true };
  }
}
