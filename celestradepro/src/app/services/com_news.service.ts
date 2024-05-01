import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Com_newsService {

  private baseUrl = 'http://localhost:3000/api/com_news';

  constructor(private http: HttpClient) { }

  getCom_news() {
    return this.http.get(`${this.baseUrl}`);
  }


}
