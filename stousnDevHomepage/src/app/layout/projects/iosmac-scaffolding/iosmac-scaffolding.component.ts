import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iosmac-scaffolding',
  templateUrl: './iosmac-scaffolding.component.html',
  styleUrls: ['./iosmac-scaffolding.component.css']
})
export class IosmacScaffoldingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    window.scrollTo(0, 0);
  }

}
