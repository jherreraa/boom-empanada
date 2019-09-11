import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaSigninComponent } from './empa-signin.component';

describe('EmpaSigninComponent', () => {
  let component: EmpaSigninComponent;
  let fixture: ComponentFixture<EmpaSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpaSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpaSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
