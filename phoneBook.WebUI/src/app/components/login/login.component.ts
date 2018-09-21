import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AppGlobals } from '../../shared/models/appglobals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public username: string;
  public password: string;
  public error: string;

  constructor(private auth: AuthService, private router: Router, private globals: AppGlobals) { }

  public submit() {
    this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        result => 
        {
          this.router.navigate(['Phone-Book']);
          console.log("After login...");
          console.log(this.globals);
        },
        err => this.error = 'Could not authenticate'
      );
  }
}