// app.module.ts (For Angular 16 compatibility)

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Needed for forms/inputs
import { BaseChartDirective } from 'ng2-charts'; // MIGRATION: Changed from NgChartsModule

import { MatButtonModule } from '@angular/material/button'; // MIGRATION: Replaced MatLegacyButtonModule
import { MatCardModule } from '@angular/material/card'; // MIGRATION: Replaced MatLegacyCardModule
import { MatCheckboxModule } from '@angular/material/checkbox'; // MIGRATION: Replaced MatLegacyCheckboxModule
import { MatInputModule } from '@angular/material/input'; // MIGRATION: Replaced MatLegacyInputModule
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // MIGRATION: Replaced MatLegacyProgressSpinnerModule
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips'; // MIGRATION: Replaced MatLegacyChipsModule



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
    MatButtonModule, // MIGRATION: Replaced MatLegacyButtonModule
    MatCardModule, // MIGRATION: Replaced MatLegacyCardModule
    MatCheckboxModule, // MIGRATION: Replaced MatLegacyCheckboxModule
    MatInputModule, // MIGRATION: Replaced MatLegacyInputModule
    MatProgressSpinnerModule, // MIGRATION: Replaced MatLegacyProgressSpinnerModule
    MatChipsModule, // MIGRATION: Replaced MatLegacyChipsModule
    BaseChartDirective // MIGRATION: Replaced NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }