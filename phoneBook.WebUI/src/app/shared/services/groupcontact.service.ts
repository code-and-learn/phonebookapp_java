import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Group } from '../models/group';
import { AppGlobals } from '../models/appglobals';

@Injectable({
  providedIn: 'root'
})
export class GroupcontactService {

  constructor(private http: HttpClient, private globals: AppGlobals) { }

  createnewgroup(name: string, description: string): Observable<any> {
    return this.http.post<any>(`${this.globals.apiBaseUrl}/groups/createnew`, {name: name, description: description})
      .pipe(
        map(result => {
          return true;
        })
      );
  }

  editgroup(group : Group): Observable<any> {
    return this.http.post<any>(`${this.globals.apiBaseUrl}/groups/createnew`, {name: group.name, description: group.description, id: group.id})
      .pipe(
        map(result => {
          return result;
        })
      );
  }

  addcontacttogroup(groupid:number, contactid:number): Observable<any> {
    return this.http.post(`${this.globals.apiBaseUrl}/groups/addcontacttogroup`, {groupId: groupid, contactId: contactid})
      .pipe(
        map(result => {
          return true;
        })
      );
  }

  getcontactsnotingroup(groupid: number): Observable<any> {
    return this.http.get(`${this.globals.apiBaseUrl}/phonebook/getcontactsnotingroup?groupid=${groupid}`)
      .pipe(
        map(result => {
          return result;
        })
      );
  }

  getusergroups(): Observable<any> {
    return this.http.get(`${this.globals.apiBaseUrl}/groups/getallgroups`)
      .pipe(
        map(result => {
          return result;
        })
      );
  }

  getgroupcontacts(groupid: number): Observable<any> {
    return this.http.get(`${this.globals.apiBaseUrl}/phonebook/getallgroupcontacts?groupid=${groupid}`)
      .pipe(
        map(result => {
          return result;
        })
      );
  }

  getgroupdetails(groupid: number): Observable<any> {
    return this.http.get(`${this.globals.apiBaseUrl}/groups/getdetails?groupid=${groupid}`)
      .pipe(
        map(result => {
          return result;
        })
      );
  }

  removecontactfromgroup(groupid: number, contactid: number): Observable<any> {
    return this.http.delete(`${this.globals.apiBaseUrl}/groups/removecontactfromgroup?groupid=${groupid}&contactid=${contactid}`)
      .pipe(
        map(result => {
          return result;
        })
      );
  }
}
