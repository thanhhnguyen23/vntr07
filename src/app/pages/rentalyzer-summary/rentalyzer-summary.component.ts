import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalyzerService } from 'src/app/services/rentalyzer.service';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';

@Component({
  selector: 'app-rentalyzer-summary',
  templateUrl: './rentalyzer-summary.component.html',
  styleUrls: ['./rentalyzer-summary.component.scss'],
})
export class RentalyzerSummaryComponent {
  autocomplete: any;

  myAPIKey = 'cdaeb04e52d54575b7605e1ac7cc2512';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rService: RentalyzerService
  ) {
    const currentAddress = this.rService.getAddr();
  }
  submitted = false;

  onSubmit() {
    if (
      this.autocomplete.currentItems === undefined ||
      this.autocomplete.currentItems[0]['properties']['formatted'].length < 0
    ) {
      alert('Please enter valid address');
    } else {
      this.submitted = true;
      this.rService.setAddress(
        this.autocomplete.currentItems[0]['properties']['formatted']
      );

      this.router.navigate(['process-summary']);
    }
  }
  ngOnInit() {
    this.autocomplete = new GeocoderAutocomplete(
      document.getElementById('autocomplete')!,
      this.myAPIKey
    );
    if (this.autocomplete.currentItems !== undefined) {
      this.autocomplete.currentItems[0]['properties']['formatted'] =
        this.rService.getAddr();
    }
  }
}
