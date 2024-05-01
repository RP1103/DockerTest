import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForexnewsService {

  private baseUrl = 'http://localhost:3000/api/fnews';

  constructor(private http: HttpClient) { }

  getAllFnews() {
    return this.http.get(`${this.baseUrl}`);
  }


}
