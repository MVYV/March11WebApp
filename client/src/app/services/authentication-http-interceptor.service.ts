import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // if (sessionStorage.getItem('username') && sessionStorage.getItem('basicAuth')) {
    if (sessionStorage.getItem('username')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('basicAuth')
        }
      })
    }
    return next.handle(req);
  }
}
