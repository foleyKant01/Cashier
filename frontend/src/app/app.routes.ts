import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from '../app/auth/auth.component';
import { UserComponent } from './user/user.component';
import { SellingPageComponent } from './user/selling-page/selling-page.component';
import { AppComponent } from './app.component';

// import { ProductManagementComponent } from './product-management/product-management.component';

export const routes: Routes = [
// <<<<<<< HEAD
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
// =======
  { path:'', component: AppComponent,
    children: [
      {path: '', redirectTo: 'auth', pathMatch: 'full' },
      {path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule)},
      {path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)},
      {path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)},
>>>>>>> 395257783d8a62c474f22e1e5fe69fa256fe7e76

      // { path: '**', component: NotfoundComponent }
      ]
  }
];
