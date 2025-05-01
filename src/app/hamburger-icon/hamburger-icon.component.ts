import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hamburger-icon',
  imports: [CommonModule],
  templateUrl: './hamburger-icon.component.html',
  styleUrl: './hamburger-icon.component.css'
})
export class HamburgerIconComponent {
  @Input() isOpen: boolean = false;
  @Input() toggleMenu: () => void = () => {
    console.log('toggleMenu function not provided');
  }
}