export interface FoodRecipe {
    id: number;
    name: string;
    photo: string;
    author: string;
    cuisine: string;
    ingredients: string[];
    cookingTime: string;
    difficultyLevel: string;
    servingSize: number;
  }