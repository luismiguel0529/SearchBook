import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  private header = new Headers({'Content-Type':'aplication/json'});
  constructor( private http:Http ) {
       

   }
   
   urlG = "https://fakerestapi.azurewebsites.net/api/books";

   getBooks(){
     let url = `${this.urlG}`;
     return this.http.get( url ).pipe( map( data => data.json() ) ) 
   }

   getBook(paramter:any){
      let url = `${this.urlG}/${paramter}`;
      return this.http.get ( url).pipe(map(data => data.json() ) )
   }
   deletebook(paramter){
    
       let url = `${this.urlG}/${paramter}`;
       return this.http.delete(url);
    
  }


   searchBook(termino:string){
        let bookArr:Book[] = [];
        termino.toLocaleLowerCase();
        
   }

  
  
}

export  interface Book{

  ID: number;
  Title: string;
  Description: string;
  PageCount: number;
  Excerpt: string;
  PublishDate:Date; 
  

}
