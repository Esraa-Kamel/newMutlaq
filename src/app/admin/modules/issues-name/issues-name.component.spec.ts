import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesNameComponent } from './issues-name.component';

describe('IssuesNameComponent', () => {
  let component: IssuesNameComponent;
  let fixture: ComponentFixture<IssuesNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuesNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
