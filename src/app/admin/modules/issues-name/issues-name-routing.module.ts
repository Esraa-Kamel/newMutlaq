import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesNameComponent } from './issues-name.component';

const routes: Routes = [ {path:'', component: IssuesNameComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuesNameRoutingModule { }
