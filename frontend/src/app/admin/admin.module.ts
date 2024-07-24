import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MyServiceService } from '../my-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ],
  providers: [
    MyServiceService // Ajoutez BackService aux providers
  ]
})

export class AdminModule { }
