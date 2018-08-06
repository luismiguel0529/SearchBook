import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-targetbook',
  templateUrl: './targetbook.component.html',
 
})
export class TargetbookComponent implements OnInit {
  

  @Input() book:any ={};
  constructor(private router:Router) { }
  @Input() index:number;
  ngOnInit() {
  }

  seeBook(){
    console.log(this.index);
    this.router.navigate(['/book',this.index ]);
  }
}
