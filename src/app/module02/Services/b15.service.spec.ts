import { TestBed } from '@angular/core/testing';

import { B15Service } from './b15.service';

describe('B15Service', () => {
  let service: B15Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B15Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
