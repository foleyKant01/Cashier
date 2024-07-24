import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from '../app/auth/auth.component';
import { UserComponent } from './user/user.component';
import { SellingPageComponent } from './user/selling-page/selling-page.component';

// import { ProductManagementComponent } from './product-management/product-management.component';

export const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent },
    // { path: 'selling-page', component: SellingPageComponent },

    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('../app/auth/auth.component').then( m => m.AuthComponent)
      },
      {
        path: 'user',
        loadChildren: () => import('../app/user/user.component').then( m => m.UserComponent)
      },

];
