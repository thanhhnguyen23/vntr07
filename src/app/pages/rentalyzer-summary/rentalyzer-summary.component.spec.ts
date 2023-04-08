import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalyzerSummaryComponent } from './rentalyzer-summary.component';

describe('RentalyzerSummaryComponent', () => {
  let component: RentalyzerSummaryComponent;
  let fixture: ComponentFixture<RentalyzerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalyzerSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalyzerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
