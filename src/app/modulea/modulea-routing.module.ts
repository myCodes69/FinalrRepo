import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleaComponent } from './modulea.component';
import { C1Component } from './c1/c1.component';

const routes: Routes = [{ path: '', component: C1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleaRoutingModule { }
