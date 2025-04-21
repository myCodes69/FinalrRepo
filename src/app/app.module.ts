import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mod1Module } from './mod1/mod1.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TwdbComponent } from './twdb/twdb.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgforComponent } from './ngfor/ngfor.component';
import { ModifyPipe } from './modify.pipe';
import { DirectiveDirective } from './directive.directive';
import { ReqsInterceptor } from './reqs.interceptor';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
// import { Comp1Component } from './mod1/comp1/comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    TwdbComponent,
    NgforComponent,
    ModifyPipe,
    DirectiveDirective,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Mod1Module,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ReqsInterceptor,
      multi:true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
