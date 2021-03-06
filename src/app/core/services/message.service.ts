import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {debounceTime, skip} from 'rxjs/operators';

import {MessageApiService} from './message-api.service';
import {Message} from '../types/message.interface';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  templateMessage: Message = {
    id: '',
    message: 'Happy New Year!',
    color: '#ffffff',
  };
  message: BehaviorSubject<Message>;
  serverMessage: string;

  constructor(
    private messageApi: MessageApiService,
    private router: Router,
  ) {
    this.message = new BehaviorSubject<Message>(this.templateMessage);
    this.autoSave();
  }

  getMessage(): Observable<Message> {
    return this.message.asObservable();
  }

  setMessage(message: Message): void {
    this.message.next(message);
  }

  autoSave(): void {
    this.message.pipe(
      debounceTime(2000),
      skip(1),
    ).subscribe((message) => {
      /** Check if all ready saved in server from last result */
      if (JSON.stringify(this.message.value) === this.serverMessage) {
        return;
      }
      /** Save message. */
      this.messageApi.post(message).subscribe((value) => {
        if (value.id) {
          this.router.navigateByUrl('/' + value.id).then();
        }
      });
    });
  }


  /** Update message by given id */
  setMessageById(id): void  {
    this.messageApi.get(id).subscribe((message) => {
      if (message instanceof Array) {
        this.setMessage(this.templateMessage);
        this.router.navigateByUrl('/' ).then();
        return;
      }
      if (message) {
        /** Update message and save json to compare later */
        this.message.next(message);
        this.serverMessage = JSON.stringify(message);
      } else {
        console.error('No message found by id: ' + id + '.');
      }
    });
  }


}
