import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart-service.service';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
@Component({
  selector: 'app-checkout',
  imports: [RouterModule, FooterComponent, CommonModule, CartItemComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {

  cartItems: any[] = [];
  totalPrice: any;
  

  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.cartService.cart$.subscribe((cart) => {
      this.cartItems = cart;
  
          this.totalPrice = this.cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );
    })

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
}
