import { InforamationFormComponent } from './components/inforamation-form/inforamation-form.component';
import { CarteProfessionnelleComponent } from './components/carte-professionnelle/carte-professionnelle.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cartePro', component: CarteProfessionnelleComponent },
  { path: '', component: InforamationFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
