import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { Mod1Module } from './app/mod1/mod1.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
