import { Note } from './note/note.model';

export class NotesList {
  constructor(public id: number, public title: string, public notes: Note[]) {
  }
}
