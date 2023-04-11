import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RentalyzerService } from 'src/app/services/rentalyzer.service';

@Component({
  selector: 'app-results-summary',
  templateUrl: './results-summary.component.html',
  styleUrls: ['./results-summary.component.scss'],
})
export class ResultsSummaryComponent {
  displayResults: any;
  submitted: boolean = false;
  targetPropertyUrl!: string;
  currentAddress!: string;
  currentBathrooms!: number;
  currentBedrooms!: number;
  currentGuests!: number;

  constructor(private rService: RentalyzerService, private router: Router) {
    setTimeout(() => {
      this.propertyParamInit();
      setTimeout(() => {
        if (this.displayResults === undefined) {
          this.router.navigate(['summary']);
        }
      }, 500);
    }, 2000);
  }

  private propertyParamInit() {
    this.currentAddress = this.rService.currentAddress;
    this.currentBedrooms = this.rService.currentBedrooms;
    this.currentBathrooms = this.rService.currentBathrooms;
    this.currentGuests = this.rService.currentGuests;
    this.displayResults = this.rService.getResults();

    this.targetPropertyUrl = `http://maps.googleapis.com/maps/api/streetview?size=300x290&location=${this.currentAddress}&fov=80&pitch=0&key=AIzaSyDndbbXM_cRo3rFfBFB0tAtcoYrVSpj9ok`;
  }
}
