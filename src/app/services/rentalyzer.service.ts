import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class RentalyzerService {
  currentAddress!: string;
  currentBedrooms!: number;
  currentBathrooms!: number;
  currentGuests!: number;

  resp!: Object;

  private readonly _baseUrl: string = 'https://api.geoapify.com/v1/geocode';
  private readonly _APIKey: string = 'cdaeb04e52d54575b7605e1ac7cc2512';
  private readonly _airDnaToken: string = '506be0a7e4e4488ea8dcba8c850532a4';
  private readonly _baseAirDnaUrl: string = 'https://api.airdna.co/client/v1';

  constructor(private http: HttpClient) {}

  setSummaryParameters(addr: string, br: number, ba: number, guests: number) {
    this.currentAddress = addr;
    this.currentBedrooms = br;
    this.currentBathrooms = ba;
    this.currentGuests = guests;
  }
  processSummary() {
    const _airDnaReqUrl: string = `${this._baseAirDnaUrl}/rentalizer/ltm?access_token=${this._airDnaToken}&address=${this.currentAddress}&bedrooms=${this.currentBedrooms}&bathrooms=${this.currentBathrooms}&accommodates=${this.currentGuests}&currency=usd`;

    this.http.get(_airDnaReqUrl).subscribe({
      next: (v: any) => {
        console.log(v.property_stats);
        this.setResults(v.property_stats);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  getResults() {
    return this.resp;
  }

  setResults(v: Object) {
    this.resp = v;
  }

  getPropertySummary(query: string | undefined): any {
    const _geoapifyAutoCompleteUrl: string = `${this._baseUrl}/autocomplete?text=${query}&apiKey=${this._APIKey}`;

    return this.http.get(_geoapifyAutoCompleteUrl).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  setAddress(addr: string): void {
    this.currentAddress = addr;
  }

  getAddr(): string {
    return this.currentAddress;
  }
}
