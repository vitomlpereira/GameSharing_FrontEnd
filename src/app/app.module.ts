import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app.rounting.module';
import { MaterialModule} from './core/material/material.module';


import { AppComponent } from './app.component';
import { AppFooterComponent } from './shared/app-footer/app-footer.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { SideMenuComponent } from './shared/app-side-menu/side-menu.component';
import { AppNavComponent } from './shared/app-nav/app-nav.component';
import { AuthenticationService } from './auth/authentication.service';
import { httpInterceptorProviders } from './core/interceptors/httpInterceptorProviders';


@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    SideMenuComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
