import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  baseUrl = `http://localhost:3000`;
  constructor(private httpClient: HttpClient) { }
  getUserList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/users`)
  }
}
