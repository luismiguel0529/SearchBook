import { Component, OnInit } from '@angular/core';
import { BookserviceService } from './../../services/bookservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  
})
export class BookComponent {

  book:any={};
  constructor(private _bookService:BookserviceService, private activeRoute:ActivatedRoute ,private router:Router) { 

  }

  ngOnInit() {
      this.activeRoute.params.subscribe(params =>{
       
      this._bookService.getBook(params.id).subscribe(res => {
        this.book = res;
        console.log(this.book);
      })
       } )
       
  }
deleteBook(idx){

  this.activeRoute.params.subscribe(params =>{

  this._bookService.deletebook(params.id).subscribe(resp => {

    this.book = resp;

  })
})
  
}
seeBook(idx:number){
  this.router.navigate(['/book',idx ]);
}
}
