import { TestBed } from '@angular/core/testing';

import {PotworyServerService } from './potwory-server.service';

describe('PotworyServerService', () => {
  let service: PotworyServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotworyServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});