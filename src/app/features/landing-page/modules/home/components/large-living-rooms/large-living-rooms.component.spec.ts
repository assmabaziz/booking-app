import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeLivingRoomsComponent } from './large-living-rooms.component';

describe('LargeLivingRoomsComponent', () => {
  let component: LargeLivingRoomsComponent;
  let fixture: ComponentFixture<LargeLivingRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LargeLivingRoomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeLivingRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
