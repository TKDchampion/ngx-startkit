import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class GlobalService {
  private currency: any;

  constructor() { }

  set(val) {
    this.currency = val;
  }

  get() {
    return this.currency;
  }
}
