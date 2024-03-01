import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRecipe } from '../foodrecipe';

@Component({
  selector: 'app-food-recipe',
  standalone: true,
  imports: [],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="foodRecipe.photo" alt="Exterior photo of {{foodRecipe.name}}">
    <h2 class="listing-heading">{{ foodRecipe.name }}</h2>
    <p class="listing-location">{{ foodRecipe.author}}, {{foodRecipe.cuisine }}</p>
  </section>
  `,
  styleUrl: './food-recipe.component.scss'
})
export class FoodRecipeComponent {
  @Input() foodRecipe!: FoodRecipe;
}
