import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppdatePasswordComponent } from './uppdate-password.component';

describe('UppdatePasswordComponent', () => {
  let component: UppdatePasswordComponent;
  let fixture: ComponentFixture<UppdatePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UppdatePasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UppdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
