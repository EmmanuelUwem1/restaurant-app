import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Makes it globally available
})
export class CartService {
  private cartKey = 'cart_items';

  // Get cart items from local storage
  getCart(): any[] {
    return JSON.parse(localStorage.getItem(this.cartKey) || '[]');
  }

  // Add item to the cart
  addToCart(meal: any, quantity: number) {
    let cart = this.getCart();

    // Check if item already exists
    const existingItem = cart.find((item) => item.id === meal.id);
    if (existingItem) {
      existingItem.quantity += quantity; // Update quantity
    } else {
      cart.push({ ...meal, quantity }); // Add new item
    }

    this.updateCart(cart);
  }

  // Remove item from cart
  removeFromCart(mealId: string) {
    let cart = this.getCart().filter((item) => item.id !== mealId);
    this.updateCart(cart);
  }

  // Clear the cart
  clearCart() {
    localStorage.removeItem(this.cartKey);
  }

  // Update cart in local storage
  private updateCart(cart: any[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }
}
