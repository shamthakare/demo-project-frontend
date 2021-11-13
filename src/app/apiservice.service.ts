import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
apiUrl="http://localhost:3000/users";
  constructor(private Http: HttpClient) { }
  getAllUser(): Observable<any>{
    return this.Http.get (`${this.apiUrl}`);
  }
}
