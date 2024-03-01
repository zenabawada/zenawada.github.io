import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRecipeComponent } from '../food-recipe/food-recipe.component';
import { FoodRecipe } from '../foodrecipe';
import { FoodRecipesService } from '../food-recipes.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FoodRecipeComponent],
  template: `
    <section>
    <form>
      <input type="text" placeholder="Filter by recipe">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-food-recipe *ngFor="let foodRecipe of foodRecipeList" [foodRecipe]= "foodRecipe"></app-food-recipe>
  </section>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  foodRecipeList: FoodRecipe[] = [];
  foodRecipesService: FoodRecipesService = inject(FoodRecipesService);

  constructor() {
    this.foodRecipeList = this.foodRecipesService.getAllFoodRecipes();
  }
}
