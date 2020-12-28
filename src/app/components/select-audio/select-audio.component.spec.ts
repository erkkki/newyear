import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAudioComponent } from './select-audio.component';

describe('SelectAudioComponent', () => {
  let component: SelectAudioComponent;
  let fixture: ComponentFixture<SelectAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
