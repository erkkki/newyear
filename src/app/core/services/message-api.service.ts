import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { Message } from '../types/message.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageApiService {

  constructor(
    private http: HttpClient,
  ) {
    console.log(environment.messageApi + ' <- api url');
  }

  getById(id): Observable<any> {
    console.log(environment.messageApi + ' <- api url');
    return this.http.get(environment.messageApi + '/' + id);
  }

  create(message): Observable<any> {
    return this.http.post<Message>(environment.messageApi, message);
  }

}
