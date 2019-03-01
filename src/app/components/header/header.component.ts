import { Component, OnInit, DoCheck } from '@angular/core';
import { UserFacadeService } from '../../common/facade-services/facade/user-facade.service'
import { Router, ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[UserFacadeService]
})
export class HeaderComponent implements OnInit, DoCheck {
public identity;
public name:string;
public lastname:string;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _UserFacadeService:UserFacadeService) { }

      ngOnInit(){
        this.name = localStorage['name'];
     
        this.identity = this._UserFacadeService.getidentity();
        //console.log(this.identity)
        //console.log(this.lastname)
        }
      ngDoCheck(){
        //identity refresh

        
          this.name = localStorage['name'];

         
    this.identity = this._UserFacadeService.getidentity();
    }
    logout(){
      localStorage.clear();
      this._router.navigate(['/home']);
      this.identity = null;
    }
}