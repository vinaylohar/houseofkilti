import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';


@NgModule({
  declarations: [
    AppComponent,
    CommingSoonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
