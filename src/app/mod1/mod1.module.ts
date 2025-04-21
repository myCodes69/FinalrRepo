import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Mod2Module } from '../mod2/mod2.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
  Comp1Component
  ],
  exports:[Comp1Component],
  imports: [
    CommonModule,
    Mod2Module,
    RouterModule
  ]
})
export class Mod1Module { }
