import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  FontAwesomeModule ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
