import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  template: '<div class="input-wrapper"><input [value]="value" (keyup.enter)="onEnterUp()" (change)="onValueChanged($event)"/></div>',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() value = '';
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onEnter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onEnterUp() {
    this.onEnter.emit();
  }

  onValueChanged(event) {
    this.onChange.emit(event.target.value);
  }
}
