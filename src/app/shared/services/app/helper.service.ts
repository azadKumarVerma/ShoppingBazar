import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor() {}

  set _u(id: string) {
    localStorage.setItem('_u', id);
  }

  get _u() {
    return JSON.parse(localStorage.getItem('_u'));
  }

  set token(token: string) {
    localStorage.setItem('token', token);
  }

  get token() {
    return localStorage.getItem('token');
  }
}
