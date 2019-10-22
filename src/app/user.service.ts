import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from './shared/services/api/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, 
    private httpService: HttpService) { }

  loginUser(endodedUser){
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Basic ${endodedUser}`
    });
    let options = {headers : headers};
    return this.http.post('auth/', {}, options);

  }

  signupUser(body){
    return this.http.post('users/',body)
  }
}
