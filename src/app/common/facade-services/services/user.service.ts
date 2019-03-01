import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../common.service';
import { Response } from '../../../models/Response';
import { Observable } from 'rxjs';
import { User } from '../../../models/user';
import { Userlist } from '../../../models/userList';
import { Quotes } from '../../../models/quotes';
import { Address } from '../../../models/address';
import { Feedback } from '../../../models/feedback';
// import { Booking } from '../../../models/booking'; 
@Injectable()
export class UserService {
  public urlSession = environment.api.methods.authentication.session;
  public intent = environment.api.methods.authentication.intent;
  public urlApi = environment.api.url;
  public user = environment.api.methods.users.users;
  public iTcreateUser = environment.api.methods.XIT.iTCreate;
  public iTupdateUser = environment.api.methods.XIT.iTUpdate;
  public iTdeleteUser = environment.api.methods.XIT.iTDeleteAddress;
  public iTCreateAdreess = environment.api.methods.XIT.iTCreateAdreess;
  public iTCreateQuote = environment.api.methods.XIT.iTCreateQuote;
  public iTCreateBooking = environment.api.methods.XIT.iTCreateBooking;
  public pass = environment.api.methods.users.pass;
  public quotes = environment.api.methods.users.quotes;
  public booking = environment.api.methods.users.bookings;
  public tracking = environment.api.methods.users.tracking;
  public address = environment.api.methods.users.address;
  public iTUptadeAddress = environment.api.methods.XIT.iTUptadeAddress;
  public feedback = environment.api.methods.users.feedback;
  public passRest = environment.api.methods.users.passRest;
  public iTCreateFeedback = environment.api.methods.XIT.iTCreateFeedback;
  public identity;

  constructor(private http: HttpClient, private generalService: CommonService) { }

  getUserAddress(id_user: any) {
    const url = this.urlApi + this.user + "/" + id_user + this.address;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  }

  getUserAdressById(id_user: any, id_address: any) {
    const url = this.urlApi + this.user + "/" + id_user + this.address + "/" + id_address;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  }

  createUserAdress(id: any, data: Address): Observable<Response<Address>> {
    const url = this.urlApi + this.user + "/" + id + this.address;
    return this.http.post<Response<Address>>(url, data, { headers: this.generalService.setHeader(this.iTCreateAdreess, true) });
  }

  setUserAdress(id_user: any, id_address: any, body: Address) : Observable<Response<Address>> {
    const url = this.urlApi + this.user + "/" + id_user + this.address + "/" + id_address;
    return this.http.put<Response<Address>>(url, body, { headers: this.generalService.setHeader(this.iTUptadeAddress, true) });
  }

  deleteUserAdress(id_user: any, id_address: any) {
    const url = this.urlApi + this.user + "/" + id_user + this.address + "/" + id_address;
    return this.http.delete(url, { headers: this.generalService.setHeader(this.iTdeleteUser, true) });
  }

  getUserQuotes(id_user: any) {
    const url = this.urlApi + this.user + "/" + id_user + this.quotes;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  }

  getUserQuotesById(id_user: any, id_quotes: any) {
    const url = this.urlApi + this.user + "/" + id_user + this.quotes + '/' + id_quotes;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  } 

  setUserQuotes(id_user: any, body: Quotes): Observable<Response<Quotes>> {
    const url = this.urlApi + this.user + "/" + id_user + this.quotes;
    return this.http.post<Response<Quotes>>(url, body, { headers: this.generalService.setHeader(this.iTCreateQuote, true) });
  }


  setUserBooking(id_user: any) {
    const url = this.urlApi + this.user + "/" + id_user + this.booking;
    return this.http.post(url, { headers: this.generalService.setHeader(this.iTCreateBooking, true) });

  }

  getUserBookingById(id_user: any, id_booking: any) {
    const url = this.urlApi + this.user + "/" + id_user + this.booking + '/' + id_booking + this.tracking;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });

  }

  setUserFeedback(id_user: any, id_booking: any, body: Feedback): Observable<Response<Feedback>> {
    const url = this.urlApi + this.user + "/" + id_user + this.booking + '/' + id_booking + this.feedback;
    return this.http.post<Response<Feedback>>(url, body, { headers: this.generalService.setHeader(this.iTCreateFeedback, true) });
  }

  restorePassword(username: any): Observable<Response<Boolean>> {
    const url = this.urlApi + this.user + '/' + username + this.passRest;
    return this.http.post<Response<Boolean>>(url, username, { headers: this.generalService.setHeader(null, null) });
  }

  getUsers(): Observable<Response<Userlist>> {
    const url = this.urlApi + this.user;
    return this.http.get<Response<Userlist>>(url, { headers: this.generalService.setHeader(null, true) });
  }

  getUserById(id_user: any): Observable<Response<Userlist>> {
    const url = this.urlApi + this.user + '/' + id_user;
    return this.http.get<Response<Userlist>>(url, { headers: this.generalService.setHeader(null, true)});
  }

  createUser(data: Userlist): Observable<Response<Userlist>> {
    const url = this.urlApi + this.user;
    return this.http.post<Response<Userlist>>(url, data, { headers: this.generalService.setHeader(this.iTcreateUser, null) });
  }
  createUserMock(data: Userlist): Observable<Response<Userlist>> {
    const url = this.urlApi + this.user;
    return this.http.post<Response<Userlist>>(url, data, { headers: this.generalService.setHeaderMock(data.userName) });
  }

  setUser(id_user: any, body: Userlist) {
    const url = this.urlApi + this.user + '/' + id_user;
    return this.http.put(url, body, { headers: this.generalService.setHeader(this.iTupdateUser, true) });
  }


  setPassword(id: any, password: any): Observable<Response<Boolean>> {
    const url = this.urlApi + this.user + '/' + id + this.pass + '/' + password;
    return this.http.put<Response<Boolean>>(url, password, { headers: this.generalService.setHeader(this.iTcreateUser, true) });

  }

  getVoucher(user_id: any, booking_id: any){
    const url = this.urlApi + '/users/' + user_id + '/bookings' + '/' + booking_id + '/voucher'
    return this.http.get<Response<any>>(url, {headers: this.generalService.setHeader(null, true)})
  }

  getBill(user_id: any, booking_id: any){
    const url = this.urlApi + '/users/' + user_id + '/bookings' + '/' + booking_id + '/bill'
    return this.http.get<Response<any>>(url, {headers: this.generalService.setHeader(null, true)})
  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity != 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

}
