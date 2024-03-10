import { Component, OnInit } from '@angular/core';
import { EdamamService } from '../edamam.service';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink],
  templateUrl: './recipe-search.component.html',
  styleUrl: './recipe-search.component.scss'
})


export class RecipeSearchComponent implements OnInit {
  query: string = '';
  recipesList: any[] = [];
  isVeganMap: {[key: string]: boolean} = {};

  constructor(private edamamService: EdamamService) { 
    
  }

  ngOnInit(): void {
    this.getRecipes('balanced');
    this.calculateIsVegan();
  } 

  getRecipes(dietType: string = '') {    
    this.edamamService.searchRecipes(this.query, dietType).subscribe(        
      (data: any) => {
        if (data && data.hits) {
          this.edamamService.setRecipesList(data.hits);
          this.recipesList = this.edamamService.recipesList;
          // console.log(this.edamamService.getRecipesList());
          
        } else {
          console.error('Hits not found in the response data.');
        }
      },
      (error) => {
        console.error('Error fetching recipes', error);
      }
    );    
  }

  calculateIsVegan() {
    this.recipesList.forEach((recipe) => {
      this.isVeganMap[recipe.recipe.label] = this.isVegan(recipe);
      console.log('Recipe:', recipe.recipe.label, 'IsVegan:', this.isVeganMap[recipe.recipe.label]);
    })
  }

  isVegan(recipe: any): boolean {
    return recipe?.recipe?.tags?.includes('vegan');
  }

  trackByFn(index: number, item: any) {
    return item.recipe.label;
  }

  searchRecipes() {
    if (this.query != '') {
      this.getRecipes();
    } else {
      this.getRecipes('balanced');
    }
  }
}
