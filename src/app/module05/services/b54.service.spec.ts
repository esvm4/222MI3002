import { TestBed } from '@angular/core/testing';

import { B54Service } from './b54.service';

describe('B54Service', () => {
  let service: B54Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B54Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
