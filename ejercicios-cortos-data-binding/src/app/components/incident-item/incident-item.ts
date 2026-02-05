import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: '[incident-item]',
  imports: [],
  templateUrl: './incident-item.html',
  styleUrl: './incident-item.css',
})
export class IncidentItem {
  @Input() incident!: any;
  @Output() changedStateEvent = new EventEmitter<string>();

  setState(){
    this.changedStateEvent.emit('Hecho');
  }
}
