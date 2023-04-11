import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalyzerSummaryComponent } from './pages/rentalyzer-summary/rentalyzer-summary.component';
import { RentalyzerComponent } from './pages/rentalyzer/rentalyzer.component';
import { ProcessSummaryComponent } from './pages/process-summary/process-summary.component';
import { ResultsSummaryComponent } from './pages/results-summary/results-summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/summary', pathMatch: 'full' },
  { path: 'process-summary', component: ProcessSummaryComponent },
  { path: 'results-summary', component: ResultsSummaryComponent },
  { path: 'summary', component: RentalyzerSummaryComponent },

  // { path: 'rentalyzer', component: RentalyzerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
