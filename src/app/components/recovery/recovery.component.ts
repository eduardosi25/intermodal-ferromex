import { Component, OnInit } from '@angular/core';
import { UserFacadeService } from '../../common/facade-services/facade/user-facade.service'
// Declaramos las variables para jQuery

import { Recovery } from '../../models/recovery';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
public Email:Recovery;
public status:string
public userStatus:string;

  constructor(private userFacade: UserFacadeService) {
    this.Email = new Recovery("");
   }
 
  ngOnInit() {
  }

onSubmit(){
  //console.log(this.Email.email)
  this.userFacade.restorePassword(this.Email.email).subscribe(
                (data) => {
               // console.log("Restore password")
               //console.log(data);
               if(data.success == true){
                this.status = "success"
                }else{   
                  this.status = "error"
                 // console.log(this.status)
                 // console.log(data.success)
                 // console.log (data.status.message)
                  this.userStatus = data.status.message;
        
                }
              }, (e)=>{
                this.status = "error"
                //console.log(e)
                this.userStatus = e.error.status.message;
                  // console.log (data.status.message)
              
                });
}
}
