import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunscheduleComponent } from './runschedule.component';

describe('RunscheduleComponent', () => {
  let component: RunscheduleComponent;
  let fixture: ComponentFixture<RunscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
