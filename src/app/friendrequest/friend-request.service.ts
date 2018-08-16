import { Injectable } from '@angular/core';
import { BaseService } from '../core/baseService.service';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { map, take , catchError} from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FriendRequestService extends BaseService {

  constructor(private _httpClient: HttpClient ) {super(); }

  getAvalilableUsers(): Observable<User[]> {
      return this._httpClient
      .get<User[]>('http://localhost:30295/friendRequest/GetAvailableUsers', this.ObterAuthHeaderJson())
      .pipe(
        catchError(this.serviceError)
      );
  }

}
