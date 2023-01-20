import { Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { RentSearchComponent } from './components/rent-search/rent-search.component';
import { RentEditComponent } from './components/rent-edit/rent-edit.component';



export const APP_ROUTES: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'rent-search',
      component: RentSearchComponent
  },
  {
      path: 'rent-edit/:id',
      component: RentEditComponent
  },
];
