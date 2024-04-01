// import { Routes } from '@angular/router';
// const routes: Routes = [];


import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { AboutComponent } from './about/about.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'details/:label',
        component: DetailsComponent,
        title: 'Recipe details'
    },
    {
        path: 'cuisines',
        component: CuisinesComponent,
        title: 'Cuisines'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About'
    }
  ];

export default routeConfig;
