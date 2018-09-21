import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SingupComponent {

  public username: string;
  public password: string;
  public name: string;
  public error: string;

  constructor(private auth: AuthService, private router: Router) { }

  public submit() {
    this.auth.singup(this.username, this.password, this.name)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['login']),
        err => this.error = 'Could not authenticate'
      );
  }
}