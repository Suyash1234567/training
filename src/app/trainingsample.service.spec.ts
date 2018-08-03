import { TestBed, inject } from '@angular/core/testing';

import { TrainingsampleService } from './trainingsample.service';

describe('TrainingsampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingsampleService]
    });
  });

  it('should be created', inject([TrainingsampleService], (service: TrainingsampleService) => {
    expect(service).toBeTruthy();
  }));
});
