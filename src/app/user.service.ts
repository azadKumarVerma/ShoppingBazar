import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loginUser(endodedUser){
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Basic ${endodedUser}`
    });
    let options = {headers : headers};
    return this.http.post('http://localhost:9000/auth/', {}, options);

  }

  signupUser(body){
    return this.http.post('http://localhost:9000/users/',body)
  }
}
