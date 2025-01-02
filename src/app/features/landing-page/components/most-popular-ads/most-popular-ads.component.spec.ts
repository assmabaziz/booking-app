import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularAdsComponent } from './most-popular-ads.component';

describe('MostPopularAdsComponent', () => {
  let component: MostPopularAdsComponent;
  let fixture: ComponentFixture<MostPopularAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostPopularAdsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostPopularAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
