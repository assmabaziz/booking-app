import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsLisComponent } from './ads-lis.component';

describe('AdsLisComponent', () => {
  let component: AdsLisComponent;
  let fixture: ComponentFixture<AdsLisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdsLisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdsLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
