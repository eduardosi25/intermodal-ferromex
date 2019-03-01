import { Injectable, Injector } from '@angular/core';
import { SharedService } from '../services/authenticate.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../../models/user';
import { Userlist } from 'src/app/models/userList';
import { Contact } from '../../../models/contact';

@Injectable()
export class AuthenticateFacadeService {

  constructor(private injector: Injector) { }

  private _sharedService: SharedService;
  public get sharedService(): SharedService {
    if (!this._sharedService) {
      this._sharedService = this.injector.get(SharedService);
    }
    return this._sharedService;
  }

  session(user: User):any {
    return this.sharedService.session(user);
  }
  
  createContact(message: Contact) {
    return this.sharedService.contact(message);
  }

}
