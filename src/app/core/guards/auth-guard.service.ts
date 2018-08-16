import { Injectable } from '@angular/core';
import { AuthenticationService } from './../../auth/authentication.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate, CanLoad {

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    console.log('AuthGuard canActivate');
    return this.isUserAuthenticated();
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log('AuthGuard canLoad');
    return this.isUserAuthenticated();
   }

  private isUserAuthenticated() {
     if (this.authService.isUserAuthenticated()) {
       return true;
     } else {
        this.router.navigate(['/auth/login']);
     }
  }



}
