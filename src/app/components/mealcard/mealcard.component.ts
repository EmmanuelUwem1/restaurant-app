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
  @Input() meal!: Meal; // ✅ Input property

  constructor(private cartService: CartService) {}

  addToCart() {
    if (!this.meal) {
      console.error('Meal is undefined!');
      return;
    }
    this.cartService.addToCart(this.meal, 1); // ✅ Call method properly
    console.log(`Added ${this.meal.title} to cart!`);
  }
}
