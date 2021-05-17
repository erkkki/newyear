import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
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

  private formatErrors(error: any): any {
    return  throwError(error.error);
  }

  get(id): Observable<any> {
    return this.http.get(
      environment.messageApi + '/' + id + '.json'
    ).pipe(catchError(this.formatErrors));
  }

  post(newMessage): Observable<any> {
    let {message, color} = newMessage;
    return this.http.post<Message>(
      environment.messageApi,
      {message, color}
    ).pipe(catchError(this.formatErrors));
  }
}
