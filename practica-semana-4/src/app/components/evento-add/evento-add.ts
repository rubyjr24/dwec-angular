import { Component, EventEmitter, Output } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-evento-add',
  imports: [FormsModule, NgStyle, RouterLink],
  templateUrl: './evento-add.html',
  styleUrl: './evento-add.css',
})
export class EventoAdd {

  @Output() newEventEmitter = new EventEmitter<IEvent>();

  imageLoaded = false;

  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  };

  addEventShow() {
    this.newEventEmitter.emit(this.newEvent);
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
