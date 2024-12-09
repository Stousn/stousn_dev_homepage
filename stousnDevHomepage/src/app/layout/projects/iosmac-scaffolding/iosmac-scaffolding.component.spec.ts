import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosmacScaffoldingComponent } from './iosmac-scaffolding.component';

describe('IosmacScaffoldingComponent', () => {
  let component: IosmacScaffoldingComponent;
  let fixture: ComponentFixture<IosmacScaffoldingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosmacScaffoldingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosmacScaffoldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
