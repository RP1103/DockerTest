import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EarningService {

  private baseUrl = 'http://localhost:3000/api/earnings';

  constructor(private http: HttpClient) { }

  getAllEarnings() {
    return this.http.get(`${this.baseUrl}`);
  }

}
