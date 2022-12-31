import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationFormRoutingModule } from './information-form-routing.module';
import { InformationFormComponent } from './information-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InformationFormComponent],
  imports: [
    CommonModule,
    InformationFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class InformationFormModule {}
