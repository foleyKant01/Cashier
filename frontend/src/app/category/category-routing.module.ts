import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  { path:'', component: CategoryComponent,
    children: [
      { path:'', redirectTo:'login', pathMatch:'full' },
      { path:'all-category', component: CategoryComponent },
      { path:'create-category', component: CategoryComponent },
      { path:'delete-category', component: CategoryComponent },
      { path:'edit-category', component: CategoryComponent },
      { path:'single-category', component: CategoryComponent },

      // { path: '**', component: NotfoundComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
