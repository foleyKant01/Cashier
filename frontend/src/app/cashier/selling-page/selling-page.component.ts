import { Component } from '@angular/core';

@Component({
  selector: 'app-selling-page',
  standalone: true,
  imports: [],
  templateUrl: './selling-page.component.html',
  styleUrl: './selling-page.component.scss'
})
export class SellingPageComponent {
  displayValue: string = '0';
  currentProduct: any = null;

  productList: any[] = [];

  addDigit(digit: number) {
    if (this.displayValue === '0') {
      this.displayValue = digit.toString();
    } else {
      this.displayValue += digit.toString();
    }
  }

  clear() {
    this.displayValue = '0';
  }

  remove() {
    if (this.displayValue.length > 1) {
      this.displayValue = this.displayValue.slice(0, -1);
    } else {
      this.displayValue = '0';
    }
  }

  validate() {
    if (this.currentProduct && this.displayValue !== '0') {
      const quantity = parseInt(this.displayValue, 10);
      
      // Vérifiez si le produit existe déjà dans la liste
      const existingProductIndex = this.productList.findIndex(p => p.id === this.currentProduct.id);
      
      if (existingProductIndex !== -1) {
        // Si le produit existe, mettez à jour sa quantité
        this.productList[existingProductIndex].quantity = quantity;
      } else {
        // Sinon, ajoutez le nouveau produit à la liste
        this.productList.push({
          ...this.currentProduct,
          quantity: quantity
        });
      }

      // Réinitialisez l'affichage et le produit courant
      this.displayValue = '0';
      this.currentProduct = null;

      // Vous pouvez ajouter ici une logique pour mettre à jour l'affichage du tableau
      this.updateProductTable();
    }
  }

  // Cette méthode serait appelée lorsqu'un produit est sélectionné dans l'interface
  selectProduct(product: any) {
    this.currentProduct = product;
    this.displayValue = '0';
  }

  // Méthode pour mettre à jour l'affichage du tableau des produits
  updateProductTable() {
    // Implémentez ici la logique pour mettre à jour votre tableau de produits
    // Cela dépendra de la façon dont vous avez structuré votre interface
    console.log('Product list updated:', this.productList);
  }
  
}
