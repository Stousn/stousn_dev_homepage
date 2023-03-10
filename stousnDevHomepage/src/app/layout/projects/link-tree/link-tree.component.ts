import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-tree',
  templateUrl: './link-tree.component.html',
  styleUrls: ['./link-tree.component.css']
})
export class LinkTreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    window.scrollTo(0, 0);
  }

}
