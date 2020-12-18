import { TestBed } from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';

import { MockMessageApiService } from './mock-message-api.service';
import { MessageService } from './message.service';
import {Message} from '../types/message.interface';
import {MockMessageData} from '../data/mock-message.data';



describe('MessageService', () => {
  let service: MessageService;
  let data: MockMessageData = new MockMessageData();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MockMessageApiService]
    });
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Test message is initialized right.', () => {
    let temp_msg: Message = data.messages[0];
    service.getMessage().subscribe(value => {
      expect(value).toEqual(temp_msg);
    });
  });

  it('New message is set.', () => {
    let temp_msg: Message = data.messages[0];
    service.setMessage(temp_msg);
    service.getMessage().subscribe(value => {
      expect(value).toEqual(temp_msg);
    });
  });
});
