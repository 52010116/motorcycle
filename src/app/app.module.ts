import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';
import { APP_ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { RentSearchComponent } from './components/rent-search/rent-search.component';
import { RentCardComponent } from './components/rent-card/rent-card.component';
import { RentEditComponent } from './components/rent-edit/rent-edit.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    RentSearchComponent,
    RentCardComponent,
    RentEditComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
