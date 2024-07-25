import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperadminComponent } from './superadmin.component';
import { HomeComponent } from './home/home.component';
import { CreateAdminComponent } from '../admin/create-admin/create-admin.component';
import { AllAdminComponent } from '../admin/all-admin/all-admin.component';
import { CreateCashierComponent } from '../cashier/create-cashier/create-cashier.component';
import { AllCashierComponent } from '../cashier/all-cashier/all-cashier.component';
import { CreateCategoryComponent } from '../category/create-category/create-category.component';
import { AllCategoryComponent } from '../category/all-category/all-category.component';
import { CreateProductComponent } from '../product/create-product/create-product.component';
import { AllProductComponent } from '../product/all-product/all-product.component';

const routes: Routes = [
  { path:'', component: SuperadminComponent,
    children: [
      { path:'', redirectTo:'home', pathMatch:'full' },
      { path:'home', component: HomeComponent },
      { path:'create-admin', component: CreateAdminComponent },
      { path:'all-admin', component: AllAdminComponent },
      { path:'create-cashier', component: CreateCashierComponent },
      { path:'all-cashier', component: AllCashierComponent },
      { path:'create-category', component: CreateCategoryComponent },
      { path:'all-category', component: AllCategoryComponent },
      { path:'create-product', component: CreateProductComponent },
      { path:'all-product', component: AllProductComponent },
      {path: 'settings', loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
