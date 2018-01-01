import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DadJokeRequestComponent } from './dad-joke-request/dad-joke-request.component';
import { DadJokeDisplayComponent } from './dad-joke-display/dad-joke-display.component';
import {DadJokeService} from './service/dad-joke.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DadJokeRequestComponent,
    DadJokeDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DadJokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
