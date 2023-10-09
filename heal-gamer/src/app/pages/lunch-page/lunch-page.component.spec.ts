import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchPageComponent } from './lunch-page.component';

describe('LunchPageComponent', () => {
  let component: LunchPageComponent;
  let fixture: ComponentFixture<LunchPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LunchPageComponent]
    });
    fixture = TestBed.createComponent(LunchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
