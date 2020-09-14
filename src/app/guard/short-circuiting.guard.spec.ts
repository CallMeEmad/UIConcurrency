import { TestBed } from '@angular/core/testing';

import { ShortCircuitingGuard } from './short-circuiting.guard';

describe('ShortCircuitingGuard', () => {
  let guard: ShortCircuitingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShortCircuitingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
