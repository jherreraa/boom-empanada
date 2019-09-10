import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaNavbarsComponent } from './empa-navbars.component';

describe('EmpaNavbarsComponent', () => {
  let component: EmpaNavbarsComponent;
  let fixture: ComponentFixture<EmpaNavbarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpaNavbarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpaNavbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
