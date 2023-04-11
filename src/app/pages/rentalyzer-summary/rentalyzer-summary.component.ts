import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalyzerService } from 'src/app/services/rentalyzer.service';
import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';

@Component({
  selector: 'app-rentalyzer-summary',
  templateUrl: './rentalyzer-summary.component.html',
  styleUrls: ['./rentalyzer-summary.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class RentalyzerSummaryComponent {
  autocomplete: any;

  submitted: boolean = false;
  disclaimerDialogToggle: boolean = true;
  inValidAddressToggle: boolean = false;

  myAPIKey = 'cdaeb04e52d54575b7605e1ac7cc2512';
  DISCLAIMER_MSG: string = `The information on this website is for general informational purposes only. VNTR makes no representation or warranty, express or implied. Your use of the site is solely at your own risk. This site may contain links to third party content, which we do not warrant, endorse, or assume liability for`;

  constructor(
    private router: Router,
    private rService: RentalyzerService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    const currentAddress = this.rService.getAddr();
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

  onSubmit() {
    if (
      this.autocomplete.currentItems === undefined ||
      this.autocomplete.currentItems[0]['properties']['formatted'].length < 0
    ) {
      this.showInvalidAddressDialog();
    } else {
      this.submitted = true;
      this.rService.setAddress(
        this.autocomplete.currentItems[0]['properties']['formatted']
      );

      this.router.navigate(['process-summary']);
    }
  }

  showDisclaimerDialog() {
    this.disclaimerDialogToggle = true;
  }

  showInvalidAddressDialog() {
    this.inValidAddressToggle = true;
  }
}
