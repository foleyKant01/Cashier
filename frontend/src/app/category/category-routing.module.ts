import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { AllCategoryComponent } from './all-category/all-category.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { SingleCategoryComponent } from './single-category/single-category.component';

const routes: Routes = [
  { path:'', component: CategoryComponent,
    children: [
      { path:'', redirectTo:'create-category', pathMatch:'full' },
      { path:'all-category', component: AllCategoryComponent },
      { path:'create-category', component: CreateCategoryComponent },
      { path:'delete-category', component: DeleteCategoryComponent },
      { path:'edit-category', component: EditCategoryComponent },
      { path:'single-category', component: SingleCategoryComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
