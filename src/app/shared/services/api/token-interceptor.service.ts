import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Router } from "@angular/router";
import { tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{
    constructor(private router: Router){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        request = request.clone({
            url : environment.url + request.url
        })

        return next.handle(request).pipe(
            tap(
                (event: HttpEvent<any>)=> {
                    if(event instanceof HttpResponse){
                        // hide loader
                    }
                },
                (err: any)=>{
                    if(err instanceof HttpErrorResponse){
                        // hide loader
                        if(err.statusText == 'Unknown Error'){
                            err.error.message = 'Something Went Wrong';
                        }
                        if (err.status === 401 || err.status === 403) {
                            window.localStorage.clear();
                            return this.router.navigate(['/auth/login']);
                          }
                    }
                }
            )
        )
    }
}