import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APPOINTMENT_ROUTES } from './appointment.routes';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppointmentSearchComponent } from './appointment-search/appointment-search.component';
import { AppointmentCardComponent } from './appointment-card/appointment-card.component';
import { AppointmentRequestComponent } from './appointment-edit/appointment-request.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(APPOINTMENT_ROUTES),
        BrowserModule,
        HttpClientModule,
    ],

    declarations: [
      AppointmentSearchComponent,
      AppointmentCardComponent,
      AppointmentRequestComponent
    ],

    providers: [],

    exports: [
      AppointmentSearchComponent
    ]

  })
export class AppointmentModule { }
