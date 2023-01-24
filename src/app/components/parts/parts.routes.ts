import { Routes } from '@angular/router';
import { PartEditComponent } from './parts-edit/part-edit.component';
import {PartSearchComponent} from './parts-search/parts-search.component';


export const PART_ROUTES: Routes = [
  {
      path: "Parts",
      component: PartSearchComponent
  },
  {
    path: "part-edit",
    component: PartEditComponent
  }
];
