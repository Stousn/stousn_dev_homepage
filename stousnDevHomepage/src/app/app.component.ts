import { Component, OnInit } from '@angular/core';
import { Globals } from './globals';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private readonly globals: Globals) {}

    ngOnInit(): void {
        this.watchThemeChanges();
        this.globals.isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    watchThemeChanges() {
        this.globals.darkTheme$.subscribe((dark) => {
            if (dark) {
                document.body.classList.add('w3-theme-dark');
                return;
            }
            document.body.classList.remove('w3-theme-dark');
        });
    }
}
