import { Component, OnInit } from '@angular/core';
import { PhoneBookService } from '../../../shared/services/phonebook.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Contact } from '../../../shared/models/contact';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})

export class EditcontactComponent implements OnInit {

  constructor(private phoneBookService: PhoneBookService, private activatedRoute: ActivatedRoute, private router: Router) 
  { 
    this.id = activatedRoute.snapshot.params['cid'];
  }

  public contact : Contact;
  public id: number;

  public submit() {
    this.phoneBookService.editcontact(this.contact)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['Contact-Details', this.contact.id]
        )
      );
  }

  ngOnInit() {
    console.log("phone book on init called...");
     this.phoneBookService.getcontactdetails(this.id).subscribe((result : any) => 
     {
       this.contact = result.Model;
     });
  }

}
