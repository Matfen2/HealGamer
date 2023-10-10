import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastRecipesComponent } from './breakfast-recipes.component';

describe('BreakfastRecipesComponent', () => {
  let component: BreakfastRecipesComponent;
  let fixture: ComponentFixture<BreakfastRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakfastRecipesComponent]
    });
    fixture = TestBed.createComponent(BreakfastRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
