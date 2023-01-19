import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { RentComponent } from './components/rent-search/rent-search.component';
//import { APP_ROUTES } from './app.routes';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    //RouterModule.forRoot(APP_ROUTES),
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    RentComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
