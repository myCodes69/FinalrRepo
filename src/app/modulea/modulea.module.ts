import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleaRoutingModule } from './modulea-routing.module';
import { ModuleaComponent } from './modulea.component';
import { C1Component } from './c1/c1.component';


@NgModule({
  declarations: [
    ModuleaComponent,
    C1Component
  ],
  imports: [
    CommonModule,
    ModuleaRoutingModule
  ]
})
export class ModuleaModule { }
