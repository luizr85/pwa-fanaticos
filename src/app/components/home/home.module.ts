import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../../shared/material.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
