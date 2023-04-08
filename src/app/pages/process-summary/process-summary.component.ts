import { Component } from '@angular/core';
import { RentalyzerService } from 'src/app/services/rentalyzer.service';
import { Summary } from '../models/summary.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process-summary',
  templateUrl: './process-summary.component.html',
  styleUrls: ['./process-summary.component.scss'],
})
export class ProcessSummaryComponent {
  submitted = false;

  guests = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  bedrooms = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  bathrooms = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  toggleDisplay!: boolean;
  model!: Summary;
  addressDisplay!: string;

  constructor(private rService: RentalyzerService, private router: Router) {}

  ngOnInit() {
    this.pageInit();
  }

  onSubmit() {
    this.processPropSumReq();
    this.submitted = true;
    this.router.navigate(['results-summary']);
  }

  private processPropSumReq() {
    const addr = this.model.address;
    const br = Number.parseInt(this.model.bedrooms);
    const ba = Number.parseInt(this.model.bathrooms);
    const guests = Number.parseInt(this.model.guests);
    this.rService.setSummaryParameters(addr, br, ba, guests);
    this.rService.processSummary();
  }

  private pageInit() {
    const currentAddress = this.rService.getAddr();
    this.pageDisplayInit(currentAddress);
  }

  private pageDisplayInit(currentAddress: string) {
    this.addressDisplay = currentAddress;
    this.toggleDisplay = currentAddress ? true : false;

    if (!this.toggleDisplay === false) {
      this.model = new Summary(
        currentAddress,
        this.bedrooms[1],
        this.bathrooms[1],
        this.guests[1]
      );
    } else {
      this.router.navigate(['summary']);
    }
  }
}
