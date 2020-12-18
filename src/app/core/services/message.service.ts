import {Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

import { MessageApiService } from './message-api.service';
import { Message } from '../types/message.interface';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: BehaviorSubject<Message>;
  edit: BehaviorSubject<boolean>;

  constructor(
    private messageApi: MessageApiService,
  ) {
    this.message = new BehaviorSubject<Message>({
      id: 0,
      message: 'Happy New Year!',
      video_id: 'XqZsoesa55w',
    });
    this.edit = new BehaviorSubject<boolean>(false);

    /** TODO auto save / fake save for testing. */
    this.message.pipe(
      debounceTime(1000)
    ).subscribe((message) => {
      /** TODO save new message. */
      // console.log('Saved');
    });
  }

  /** Update message by given id */
  setMessageById(id): void  {
    /** TODO Handle fail condition? */
    this.messageApi.getById(id).subscribe((message) => {
      if (message) {
        this.message.next(message);
      } else {
        console.error('No message found by id: ' + id + '.');
      }
    });
  }

  getMessage(): Observable<Message> {
    return this.message.asObservable();
  }

  getEditState(): Observable<boolean> {
    return this.edit.asObservable();
  }

  setMessage(message: Message): void {
    this.message.next(message);
  }
}
