import { Component, OnDestroy, OnInit } from '@angular/core';
import { EdamamService } from '../edamam.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Subject, finalize, takeUntil, tap, timeout } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Recipe } from '../recipe';


@Component({
  selector: 'app-recipe-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, NgxSkeletonLoaderModule, HttpClientModule],
  templateUrl: './recipe-search.component.html',
  styleUrl: './recipe-search.component.scss',
  providers: [EdamamService]
})


export class RecipeSearchComponent implements OnInit, OnDestroy {
  query: string = '';
  recipesList: any[] = [];
  isVeganMap: {[key: string]: boolean} = {};
  items: any[] = [];
  isLoading: boolean = true;
  private unsubscribe$ = new Subject();

  constructor(private edamamService: EdamamService) { }

  ngOnInit(): void {
    this.calculateIsVegan();
    this.startBackgroundTask();
    this.initializeItems();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next([]);
    this.unsubscribe$.complete();
  }

  // Start skeleton items
  initializeItems(): void {
    for (let i = 0; i < 10; i++) {
      this.items.push(i);
    }
  }

  async startBackgroundTask(): Promise<void> {
    try {
      await this.delay(1000); // Delay for 2 seconds
      this.getRecipes('balanced');
    } catch (error) {
      console.error('Error during background task:', error);
    }
  }

  async getRecipes(dietType: string = ''): Promise<void> {
    try {
      const data = await this.edamamService.searchRecipes(this.query, dietType).toPromise();
      if (data && data.hits) {
        this.recipesList = data.hits;
        this.edamamService.setRecipesList(data.hits);    
        this.calculateIsVegan();
      } else {
        console.error('Hits not found in the response data.');
      }
    } catch (error) {
      console.error('Error fetching recipes', error);
    } finally {
      this.isLoading = false;
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // ngOnInit(): void {    
  //   // this.items = Array.from({length: 10});   
  //   setTimeout(() => {
  //     console.log("after 5 seconds???"); 
      
  //     this.getRecipes('balanced');
  //     // this.calculateIsVegan();
  //   }, 2000);
  // }
  

  // getRecipes(dietType: string = '') {    
  //   this.edamamService.searchRecipes(this.query, dietType).subscribe(        
  //     (data: any) => {             
  //       if (data && data.hits) {
  //         console.log(data.hits);
  //         this.edamamService.setRecipesList(data.hits);          
  //         this.recipesList = this.edamamService.recipesList;
  //         this.calculateIsVegan();
  //       } else {
  //         console.error('Hits not found in the response data.');
  //       }
  //     },
  //     (error) => {
  //       console.error('Error fetching recipes', error);
  //     }
  //   );    
  // }



  // private getRecipes(dietType: string = '') {
  //   this.edamamService.searchRecipes(this.query, dietType).pipe(
  //     tap({
        
  //       next: (data) => {
          
  //         if (data && data.hits) {

  //             console.log(data.hits);
  //             this.edamamService.setRecipesList(data.hits);
  //             this.recipesList = data.hits;
  //             // this.calculateIsVegan();

  //          }
  //       },
  //       error: (error) => alert(error),
        
  //     }),
  //     finalize(() => this.isLoading = false),
  //     takeUntil(this.unsubscribe$)).subscribe();
  // }

  calculateIsVegan() {
    this.recipesList.forEach((recipe) => {
      this.isVeganMap[recipe.recipe.label] = this.isVegan(recipe);
      // console.log('Recipe:', recipe.recipe.label, 'IsVegan:', this.isVeganMap[recipe.recipe.label]);
    })
  }

  isVegan(recipe: any): boolean {
    return recipe?.recipe?.healthLabels?.includes('Vegetarian');
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

  saveFavorite(e: MouseEvent, recipe: any) {
    e.preventDefault();
    e.stopPropagation();
    console.log(`${recipe?.recipe?.label} has been favorited.`);
  }

}
