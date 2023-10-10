import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVoyageComponent } from './detail-voyage.component';

describe('DetailVoyageComponent', () => {
  let component: DetailVoyageComponent;
  let fixture: ComponentFixture<DetailVoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailVoyageComponent]
    });
    fixture = TestBed.createComponent(DetailVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
