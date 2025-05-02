import { Component } from '@angular/core';
import { MealcardComponent } from '../../components/mealcard/mealcard.component';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-menu',
  imports: [MealcardComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  meals: any;

  constructor(private dataService: DataServiceService) {
    this.meals = this.dataService.getMeals(); 
  }
}
