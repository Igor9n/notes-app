import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotesListService } from './notes-list/notes-list.service';
import { NotesList } from './notes-list/notes-list.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private notesListService: NotesListService) {
  }

  fetchNotesLists() {
    return this.http
      .get<NotesList[]>('./assets/notes-lists.json')
      .pipe(tap(notesLists => {
        this.notesListService.setNotesLists(notesLists);
      }));
  }
}
