import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../common.service';
import { Response } from '../../../models/Response';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';
import { Userlist } from '../../../models/userList';
import { UserToken } from '../../../models/userToken';
import { Contact } from '../../../models/contact';

@Injectable()
export class SharedService {

  constructor(private http: HttpClient, private generalService: CommonService) { }

  public urlSession = environment.api.methods.authentication.session;
  public intent = environment.api.methods.authentication.intent;
  public contacts = environment.api.methods.authentication.contact;
  public iTCreateMessage = environment.api.methods.XIT.iTCreateMessage;
  public urlApi = environment.api.url;


  session(user: User){
    const url = this.urlApi + this.urlSession;
    return this.http.post(url, user, { headers: this.generalService.setHeader(null, null) });
  }

  contact(mesagge: Contact): Observable<Response<Contact>> {
    const url = this.urlApi + this.contacts;
    return this.http.post<Response<Contact>>(url, mesagge, { headers: this.generalService.setHeader(this.iTCreateMessage ,null) });
  }


}
