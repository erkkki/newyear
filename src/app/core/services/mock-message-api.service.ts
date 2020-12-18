import {Observable, of} from 'rxjs';


import { MockMessageData } from '../data/mock-message.data';
import {Message} from '../types/message.interface';


export class MockMessageApiService {
  data: MockMessageData;
  temp_msg: Message;


  constructor() {
    this.data = new MockMessageData();
    this.temp_msg = this.data.messages[0];
  }

  getById(id): Observable<any> {
    return of(this.temp_msg);
  }
  create(message): Observable<any> {
    this.temp_msg = message;
    return of(this.temp_msg);
  }
}
