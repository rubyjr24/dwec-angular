import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/ievent';
import { FormsModule } from '@angular/forms';
import { TitleFilterPipe } from "../../pipes/title-filter-pipe";

@Component({
  selector: 'event-list',
  imports: [FormsModule, TitleFilterPipe],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  filter:string = '';
  events: IEvent[] = [
    {
      id: 1,
      title: 'Prueba 1',
      date: (new Date()).toDateString(),
      description: `Descripción del evento Prueba 1`,
      price: 10
    },
    {
      id: 2,
      title: 'Prueba 2',
      date: (new Date()).toDateString(),
      description: `Descripción del evento Prueba 2`,
      price: 20
    },
    {
      id: 3,
      title: 'Prueba 3',
      date: (new Date()).toDateString(),
      description: `Descripción del evento Prueba 3`,
      price: 30
    },
  ]
}
