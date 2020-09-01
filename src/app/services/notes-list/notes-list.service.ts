import { NotesList } from './notes-list.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotesListService {
  public notesListsUpdated = new Subject<NotesList[]>();
  private notesLists: NotesList[];

  constructor() {
  }

  setNotesLists(notesLists: NotesList[]) {
    this.notesLists = notesLists;
    this.notesListsUpdated.next(this.notesLists.slice());
  }

  getNotesLists() {
    return this.notesLists.slice();
  }

  deleteNotesList(id) {
    this.notesLists.splice(this.notesLists.findIndex(v => v.id === id), 1);
    this.notesListsUpdated.next(this.notesLists.slice());
  }

  addNotesList(notesList: NotesList) {
    this.notesLists.push({ ...notesList });
    this.notesListsUpdated.next(this.notesLists.slice());
  }

  updateNotesList(notesList: NotesList) {
    this.notesLists.splice(this.notesLists.findIndex(v => v.id === notesList.id), 1, notesList);
    this.notesListsUpdated.next(this.notesLists.slice());
  }
}
