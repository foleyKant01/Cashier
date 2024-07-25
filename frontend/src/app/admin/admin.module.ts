import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MyServiceService } from '../my-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';
import { routes } from '../app.routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    RouterModule.forChild(routes)

  ],
  providers: [
    MyServiceService // Ajoutez BackService aux providers
  ]
})

export class AdminModule { }
