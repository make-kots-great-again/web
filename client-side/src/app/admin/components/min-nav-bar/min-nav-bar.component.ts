import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-nav-bar',
  templateUrl: './min-nav-bar.component.html',
  styleUrls: ['./min-nav-bar.component.css']
})
export class MinNavBArComponent implements OnInit {

  click : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  clicked(){
   return (this.click) ? this.click = false: this.click = true;
  }

}
