import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationFormComponent } from './information-form.component';

const routes: Routes = [{ path: '', component: InformationFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationFormRoutingModule { }
