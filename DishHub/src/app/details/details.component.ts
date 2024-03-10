import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EdamamService } from '../edamam.service'; 

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  edamamRoute: EdamamService = inject(EdamamService);
  recipeLabel: string;
  recipes: any;
  selectedRecipe: any;

  constructor(private edamamService: EdamamService) {
    this.recipeLabel = this.route.snapshot.params['label'];

    // this.recipes = this.edamamRoute.getRecipesList();
    this.edamamService.getSelectedRecipe(this.recipeLabel).subscribe(        
      (data: any) => {
        if (data && data.hits) {            
          const allRecipes = data.hits;

          // Find recipe that matches label
          this.selectedRecipe = allRecipes.find((recipe: any) => recipe.recipe.label === this.recipeLabel);            

        } else {
          console.error('Hits not found in the response data.');
        }
      },
      (error) => {
        console.error('Error fetching recipes', error);
      }
    ); 
  }
}
