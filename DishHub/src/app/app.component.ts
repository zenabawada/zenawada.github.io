import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RouterLink, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipeSearchComponent, RouterLink, RouterModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dish Hub';
}
