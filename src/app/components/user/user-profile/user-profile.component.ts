import { Component, OnInit } from '@angular/core';
import { UserFacadeService } from '../../../common/facade-services/facade/user-facade.service';
import { BeneficialOwner } from '../../../models/beneficialOwner';
import { Userlist } from '../../../models/userList';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Router, ActivatedRoute}from '@angular/router';
// Declaramos las variables para jQuery

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
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


          forma : FormGroup ;
            
          usuario:Object ={
              id:"",
              name:"",
              lastname:"", 
              lastname2:"",
              userName:"",
              email:"",
              phone:"",
              password:"",
              beneficialOwner:{
                id:"",
                description:"",
                registerDate:""
              }
        
        }
  constructor(
    private userFacadeService: UserFacadeService,
    private _route:ActivatedRoute,
    private _router:Router) { 

      this.forma = new FormGroup({

        'id': new FormControl(),
        'name': new FormControl(),
        'lastname': new FormControl(),
        'lastname2': new FormControl(),
        'phone': new FormControl('', [Validators.pattern("^[0-9]{10}"),
                                      Validators.minLength(10),
                                      Validators.maxLength(10),
                                     ]),
        'email': new FormControl('', [
                                        Validators.pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})")
                                     ]),
        'userName': new FormControl(),
  
        'password': new FormControl('', [
                                         Validators.pattern("^[a-zA-Z0-9]*$"),
                                         Validators.minLength(8)
                                        ]),
        'password2':new FormControl(),
  
  
        'beneficialOwner':new FormGroup({
                                        id: new FormControl(0),
                                        description:new FormControl(''),
                                        registerDate:new FormControl('2019-02-14T01:03:48.290')
                                        })
             
      })

    //este actua para igualar los password despues valid iniciar hasta status change
                  this.forma.controls['password2'].setValidators([
                 

                    this.noIgual.bind( this.forma )
                      
                 ])
                           
                  //este detecta el cambio 
                  this.forma.controls['password2'].statusChanges.subscribe(
                   
                    data =>{
                      console.log(this.noIgual)
                      this.noIgual.bind( this.forma )
                  })
            
  }

  ngOnInit() {
    
    this.beneficialOwner = new BeneficialOwner(0,"qwert","2019-02-14T01:03:48.290");
    //this.userRegister = new Userlist("Lastname2",this.beneficialOwner,"username2","1","example2@example.com","42","Lastbane22","Test","X6#5*SRU4q");
    this.id = localStorage.getItem('id');
    this.userFacadeService.getUserById(this.id).subscribe(
                (data) => {
                 // console.log("User By Id")
                 console.log(this.noIgual)
                  this.dataUser = data.response;
               //   console.log(this.dataUser)
                });


               
              }
            
  noIgual (control: FormControl ): {[s:string]:boolean} {
    let forma:any = this;
           //console.log(forma.controls)
            // forma.controls['password2'].errors?.noiguales
            noiguales:false
          if (control.value !== forma.controls['password'].value ){
            return {
              noiguales:true

            }
          }
          return null;
          }
       

  onSubmit(){

// console.log(this.forma.value)

    
    if (this.forma.value.name !== this.dataUser.name) {
      this.dataName = this.forma.value.name;
    }

    if (this.forma.value.name == null) {
      this.forma.value.name = this.dataUser.name;
    }

    if (this.forma.value.lastname == null) {
      this.forma.value.lastname = this.dataUser.lastname
    }
    if (this.forma.value.lastname2 == null) {
      this.forma.value.lastname2 = this.dataUser.lastname2
    }
    if (this.forma.value.phone == "") {
      this.forma.value.phone = this.dataUser.phone
    }
    if (this.forma.value.email == "") {
      this.forma.value.email = this.dataUser.email
    }
    if (this.forma.value.password == "") {
      this.forma.value.password = this.dataUser.password
    }
    if (this.forma.value.password2 == null) {
      this.forma.value.password2 = this.dataUser.password2
    }
    this.forma.value.userName = this.dataUser.email;
    this.forma.value.id = this.dataUser.id;

// console.log(this.forma.value);
  this.userFacadeService.setUser(this.dataUser.id, this.forma.value).subscribe(
    (data) => {
    console.log(data);
     if(this.dataName !== null){
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