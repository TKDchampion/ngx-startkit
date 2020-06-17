import { Injectable } from '@angular/core';
import { BaseService, HttpDefaultOptions, HttpRequestOptions } from 'ngx-startkit';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService extends BaseService {
  constructor(http: HttpClient, options: HttpDefaultOptions) {
    super(http, options);
  }

  login(obj: object) {
    return this.post('User/Token', {
      body: obj,
    });
  }

  getMenu(){
    return this.get('/Menu');
  }
}
