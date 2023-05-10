import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public isDarkTheme: boolean;

    constructor(private readonly globals: Globals) {}

    ngOnInit() {
        this.globals.darkTheme$.subscribe((dark) => (this.isDarkTheme = dark));
    }
}
