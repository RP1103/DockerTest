import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpeninterestService {

  private baseUrl = 'http://localhost:3000/api/openintrest';
  

  constructor(private http: HttpClient) { }

  getOpenintrest() {
    return this.http.get(`${this.baseUrl}`);
  }
}