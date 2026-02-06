import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventoService } from '../../services/evento-service';

@Component({
  selector: 'app-evento-add',
  imports: [FormsModule, NgStyle, RouterLink],
  templateUrl: './evento-add.html',
  styleUrl: './evento-add.css',
})
export class EventoAdd {

  imageLoaded = false;

  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  };

  constructor(private eventoService: EventoService){}

  addEventShow() {
    this.eventoService.addEvent(this.newEvent).subscribe({
      next: (res) => console.log('Evento creado!', res),
      error: (err) => console.error('Ups!', err)
    });
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
