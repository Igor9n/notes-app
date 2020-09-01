import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Note } from '../../services/notes-list/note/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges {
  @Output() onNoteChanged: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() onRemoveControlClicked: EventEmitter<Note> = new EventEmitter<Note>();
  @Input() note: Note;
  public editMode = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  onDescriptionChanged(description) {
    this.note.description = description;
    this.onNoteChanged.emit(this.note);
  }

  onRemoveNote() {
    this.onRemoveControlClicked.emit(this.note);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('NOTE', changes);
  }
}
