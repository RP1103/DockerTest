import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrendsService {
  private baseUrl = 'http://localhost:3000/api/trends';

  constructor(private http: HttpClient) { }

  getAllTrends() {
    return this.http.get(`${this.baseUrl}`);
  }
}
