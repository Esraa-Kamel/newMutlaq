import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalIssuesComponent } from './legal-issues.component';

describe('LegalIssuesComponent', () => {
  let component: LegalIssuesComponent;
  let fixture: ComponentFixture<LegalIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalIssuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
