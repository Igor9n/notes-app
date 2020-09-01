import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotesListService } from './notes-list/notes-list.service';
import { NotesList } from './notes-list/notes-list.model';
import { tap } from 'rxjs/operators';
import { User } from './user/user.model';
import { UserService } from './user/user.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private notesListService: NotesListService, private userService: UserService) {
  }

  fetchNotesLists() {
    return this.http
      .get<NotesList[]>('./assets/notes-lists.json')
      .pipe(tap(notesLists => {
        this.notesListService.setNotesLists(notesLists);
      }));
  }

  fetchUsers() {
    return this.http
      .get<User[]>('./assets/users.json')
      .pipe(tap(users => {
        this.userService.setUsers(users);
      }));
  }
}
