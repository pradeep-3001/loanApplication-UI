import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  API_EndiPoint:string ='http://localhost:5040'

  post(data: any) {
    return this.http.post(this.API_EndiPoint + '/login', data)
  }
}
