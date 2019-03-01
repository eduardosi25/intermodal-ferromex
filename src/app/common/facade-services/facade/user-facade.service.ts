import { Injectable, Injector } from '@angular/core';
import { UserService } from '../services/user.service';
import { Userlist } from '../../../models/userList';
import { Address } from '../../../models/address';
import { Quotes } from '../../../models/quotes';
import { Feedback } from '../../../models/feedback';
@Injectable()
export class UserFacadeService {

  constructor(private injector: Injector) { }

  private _userService: UserService;
  public get userService(): UserService {
    if (!this._userService) {
      this._userService = this.injector.get(UserService);
    }
    return this._userService;
  }

  getUserAddress(id_user: any) {
    return this.userService.getUserAddress(id_user);
  }

  setUserQuotes(id_user: any, body: Quotes) {
    return this.userService.setUserQuotes(id_user, body);
  }

  getUserAdressById(id_user: any, id_address: any) {
    return this.userService.getUserAdressById(id_user, id_address);
  }

  createUserAdress(id: any, data: Address) {
    return this.userService.createUserAdress(id, data);
  }

  setUserAdress(id_user: any, id_address: any, body: Address) {
    return this.userService.setUserAdress(id_user, id_address, body);
  }

  setUserFeedback(id_user: any, id_address: any, body: Feedback) {
    return this.userService.setUserFeedback(id_user, id_address, body);
  }

  deleteUserAdress(id_user: any, id_address: any) {
    return this.userService.deleteUserAdress(id_user, id_address);
  }

  setUserBooking(id_user: any) {
    return this.userService.getUserAddress(id_user);
  }

  getUserBooking(id_user: any) {
    return this.userService.getUserAddress(id_user);
  }

  getUserBookingById(id_user: any, id_booking: any) {
    return this.userService.getUserBookingById(id_user, id_booking);
  }

  restorePassword(username: any) {
    return this.userService.restorePassword(username);
  }

  getUsers() {
    return this.userService.getUsers();
  }

  getUserById(id_user: any) {
    return this.userService.getUserById(id_user);
  }

  createUser(Userlist: Userlist) {
    return this.userService.createUser(Userlist);
  }
  
  createUserMock(Userlist: Userlist) {
    return this.userService.createUserMock(Userlist);
  }

  setUser(id_user: any, body: Userlist) {
    return this.userService.setUser(id_user, body);
  }

  getQuotes(id_user: any) {
    return this.userService.getUserQuotes(id_user);
  }
  getQuotesById(id_user: any, id_Quote: any) {
    return this.userService.getUserQuotesById(id_user, id_Quote);
  }

  setPassword(id_user: any, pass: any) {
    return this.userService.setPassword(id_user, pass);
  }
  getidentity() {
    return this.userService.getIdentity();
  }
  getVoucher(id_user:any,id_booking: any){
    return this.userService.getVoucher(id_user, id_booking);
  }
}
