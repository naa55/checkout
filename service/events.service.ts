import { Injectable } from '@angular/core';
import { Events } from '../models/events.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events: Events[] = [
    {
      id: 1,
      name: 'Havest Festival',
      date: '2023-4-043',
      quantity: 0,
      cost: 50
    },
    {
      id: 2,
      name: 'First Festival',
      date: '2023-4-043',
      quantity: 0,
      cost: 50
    },
    {
      id: 3,
      name: 'First Festival',
      date: '2023-4-043',
      quantity: 0,
      cost: 50
    },
    {
      id: 4,
      name: 'First Festival',
      date: '2023-4-043',
      quantity: 0,
      cost: 50
    }
  ]
  constructor() { }

  getupComingEvents() {
    return of(this.events);
  }
}
