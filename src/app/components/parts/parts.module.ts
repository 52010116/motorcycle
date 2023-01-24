import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PART_ROUTES } from './parts.routes';
import { FormsModule} from '@angular/forms';

import { PartSearchComponent } from 'src/app/components/parts/parts-search/parts-search.component';
import { PartCardComponent } from 'src/app/components/parts/parts-card/part-card.component';


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(PART_ROUTES),
    ],

    declarations: [
      PartSearchComponent,
      PartCardComponent,
    ],

    providers: [],

    exports: [
      PartSearchComponent
    ]

  })
export class PartModule { }