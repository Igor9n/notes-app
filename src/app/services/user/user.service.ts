import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[];
  private currentUser: User;

  setUsers(users: User[]) {
    this.users = users;
  }

  getUsers() {
    return this.users.slice();
  }

  getUserByName(name) {
    return this.users.find(u => u.name === name);
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
