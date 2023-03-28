import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  @Output() mEvent = new EventEmitter<number>();
  onTemp(no: any) {
    this.mEvent.emit(no.value);

  }
}
