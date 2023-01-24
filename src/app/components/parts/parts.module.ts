import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PART_ROUTES } from './parts.routes';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PartEditComponent } from './parts-edit/part-edit.component';
import { PartSearchComponent } from 'src/app/components/parts/parts-search/parts-search.component';
import { PartCardComponent } from 'src/app/components/parts/parts-card/part-card.component';


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(PART_ROUTES),
    ],

    declarations: [
      PartSearchComponent,
      PartCardComponent,
      PartEditComponent
    ],

    providers: [],

    exports: [
      PartSearchComponent,
      ReactiveFormsModule
    ]

  })
export class PartModule { }