import { TestBed } from '@angular/core/testing';

import { B18Service } from './b18.service';

describe('B18Service', () => {
  let service: B18Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B18Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
