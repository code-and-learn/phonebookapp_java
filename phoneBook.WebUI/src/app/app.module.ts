import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhonebookComponent } from './components/phonebook/phonebook.component';
import { GroupsComponent } from './components/groups/groups.component';
import { UsersComponent } from './components/users/users.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ContactdetailsComponent } from './components/phonebook/contactdetails/contactdetails.component';
import { GroupcontactsComponent } from './components/groups/groupcontacts/groupcontacts.component';
import { AddnewcontactComponent } from './components/phonebook/addnewcontact/addnewcontact.component';
import { EditcontactComponent } from './components/phonebook/editcontact/editcontact.component';
import { AddcontactinfoComponent } from './components/phonebook/addcontactinfo/addcontactinfo.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/signup/signup.component';

import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { AddnewgroupComponent } from './components/groups/addnewgroup/addnewgroup.component';
import { AppGlobals } from './shared/models/appglobals';
import { EditgroupComponent } from './components/groups/editgroup/editgroup.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    PhonebookComponent,
    GroupsComponent,
    UsersComponent,
    WelcomeComponent,
    ContactdetailsComponent,
    GroupcontactsComponent,
    AddnewcontactComponent,
    EditcontactComponent,
    AddcontactinfoComponent,
    LoginComponent, 
    SingupComponent, AddnewgroupComponent, EditgroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5001'],
        blacklistedRoutes: ['localhost:5001/api/auth']
      }
    }),
    RouterModule.forRoot([
      {path : 'Home', component : LoginComponent},
      {path : 'Signup', component : SingupComponent},
      {path : 'Phone-Book', component : PhonebookComponent, canActivate: [AuthGuard]},
      {path : 'Groups', component : GroupsComponent, canActivate: [AuthGuard]},
      {path : 'Add-Group', component : AddnewgroupComponent, canActivate: [AuthGuard]},
      {path : 'Add-Contact', component : AddnewcontactComponent, canActivate: [AuthGuard]},
      {path : 'Edit-Contact/:cid', component : EditcontactComponent, canActivate: [AuthGuard]},
      {path : 'Contact-Details/:cid', component : ContactdetailsComponent, canActivate: [AuthGuard]},
      {path : 'Group-Contacts/:gpid', component : GroupcontactsComponent, canActivate: [AuthGuard]},
      {path : 'Edit-Group/:gpid', component : EditgroupComponent, canActivate: [AuthGuard]},
      {path : '', redirectTo : 'Home', pathMatch : 'full'},
      {path : '**', redirectTo : 'Home', pathMatch : 'full'}
    ])
  ],
  providers: [
    AuthService,
    AuthGuard, 
    AppGlobals
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
