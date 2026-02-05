import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from '../../pipes/event-filter-pipe';
import { EventoItem } from "../evento-item/evento-item";
import { EventoService } from '../../services/evento-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-events-show',
  imports: [FormsModule, EventFilterPipe, EventoItem, AsyncPipe, RouterLink],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  search: string = '';

  private eventsSubject = new BehaviorSubject<IEvent[]>([]);
  events$: Observable<IEvent[]> = this.eventsSubject.asObservable();

  constructor(private eventoService: EventoService){
    this.eventoService.getEvents().subscribe(events => {
      this.eventsSubject.next(events);
    })
  }

  orderDate() {
    this.search = '';
    const sorted = [...this.eventsSubject.value].sort(
      (a, b) => a.date.localeCompare(b.date)
    );
    this.eventsSubject.next(sorted);
  }

  orderPrice() {
    this.search = ''; 
    const sorted = [...this.eventsSubject.value].sort(
      (a, b) => a.price - b.price
    );
    this.eventsSubject.next(sorted);
  }

  deleteEvent(id:string){
    this.eventoService.deleteEvent(id).subscribe({
      next: () => {
        const updatedList = this.eventsSubject.value.filter(e => e.id !== id);
        this.eventsSubject.next(updatedList);
      },
      error: (error) =>  console.error(error)
    })
  }

  addEvent(event:IEvent){
    this.eventoService.addEvent(event).subscribe({
      next: (event) => {
        const updatedList = [...this.eventsSubject.value, event];
        this.eventsSubject.next(updatedList);
      },
      error: (error) =>  console.error(error)
    })
    
  }

  isEmptyEvents(){
    return this.eventsSubject.value.length === 0;
  }

}