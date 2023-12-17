import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalIssuesComponent } from './legal-issues.component';

const routes: Routes = [{path:'', component:LegalIssuesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalIssuesRoutingModule { }
