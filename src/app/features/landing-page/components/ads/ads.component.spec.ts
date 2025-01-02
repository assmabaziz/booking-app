import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADSComponent } from './ads.component';

describe('ADSComponent', () => {
  let component: ADSComponent;
  let fixture: ComponentFixture<ADSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ADSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ADSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
