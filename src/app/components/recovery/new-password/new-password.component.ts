import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute}from '@angular/router';
import { UserFacadeService } from '../../../common/facade-services/facade/user-facade.service'
import { Response } from './../../../models/Response';
import { FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
public id_user;
public token;
forma : FormGroup ;
    
usuario:Object ={
    password:""
}
  constructor(private _router: Router, 
              private _route: ActivatedRoute,
              private userFacade: UserFacadeService
    ){

    this.forma = new FormGroup({
      'id': new FormControl(),
      'password': new FormControl('', [
                                       Validators.required,
                                       Validators.pattern("^[a-zA-Z0-9]*$"),
                                       Validators.minLength(8)
                                      ]),
      'password2':new FormControl('',Validators.required)           
    })



    this.forma.controls['password2'].setValidators([
      Validators.required, 
      this.noIgual.bind( this.forma )
    ])

    }
    

  ngOnInit() {
   /* this.id_user = this._route.snapshot.queryParamMap.get('id_user');
    this.token = this._route.snapshot.queryParamMap.get('it');
    console.log(this.token)
    this.userFacade.setPassword(this.id_user, this.token).subscribe(
      (data: Response<Boolean>) => {
      
      console.log("Update Passwords")
      console.log(data);
      });*/
   // console.log(this._route.snapshot.queryParamMap.has('id_user'));

   //  console.log(this._route.snapshot.queryParamMap.getAll('id_user'));
  //  console.log(this._route.snapshot.queryParamMap.keys);

  }

  noIgual (control: FormControl ): {[s:string]:boolean} {
    let forma:any = this;
            //console.log(forma.controls['password2'])
          if (control.value !== forma.controls['password'].value ){
            return {
              noiguales:true
            }
          }
          return null;
          }


  onSubmit(){


    this.id_user = this._route.snapshot.queryParamMap.get('id_user');
    localStorage.setItem('id', this.id_user);
    this.token = this._route.snapshot.queryParamMap.get('it');
    console.log(this.token)
    this.userFacade.setPassword(this.id_user, this.token).subscribe(
      (data: Response<Boolean>) => {
      
      console.log("Update Passwords")
      console.log(data);
      });
   // console.log(this._route.snapshot.queryParamMap.has('id_user'));
   //console.log(this._route.snapshot.queryParamMap.getAll('id_user'));
   // console.log(this._route.snapshot.queryParamMap.keys);


  }
}
