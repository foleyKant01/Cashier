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
      toast: true,
      position: "center",
      icon: "success",
      title: "registered successfully",
      showConfirmButton: false,
      timer: 1500,
      target: '#UserModal .modal-content',
      customClass: {
      container: 'position-absolute'
    }
    });
  }

  onCLickCategorymodule(){
    Swal.fire({
      toast: true,
      position: "center",
      icon: "success",
      title: "Category Add successfully",
      showConfirmButton: false,
      timer: 1500,
      target: '#UserModal .modal-content',
      customClass: {
      container: 'position-absolute'
    }
    });
  }

  onCLickProductmodule(){
    Swal.fire({
      toast: true,
      position: "center",
      icon: "success",
      title: "Product Created successfully",
      showConfirmButton: false,
      timer: 1500,
      target: '#UserModal .modal-content',
      customClass: {
      container: 'position-absolute'
    }
    });
  }

  onCLickSuppliermodule(){
    Swal.fire({
      toast: true,
      position: "center",
      icon: "success",
      title: "Supplier Add successfully",
      showConfirmButton: false,
      timer: 1500,
      target: '#UserModal .modal-content',
      customClass: {
      container: 'position-absolute'
    }
    });
  }

  
}
