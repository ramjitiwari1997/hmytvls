import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isclicked=false;
  menuImage="hamberger.svg"
  constructor() { }

  ngOnInit() {
  }
  hamClick(){
    this.isclicked=!this.isclicked;
  }

}
