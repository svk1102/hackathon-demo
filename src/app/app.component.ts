import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hackathon-demo';
  userData: any = null;
  isLoading = false;
  errorMsg = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  

  

  skills = ['Angular', 'AI', 'TypeScript', 'Hackathon'];

  activeTabIndex: number = 0;
  
  // Data to display in the tabs (used in the template)
  userProfile = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    status: 'Active'
  };

  // Method to handle user interaction
  logTabChange(index: number): void {
    this.activeTabIndex = index;
    console.log(`Tab changed. New index: ${index}`);
  }

  slides = [
    { image: 'path/to/slide1.jpg', text: 'First Slide' },
    { image: 'path/to/slide2.jpg', text: 'Second Slide' }
  ];

}
