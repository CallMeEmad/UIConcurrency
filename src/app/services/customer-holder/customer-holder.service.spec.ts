import { TestBed } from '@angular/core/testing';

import { CustomerHolderService } from './customer-holder.service';

describe('CustomerHolderService', () => {
  let service: CustomerHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
