import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

}
