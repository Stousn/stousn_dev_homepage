import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Globals {
    private darkTheme = new BehaviorSubject<boolean>(true);

    public darkTheme$ = this.darkTheme.asObservable();

    public set isDarkTheme(dark: boolean) {
        this.darkTheme.next(dark);
    }

    public get isDarkTheme() {
        return this.darkTheme.getValue();
    }
}
