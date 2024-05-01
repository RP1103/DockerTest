import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Profile {
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl = 'http://localhost:3000/api/profiles';

  constructor(private http: HttpClient) { }

  getAllProfiles() {
    return this.http.get(`${this.baseUrl}`);
  }

}
