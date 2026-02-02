import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Injectable({
  providedIn: 'root',
})
export class EventoService {

  events: IEvent[] = [
    {
      title: 'Evento prueba',
      image: './image1.jpg',
      date: '2025-12-12',
      description: 'Descripción evento prueba',
      price: 50.5
    },
    {
      title: 'Evento prueba 2',
      image: './image2.jpg',
      date: '2025-12-13',
      description: 'Descripción evento prueba 2',
      price: 24.99
    }
  ];

  getEvents(){
    return this.events;
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
