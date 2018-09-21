import { Component, OnInit } from '@angular/core';
import { PhoneBookService } from '../../../shared/services/phonebook.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import { Contact, ContactInfo, ContactType } from '../../../shared/models/contact';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {

  constructor(private phoneBookService: PhoneBookService, private router: ActivatedRoute) { 

    this.id = router.snapshot.params['cid'];

    this.phoneBookService.getallcontacttypes().subscribe((result: any)=> 
     {
       this.contactTypes = result.Model;
     });

  }

  public contact : Contact;
  public id: number;

  public newContactType: number;
  public newContact: string;

  public contactTypes: Array<ContactType>;

  public removecontactinfo(contactinfoid)
  {
    this.phoneBookService.removeemailorphonefromcontact(contactinfoid).subscribe(
      result => 
      {
        this.contact.ContactList = this.contact.ContactList.filter(item => item.id != contactinfoid);
      }
    );
  }

  public addphoneoremailtocontact() {
    this.phoneBookService.addphoneoremailtocontact(this.newContactType, this.newContact, this.id)
      .pipe(first())
      .subscribe(
        result => {

          console.log(result.Model);
          this.contact.ContactList.push(result.Model);
          this.contact.ContactList.find(x=>x.contactTypeId == result.Model.contactTypeId).contactTypeName = 
          this.contactTypes.find(x=>x.id==result.Model.contactTypeId).name;
        }
      );
  }

  ngOnInit() {

     this.phoneBookService.getcontactdetails(this.id).subscribe((result : any) => 
     {
       this.contact = result.Model;
       this.contact.ContactList = result.Model.contacts;

       for(let ContactInfo of this.contact.ContactList)
       {
         ContactInfo.contactTypeName = this.contactTypes.find(x=>x.id==ContactInfo.contactTypeId).name;
       }

       console.log(this.contact.ContactList);

     });
  
    }

}
