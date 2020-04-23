import { TestBed } from '@angular/core/testing';

import { PotworyService } from './potwory.service';

describe('PotworyService', () => {
  let service: PotworyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotworyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
