import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// THE DOOMED PACKAGES
// These import paths exist in v16 but are REMOVED in v17
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule } from '@angular/material/legacy-card';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatLegacyButtonModule, // AI must find and replace this
    MatLegacyCardModule    // AI must find and replace this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }