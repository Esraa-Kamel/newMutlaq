import { TestBed } from '@angular/core/testing';

import { AppointmentsReservationService } from './appointments-reservation.service';

describe('AppointmentsReservationService', () => {
  let service: AppointmentsReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentsReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
