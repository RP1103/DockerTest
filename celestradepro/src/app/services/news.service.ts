import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = 'http://localhost:3000/api/news';

  constructor(private http: HttpClient) { }

  getAllNews() {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map(news => news.sort((a, b) => new Date(b.fetchedTime).getTime() - new Date(a.fetchedTime).getTime()))
    );
  }
}
