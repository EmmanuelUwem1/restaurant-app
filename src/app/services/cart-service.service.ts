import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root', // Makes it globally available
})
export class CartService {
  private cartKey = 'carmshsbdhfbshfsb';
  private cartSubject = new BehaviorSubject<any[]>(this.getCart());
  cart$ = this.cartSubject.asObservable();

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
  increamentQuantity(mealId: string) {
    const existingItem = this.getCart().find((item) => item.id === mealId);
    if (existingItem) {
      existingItem.quantity += 1; // Increment quantity
      this.updateCart(this.getCart()); // Update cart in local storage
    }
  }
  decreamentQuantity(mealId: string) {
    const existingItem = this.getCart().find((item) => item.id === mealId);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1; // Decrement quantity
      this.updateCart(this.getCart()); // Update cart in local storage
    } else if (existingItem && existingItem.quantity === 1) {
      this.removeFromCart(mealId); // Remove item if quantity is 1
    }
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

  getUniqueItemCount(): number {
    const cart = this.getCart(); // Retrieve cart items from local storage
    return cart.length; // Number of unique items
  }

  // Update cart in local storage
  private updateCart(cart: any[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    this.cartSubject.next(cart);
  }
}
