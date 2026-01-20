import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, NgStyle, TitleCasePipe } from '@angular/common';
import { EventFilterPipe } from '../../pipes/event-filter-pipe';

@Component({
  selector: 'app-events-show',
  imports: [FormsModule, TitleCasePipe, CurrencyPipe, DatePipe, EventFilterPipe, NgStyle],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  imageLoaded = false;
  search: string = '';
  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  };
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

  orderDate() {
    this.search = '';
    this.events = this.events.sort((event1, event2) => event1.date.localeCompare(event2.date));
  }

  orderPrice() {
    this.search = '';
    this.events = this.events.sort((event1, event2) => event1.price - event2.price);
  }

  addEvent() {
    this.events.push(this.newEvent);
    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: ''
    };
  }

  changeImage(fileInput: HTMLInputElement) {

    if (!fileInput.files || fileInput.files.length === 0) { return; }
    this.imageLoaded = false;

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);

    reader.addEventListener('loadend', e => {
      if (typeof reader.result !== 'string') return;

      this.newEvent.image = reader.result;
      this.imageLoaded = true;
    });
  }
}