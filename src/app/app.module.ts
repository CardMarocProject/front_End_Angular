import { UserReducer } from './state/user/user.reducers';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';

import { CarteProfessionnelleComponent } from './components/carte-professionnelle/carte-professionnelle.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FormBodyComponent } from './components/form-body/form-body.component';
import { UserEffects } from './state/user/user.effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { NgxPrintElementModule } from 'ngx-print-element';
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    FormBodyComponent,
    CarteProfessionnelleComponent,
  ],
  imports: [

    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({
      user: UserReducer,
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
