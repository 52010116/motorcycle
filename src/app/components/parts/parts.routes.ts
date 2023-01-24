import { Routes } from '@angular/router';

import {PartSearchComponent} from './parts-search/parts-search.component';


export const PART_ROUTES: Routes = [
  {
      path: "Parts",
      component: PartSearchComponent
  }
];
