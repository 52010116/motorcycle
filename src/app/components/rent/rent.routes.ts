import { Routes } from '@angular/router';

import { RentSearchComponent } from './rent-search/rent-search.component';
import { RentRequestComponent } from './rent-request/rent-request.component';
import { RentUpdateComponent } from './rent-update/rent-update.component';

export const RENT_ROUTES: Routes = [
  {
      path: "Rent",
      component: RentSearchComponent

  },
  {
    path: "Rent-request",
    component: RentRequestComponent

  },
  {
    path: "Rent-update",
    component: RentUpdateComponent
  },
];
