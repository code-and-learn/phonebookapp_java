import { Component, OnInit } from '@angular/core';
import { GroupcontactService } from '../../../shared/services/groupcontact.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Contact } from '../../../shared/models/contact';

@Component({
  selector: 'app-groupcontacts',
  templateUrl: './groupcontacts.component.html',
  styleUrls: ['./groupcontacts.component.css']
})
export class GroupcontactsComponent implements OnInit {
  
  constructor(private groupcontactService: GroupcontactService, private router: ActivatedRoute) { 

    this.groupId = router.snapshot.params['gpid'];

  }

  public groupId: number;
  public groupContacts: Array<Contact>;
  public contactsNotInGroup: Array<Contact>;

  getContactsNotInGroup(groupid: number)
  {
    console.log("Remove this contact.");
    this.groupcontactService.getcontactsnotingroup(this.groupId).subscribe((result : any) => 
    {
      this.contactsNotInGroup = result.Model;
      console.log(this.contactsNotInGroup);
    });
  }

  addcontacttogroup(groupid: number, contactid: number)
  {
    this.groupcontactService.addcontacttogroup(groupid, contactid).subscribe((result : any) => 
    //this.groupcontactService.getgroupcontacts(this.groupId).subscribe((result : any) => this.groupContacts = result.Model )
    {
      this.groupContacts.push(this.contactsNotInGroup.find(x=>x.id==contactid));
      this.contactsNotInGroup = this.contactsNotInGroup.filter(item => item.id != contactid);
    } 
    );
  }

  removecontactfromgroup(contactid: number, groupid: number)
  {
    console.log("Remove this contact.");
    this.groupcontactService.removecontactfromgroup(groupid, contactid).subscribe((result:any)=>
    this.groupcontactService.getgroupcontacts(this.groupId).subscribe((result : any) => this.groupContacts = result.Model ));
  }

  ngOnInit() {
    this.groupcontactService.getgroupcontacts(this.groupId).subscribe((result : any) => this.groupContacts = result.Model );
 }

}
