import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameModule } from './game/game.module';
import { FriendRequestModule } from './friendRequest/friend-request.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';

import {AuthGuard} from './core/guards/auth-guard.service';


export const appRoutes = [
    { path: 'game',
       canActivate: [AuthGuard],
       canLoad: [AuthGuard],
       loadChildren: './game/game.module#GameModule'},
    { path: 'friendrequest',
       canActivate: [AuthGuard],
       canLoad: [AuthGuard],
       loadChildren: './friendrequest/friend-request.module#FriendRequestModule'},
    { path: 'auth/register', component: RegisterComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

