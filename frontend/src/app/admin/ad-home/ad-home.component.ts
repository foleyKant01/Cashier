import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ad-home',
  standalone: true,
  imports: [],
  templateUrl: './ad-home.component.html',
  styleUrl: './ad-home.component.scss'
})
export class AdHomeComponent {
  currentYear: number = new Date().getFullYear();

  private showAlert(title: string, target: string) {
    // Ajouter la classe de flou
    document.body.classList.add('blur-background');

    Swal.fire({
      toast: true,
      position: "center",
      icon: "success",
      title: title,
      showConfirmButton: false,
      timer: 1500,
      target: `${target} .modal-content`,
      customClass: {
      container: 'position-absolute'
      },
      didClose: () => {
        // Retirer la classe de flou lorsque l'alerte se ferme
        document.body.classList.remove('blur-background');
      }
    });
  }
  
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
