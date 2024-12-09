import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayQuizComponent } from './birthday-quiz.component';

describe('BirthdayQuizComponent', () => {
    let component: BirthdayQuizComponent;
    let fixture: ComponentFixture<BirthdayQuizComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BirthdayQuizComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BirthdayQuizComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
