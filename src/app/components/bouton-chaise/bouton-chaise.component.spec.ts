import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonChaiseComponent } from './bouton-chaise.component';

describe('BoutonChaiseComponent', () => {
  let component: BoutonChaiseComponent;
  let fixture: ComponentFixture<BoutonChaiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoutonChaiseComponent]
    });
    fixture = TestBed.createComponent(BoutonChaiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
