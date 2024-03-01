import { Injectable } from '@angular/core';
import { FoodRecipe } from './foodrecipe';

@Injectable({
  providedIn: 'root'
})
export class FoodRecipesService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  foodRecipeList: FoodRecipe[] = [
    {
      id: 1,
      name: 'Test Recipe 1',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      author: 'Test Author',
      cuisine: 'Lebanese',
      ingredients: [
        'Ingredient 1',
        'Ingredient 2',
        'Ingredient 3',
      ],
      cookingTime: '30 minutes',
      difficultyLevel: 'medium',
      servingSize: 4
    },
    {
      id: 2,
      name: 'Test Recipe 2',
      photo: `${this.baseUrl}/example-house.jpg`,
      author: 'Test Author',
      cuisine: 'Lebanese',
      ingredients: [
        'Ingredient 1',
        'Ingredient 2',
        'Ingredient 3',
      ],
      cookingTime: '30 minutes',
      difficultyLevel: 'medium',
      servingSize: 4
    },
    {
      id: 3,
      name: 'Test Recipe 3',
      photo: `${this.baseUrl}/example-house.jpg`,
      author: 'Test Author',
      cuisine: 'Lebanese',
      ingredients: [
        'Ingredient 1',
        'Ingredient 2',
        'Ingredient 3',
      ],
      cookingTime: '30 minutes',
      difficultyLevel: 'medium',
      servingSize: 4
    },
    {
      id: 4,
      name: 'Test Recipe 4',
      photo: `${this.baseUrl}/example-house.jpg`,
      author: 'Test Author',
      cuisine: 'Lebanese',
      ingredients: [
        'Ingredient 1',
        'Ingredient 2',
        'Ingredient 3',
      ],
      cookingTime: '30 minutes',
      difficultyLevel: 'medium',
      servingSize: 4
    },
  ];

  getAllFoodRecipes(): FoodRecipe[] {
    return this.foodRecipeList;
  }
  
  getFoodRecipeById(id: number): FoodRecipe | undefined {
    return this.foodRecipeList.find(foodRecipe => foodRecipe.id === id);
  }

  constructor() { }
}
