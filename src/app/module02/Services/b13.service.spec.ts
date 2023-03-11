import { TestBed } from '@angular/core/testing';

import { B13Service } from './b13.service';

describe('B13Service', () => {
  let service: B13Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B13Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
