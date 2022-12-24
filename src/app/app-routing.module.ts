import { CarteProfessionnelleComponent } from './components/carte-professionnelle/carte-professionnelle.component';
import { FormBodyComponent } from './components/form-body/form-body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FormBodyComponent,
  },
  {    path: 'cartePro',
  component: CarteProfessionnelleComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
