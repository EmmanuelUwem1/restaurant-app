import { Component } from '@angular/core';
import { MealcardComponent } from "../../../../components/mealcard/mealcard.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataServiceService } from '../../../../services/data-service.service';

@Component({
  selector: 'app-featured',
  imports: [MealcardComponent, CommonModule, RouterModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {
  featuredMeals: any;
  constructor(private dataService: DataServiceService) {
    this.featuredMeals = this.dataService.getMeals().slice(0, 4); // Get the first 4 meals as featured meals
  }
}