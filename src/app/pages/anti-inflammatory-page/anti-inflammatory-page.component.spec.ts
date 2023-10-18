import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiInflammatoryPageComponent } from './anti-inflammatory-page.component';

describe('AntiInflammatoryPageComponent', () => {
  let component: AntiInflammatoryPageComponent;
  let fixture: ComponentFixture<AntiInflammatoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntiInflammatoryPageComponent]
    });
    fixture = TestBed.createComponent(AntiInflammatoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
