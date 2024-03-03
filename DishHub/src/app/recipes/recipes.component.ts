import { Component } from '@angular/core';
import { Recipe } from '../recipe';
import { CommonModule, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { RECIPES } from '../recipes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {  
  // recipes = RECIPES;
  // selectedRecipe?: Recipe;
  // onSelect(recipe: Recipe): void {
  //   this.selectedRecipe = recipe;
  // }

}
