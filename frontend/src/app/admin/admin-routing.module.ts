import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', component: AdminComponent,
    children: [
      { path:'', redirectTo:'login', pathMatch:'full' },
      { path:'home', component: HomeComponent },

      // { path: '**', component: NotfoundComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
