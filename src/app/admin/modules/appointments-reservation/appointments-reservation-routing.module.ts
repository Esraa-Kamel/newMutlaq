import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsReservationComponent } from './appointments-reservation.component';

const routes: Routes = [{path:'', component:AppointmentsReservationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsReservationRoutingModule { }
