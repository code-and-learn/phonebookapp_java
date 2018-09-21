import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactType, Contact, ContactInfo } from '../models/contact';
import { AppGlobals } from '../models/appglobals';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

  constructor(private http: HttpClient, private globals: AppGlobals) { }

  createnewcontact(contactName: string, title: string, address: string, company: string): Observable<any> {
    return this.http.post<any>(`${this.globals.apiBaseUrl}/phonebook/addcontact`, {contactName: contactName, title: title, address: address, company: company})
      .pipe(
        map(result => {
          return result;
        })
      );
  }

  editcontact(contact: Contact): Observable<boolean> {
    return this.http.put(`${this.globals.apiBaseUrl}/phonebook/editcontact`, {id:contact.id, contactName: contact.contactName, title: contact.title, address: contact.address, company: contact.company})
      .pipe(
        map(result => {
          return true;
        })
      );
  }

  removeemailorphonefromcontact(contactinfoid: number): Observable<boolean> {
    return this.http.delete(`${this.globals.apiBaseUrl}/phonebook/removephoneoremailfromcontact?contactinfoid=${contactinfoid}`)
      .pipe(
        map(result => {
          return true;
        })
      );
  }

  addphoneoremailtocontact(contactType: number, phoneoremail: string, phoneBookId: number): Observable<any> {
    return this.http.post(`${this.globals.apiBaseUrl}/phonebook/addphoneoremailtocontact`, {contactTypeId: contactType, contactInfo: phoneoremail, phoneBookId: phoneBookId})
      .pipe(
        map(result => {
          return result;
        })
      );
  }

  getuserphonebook(): Observable<any> {
    return this.http.get(`${this.globals.apiBaseUrl}/phonebook/getallcontacts`)
      .pipe(
        map(result => {
          return result;
        })
      );
  }

  getallcontacttypes(): Observable<any> {
    return this.http.get(`${this.globals.apiBaseUrl}/contacttype/getall`)
      .pipe(
        map(result => {
          return result;
        })
      );
  }

  getcontactdetails(id: number): Observable<any> {
    return this.http.get(`${this.globals.apiBaseUrl}/phonebook/getdetails?id=${id}`)
      .pipe(
        map(result => {
          return result;
        })
      );
  }

}
