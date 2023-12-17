import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalIssuesRoutingModule } from './legal-issues-routing.module';
import { LegalIssuesComponent } from './legal-issues.component';


@NgModule({
  declarations: [
    LegalIssuesComponent
  ],
  imports: [
    CommonModule,
    LegalIssuesRoutingModule
  ]
})
export class LegalIssuesModule { }
