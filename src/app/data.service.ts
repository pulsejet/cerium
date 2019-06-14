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

  public getSSO() {
    const url = 'https://gymkhana.iitb.ac.in/sso/oauth/authorize/';
    const clientid = '4Id5WpIQqpGYGflJJqGj9hPgGImTyQGxQuNU8Llh';
    const scope = 'basic profile picture program ldap';
    const redir = 'http://localhost:4200/login';
    return `${url}?client_id=${clientid}&response_type=code&scope=${scope}&redirect_uri=${redir}`;
  }

  public gotoSSO() {
    window.location.href = this.getSSO();
  }

  public ensureLogin() {
    if (!this.isLoggedIn()) {
      this.gotoSSO();
    }
    return this.isLoggedIn();
  }

}
