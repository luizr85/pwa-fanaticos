import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarModule } from './navbar/navbar.module';

import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    // CommonModule,
    LayoutRoutingModule,
    NavbarModule
  ],
  exports: [LayoutComponent],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
