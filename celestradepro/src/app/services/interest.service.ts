import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterestService {
  constructor(private http: HttpClient) {}

  getAllInterests(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/interests');
  }
}
