import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScreenerService {

  private baseUrl = 'http://localhost:3000/api/screener';

  constructor(private http: HttpClient) { }

  getAllScreener() {
    return this.http.get(`${this.baseUrl}`);
  }

}
