import { TestBed } from '@angular/core/testing';

import { RentalyzerService } from './rentalyzer.service';

describe('RentalyzerService', () => {
  let service: RentalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
