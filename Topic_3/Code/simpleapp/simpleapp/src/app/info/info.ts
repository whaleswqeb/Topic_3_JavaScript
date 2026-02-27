import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info',
 standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export default class Info {
 @Input() name: string = '';

  quantity: number = 1;

  products: string[] = [
    'Star Wars: A New Hope',
    'Star Wars: The Empire Strikes Back',
    'Star Wars: Return of the Jedi',
    'Star Wars: The Force Awakens',
    'Star Wars: The Last Jedi',
    'Star Wars: The Rise of Skywalker'
  ];

  selectedProduct: string = this.products[0];

  onSubmit() {
    console.log('Quantity:', this.quantity);
    console.log('Selected Product:', this.selectedProduct);

    alert(`Order placed!
Quantity: ${this.quantity}
Product: ${this.selectedProduct}`);
  }

  newInfo(form: any) {
    form.reset({
      quantity: 1,
      products: this.products[0]
    });
  }
}
