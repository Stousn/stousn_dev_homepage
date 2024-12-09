import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../globals';

@Component({
    selector: 'app-stousn-dev',
    templateUrl: './stousn-dev.component.html',
    styleUrls: ['./stousn-dev.component.css']
})
export class StousnDevComponent implements OnInit {
    public isDarkTheme: boolean;

    constructor(private readonly globals: Globals) {}

    ngOnInit() {
        this.globals.darkTheme$.subscribe((dark) => (this.isDarkTheme = dark));
        window.scrollTo(0, 0);
    }
}
