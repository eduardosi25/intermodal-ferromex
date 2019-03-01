import { Component, OnInit } from '@angular/core';
import { UserFacadeService } from '../../../common/facade-services/facade/user-facade.service';
import { BeneficialOwner } from '../../../models/beneficialOwner';
import { Userlist } from '../../../models/userList';

import { Router, ActivatedRoute}from '@angular/router';

export class UserProfileComponent implements OnInit {
  public userRegister: Userlist;
  public beneficialOwner: BeneficialOwner;
  public id ;
  public dataUser;
  public status:string;
  public userStatus:string;
  public dataName:string;
  public dataUserForm = {
    'id':"",
    'name':"",
    'lastname':"",
    'lastname2':"",
    'phone':"",
    'email':"",
    'password':"",
    'userName':"",
    'beneficialOwner' :{id:0,description:"",registerDate:"2019-02-14T01:03:48.290"}
  };

  constructor(
    private userFacadeService: UserFacadeService,
    private _route:ActivatedRoute,
    private _router:Router) { 

  
  }

  ngOnInit() {
    
    this.beneficialOwner = new BeneficialOwner(0,"qwert","2019-02-14T01:03:48.290");
    //this.userRegister = new Userlist("Lastname2",this.beneficialOwner,"username2","1","example2@example.com","42","Lastbane22","Test","X6#5*SRU4q");
    this.id = localStorage.getItem('id');
    this.userFacadeService.getUserById(this.id).subscribe(
                (data) => {
                 // console.log("User By Id")
                  
                  this.dataUser = data.response;
               //   console.log(this.dataUser)
                });
   
  }
  dataChange(){
//console.log(this.dataUserForm);
if(this.dataUserForm.name !== this.dataUser.name){
  this.dataName = this.dataUserForm.name;
}

if(this.dataUserForm.name == ""){
  this.dataUserForm.name = this.dataUser.name;
}

if(this.dataUserForm.lastname == ""){
  this.dataUserForm.lastname = this.dataUser.lastname
}
if(this.dataUserForm.lastname2 == ""){
  this.dataUserForm.lastname2 = this.dataUser.lastname2
}
if(this.dataUserForm.phone == ""){
  this.dataUserForm.phone = this.dataUser.phone
}
if(this.dataUserForm.email == ""){
  this.dataUserForm.email = this.dataUser.email
}
if(this.dataUserForm.password == ""){
  this.dataUserForm.password = this.dataUser.password
}

  this.dataUserForm.userName = this.dataUser.email;
  this.dataUserForm.id = this.dataUser.id;


//console.log(this.dataUserForm);
  this.userFacadeService.setUser(this.dataUser.id, this.dataUserForm).subscribe(
    (data) => {
     console.log(data);
     if(this.dataName !== ""){
      localStorage.setItem('name', this.dataName);

    }
     
      // alert(data.status.success)
      
     
      // console.log(data.response.token)
      this.status = "success"
  
        // console.log(this.status)
        // console.log(data.success)
        // console.log (data.status.message)
        //this.userStatus = data.status.message;

      
    }, (e)=>{
      this.status = "error"
     // console.log(e)
      this.userStatus = e.error.status.message;
        // console.log (this.userStatus)
    });
             // 
  
}


}