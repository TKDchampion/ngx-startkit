import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  // private memoryStore: { [key: string]: any } = {};

  constructor() {
  }

  get(key: string, type = 'localStorage') {
    if (type === 'localStorage') {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return JSON.parse(sessionStorage.getItem(key));
    }
  }

  set(key: string, obj, type = 'localStorage'): void {
    if (type === 'localStorage') {
      localStorage.setItem(key, JSON.stringify(obj));
    } else {
      sessionStorage.setItem(key, JSON.stringify(obj));
    }
  }

  clear(type = 'localStorage') {
    if (type === 'localStorage') {
      localStorage.clear();
    } else {
      sessionStorage.clear();
    }
  }

  removeItem(key: string, type = 'localStorage') {
    if (type === 'localStorage') {
      localStorage.removeItem(key);
    } else {
      sessionStorage.removeItem(key);
    }
  }

  hasItem(key: string, type = 'localStorage'): boolean {
    if (type === 'localStorage') {
      return localStorage.getItem(key) ? true : false;
    } else {
      return sessionStorage.getItem(key) ? true : false;
    }
  }

  // storageAvailable(type = 'localStorage'): boolean {
  //   try {
  //     const storage = window[type];
  //     const key = '__storage_test__';
  //     storage.setItem(key, key);
  //     storage.removeItem(key, key);

  //     return true;
  //   } catch (e) {
  //     return false;
  //   }
  // }

}
