import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  template: '<div class="input-wrapper"><input [value]="value" (change)="onValueChanged($event)"/></div>',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() value = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onValueChanged(event) {
    this.onChange.emit(event.target.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('InputComponent', changes);
  }
}
