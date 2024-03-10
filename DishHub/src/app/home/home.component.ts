import { Component } from '@angular/core';
import { RecipeSearchComponent } from '../recipe-search/recipe-search.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeSearchComponent, RouterOutlet, RouterLink, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
