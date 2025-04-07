import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public readonly API_ENDPOINT: string ='http://localhost:5040'

  getAll() {
    
    return this.http.get(this.API_ENDPOINT + `/user`)

  }

  addUser(user:any) {
   
    return this.http.post(this.API_ENDPOINT + `/user`,user)

  }

  editUser(user:any) {
    console.log(user.id)
    const org_id = localStorage.getItem("org_id")
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', "Bearer" + localStorage.getItem("token"))
    return this.http.put(this.API_ENDPOINT + `/user/${user.id}?organization_id=` + org_id,user, { headers: headers },)

  }

  deleteUser(id:any) {
    const org_id = localStorage.getItem("org_id")
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', "Bearer" + localStorage.getItem("token"))
    return this.http.delete(this.API_ENDPOINT + `/user/${id}?organization_id=` + org_id,{ headers: headers },)

  }
}
