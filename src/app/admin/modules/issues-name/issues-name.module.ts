import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuesNameRoutingModule } from './issues-name-routing.module';
import { IssuesNameComponent } from './issues-name.component';
import { IssuesNameService } from './issues-name.service';


@NgModule({
  declarations: [
    IssuesNameComponent
  ],
  imports: [
    CommonModule,
    IssuesNameRoutingModule
  ],
  providers: [
    IssuesNameService
  ]
})
export class IssuesNameModule { }
