import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeoapifyGeocoderAutocompleteModule } from '@geoapify/angular-geocoder-autocomplete';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessSummaryComponent } from './pages/process-summary/process-summary.component';
import { RentalyzerSummaryComponent } from './pages/rentalyzer-summary/rentalyzer-summary.component';
import { RentalyzerComponent } from './pages/rentalyzer/rentalyzer.component';
import { ResultsSummaryComponent } from './pages/results-summary/results-summary.component';

import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    RentalyzerSummaryComponent,
    RentalyzerComponent,
    ProcessSummaryComponent,
    ResultsSummaryComponent,
  ],
  imports: [
    BrowserModule,
    GeoapifyGeocoderAutocompleteModule.withConfig(
      'cdaeb04e52d54575b7605e1ac7cc2512'
    ),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AutoCompleteModule,
    FormsModule,
    DropdownModule,
    CheckboxModule,
    CardModule,
    ButtonModule,
    GalleriaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
