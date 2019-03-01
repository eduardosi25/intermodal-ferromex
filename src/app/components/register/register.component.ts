import { Component, OnInit } from '@angular/core';
import { UserFacadeService } from '../../common/facade-services/facade/user-facade.service'
// Declaramos las variables para jQuery
import { FormGroup, FormControl, Validators} from '@angular/forms'
declare var jQuery:any;
declare var $:any;

//models
import { User } from '../../models/user';
import { BeneficialOwner } from './../../models/beneficialOwner';
import { Userlist } from './../../models/userList';
import { Response } from './../../models/Response';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public title: string;
  public user: User;
  public userRegister: Userlist;
  public beneficialOwner: BeneficialOwner;
  public status:string;
  public userStatus:string;
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
    private userFacade: UserFacadeService
             ) { 
   // console.log(this.usuario);
    this.user = new User("", "", null);
    this.userRegister = new Userlist("",this.beneficialOwner,"","","","","","","");
    this.beneficialOwner = new BeneficialOwner(0,"","");

    this.forma = new FormGroup({

      'id': new FormControl(),
      'name': new FormControl('', Validators.required),
      'lastname': new FormControl(),
      'lastname2': new FormControl(),
      'phone': new FormControl('', [Validators.required,
                                    Validators.pattern("^[0-9]{10}"),
                                
                                    Validators.minLength(10),
                                    Validators.maxLength(10),
                                   ]),
      'email': new FormControl('', [
                                      Validators.required, 
                                      Validators.pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})")
                                   ]),
      'userName': new FormControl(),

      'password': new FormControl('', [
                                       Validators.required,
                                       Validators.pattern("^[a-zA-Z0-9]*$"),
                                       Validators.minLength(8)
                                      ]),
      'password2':new FormControl('',Validators.required),


      'beneficialOwner':new FormGroup({
                                      id: new FormControl(),
                                      description:new FormControl(''),
                                      registerDate:new FormControl('2019-02-14T01:03:48.290')
                                      })
           
    })



    this.forma.controls['password2'].setValidators([
      Validators.required, 
      this.noIgual.bind( this.forma )
    ])

  }

  ngOnInit() {
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
   console.log(this.forma.value);
   console.log(this.forma.value.name);
   this.forma.value.userName = this.forma.value.email
   //console.log(this.forma.value);
    this.userFacade.createUser(this.forma.value).subscribe(
   
              (data: Response<Userlist>) => {
                      console.log("datos = " + JSON.stringify(data));
                    if(data.success == true){
                      this.status = "success"
                      //muestra modal al registrar
                      $("#exampleModal").modal('show');   
                      }else{
                    
                        this.status = "error"
                      //manda error en registro
                        this.userStatus= data.status.message;
                        console.log(this.userStatus)
                      
                      }
                    }, (e)=>{
                    console.log("Error al registrar")
                      this.status = "error"
                      console.log("Error al registrar")
                       console.log(e)
                      this.userStatus= e.message;
                     
                  });
                }
              
              }
            