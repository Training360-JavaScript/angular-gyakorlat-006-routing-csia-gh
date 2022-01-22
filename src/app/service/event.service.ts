import { Injectable } from '@angular/core';

import { Event } from '../model/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor() {}

  getAll(): Event[] {
    return [
      {
        name: 'Event1',
        date: '2017/04/11',
        time: '13:15',
        location: {
          address: '10 Vaci St',
          city: 'Budapest',
          country: 'Hungary',
        },
      },
      {
        name: 'Event2',
        date: '2017/04/12',
        time: '14:30',
        location: {
          address: '11 Vaci St',
          city: 'Budapest',
          country: 'Hungary',
        },
      },
      {
        name: 'Event1',
        date: '2017/04/13',
        time: '20:00',
        location: {
          address: '12 Vaci St',
          city: 'Budapest',
          country: 'Hungary',
        },
      },
    ];
  }
}
