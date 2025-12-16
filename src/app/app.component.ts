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

  

  


}
