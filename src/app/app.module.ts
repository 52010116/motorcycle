
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';
import { APP_ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { RentModule } from './components/rent/rent.module';
import { HomeComponent } from './components/home/home.component';
import { PartModule } from './components/parts/parts.module';



@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RentModule,
    PartModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
