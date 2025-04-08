import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

 public readonly API_ENDPOINT: string ='http://localhost:5040'
   constructor(private http:HttpClient) { }
 
 
   getAll() {
     console.log("image uploading")
     return this.http.get(this.API_ENDPOINT + `/upload`)

 
   }
 
   addLoan(loan:any) {
    console.log("image uploading")
     return this.http.post(this.API_ENDPOINT + `/upload`,loan)
 
   }
}
