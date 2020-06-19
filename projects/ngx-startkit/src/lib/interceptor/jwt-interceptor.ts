import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JWTOptions } from '../model/options';
import { StorageService } from '../services/storage.service';
import { Injectable } from '@angular/core';
import { AuthToken } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class JWTInterceptor implements HttpInterceptor {

  constructor(private storage: StorageService, private options: JWTOptions) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth: AuthToken = this.storage.get(this.options.key) || {};
    if (auth) {
      req = req.clone({ setHeaders: { Authorization: `Bearer ${auth.access_token}` } });
    }
    return next.handle(req);
  }
}
