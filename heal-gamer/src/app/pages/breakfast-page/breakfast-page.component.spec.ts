import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastPageComponent } from './breakfast-page.component';

describe('BreakfastPageComponent', () => {
  let component: BreakfastPageComponent;
  let fixture: ComponentFixture<BreakfastPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakfastPageComponent]
    });
    fixture = TestBed.createComponent(BreakfastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
