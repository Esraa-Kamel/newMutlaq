import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'legalIssues',
    loadChildren: () =>
      import('./../../admin/modules/legal-issues/legal-issues.module').then(m => m.LegalIssuesModule),
  },
  {
    path: 'appointmentReservation',
    loadChildren: () =>
      import('./../../admin/modules/appointments-reservation/appointments-reservation-routing.module').then(m => m.AppointmentsReservationRoutingModule),
  },
  {
    path: 'permissions',
    loadChildren: () =>
      import('./../../admin/modules/permissions/permissions.module').then(m => m.PermissionsModule)
  },
  {
    path: 'roles',
    loadChildren: () =>
      import('./../../admin/modules/roles/roles.module').then(m => m.RolesModule)
  },
  {
    path: 'issuesName',
    loadChildren: () =>
      import('./../../admin/modules/issues-name/issues-name.module').then(m => m.IssuesNameModule)
  },
  {
    path: 'workDays',
    loadChildren: () =>
      import('./../../admin/modules/work-days/work-days.module').then(m => m.WorkDaysModule)
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./../../admin/modules/orders/orders.module').then(m => m.OrdersModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
