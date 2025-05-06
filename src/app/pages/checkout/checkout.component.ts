declare var PaystackPop: any; // Declare Paystack global object
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service.service';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { Angular4PaystackModule } from 'angular8-paystack';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [
    RouterModule,
    CommonModule,
    CartItemComponent,
    Angular4PaystackModule,
    FormsModule,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  cartItems: any[] = [];
  totalPrice: any;
  apiKey= import.meta.env['NG_APP_API_KEY'];
  reference: any;
  email: string = '';
  constructor(private cartService: CartService) {}
  bottomReached: boolean = false;

  ngOnInit() {
    this.cartService.cart$.subscribe((cart) => {
      this.cartItems = cart;

      this.totalPrice = this.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    });
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
 
  }
  updateEmail(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }
  removeItem(id: string) {
    this.cartService.removeFromCart(id);
    console.log(`Removed item with id ${id} from cart!`);
  }
  decreamentItem(id: string) {
    this.cartService.decreamentQuantity(id);
    console.log(`decreased quantity of item with id ${id} from cart!`);
  }
  increamentItem(id: string) {
    this.cartService.increamentQuantity(id);
    console.log(`increased quantity of item with id ${id} from cart!`);
  }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    console.log('Payment successful', ref);
  }

  paymentCancel() {
    console.log('Payment failed or canceled');
  }

  payWithPaystack() {
    let handler = PaystackPop.setup({
      key: this.apiKey,
      email: this.email,
      amount: this.totalPrice * 100, // Convert to kobo
      currency: 'NGN',
      ref: `ref-${Math.ceil(Math.random() * 10e13)}`, // Generate unique reference
      callback: (response: any) => {
        console.log('Payment successful', response);
        this.cartService.clearCart()
        alert(
          'Payment successful! Transaction reference: ' + response.reference
        );
          window.location.href = '/';
      },
      onClose: () => {
        console.log('Payment window closed');
        alert('Payment canceled');
      },
    });

    handler.openIframe(); // Open Paystack payment modal
  }
}
