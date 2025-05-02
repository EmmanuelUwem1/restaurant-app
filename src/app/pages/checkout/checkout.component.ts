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

  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.cartService.cart$.subscribe((cart) => {
      this.cartItems = cart;
     
    })
  }
  
}
