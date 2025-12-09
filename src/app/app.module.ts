// app.module.ts (For Angular 16 compatibility)

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Needed for forms/inputs
import { NgChartsModule } from 'ng2-charts';

import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatLegacyProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MatLegacyChipsModule } from '@angular/material/legacy-chips';
import { MatLegacyTabsModule } from '@angular/material/legacy-tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';

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
    MatLegacyButtonModule,
    MatLegacyCardModule,
    MatLegacyCheckboxModule,
    MatLegacyInputModule,
    MatLegacyProgressSpinnerModule,
    MatLegacyChipsModule,
    MatLegacyTabsModule,
    NgChartsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }