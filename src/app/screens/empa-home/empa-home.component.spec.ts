import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaHomeComponent } from './empa-home.component';

describe('EmpaHomeComponent', () => {
  let component: EmpaHomeComponent;
  let fixture: ComponentFixture<EmpaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
