import { TestBed } from '@angular/core/testing';

import { AnnotationDataService } from './annotation-data.service';

describe('AnnotationDataService', () => {
  let service: AnnotationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnotationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
