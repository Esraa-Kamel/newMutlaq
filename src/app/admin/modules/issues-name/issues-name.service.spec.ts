import { TestBed } from '@angular/core/testing';

import { IssuesNameService } from './issues-name.service';

describe('IssuesNameService', () => {
  let service: IssuesNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuesNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
