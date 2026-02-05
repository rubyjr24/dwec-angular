import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../interfaces/i-event';

@Pipe({
  name: 'eventFilter',
})
export class EventFilterPipe implements PipeTransform {

  transform(events: IEvent[], searchFilter: string): IEvent[] {
    
    if (searchFilter == undefined || searchFilter.trim() === '') return events;

    const filter = searchFilter.toLocaleLowerCase();

    return events.filter(
      (event) => 
        event.title.toLocaleLowerCase().includes(filter) 
        || event.description.toLocaleLowerCase().includes(filter)
    );

  }

}
