import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ReposComponent } from './repos/repos.component';
import { FormsModule } from '@angular/forms';
import {   HttpClientModule  }  from  '@angular/common/http';
import { DisplayDirective } from './display.directive';
import { TimePipe } from './time.pipe'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReposComponent,
    DisplayDirective,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
