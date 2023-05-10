import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../globals';

@Component({
    selector: 'app-iosmac-scaffolding',
    templateUrl: './iosmac-scaffolding.component.html',
    styleUrls: ['./iosmac-scaffolding.component.css']
})
export class IosmacScaffoldingComponent implements OnInit {
    public isDarkTheme: boolean;

    constructor(private readonly globals: Globals) {}

    ngOnInit() {
        this.globals.darkTheme$.subscribe((dark) => (this.isDarkTheme = dark));
        window.scrollTo(0, 0);
    }
}
