import { Component, OnInit } from '@angular/core';
import { BookserviceService,Book } from './../../services/bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  
})
export class BooksComponent implements OnInit {
 
  books:Book[]=[];
  constructor( private _booksService:BookserviceService, private router:Router) { 
  
       
  }

  ngOnInit() {
    this._booksService.getBooks().subscribe(resp =>{ 
      console.log("Me estoy llamando");
      console.log(resp) 
      this.books = resp;
    
    })
       
  
  }

  seeBook(idx:number){
    this.router.navigate(['/book',idx ]);
  }


}

