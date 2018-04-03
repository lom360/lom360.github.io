import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LocalStoreComponent } from './local-store/local-store.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LocalStoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
