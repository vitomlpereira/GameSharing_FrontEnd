import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { AuthenticationService } from './../authentication.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errors: any[] = [];
  formulario: FormGroup;
  showSpinner: boolean;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private authService: AuthenticationService,
              private _router: Router) {
  }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      name: [null, [Validators.required]],
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(35)]],
      password: [null, [Validators.required]]});
    }

  submit() {
    console.log(this.formulario);

    this.showSpinner = true;

    let user = {
      name : this.formulario.get('name').value,
      username : this.formulario.get('username').value,
      email : this.formulario.get('email').value,
      password : this.formulario.get('password').value
    };

    this.authService.register(user)
      .subscribe(
          result => { this.onSaveComplete( result ) },
          fail => { this.onError(fail)}
      );
  }

  onSaveComplete(response: any): void {
    this.showSpinner = false;
    console.log(response);
    this._router.navigate(['/auth/login']);


  }

  onError(fail: any) {
    console.log(fail);

    //this.errors = fail;
    this.showSpinner = false;
  }
}
