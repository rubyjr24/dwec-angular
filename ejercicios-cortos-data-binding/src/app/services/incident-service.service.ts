import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IncidentService {
  incidents: any = [
    {type: 'Error', message: 'No se puede acceder', state: 'Pendiente'},
    {type: 'Error', message: 'No se puede acceder', state: 'Pendiente'},
  ];

  getIncidents(){
    return this.incidents;
  }
}
