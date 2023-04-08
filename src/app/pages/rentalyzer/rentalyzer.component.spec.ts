import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalyzerComponent } from './rentalyzer.component';

describe('RentalyzerComponent', () => {
  let component: RentalyzerComponent;
  let fixture: ComponentFixture<RentalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalyzerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
