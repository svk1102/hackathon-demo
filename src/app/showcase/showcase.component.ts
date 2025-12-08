// legacy-showcase.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {
  // Data for Form Elements
  inputValue: string = 'Hello Legacy';
  isChecked: boolean = true;
  radioValue: string = 'option1';
  selectedValue: string = 'steak-0';
  isToggleOn: boolean = false;
  sliderValue: number = 50;

  // Data for Select
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  // Data for Tabs
  tabLabels = ['Tab 1', 'Tab 2', 'Tab 3'];

  // Methods
  log(message: string): void {
    console.log(message);
  }
}