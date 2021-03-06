import {TestBed} from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {MockMessageApiService} from '../../mock/mock-message-api.service';
import {MessageService} from './message.service';
import {Message} from '../types/message.interface';
import {MockMessageData} from '../../mock/mock-message.data';
import {MockRouter} from '../../mock/mock-router';


describe('MessageService', () => {
  let service: MessageService;
  const data: MockMessageData = new MockMessageData();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MockMessageApiService, { provide: Router, useClass: MockRouter }]
    });
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
