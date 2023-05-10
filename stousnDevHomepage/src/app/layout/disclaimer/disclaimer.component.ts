import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';

@Component({
    selector: 'app-disclaimer',
    templateUrl: './disclaimer.component.html',
    styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {
    public isDarkTheme: boolean;

    constructor(private readonly globals: Globals) {}

    ngOnInit() {
        this.globals.darkTheme$.subscribe((dark) => (this.isDarkTheme = dark));
    }
}
