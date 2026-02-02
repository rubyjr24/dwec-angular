import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from '../../pipes/event-filter-pipe';
import { EventoItem } from "../evento-item/evento-item";
import { EventoAdd } from '../evento-add/evento-add';
import { EventoService } from '../../services/evento-service';

@Component({
  selector: 'app-events-show',
  imports: [FormsModule, EventFilterPipe, EventoItem, EventoAdd],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  search: string = '';
  events: IEvent[];

  constructor(private eventoService: EventoService){
    this.events = this.eventoService.getEvents();
  }

  orderDate() {
    this.search = '';
    this.events = this.events.sort((event1, event2) => event1.date.localeCompare(event2.date));
  }

  orderPrice() {
    this.search = '';
    this.events = this.events.sort((event1, event2) => event1.price - event2.price);
  }

  deleteEvent(title:string){
    this.events = this.events.filter((event) => {
      return event.title !== title;
    });
  }

  addEvent(event:IEvent){
    this.events.push(event);
  }

}