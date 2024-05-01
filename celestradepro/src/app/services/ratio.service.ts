import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatioService {
  private baseUrl = 'http://localhost:3000/api/ratios';

  constructor(private http: HttpClient) { }

  getAllRatios() {
    return this.http.get(`${this.baseUrl}`);
  }
}
