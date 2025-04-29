import { Component } from '@angular/core';
import { MealcardComponent } from '../../../../components/mealcard/mealcard.component';

@Component({
  selector: 'app-hero',
  imports: [MealcardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
