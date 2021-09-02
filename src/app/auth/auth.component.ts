import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  errorMsg: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    this.errorMsg = null;

    let authObs: Observable<AuthResponseData>

    if (this.isLoginMode) {

      authObs = this.authService.login(email, password)

    }
    else {

      authObs = this.authService.signup(email, password)

    }

    authObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['/recipes'])
    },
    error => {
      this.errorMsg = 'An error occurred...'
      this.isLoading = false;
    });

    form.reset();
  }

  onHandleError() {
    this.errorMsg = null;
  }
}
