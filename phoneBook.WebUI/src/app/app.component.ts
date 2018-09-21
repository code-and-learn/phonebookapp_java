import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { AppGlobals } from './shared/models/appglobals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth: AuthService, private router: Router, private globals: AppGlobals) { }

  title = 'phoneBook-SPA';

  @Input() loggedInUser : string;

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}