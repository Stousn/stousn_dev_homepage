import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../globals';

@Component({
    selector: 'app-ergo-reip',
    templateUrl: './ergo-reip.component.html',
    styleUrls: ['./ergo-reip.component.css']
})
export class ErgoReipComponent implements OnInit {
    public isDarkTheme?: boolean;

    constructor(private readonly globals: Globals) {}

    ngOnInit() {
        this.globals.darkTheme$.subscribe((dark) => (this.isDarkTheme = dark));
        window.scrollTo(0, 0);
    }
}
