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
import { MatLegacyFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule } from '@angular/material/legacy-select';
import { MatLegacySlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacySliderModule } from '@angular/material/legacy-slider';
import { MatLegacyTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyListModule } from '@angular/material/legacy-list';
import { MatLegacyDialogModule } from '@angular/material/legacy-dialog'; // Only the module is imported here

import { AppComponent } from './app.component';
import { ShowcaseComponent } from './showcase/showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent // The component that uses the legacy features
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    // ALL Legacy Material Modules
    MatLegacyButtonModule,
    MatLegacyCardModule,
    MatLegacyCheckboxModule,
    MatLegacyInputModule,
    MatLegacyFormFieldModule,
    MatLegacyRadioModule,
    MatLegacySelectModule,
    MatLegacySlideToggleModule,
    MatLegacySliderModule,
    MatLegacyTabsModule,
    MatLegacyProgressSpinnerModule,
    MatLegacyListModule,
    MatLegacyDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }