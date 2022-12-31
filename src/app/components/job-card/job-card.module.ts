import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobCardRoutingModule } from './job-card-routing.module';
import { JobCardComponent } from './job-card.component';


@NgModule({
  declarations: [
    JobCardComponent
  ],
  imports: [
    CommonModule,
    JobCardRoutingModule
  ]
})
export class JobCardModule { }
