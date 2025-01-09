import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAuthorizedUserComponent } from './non-authorized-user.component';

describe('NonAuthorizedUserComponent', () => {
  let component: NonAuthorizedUserComponent;
  let fixture: ComponentFixture<NonAuthorizedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonAuthorizedUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonAuthorizedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
