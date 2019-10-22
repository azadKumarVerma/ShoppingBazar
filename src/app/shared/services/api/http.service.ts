import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, catchError } from 'rxjs/operators';
import {throwError as _throw, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getAll(url: string): Observable<any>{
      return this.http.get(url).pipe(
          map(response =>{
              return response;
          }),
          catchError((e: any) =>{
              return _throw(e);
          })
      )
  }

  public post(url: string, body: any, options?:any): Observable<any>{
      return this.http.post(url, body, options).pipe(
          map(response=>{
              return response;
          }),
          catchError((e: any)=>{
              return _throw(e);
          })
      )
  }

  public get(url: string, data?: any): Observable<any> {
    return this.http.get(url, { params: data }).pipe(
      map(response => {
        return response;
      }),
      catchError((e: any) => {
        return _throw(e);
      })
    );
  }

  public put(url: string, body: any): Observable<any> {
    return this.http.put(url, body).pipe(
      map(response => {
        return response;
      }),
      catchError((e: any) => {
        return _throw(e);
      })
    );
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(url).pipe(
      map(response => {
        return response;
      }),
      catchError((e: any) => {
        return _throw(e);
      })
    );
  }

  public getFileData(url: string, data): Observable<any> {
    return this.http.get(url, { params: data, responseType: 'arraybuffer', observe: 'response' }).pipe(
      map(response => {
        console.log('done');
        console.log(response.headers.get('content-disposition'));
        return response;
      }),
      catchError((e: any) => {
        return _throw(e);
      })
    );
  }
}
