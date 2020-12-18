import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MessageApiService } from './message-api.service';

import { Message } from '../types/message.interface';
import {Observable} from 'rxjs';
import {MockMessageData} from '../data/mock-message.data';

describe('MessageApiService', () => {
  let service: MessageApiService;
  let data: MockMessageData = new MockMessageData();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(MessageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getById should return real value from api',
    (done: DoneFn) => {
      let temp_msg: Message = data.messages[0];
      service.getById(0).subscribe(value => {
        expect(value.message).toBe(temp_msg.message);
        expect(value.video_id).toBe(temp_msg.video_id);
        done();
      });
  });

  it('#create should return same value from api',
    (done: DoneFn) => {
      let temp_msg: Message = data.messages[0];
      service.create(temp_msg).subscribe(value => {
        expect(value.message).toBe(temp_msg.message);
        expect(value.video_id).toBe(temp_msg.video_id);
        done();
      });
    });
});
