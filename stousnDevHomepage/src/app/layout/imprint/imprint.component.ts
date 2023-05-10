import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';

@Component({
    selector: 'app-imprint',
    templateUrl: './imprint.component.html',
    styleUrls: ['./imprint.component.css']
})
export class ImprintComponent implements OnInit {
    public isDarkTheme: boolean;

    constructor(private readonly globals: Globals) {}

    ngOnInit() {
        this.globals.darkTheme$.subscribe((dark) => (this.isDarkTheme = dark));
    }
}
