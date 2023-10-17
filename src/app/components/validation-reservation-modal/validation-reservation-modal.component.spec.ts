import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationReservationModalComponent } from './validation-reservation-modal.component';

describe('ValidationReservationModalComponent', () => {
  let component: ValidationReservationModalComponent;
  let fixture: ComponentFixture<ValidationReservationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationReservationModalComponent]
    });
    fixture = TestBed.createComponent(ValidationReservationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
