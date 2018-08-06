import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent }from './/components/book/book.component';
import { NewbookComponent } from './components/newbook/newbook.component';


const APP_ROUTES:Routes = [
    { path:'home', component: HomeComponent },
    { path:'about', component: AboutComponent },
    { path:'books',component:BooksComponent},
    {path:'book/:id',component:BookComponent},
    {path:'newbook',component:NewbookComponent},
    { path:'**',pathMatch:'full',redirectTo:'home'},
    

    

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{ useHash:true});
//con hast
