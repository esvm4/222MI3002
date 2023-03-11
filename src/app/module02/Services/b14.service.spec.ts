import { TestBed } from '@angular/core/testing';

import { B14Service } from './b14.service';

describe('B14Service', () => {
  let service: B14Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B14Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
