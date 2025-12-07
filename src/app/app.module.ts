import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// The legacy import paths for Angular Material components were removed in v17.
// They should be replaced with the standard, non-legacy (MDC-based) imports.
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, // Replaced MatLegacyButtonModule
    MatCardModule    // Replaced MatLegacyCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }