import {TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import {MessageApiService} from './message-api.service';

import {Message} from '../types/message.interface';
import {MockMessageData} from '../../mock/mock-message.data';

describe('MessageApiService', () => {
  let service: MessageApiService;
  const data: MockMessageData = new MockMessageData();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(MessageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#get should return real value from api',
    (done: DoneFn) => {
      const tempMsg: Message = data.messages[0];
      service.get(0).subscribe(value => {
        expect(value.message).toBe(tempMsg.message);
        expect(value.videoId).toBe(tempMsg.videoId);
        done();
      });
  });

  it('#post should return same value from api',
    (done: DoneFn) => {
      const tempMsg: Message = data.messages[0];
      service.post(tempMsg).subscribe(value => {
        expect(value.message).toBe(tempMsg.message);
        expect(value.videoId).toBe(tempMsg.videoId);
        done();
      });
    });
});
