import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  private memoryStore: { [key: string]: any } = {};
  private useLocalStorage = false;

  constructor() {
    this.useLocalStorage = this.storageAvailable();
  }

  get(key: string) {
    if (this.useLocalStorage) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return this.memoryStore.hasOwnProperty(key) ? this.memoryStore[key] : null;
    }
  }

  set(key: string, obj): void {
    if (this.useLocalStorage) {
      localStorage.setItem(key, JSON.stringify(obj));
    } else {
      this.memoryStore[key] = JSON.stringify(obj);
    }
  }

  clear() {
    if (this.useLocalStorage) {
      localStorage.clear();
    } else {
      this.memoryStore = {};
    }
  }

  removeItem(key: string) {
    if (this.useLocalStorage) {
      localStorage.removeItem(key);
    } else {
      delete this.memoryStore[key];
    }
  }

  hasItem(key: string): boolean {
    if (this.useLocalStorage) {
      return localStorage.getItem(key) ? true : false;
    } else {
      return this.memoryStore.hasOwnProperty(key);
    }
  }

  storageAvailable(type = 'localStorage'): boolean {
    // sessionStorage or localStorage

    try {
      const storage = window[type];
      const key = '__storage_test__';
      storage.setItem(key, key);
      storage.removeItem(key, key);

      return true;
    } catch (e) {
      return false;
    }
  }

}
