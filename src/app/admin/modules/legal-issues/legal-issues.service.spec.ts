import { TestBed } from '@angular/core/testing';

import { LegalIssuesService } from './legal-issues.service';

describe('LegalIssuesService', () => {
  let service: LegalIssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalIssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
