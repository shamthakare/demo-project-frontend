import { HttpClient, HttpClientModule } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  baseUrl = "http://localhost:3000/user";
  createUrl = "http://localhost:3000/user";
  constructor(private http: HttpClient) { }
  //get data

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl} `);
  }

  //create data
  createData(data: any): Observable<any> {
    console.log(data, 'data created');
    return this.http.post(`${this.createUrl} `, data);
  }
  //delete id
deleteData(id: any): Observable < any > {
  let ids =id;
  return this.http.delete(`${this.createUrl}/${ids}`);
}
}


