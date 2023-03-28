import { TestBed } from '@angular/core/testing';

import { Serve1Service } from './serve1.service';

describe('Serve1Service', () => {
  let service: Serve1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serve1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
