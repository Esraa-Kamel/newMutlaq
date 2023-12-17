import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsReservationRoutingModule } from './appointments-reservation-routing.module';
import { AppointmentsReservationComponent } from './appointments-reservation.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppointmentsReservationComponent
  ],
  imports: [
    CommonModule,
    AppointmentsReservationRoutingModule,
    FormsModule
  ]
})
export class AppointmentsReservationModule { }
