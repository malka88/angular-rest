import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, first_name: 'Eve', last_name: 'Holt',
        avatar: 'assets/img/Artboard 1.svg' },
      { id: 12, first_name: 'Charles', last_name: 'Morris',
        avatar: 'assets/img/Artboard 10.svg' },
      { id: 13, first_name: 'Tracy', last_name: 'Ramos',
        avatar: 'assets/img/Artboard 11.svg' },
      { id: 14, first_name: 'Eve', last_name: 'Holt',
        avatar: 'assets/img/Artboard 12.svg' },
      { id: 15, first_name: 'Charles', last_name: 'Morris',
        avatar: 'assets/img/Artboard 13.svg' },
      { id: 16, first_name: 'Tracy', last_name: 'Ramos',
        avatar: 'assets/img/Artboard 14.svg' },
      { id: 17, first_name: 'Eve', last_name: 'Holt',
        avatar: 'assets/img/Artboard 15.svg' },
      { id: 18, first_name: 'Charles', last_name: 'Morris',
        avatar: 'assets/img/Artboard 16.svg' },
      { id: 19, first_name: 'Tracy', last_name: 'Ramos',
        avatar: 'assets/img/Artboard 17.svg' },
      { id: 20, first_name: 'Eve', last_name: 'Holt',
        avatar: 'assets/img/Artboard 18.svg' }
    ];
    return {users};
  }
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id))
      + 1 : 11;
  }
}
