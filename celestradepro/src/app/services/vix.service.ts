import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VixService {
  
  

  private baseUrl = 'http://localhost:3000/api/vix';

  constructor(private http: HttpClient) { }

  getVixs() {
    return this.http.get(`${this.baseUrl}`);
  }

   
}
