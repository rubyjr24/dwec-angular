import { Routes } from '@angular/router';
import { EventsShow } from './components/events-show/events-show';
import { EventoAdd } from './components/evento-add/evento-add';

export const routes: Routes = [
{ path: 'eventos', component: EventsShow, title: 'Lista de eventos' },
{ path: 'eventos/add', component: EventoAdd, title: 'Contacto' },
{ path: '', redirectTo: 'eventos', pathMatch: 'full' },
];