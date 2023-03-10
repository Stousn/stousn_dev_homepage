import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  showNav = false;

  constructor() { }

  ngOnInit() {

    window.scrollTo(0, 0);
  }

}
