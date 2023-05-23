import { TestBed } from '@angular/core/testing';

import { LogementServiceService } from './logement-service.service';

describe('LogementServiceService', () => {
  let service: LogementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
