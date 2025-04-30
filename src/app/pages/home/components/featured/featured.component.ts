import { Component } from '@angular/core';
import { MealcardComponent } from "../../../../components/mealcard/mealcard.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured',
  imports: [MealcardComponent, CommonModule, RouterModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {
  featuredMeals = [
    {title:"Jollof Rice", price:"2000", imageUrl:"/meal-1.png"},
    {title:"Fries", price:"3000", imageUrl:"meal-2.png"},
    {title:"Fried Rice", price:"3500", imageUrl:"meal-3.png"},
    {title:"Grilled Fish", price:"2000", imageUrl:"meal-4.png"},
    
  ]
}
