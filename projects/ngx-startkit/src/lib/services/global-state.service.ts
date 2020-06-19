import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})


export abstract class GlobalStateService {
  private data = new Subject<object>();
  private subscriptions: Map<string, EventItem[]> = new Map<string, EventItem[]>();
  private dataStream$ = this.data.asObservable();
  private previous = 0;
  constructor() {
    this.dataStream$.subscribe((data) => this._onEvent(data));
  }

  notifyDataChanged(event, value) {
    const current = this.data[event];
    if (current !== value) {
      this.data[event] = value;
      this.data.next({
        event,
        data: this.data[event]
      });
    }
  }

  subscribe(event: string, callback: () => {}): EventItemSubscription {
    const subscribers = this.subscriptions.get(event) || [];
    const uniqueId = this.getUniqueID();
    subscribers.push({ id: uniqueId, cb: callback });
    this.subscriptions.set(event, subscribers);
    return { event, id: uniqueId };
  }

  _onEvent(data: any) {
    const subscribers = this.subscriptions.get(data.event) || [];

    subscribers.forEach((ei: EventItem) => {
      ei.cb.call(null, data.data);
    });
  }

  // tslint:disable-next-line:no-unnecessary-initializer
  unsubscribe(event: string, id: number | null | undefined = undefined) {
    const subscribers = this.subscriptions.get(event) || [];
    let includes;
    if (id) {
      includes = subscribers.filter(ei => ei.id !== id);
    } else {
      subscribers.splice(subscribers.length - 1, 1);
      includes = subscribers;
    }
    this.subscriptions.set(event, includes);
  }

  getUniqueID() {
    try {
      let date = Date.now();

      if (date <= this.previous) {
        date = ++this.previous;
      } else {
        this.previous = date;
      }

      return date;
    } catch (e) {
      console.log('getUniqueID error:' + e.message + '.');
    }
  }
}

interface EventItem {
  id: number;
  cb: () => {};
}
interface EventItemSubscription {
  id: number;
  event: string;
}
