import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellPageComponent } from './well-page.component';

describe('WellPageComponent', () => {
  let component: WellPageComponent;
  let fixture: ComponentFixture<WellPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WellPageComponent]
    });
    fixture = TestBed.createComponent(WellPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
