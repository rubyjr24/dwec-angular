import { Component } from '@angular/core';
import { IncidentItem } from '../incident-item/incident-item';
import { IncidentService } from '../../services/incident-service.service';

@Component({
  selector: 'incident-list',
  imports: [IncidentItem],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.css',
})
export class IncidentList {

  incidents!:any;
  
  constructor(private incidentService: IncidentService){

  }

  ngOnInit() {
    this.incidents = this.incidentService.getIncidents();
  }

  /*
  changeState(index:number, state: string) {
    this.incidents[index].state = state;
  }
  */
}
