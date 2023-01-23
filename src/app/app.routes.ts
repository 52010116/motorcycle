import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';



export const APP_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];
