import { Component, OnInit } from '@angular/core';
import { PhoneBookService } from '../../shared/services/phonebook.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Contact } from '../../shared/models/contact'; 

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

  constructor(private phoneBookService: PhoneBookService, private router: Router) { }

  phoneBook : Array<Contact>;

  ngOnInit() {

    console.log("phone book on init called...");
     this.phoneBookService.getuserphonebook().subscribe((result : any) => this.phoneBook = result.Model );

  }

}
