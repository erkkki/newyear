import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

import {MessageComponent} from './message.component';
import {Message} from '../../core/types/message.interface';
import {MockMessageData} from '../../mock/mock-message.data';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;
  const data: MockMessageData = new MockMessageData();


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, RouterTestingModule.withRoutes(
        [
          { path: '', component: MessageComponent },
          { path: ':id', component: MessageComponent },
        ]
      )],
      declarations: [ MessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be same msg as message service.', () => {
    const tempMsg: Message = data.messages[0];
    expect(component.message).toEqual(tempMsg);
  });
});
