import { Component, OnInit } from '@angular/core';
import { BookserviceService,Book } from './../../services/bookservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor( private x:BookserviceService) {  }

  ngOnInit() {
  }

}
