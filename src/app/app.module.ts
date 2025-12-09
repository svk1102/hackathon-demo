// app.module.ts (For Angular 16 compatibility)

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // Needed for forms/inputs

// THE LEGACY ANGULAR MATERIAL MODULES (Compatible with v16)
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatLegacyProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
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
    MatLegacyButtonModule,
    MatLegacyCardModule,
    MatLegacyCheckboxModule,
    MatLegacyInputModule,
    MatLegacyProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }