import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mealcard',
  imports: [CommonModule],
  templateUrl: './mealcard.component.html',
  styleUrl: './mealcard.component.css'
})
export class MealcardComponent {
  @Input() meal: any;
}
