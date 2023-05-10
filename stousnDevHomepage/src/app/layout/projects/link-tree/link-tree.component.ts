import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../globals';

@Component({
    selector: 'app-link-tree',
    templateUrl: './link-tree.component.html',
    styleUrls: ['./link-tree.component.css']
})
export class LinkTreeComponent implements OnInit {
    public isDarkTheme: boolean;

    constructor(private readonly globals: Globals) {}

    ngOnInit() {
        this.globals.darkTheme$.subscribe((dark) => (this.isDarkTheme = dark));
        window.scrollTo(0, 0);
    }
}
