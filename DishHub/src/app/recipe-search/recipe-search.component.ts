import { Component, OnInit } from '@angular/core';
import { EdamamService } from '../edamam.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-search',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './recipe-search.component.html',
  styleUrl: './recipe-search.component.scss'
})
export class RecipeSearchComponent implements OnInit {
  recipes: any[] = [];
  query: string = '';

  constructor(private edamameService: EdamamService) { }

  ngOnInit(): void {
    this.getRecipes('balanced');
  }

  getRecipes(dietType: string = '') {    
      this.edamameService.searchRecipes(this.query, dietType).subscribe(        
        (data) => {
          console.log('Data:', data);
          this.recipes = data.hits;
        },
        (error) => {
          console.error('Error fetching recipes', error);
        })    
  }

  searchRecipes() {
    if (this.query != '') {
      this.getRecipes();
    } else if (this.query === '') {
      this.getRecipes('balanced');
    }
  }
}
