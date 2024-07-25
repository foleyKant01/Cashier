import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminRoutingModule } from './superadmin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class SuperadminModule { }
