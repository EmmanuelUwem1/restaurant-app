import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() item: any;
  @Input() removeItem: (item: any) => void = () => {
    console.log('removeItem function not provided');
  };
  @Input() updateQuantity: (item: any, quantity: number) => void = () => {
    console.log('updateQuantity function not provided');
  }
  @Input() increaseQuantity: (item: any) => void = () => {
    console.log('increaseQuantity function not provided');
  };


}
