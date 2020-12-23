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

  get(uuid): Observable<any> {
    return this.http.get(
      environment.messageApi + '/' + uuid
    ).pipe(catchError(this.formatErrors));
  }

  post(message): Observable<any> {
    return this.http.post<Message>(
      environment.messageApi,
      message
    ).pipe(catchError(this.formatErrors));
  }
}
