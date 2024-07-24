import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { AllProductComponent } from './all-product/all-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  { path:'', component: ProductComponent,
    children: [
      { path:'', redirectTo:'create-product', pathMatch:'full' },
      { path:'all-product', component: AllProductComponent },
      { path:'create-product', component: CreateProductComponent },
      { path:'delete-product', component: DeleteProductComponent },
      { path:'edit-product', component: EditProductComponent },
      { path:'single-product', component: SingleProductComponent },

      // { path: '**', component: NotfoundComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
