import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DadJokeRequestComponent } from './dad-joke-request/dad-joke-request.component';
import { DadJokeDisplayComponent } from './dad-joke-display/dad-joke-display.component';


@NgModule({
  declarations: [
    AppComponent,
    DadJokeRequestComponent,
    DadJokeDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
