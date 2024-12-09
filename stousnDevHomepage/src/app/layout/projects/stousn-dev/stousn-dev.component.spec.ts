import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StousnDevComponent } from './stousn-dev.component';

describe('StousnDevComponent', () => {
  let component: StousnDevComponent;
  let fixture: ComponentFixture<StousnDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StousnDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StousnDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
