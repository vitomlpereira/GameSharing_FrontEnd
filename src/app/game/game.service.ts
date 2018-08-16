import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, take , catchError} from 'rxjs/operators';

import { BaseService } from '../core/baseService.service';
import { Game } from './game';


@Injectable({
  providedIn: 'root'
})
export class GameService extends BaseService {

  constructor(private _httpClient: HttpClient ) {super(); }

  getGamesByOwner(ownerId): Observable<Game[]> {
      return this._httpClient
      .get<Game[]>('http://localhost:30295/game', this.ObterAuthHeaderJson())
      .pipe(
        catchError(this.serviceError)
      );
  }



  addGame(gameInfo: any)
  {
    let response = this._httpClient
    .post('http://localhost:30295/game/add',gameInfo, this.ObterAuthHeaderJson())
    .pipe(
      map(this.extractData),
      catchError(this.serviceError)
    );

  return response;
  }

}
