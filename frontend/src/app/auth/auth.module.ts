import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyServiceService } from '../my-service.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule
    // ReactiveFormsModule,
    // BrowserModule,
    // FormsModule,

  ],
  providers: [
    MyServiceService // Ajoutez BackService aux providers
  ]
})
export class AuthModule { }
