import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    showNav = false;

    public isDarkTheme: boolean;

    constructor(private readonly globals: Globals) {}

    ngOnInit() {
        this.globals.darkTheme$.subscribe((dark) => (this.isDarkTheme = dark));
        window.scrollTo(0, 0);
    }

    public toggleDarkMode() {
        this.globals.isDarkTheme = !this.globals.isDarkTheme;
    }
}
