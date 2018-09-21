import { Component, OnInit } from '@angular/core';
import { GroupcontactService } from '../../shared/services/groupcontact.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Group } from '../../shared/models/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private groupcontactService: GroupcontactService, private router: Router) { }

  public groupid: number;
  public groups: Array<Group>;

  ngOnInit() {
    this.groupcontactService.getusergroups().subscribe((result : any) => this.groups = result.Model );
 }

}
