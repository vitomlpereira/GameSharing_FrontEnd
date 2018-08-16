import { Injectable } from '@angular/core';

import { Observable, Subject , throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }
  protected ObterAuthHeaderJson() {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.getToken()}`
        })
    };
}
  protected ObterHeaderJson() {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
  }
  protected extractData(response: any) {
    return response.data || {};
}
  protected serviceError(error: Response | any) {
    let errMsg: string;

    console.log('serviceError');
    console.log(error);

    if (error instanceof Response) {
       errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(error);
    return Observable.throw(error);
}
  public getUser() {
  return JSON.parse(localStorage.getItem('eio.user'));
}
  protected getToken(): string {
  return localStorage.getItem('eio.token');
}
}
