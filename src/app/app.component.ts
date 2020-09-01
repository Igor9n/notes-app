import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotesList } from './services/notes-list/notes-list.model';
import { DataStorageService } from './services/data-storage.service';
import { NotesListService } from './services/notes-list/notes-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'NotesApp';
  notesLists: NotesList[];
  subscription: Subscription;
  loading = true;

  constructor(private dataStorageService: DataStorageService, private notesListService: NotesListService) {

  }

  debug(value) {
    console.log(value);
  }

  onAddNewNotesList(): void {
    this.notesListService.addNotesList(new NotesList(this.notesLists ? this.notesLists.length : 0, '', []));
  }

  ngOnInit(): void {
    this.dataStorageService.fetchNotesLists().subscribe(() => this.loading = false);
    this.subscription = this.notesListService.notesListsUpdated.subscribe((notesLists: NotesList[]) => {
      this.notesLists = notesLists;
    });

    console.log('APP NG ON INIT');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
