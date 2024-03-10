// import { Routes } from '@angular/router';
// const routes: Routes = [];


import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

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
    }
  ];

export default routeConfig;
