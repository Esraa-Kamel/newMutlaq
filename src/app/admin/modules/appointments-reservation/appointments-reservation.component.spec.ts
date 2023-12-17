import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsReservationComponent } from './appointments-reservation.component';

describe('AppointmentsReservationComponent', () => {
  let component: AppointmentsReservationComponent;
  let fixture: ComponentFixture<AppointmentsReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
