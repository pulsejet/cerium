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

  public getSSO(path: string) {
    const url = 'https://gymkhana.iitb.ac.in/sso/oauth/authorize/';
    const clientid = '4Id5WpIQqpGYGflJJqGj9hPgGImTyQGxQuNU8Llh';
    const scope = 'basic profile picture program ldap';
    const baseHref = document.getElementsByTagName('base')[0].href || '';
    const redir = `${baseHref}login`;
    const state = encodeURI(path);
    return `${url}?client_id=${clientid}&response_type=code&scope=${scope}&redirect_uri=${redir}&state=${state}`;
  }

  public gotoSSO() {
    var path = window.location.href;
    window.location.href = this.getSSO(path);
  }

  public ensureLogin() {
    if (!this.isLoggedIn()) {
      this.gotoSSO();
    }
    return this.isLoggedIn();
  }

}
