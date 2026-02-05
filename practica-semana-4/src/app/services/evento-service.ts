import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventoService {

  private endpoint = 'http://localhost:3000/eventos';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.endpoint);
  }

  deleteEvent(id: string): Observable<IEvent> {
    return this.http.delete<IEvent>(`${this.endpoint}/${id}`);
  }

  addEvent(event: IEvent): Observable<IEvent> {
    return this.http
      .post<IEvent>(this.endpoint, event)
      .pipe(
        catchError((resp: HttpErrorResponse) =>
          throwError(
            () =>
              new Error(
                `Error crear el evento. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`,
              ),
          ),
        ),
      );
  }

}
