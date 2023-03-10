import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.css']
})
export class ShortcutsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    window.scrollTo(0, 0);
  }

}
