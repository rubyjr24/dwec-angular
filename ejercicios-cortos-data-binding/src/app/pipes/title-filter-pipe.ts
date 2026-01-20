import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../interfaces/ievent';

@Pipe({
  name: 'titleFilter',
})
export class TitleFilterPipe implements PipeTransform {

  transform(events: IEvent[], title: string): IEvent[] {

    if (title === undefined || title.trim() === '') return events;

    const filter = title ? title.toLocaleLowerCase() : null;
    return filter
      ? events.filter((event) => event.title.toLocaleLowerCase().includes(filter))
      : events;
  }

}
