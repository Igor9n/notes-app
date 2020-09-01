import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NotesList } from '../../services/notes-list/notes-list.model';
import { Note } from '../../services/notes-list/note/note.model';
import { NotesListService } from '../../services/notes-list/notes-list.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  @Input() notesList: NotesList;
  showNotes = false;
  editMode = false;

  constructor(private notesListService: NotesListService) {
  }

  toggleShowNotes() {
    this.showNotes = !this.showNotes;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  ngOnInit(): void {
    console.log('NOTE LIST ON INIT');
  }

  onDeleteNotesList() {
    this.notesListService.deleteNotesList(this.notesList.id);
  }

  onTitleChanged(title: string) {
    this.notesList.title = title;
    this.notesListService.updateNotesList(this.notesList);
  }

  onNoteChanged(note: Note) {
    this.notesList.notes.splice(this.notesList.notes.findIndex(v => v.id === note.id), 1, note);
    this.notesListService.updateNotesList(this.notesList);
  }

  onRemoveNote(note: Note) {
    this.notesList.notes.splice(this.notesList.notes.findIndex(v => v.id === note.id), 1);
    this.notesListService.updateNotesList(this.notesList);
  }

  onAddNote() {
    if (!this.showNotes) {
      this.showNotes = true;
    }
    const newNote = new Note(this.notesList.notes.length, '');
    this.notesList.notes.push(newNote);
    this.notesListService.updateNotesList(this.notesList);
  }
}
