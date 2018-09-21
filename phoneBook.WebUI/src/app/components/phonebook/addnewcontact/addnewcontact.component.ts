import { Component, OnInit } from '@angular/core';
import { PhoneBookService } from '../../../shared/services/phonebook.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-addnewcontact',
  templateUrl: './addnewcontact.component.html',
  styleUrls: ['./addnewcontact.component.css']
})

export class AddnewcontactComponent implements OnInit {

  constructor(private phoneBookService: PhoneBookService, private router: Router) { }

  public contactName: string;
  public title: string;
  public address: string;
  public company: string;
  public error: string;

  public submit() {
    this.phoneBookService.createnewcontact(this.contactName, this.title, this.address, this.company)
      .pipe(first())
      .subscribe(
        result => 
        {
          this.router.navigate(['Contact-Details',  result.Model.id])
        },
        err => this.error = 'Could not authenticate'
      );
  }

  ngOnInit() {
  }

}
