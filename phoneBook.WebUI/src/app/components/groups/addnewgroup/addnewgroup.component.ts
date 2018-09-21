import { Component, OnInit } from '@angular/core';
import { GroupcontactService } from '../../../shared/services/groupcontact.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-addnewgroup',
  templateUrl: './addnewgroup.component.html',
  styleUrls: ['./addnewgroup.component.css']
})
export class AddnewgroupComponent implements OnInit {

  constructor(private groupcontactService: GroupcontactService, private router: Router) { }

  public name: string;
  public description: string;
  public error: string;

  public submit() {
    this.groupcontactService.createnewgroup(this.name, this.description)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['Groups']),
        err => this.error = 'Could not authenticate'
      );
  }

  ngOnInit() {
  }
}
