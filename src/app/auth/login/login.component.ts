import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { AuthenticationService } from './../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  showSpinner: boolean;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private authService: AuthenticationService,
              private _router: Router) {
  }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email, Validators.maxLength(35)]],
      password: [null, [Validators.required]]});
    }

  submit() {
    console.log(this.formulario);

    this.showSpinner = true;

    const user = {
      email : this.formulario.get('email').value,
      password : this.formulario.get('password').value
    };

    this.authService.login(user)
      .subscribe(
          result => { this.onSaveComplete(result); },
          fail => { this.onError(fail); }
      );
  }

  onSaveComplete(response: any): void {

    console.log(response);

    localStorage.setItem('eio.token', response.accessToken);
    localStorage.setItem('eio.user', JSON.stringify(response.user));
    this.showSpinner = false;

    this._router.navigate(['/home']);


  }

  onError(fail: any) {
    console.log('onError');
    this.showSpinner = false;
  }
}
