import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.scss'
})
export class ProductManagementComponent {
  displayValue: string = '0';
  netToPay: number = 0;
  receivedAmount: number = 0;
  change: number = 0;

  appendNumber(number: number): void {
    if (this.displayValue === '0') {
      this.displayValue = number.toString();
    } else {
      this.displayValue += number.toString();
    }
  }

  deleteNumber(): void {
    this.displayValue = this.displayValue.slice(0, -1) || '0';
  }

  calculateTotal(): void {
    this.netToPay = parseFloat(this.displayValue);
    this.updateChange();
  }

  updateReceived(event: any): void {
    this.receivedAmount = parseFloat(event.target.value) || 0;
    this.updateChange();
  }

  updateChange(): void {
    this.change = this.receivedAmount - this.netToPay;
  }

  printInvoice(): void {
    console.log('Printing invoice...');
    // Implement print logic here
  }
}
