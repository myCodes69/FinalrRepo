import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';



@NgModule({
  declarations: [
    Comp1Component
  ],
  exports:[Comp1Component],
  imports: [
    CommonModule,
  ],
  providers:[]
})
export class Mod2Module { }
