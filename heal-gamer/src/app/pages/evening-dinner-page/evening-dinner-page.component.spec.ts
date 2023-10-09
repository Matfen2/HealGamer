import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveningDinnerPageComponent } from './evening-dinner-page.component';

describe('EveningDinnerPageComponent', () => {
  let component: EveningDinnerPageComponent;
  let fixture: ComponentFixture<EveningDinnerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EveningDinnerPageComponent]
    });
    fixture = TestBed.createComponent(EveningDinnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
