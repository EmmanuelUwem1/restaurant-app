import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meal } from '../../models/product.model';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-mealcard',
  imports: [CommonModule],
  templateUrl: './mealcard.component.html',
  styleUrl: './mealcard.component.css',
})
export class MealcardComponent {
  @Input() meal!: Meal;
  isInCart = false;
  cartItems: any[] = [];
  quantity: number = 1;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe((cart) => {
      this.cartItems = cart;
      this.isInCart = this.cartItems.some((item) => item.id === this.meal.id);
      const currentItem = this.cartItems.find(
        (item) => item.id === this.meal.id
      );
      this.quantity = currentItem.quantity;
    });
  }


  addToCart() {
    if (!this.meal) {
      console.error('Meal is undefined!');
      return;
    }
    this.cartService.addToCart(this.meal, 1);
    console.log(`Added ${this.meal.title} to cart!`);
  }
  increamentQuantity() {
    if (!this.meal) {
      console.error('Meal is undefined!');
      return;
    }
    this.cartService.increamentQuantity(this.meal.id);
    console.log(`Increased Quantity of ${this.meal.title} in cart! ${this.quantity}`);
  }
  decreamentQuantity() {
    if (!this.meal) {
      console.error('Meal is undefined!');
      return;
    }
    this.cartService.decreamentQuantity(this.meal.id);
    console.log(
      `decreased quantity of ${this.meal.title} in cart! ${this.quantity}`
    );
  }
 
}
