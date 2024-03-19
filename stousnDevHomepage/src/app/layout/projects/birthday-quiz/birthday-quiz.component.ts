import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../globals';

@Component({
    selector: 'app-birthday-quiz',
    templateUrl: './birthday-quiz.component.html',
    styleUrls: ['./birthday-quiz.component.css']
})
export class BirthdayQuizComponent implements OnInit {
    public isDarkTheme?: boolean;

    public slideNumber = 0;

    public name = '';

    constructor(private readonly globals: Globals) {}

    ngOnInit() {
        this.globals.darkTheme$.subscribe((dark) => (this.isDarkTheme = dark));
        window.scrollTo(0, 0);
    }
}
