import { Component, signal } from '@angular/core';
import { MealcardComponent } from '../../components/mealcard/mealcard.component';
import { CommonModule } from '@angular/common';
import { Meal } from '../../models/product.model';

@Component({
  selector: 'app-menu',
  imports: [MealcardComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  meals = signal<Meal[]>([
    { title: 'Jollof Rice', price: '2000', imageUrl: '/meal-1.png' },
    { title: 'Fries', price: '3000', imageUrl: '/meal-2.png' },
    { title: 'Fried Rice', price: '3500', imageUrl: '/meal-3.png' },
    { title: 'Grilled Fish', price: '2000', imageUrl: '/meal-4.png' },
    { title: 'Jollof Rice', price: '2000', imageUrl: '/meal-1.png' },
    { title: 'Fries', price: '3000', imageUrl: '/meal-2.png' },
    { title: 'Fried Rice', price: '3500', imageUrl: '/meal-3.png' },
    { title: 'Grilled Fish', price: '2000', imageUrl: '/meal-4.png' },
    { title: 'Jollof Rice', price: '2000', imageUrl: '/meal-1.png' },
    { title: 'Fries', price: '3000', imageUrl: '/meal-2.png' },
    { title: 'Fried Rice', price: '3500', imageUrl: '/meal-3.png' },
    { title: 'Grilled Fish', price: '2000', imageUrl: '/meal-4.png' },
  ]);

}
