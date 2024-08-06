import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashierComponent } from './cashier.component';
import { AllCashierComponent } from './all-cashier/all-cashier.component';
import { CreateCashierComponent } from './create-cashier/create-cashier.component';
import { DeleteCashierComponent } from './delete-cashier/delete-cashier.component';
import { EditCashierComponent } from './edit-cashier/edit-cashier.component';
import { SingleCashierComponent } from './single-cashier/single-cashier.component';
import { SellingPageComponent } from './selling-page/selling-page.component';

const routes: Routes = [
  { path:'', component: CashierComponent,
    children: [
      { path:'', redirectTo:'selling-page', pathMatch:'full' },
      { path:'all-cashier', component: AllCashierComponent },
      { path:'create-cashier', component: CreateCashierComponent },
      { path:'delete-cashier', component: DeleteCashierComponent },
      { path:'edit-cashier', component: EditCashierComponent },
      { path:'selling-page', component: SellingPageComponent },
      { path:'single-cashier', component: SingleCashierComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashierRoutingModule { }
