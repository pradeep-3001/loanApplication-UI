import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanCatagoriesService {

  public readonly API_ENDPOINT: string ='http://localhost:5040'
  constructor(private http:HttpClient) { }


  getAll() {
    
    return this.http.get(this.API_ENDPOINT + `/loan-categories`)

  }

  addLoan(loan:any) {
   
    return this.http.post(this.API_ENDPOINT + `/loan-categories`,loan)

  }


}
