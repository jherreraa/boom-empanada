import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaFooterComponent } from './empa-footer.component';

describe('EmpaFooterComponent', () => {
  let component: EmpaFooterComponent;
  let fixture: ComponentFixture<EmpaFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpaFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
