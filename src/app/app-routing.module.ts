import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/information-form/information-form.module').then(
        (m) => m.InformationFormModule
      ),
  },
  {
    path: 'job-card',
    loadChildren: () =>
      import('./components/job-card/job-card.module').then(
        (m) => m.JobCardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
