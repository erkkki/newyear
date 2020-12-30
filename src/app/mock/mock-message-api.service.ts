import {Observable, of} from 'rxjs';


import {MockMessageData} from './mock-message.data';
import {Message} from '../core/types/message.interface';


export class MockMessageApiService {
  data: MockMessageData;
  tempMsg: Message;


  constructor() {
    this.data = new MockMessageData();
    this.tempMsg = this.data.messages[0];
  }

  getByUuid(uuid): Observable<any> {
    return of(this.tempMsg);
  }
  create(message): Observable<any> {
    this.tempMsg = message;
    return of(this.tempMsg);
  }
}
