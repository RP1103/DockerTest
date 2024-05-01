import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrossrateService {

  private baseUrl = 'http://localhost:3000/api/crossrates';

  constructor(private http: HttpClient) { }

  getCrossrate() {
    return this.http.get(`${this.baseUrl}`);
  }
}
