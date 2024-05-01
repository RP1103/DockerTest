import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VolatilityService {

  private baseUrl = 'http://localhost:3000/api/volatility';

  constructor(private http: HttpClient) { }

  getAllVolatility() {
    return this.http.get(`${this.baseUrl}`);
  }

}
