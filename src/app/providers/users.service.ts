import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  isAUser(email: string, password: string) {
    let value = Users.find(user => user.email == email && user.password == password);
    return value != undefined;
  }

  constructor() { }
}

let Users = [
  {email: 'galpeleg192@gmail.com', password: 'galPassword10203040'},
  {email: 'rana1996am@gmail.com', password: 'ranaPassword123456'}
];
