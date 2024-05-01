import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  private baseUrl = 'http://localhost:3000/api/options';

  constructor(private http: HttpClient) {}

  getOptions() {
    return this.http.get(`${this.baseUrl}`);
  }

  getChartData(symbol: string) {
    return this.http.get(`${this.baseUrl}/chart/${symbol}`);
  }

  getSymbols() {
    return this.http.get(`${this.baseUrl}/symbols`);
  }
}
