import { Component, ElementRef, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { CartService } from '../../services/cart-service.service';
@Component({
  selector: 'app-cart-item',
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent implements OnDestroy {
  @Input() meal: any;
  // quantity: number = 1;

  constructor(private cartService: CartService, private el: ElementRef) {}

  removeItem(id: string) {
    // Play exit animation BEFORE removing item
    gsap.to(this.el.nativeElement, {
      opacity: 0,
      y:20,
      duration: 0.6,
      ease: 'power2.in',
      onComplete: () => {
        this.cartService.removeFromCart(id);
        console.log(`Removed item with id ${id} from cart!`);
      },
    });
  }

  increamentQuantity() {
    if (!this.meal) {
      console.error('Meal is undefined!');
      return;
    }
    this.cartService.increamentQuantity(this.meal.id);
    console.log(`Increased Quantity of ${this.meal.title} in cart!`);
  }
  decreamentQuantity() {
    if (!this.meal) {
      console.error('Meal is undefined!');
      return;
    }
    this.cartService.decreamentQuantity(this.meal.id);
    console.log(`decreased quantity of ${this.meal.title} in cart!`);
  }
  ngOnDestroy() {
      return new Promise((resolve) => {
        gsap.to(this.el.nativeElement, { opacity: 0, y: 20, duration: 0.5, onComplete: resolve });
      });
    }
  }

