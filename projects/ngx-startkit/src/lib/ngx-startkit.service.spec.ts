import { TestBed } from '@angular/core/testing';

import { NgxStartkitService } from './ngx-startkit.service';

describe('NgxStartkitService', () => {
  let service: NgxStartkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStartkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
