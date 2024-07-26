import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdHomeComponent } from './ad-home/ad-home.component';
import { CreateCashierComponent } from '../cashier/create-cashier/create-cashier.component';
import { AllCashierComponent } from '../cashier/all-cashier/all-cashier.component';
import { CreateCategoryComponent } from '../category/create-category/create-category.component';
import { AllCategoryComponent } from '../category/all-category/all-category.component';
import { CreateProductComponent } from '../product/create-product/create-product.component';
import { AllProductComponent } from '../product/all-product/all-product.component';

const routes: Routes = [
  { path:'', component: AdminComponent,
    children: [
      { path:'', redirectTo:'ad-home', pathMatch:'full' },
      { path:'ad-home', component: AdHomeComponent },
      { path:'create-cashier', component: CreateCashierComponent },
      { path:'all-cashier', component: AllCashierComponent },
      { path:'create-category', component: CreateCategoryComponent },
      { path:'all-category', component: AllCategoryComponent },
      { path:'create-product', component: CreateProductComponent },
      { path:'all-product', component: AllProductComponent },
      { path:'settings', loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
