import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminCoreModule } from 'src/app/admin/core/admin-core.module';
import { AppointmentsReservationModule } from 'src/app/admin/modules/appointments-reservation/appointments-reservation.module';
import { LegalIssuesModule } from 'src/app/admin/modules/legal-issues/legal-issues.module';


@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    AdminCoreModule,
    AppointmentsReservationModule,
    LegalIssuesModule
  ]
})
export class AdminLayoutModule { }
