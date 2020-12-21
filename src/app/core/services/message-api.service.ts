import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

import {Message} from '../types/message.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageApiService {

  constructor(
    private http: HttpClient,
  ) {}

  getById(id): Observable<any> {
    return this.http.get(environment.messageApi + '/' + id)
      .pipe(
        catchError(this.handleError<Message[]>('getMessageById', []))
      );
  }

  create(message): Observable<any> {
    console.log(message);
    return this.http.post<Message>(environment.messageApi, message)
      .pipe(
        catchError(this.handleError<Message[]>('createMessage', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error('Error trying to communicate from message api -> ' + operation + '.');
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
