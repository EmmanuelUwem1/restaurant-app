import {
  Component,
  ElementRef,
  OnDestroy,
  Input,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent implements OnDestroy, AfterViewInit {
  @Input() meal: any;
  private mm = gsap.matchMedia(); // Initialize GSAP matchMedia

  constructor(private cartService: CartService, private el: ElementRef) {}

  ngAfterViewInit() {
    // Define initial animations based on screen size
    this.mm.add('(max-width: 768px)', () => {
      gsap.to(this.el.nativeElement, {
        opacity: 1,
        duration: 0.8,
        ease: 'power1.out',
      });
    });

    this.mm.add('(min-width: 769px)', () => {
      gsap.to(this.el.nativeElement, {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    });
  }

  removeItem(id: string) {
    // Responsive animation when removing an item
    this.mm.add('(max-width: 768px)', () => {
      gsap.to(this.el.nativeElement, {
        opacity: 0,
        x: -30,
        duration: 0.5,
        ease: 'power1.in',
        onComplete: () => this.cartService.removeFromCart(id),
      });
    });

    this.mm.add('(min-width: 769px)', () => {
      gsap.to(this.el.nativeElement, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power2.in',
        onComplete: () => this.cartService.removeFromCart(id),
      });
    });
  }

  increamentQuantity() {
    if (!this.meal) {
      console.error('Meal is undefined!');
      return;
    }
    this.cartService.increamentQuantity(this.meal.id);
    console.log(`Increased quantity of ${this.meal.title} in cart!`);
  }

  decreamentQuantity() {
    if (!this.meal) {
      console.error('Meal is undefined!');
      return;
    }
    this.cartService.decreamentQuantity(this.meal.id);
    console.log(`Decreased quantity of ${this.meal.title} in cart!`);
  }

  ngOnDestroy() {
    return new Promise((resolve) => {
      gsap.to(this.el.nativeElement, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        onComplete: resolve,
      });
    });
  }
}
