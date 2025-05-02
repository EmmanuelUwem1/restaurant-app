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
    if (typeof window !== 'undefined' && localStorage) {
      return JSON.parse(localStorage.getItem(this.cartKey) || '[]');
    }
    return []; // Return empty array if localStorage is not available
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
    let cart = this.getCart(); 
    const existingItem = cart.find((item) => item.id === mealId);

    if (existingItem) {
      existingItem.quantity += 1;
    }

    this.updateCart(cart); 
  }

  decreamentQuantity(mealId: string) {
    let cart = this.getCart();
    const existingItem = cart.find((item) => item.id === mealId);

    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else if (existingItem && existingItem.quantity === 1) {
      cart = cart.filter((item) => item.id !== mealId);
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

  getUniqueItemCount(): number {
    const cart = this.getCart(); // Retrieve cart items from local storage
    return cart.length || 0; // Number of unique items
  }

  // Update cart in local storage
  private updateCart(cart: any[]) {
    if (typeof window !== 'undefined' || localStorage) {
      localStorage.setItem(this.cartKey, JSON.stringify(cart));
      this.cartSubject.next(cart);
    }
    return cart; // Return updated cart
  }
}
