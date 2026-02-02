import { Component, signal } from '@angular/core';
import { EventsShow } from "./components/events-show/events-show";
import { EventoAdd } from "./components/evento-add/evento-add";

@Component({
  selector: 'app-root',
  imports: [EventsShow, EventoAdd],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica-semana-3');
}
