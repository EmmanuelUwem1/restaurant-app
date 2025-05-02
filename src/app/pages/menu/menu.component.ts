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
    { title: 'Jollof Rice', price: '2000', imageUrl: '/meal-1.png', id: "1"},
    { title: 'Fries', price: '3000', imageUrl: '/meal-2.png', id: "2"},
    { title: 'Fried Rice', price: '3500', imageUrl: '/meal-3.png', id: "3"},
    { title: 'Grilled Fish', price: '2000', imageUrl: '/meal-4.png', id: "4"},
    { title: 'Jollof Rice', price: '2000', imageUrl: '/meal-1.png', id: "5"},
    { title: 'Fries', price: '3000', imageUrl: '/meal-2.png' , id: "6"},
    { title: 'Fried Rice', price: '3500', imageUrl: '/meal-3.png', id: "7"},
    { title: 'Grilled Fish', price: '2000', imageUrl: '/meal-4.png', id: "8"},
    { title: 'Jollof Rice', price: '2000', imageUrl: '/meal-1.png', id: "9"},
    { title: 'Fries', price: '3000', imageUrl: '/meal-2.png' , id: "10" },
    { title: 'Fried Rice', price: '3500', imageUrl: '/meal-3.png', id: "11" },
    { title: 'Grilled Fish', price: '2000', imageUrl: '/meal-4.png' , id: "12" },
  ]);

}
