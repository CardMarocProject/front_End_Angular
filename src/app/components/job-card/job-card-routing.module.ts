import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobCardComponent } from './job-card.component';

const routes: Routes = [{ path: '', component: JobCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobCardRoutingModule { }
