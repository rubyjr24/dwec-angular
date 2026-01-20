import { Component, signal } from '@angular/core';
import { EventsShow } from "./components/events-show/events-show";

@Component({
  selector: 'app-root',
  imports: [EventsShow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica-semana-2');
}
