import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Subject, throwError } from 'rxjs';
import { map, take , catchError} from 'rxjs/operators';
import { BaseService } from '../core/baseService.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {

  constructor(private http: HttpClient) {
      super();
   }

   login(user: any): Observable<any> {

    const response = this.http
        .post('http://localhost:30295/account/login', user, this.ObterHeaderJson())
        .pipe(
          map(this.extractData),
          catchError(this.serviceError)
        );

      return response;
   }

   register(user: any): Observable<any> {

    const response = this.http
        .post('http://localhost:30295/account/register', user, this.ObterHeaderJson())
        .pipe(
          map(this.extractData),
          catchError(this.serviceError)
        );
    return response;
   }

   isUserAuthenticated() {
      return this.getToken() != null;
   }


}



