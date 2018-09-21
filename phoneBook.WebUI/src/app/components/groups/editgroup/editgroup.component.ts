import { Component, OnInit } from '@angular/core';
import { GroupcontactService } from '../../../shared/services/groupcontact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Group } from '../../../shared/models/group';

@Component({
  selector: 'app-editgroup',
  templateUrl: './editgroup.component.html',
  styleUrls: ['./editgroup.component.css']
})
export class EditgroupComponent implements OnInit {

  constructor(private groupcontactService: GroupcontactService, private router: Router, private activatedRoute: ActivatedRoute) 
  { 
    this.groupid = activatedRoute.snapshot.params['gpid'];
  }

  public group : Group;
  public groupid : number;

  public submit() {
    this.groupcontactService.editgroup(this.group)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['Groups'])
      );
  }

  ngOnInit() {
    this.groupcontactService.getgroupdetails(this.groupid).subscribe(
      result => {
        this.group = result.Model;
      }
    );
  }

}
