import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
//Rutas
import { APP_ROUTING } from './app.routes';
//Servicios

//componentes

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { NewbookComponent } from './components/newbook/newbook.component';
import { TargetbookComponent } from './components/targetbook/targetbook.component';



@NgModule({
  declarations: [
    AppComponent,
   
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BooksComponent,
    BookComponent,
    NewbookComponent,
    TargetbookComponent,
   
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
