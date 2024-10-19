import { TestBed } from '@angular/core/testing';

import { ResizeLisenterService } from './resize-lisenter.service';

describe('ResizeLisenterService', () => {
  let service: ResizeLisenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResizeLisenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
