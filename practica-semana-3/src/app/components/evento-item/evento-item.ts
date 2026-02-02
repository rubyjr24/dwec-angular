import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-evento-item',
  imports: [TitleCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './evento-item.html',
  styleUrl: './evento-item.css',
})
export class EventoItem {
  @Input() event?: IEvent;
  @Output() deleteEmitter = new EventEmitter<void>();

  deleteEvento(){
    this.deleteEmitter.emit();
  }
}
