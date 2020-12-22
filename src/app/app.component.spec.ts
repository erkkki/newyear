import {async, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';

import {AppComponent} from './app.component';
import {BackgroundComponent} from './components/background/background.component';
import {MessageComponent} from './components/message/message.component';
import {MockRouter} from './mock/mock-router';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [
        AppComponent,
        BackgroundComponent,
        MessageComponent,
      ],
      providers: [{ provide: Router, useClass: MockRouter }],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'front-end'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('front-end');
  });
});
