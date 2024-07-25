import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AllAdminComponent } from './all-admin/all-admin.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { SingleAdminComponent } from './single-admin/single-admin.component';

const routes: Routes = [
  { path:'', component: AdminComponent,
    children: [
      { path:'', redirectTo:'create-admin', pathMatch:'full' },
      { path:'all-admin', component: AllAdminComponent },
      { path:'create-admin', component: CreateAdminComponent },
      { path:'delete-admin', component: DeleteAdminComponent },
      { path:'edit-admin', component: EditAdminComponent },
      { path:'single-admin', component: SingleAdminComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
