import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatyBackyardComponent } from './beaty-backyard.component';

describe('BeatyBackyardComponent', () => {
  let component: BeatyBackyardComponent;
  let fixture: ComponentFixture<BeatyBackyardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeatyBackyardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeatyBackyardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
