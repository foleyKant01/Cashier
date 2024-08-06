import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentYear: number = new Date().getFullYear();

  onCLickRegistermodule(){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "registered successfully",
      showConfirmButton: false,
      timer: 1500
    });
  }

  onCLickCategorymodule(){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Category Add successfully",
      showConfirmButton: false,
      timer: 1500
    });
  }

  onCLickProductmodule(){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product Created successfully",
      showConfirmButton: false,
      timer: 1500
    });
  }

  onCLickSuppliermodule(){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Supplier Add successfully",
      showConfirmButton: false,
      timer: 1500
    });
  }

  
}
