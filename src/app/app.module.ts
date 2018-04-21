import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from  'angular2-fontawesome/angular2-fontawesome'

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GetBgService } from './services/get-bg.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    Angular2FontawesomeModule,
    HttpClientModule
  ],
  providers: [GetBgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
