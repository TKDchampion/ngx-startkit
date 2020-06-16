import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { HttpRequestOptions, HttpDefaultOptions } from '../model/options';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient, private options: HttpDefaultOptions) {
  }

  get<T>(url: string, httpOptions: HttpRequestOptions): Observable<T> {
    return this.httpProcess(url, httpOptions, (fullURL, options) => this.http.get(fullURL, options));
  }

  post<T>(url: string, httpOptions: HttpRequestOptions): Observable<T> {
    return this.httpProcess(url, httpOptions, (fullURL, options, body) => this.http.post(fullURL, body, options));
  }

  put<T>(url: string, httpOptions: HttpRequestOptions): Observable<T> {
    return this.httpProcess(url, httpOptions, (fullURL, options, body) => this.http.put(fullURL, body, options));
  }

  delete<T>(url: string, httpOptions: HttpRequestOptions): Observable<T> {
    return this.httpProcess(url, httpOptions, (fullURL, options) => this.http.delete(fullURL, options));
  }

  toURLParams(obj: object) {
    let params = new HttpParams();
    for (const key in obj) {
      params = params.set(key, obj[key].toString());
    }
    return params;
  }

  setHeaders(headers: object): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    headers = Object.assign(headers || {}, this.options.headers);
    for (const key in headers) {
      httpHeaders = httpHeaders.set(key, headers[key].toString());
    }
    return httpHeaders;
  }

  private httpProcess(url, httpOptions: HttpRequestOptions = {}, httpFunc) {
    const fullURL = url.toURL(httpOptions.baseURL || this.options.baseApiURL);
    const body = httpOptions.body;
    const params = this.toURLParams(httpOptions.queryObject);
    const headers = this.setHeaders(httpOptions.headers);
    return httpFunc(fullURL, { params, headers }, body);
  }

}
