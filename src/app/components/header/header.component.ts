import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { HamburgerIconComponent } from '../../hamburger-icon/hamburger-icon.component';
import { signal } from '@angular/core';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, HamburgerIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router, private cartService: CartService) {}
  addedItems: number = 0;
  ngOnInit() {
    this.cartService.cart$.subscribe((cart) => {
      this.addedItems = cart.length; // Updates whenever cart changes
    });
  }
  headerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  isScrolled: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }
  isActive(route: string): boolean {
    return this.router.url === route;
  }
  isOpen = signal<boolean>(false);

  toggleMenu: () => void = () => {
    this.isOpen.set(!this.isOpen());
    console.log('Hamburger icon clicked!', this.isOpen());
  };
}
