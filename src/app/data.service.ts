import { Injectable } from '@angular/core';
import { IUser } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private user: IUser = null;

  public setUser(user: IUser) {
    this.user = user;
  }

  public getUser(): IUser {
    return this.user;
  }

  public isLoggedIn() {
    return this.user === null ? false : true;
  }

}
