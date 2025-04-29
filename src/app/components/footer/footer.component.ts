import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
socialLinks = [
    { name: 'Facebook', iconUrl: '/facebook.png' },
    { name: 'Twitter', iconUrl: '/twitter.png' },
    { name: 'Instagram', iconUrl: '/instagram.png' },
    { name: 'Whatsapp', iconUrl: '/whatsapp.png' },
]
}
