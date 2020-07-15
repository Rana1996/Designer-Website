import { TestBed } from '@angular/core/testing';

import { SectionsContentService } from './sections-content.service';

describe('SectionsContentService', () => {
  let service: SectionsContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionsContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
