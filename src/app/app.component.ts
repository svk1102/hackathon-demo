import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { ChartConfiguration, ChartOptions } from 'chart.js';



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
    this.fetchData();
  }

  fetchData() {
    this.isLoading = true;
    
    // Simulating an API call
    const api$ = of({ name: 'Judge', role: 'Admin' }).pipe(delay(1000));
    api$.subscribe(
      (data) => {
        this.isLoading = false;
        this.userData = data;
        console.log('Data loaded');
      },
      (err) => {
        this.isLoading = false;
        this.errorMsg = 'Failed to load';
        console.error(err);
      },
      () => {
        console.log('Stream completed');
      }
    );
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [10, 20, 30, 15, 22, 11],
        label: 'New Users',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    maintainAspectRatio: false
  };

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
