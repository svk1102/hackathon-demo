// app.module.ts (For Angular 16 compatibility)

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Needed for forms/inputs
import { BaseChartDirective } from 'ng2-charts'; // Changed from NgChartsModule to BaseChartDirective for ng2-charts v6+

import { MatButtonModule } from '@angular/material/button'; // Replaced MatLegacyButtonModule
import { MatCardModule } from '@angular/material/card'; // Replaced MatLegacyCardModule
import { MatCheckboxModule } from '@angular/material/checkbox'; // Replaced MatLegacyCheckboxModule
import { MatInputModule } from '@angular/material/input'; // Replaced MatLegacyInputModule
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Replaced MatLegacyProgressSpinnerModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule,
    BaseChartDirective // Updated to use BaseChartDirective directly
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }