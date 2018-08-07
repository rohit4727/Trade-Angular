import { TestBed, inject } from '@angular/core/testing';

import { RunscheduleService } from './runschedule.service';

describe('RunscheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RunscheduleService]
    });
  });

  it('should be created', inject([RunscheduleService], (service: RunscheduleService) => {
    expect(service).toBeTruthy();
  }));
});
