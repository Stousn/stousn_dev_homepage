import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgoReipComponent } from './ergo-reip.component';

describe('ErgoReipComponent', () => {
  let component: ErgoReipComponent;
  let fixture: ComponentFixture<ErgoReipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErgoReipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErgoReipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
