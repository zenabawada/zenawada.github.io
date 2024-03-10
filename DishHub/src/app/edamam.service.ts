import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EdamamService {
  private apiUrlBase = 'https://api.edamam.com/search?app_id=ec56812c&app_key=73e40813c042d5e47f06179411dafc87';
  recipesList: any[] = [];
  selectedRecipe: any[] = [];
  selectedRecipeUrl: string = '';

  constructor(private http: HttpClient) { }

  searchRecipes(query: string, dietType: string): Observable<any> {
    let apiUrl = `${this.apiUrlBase}&q=${query}`;
    if (dietType) {
      apiUrl += `&diet=${dietType}`
    }
    return this.http.get<any[]>(apiUrl);
  }

  getRecipeByUrl(label: string) {
    return this.recipesList.find(recipe => recipe.label === label);
  }

  // getHousingLocationById(id: number) {
  //   return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  // }

  getSelectedRecipe(label: string) {
    let apiUrl = `${this.apiUrlBase}&q=${label}`;
    return this.http.get<any[]>(apiUrl);
  }

  setRecipesList(recipes: any[]) {
    this.recipesList = recipes;
  }

  getRecipesList() {
    return this.recipesList;
  }
}
