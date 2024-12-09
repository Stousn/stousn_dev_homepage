import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';

@Component({
    selector: 'app-error404',
    templateUrl: './error404.component.html',
    styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {
    public isDarkTheme?: boolean;

    constructor(private readonly globals: Globals) {}

    ngOnInit() {
        this.globals.darkTheme$.subscribe((dark) => (this.isDarkTheme = dark));
    }
}
