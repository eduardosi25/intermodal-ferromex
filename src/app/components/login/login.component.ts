import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router, ActivatedRoute}from '@angular/router';
// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;
//Models
import { User } from '../../models/user';
import { UserToken } from '../../models/userToken';
import { Response } from './../../models/Response';
import { Userlist } from './../../models/userList';
import { BeneficialOwner } from './../../models/beneficialOwner';
import { Quotes } from './../../models/quotes'; 
import { Booking } from './../../models/booking';
import { Address } from '../../models/address';
import { Contact } from '../../models/contact';
import { Feedback } from '../../models/feedback';
import { PaymentReference } from '../../models/paymentReference';
import { BookingPayment } from '../../models/bookingPayment';
import { Bank } from '../../models/bank';
import { BookingId } from '../../models/bookingId';
import { Container } from '../../models/container';
import { ContainerType } from '../../models/containerType';
import { Containers } from '../../models/containers';
import { Destination } from '../../models/destination';
import { DocumentType } from '../../models/documentType';
import { Equipment } from '../../models/equipment';
import { Estatus } from '../../models/estatus';
import { ExchangeRate } from '../../models/exchangeRate';
import { ImdDocument } from '../../models/imdDocument';
import { insurancePercentage } from '../../models/insurancePercentage';
import { Route } from '../../models/route';
import { ServiceType } from '../../models/serviceType';
import { Source } from '../../models/source';
import { Stcc } from '../../models/stcc';
import { TerminalDst } from '../../models/terminalDst';
import { TerminalSrc } from '../../models/terminalSrc';
import { TerminalSrc2 } from '../../models/terminalSrc2';
import { StatusCode } from '../../models/StatusCode';
import { PaymentMethod } from '../../models/paymenthMethod';
import { AdditionalService } from '../../models/additionalService';
import { AdditionalServiceType } from '../../models/additionalServiceType';
import { AtrDst } from '../../models/atrsDtr';
import { ArtSrc } from '../../models/atrsSrc';
import { BookingServices } from '../../models/bookingServices';
import { CancelationReason } from '../../models/cancelationReason';



//Servicios
import { AuthenticateFacadeService } from '../../common/facade-services/facade/authenticate-facade.service';
import { UserFacadeService } from '../../common/facade-services/facade/user-facade.service'
import { TerminalsFacadeService } from '../../common/facade-services/facade/terminals-facade.service';
import { RoutesFacadeService } from '../../common/facade-services/facade/routes-facade.service';
import { ContainerFacadeService } from '../../common/facade-services/facade/container-facade.service';
import { ServicesFacadeService } from '../../common/facade-services/facade/services-facade.service';
import { PaymentFacadeService } from '../../common/facade-services/facade/payment-facade.service';
import { BookingFacadeService } from '../../common/facade-services/facade/booking-facade.service';
// import { Response } from '../../models/Response';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: string;
  public user: User;
  public userRegister: Userlist;
  public beneficialOwner: BeneficialOwner;
  public address: Address;
  public contact: Contact;
  public token: UserToken;
  public quotes: Quotes; 
  public booking: Booking;
  public feedback: Feedback;
  public paymentReference: PaymentReference;
  public bookingPayment: BookingPayment;
  public bank: Bank;
  public bookingId: BookingId;
  public container: Container
  public containerType: ContainerType
  public containers: Containers
  public destination: Destination
  public documentType: DocumentType
  public equipment: Equipment
  public estatus: Estatus
  public exchangeRate: ExchangeRate
  public imdDocument: ImdDocument
  public insurancePercentage: insurancePercentage
  public route: Route
  public serviceType: ServiceType
  public source: Source
  public stcc: Stcc
  public terminalDst: TerminalDst
  public terminalSrc: TerminalSrc
  public terminalSrc2: TerminalSrc2
  public statusCode: StatusCode
  public paymentMethod: PaymentMethod
  public additionalService: AdditionalService
  public additionalServiceType: AdditionalServiceType
  public atrDst: AtrDst
  public atrSrc: ArtSrc
  public bookingService: BookingServices
  public cancelationReason: CancelationReason
  public status:string
  public identity;
  public userStatus:string;
  constructor(
    private authorizationFacade: AuthenticateFacadeService,
    private userFacade: UserFacadeService,
    private terminalFacade: TerminalsFacadeService,
    private routesFacade: RoutesFacadeService,
    private containerFacade: ContainerFacadeService,
    private servicesFacade: ServicesFacadeService,
    private paymentFacade: PaymentFacadeService,
    private bookingFacade: BookingFacadeService,
    private _route:ActivatedRoute,
    private _router:Router
    ) {
      this.user = new User("", "", false);
      this.token = new UserToken("");
      this.beneficialOwner = new BeneficialOwner(0,"qwert","2019-02-14T01:03:48.290");
      this.userRegister = new Userlist("Lastname2",this.beneficialOwner,"username2","1","example2@example.com","42","Lastbane22","Test","X6#5*SRU4q");
      this.contact = new Contact("","","","","");
      this.address = new Address("1",this.userRegister,"1","1","1","1","1","1","1",true);
      this.feedback = new Feedback(0,0,"");
      this.bank = new Bank(0,"");
      let type = {id:0, description:""};
      let type1 = {id:0, name:""};
      let type2 = { id:0, type:""};
      let type3 = { id:0, rate:1};
      this.paymentMethod= new PaymentMethod(0,"","",0);
      this.additionalService = new AdditionalService("","");
      this.bookingService = new BookingServices(0,"","",this.additionalService);
      this.container = new Container("","");
      this.destination = new Destination(0,"","","",null,0,0,"",null,0,null,null,0,0);
      this.cancelationReason = new CancelationReason(0,"");
      this.containerType = new ContainerType(0,"","",type1,0,0,0,0,0,0,0,this.bookingService[1]);
      this.terminalSrc = new TerminalSrc(0,"","","",null,0,null,"",null,0,null,null,0,0);
      this.terminalDst = new TerminalDst(0,"","","",null,0,null,"",null,0,null,null,0,0);
      this.terminalSrc2 = new TerminalDst(0,"","","",null,0,null,"",null,0,null,null,0,0);
      this.route = new Route(0,this.terminalSrc,this.terminalDst,type2,0);
      this.source = new Source(0,"","","",null,0,0,"",null,0,null,null,0,0);
      this.atrSrc = new ArtSrc (0,0,"","2019-02-14T01:03:48.290",type,"2019-02-14T01:03:48.290",
      "","","2019-02-14T01:03:48.290","",this.cancelationReason,"","2019-02-14T01:03:48.290",0,this.address); 
      this.atrDst = new AtrDst (0,0,"","2019-02-14T01:03:48.290",type,"2019-02-14T01:03:48.290",
      "","","2019-02-14T01:03:48.290","",this.cancelationReason,"","2019-02-14T01:03:48.290",0,this.address);
      this.estatus = new Estatus(0,"","");
      this.stcc = new Stcc(0,"","",0);
      this.documentType = new DocumentType(0,"")
      this.imdDocument = new ImdDocument(0,this.documentType,"","","");
      this.exchangeRate = new ExchangeRate(0,0,"","");
      this.insurancePercentage = new insurancePercentage(0,0,"","",this.exchangeRate);
      this.additionalService = new AdditionalService("","");
      this.additionalServiceType = new AdditionalServiceType(0,"","",this.additionalService);
      this.booking = new Booking(0,this.container,"",this.terminalSrc,"","",this.estatus,"","",this.cancelationReason,"",this.terminalDst,0,0,this.atrSrc,"",this.atrDst,this.containerType,this.terminalSrc2,"","",this.beneficialOwner);
      this.containers = new Containers(0,this.booking,this.containerType,0,this.stcc,this.additionalServiceType,0,0,this.insurancePercentage,this.imdDocument);
      this.bookingId = new BookingId(0,this.container,
        "2019-02-14T01:03:48.290",this.terminalSrc,"2019-02-14T01:03:48.290",
        "",this.estatus,
        "2019-02-14T01:03:48.290","2019-02-14T01:03:48.290",
        this.cancelationReason,"",
        this.terminalDst,0,0,this.atrSrc,"2019-02-14T01:03:48.290",
        this.atrDst,this.containerType,this.terminalSrc2,
        "","2019-02-14T01:03:48.290",this.beneficialOwner);
      this.paymentReference = new PaymentReference(0,"",this.bank,this.bookingId);
      this.quotes = new Quotes(0,this.serviceType,this.route,this.source,this.destination,0,"2019-02-14T01:03:48.290","2019-02-14T01:03:48.290",0,"2019-02-14T01:03:48.290","2019-02-14T01:03:48.290",type1,this.userRegister,this.paymentMethod,type3,0,"",this.containers[0])
  }

  ngOnInit() {
    // this.authorizationFacade.session(this.user).subscribe(

    //   (data: Response<UserToken>) => {
    //     if(data.success){
        
    //     this.identity=this.user;
    //     this.token.token = data.response.token;
    //     localStorage.setItem('token', this.token.token);
    //     localStorage.setItem('identity', JSON.stringify(this.identity));
    //     this.status = "success"
    //     this._router.navigate(['/']);
    //     }else{   
    //       this.status = "error"
    //     }
    //   }, (e)=>{
    //     this.status = "error"
    //   });
//Este es para listado de users
//       this.userFacade.getUsers().subscribe(
//         (data: Response<Userlist>) => {
//         console.log("Listado de Users")
//           console.log(data.response);
//         });
// ////Este es para user by id
//         this.userFacade.getUserById('2').subscribe(
//           (data: Response<Userlist>) => {
//             console.log("User By Id")
//             console.log(data.response);
//           });
// ////Este es para crear un usuario
//           this.userFacade.createUser(this.userRegister).subscribe(
//             (data: Response<Userlist>) => {
//             console.log("Create User")
//             console.log(data);
//             });
// ////Este es para modificar un usuario
//           this.userFacade.setUser('2', this.userRegister).subscribe(
//             (data: Response<Userlist>) => {
//             console.log("Update User")
//             console.log(data);
//             });
// ////Este es para modificar un password
          // this.userFacade.setPassword('2', 'pruebaCambioPass').subscribe(
          //   (data: Response<Boolean>) => {
            
          //   console.log("Update Passwords")
          //   console.log(data);
          //   });
// ////Este es para obtener listado de cuotas
//           this.userFacade.getQuotes('1').subscribe(
//             (data: Response<Quotes>) => {
//             console.log("Quotes")
//             console.log(data.response);
//             });
// ////Este es para obtener listado de cuotas por usuario
//           this.userFacade.getQuotesById('1', '0').subscribe(
//             (data: Response<Quotes>) => {
//             console.log("Quotes by id")
//             console.log(data.response);
//             });
// ////Este es para obtener listado booking
//           this.userFacade.getUserBooking('1').subscribe(
//            (data) => {
//            console.log("Booking")
//            console.log(data);
//            });
// ////Este es para obtener listado booking
//           this.userFacade.getUserBookingById('1', '0').subscribe(
//            (data) => {
//            console.log("Booking by id")
//            console.log(data);
//            });
// ////Este es para obtener Address
//           this.userFacade.getUserAddress('2').subscribe(
//             (data) => {
//             console.log("User Address")
//             console.log(data);
//             });
// ////Este es para crear Address
//           this.userFacade.createUserAdress('2', this.address).subscribe(
//             (data: Response<Address>) => {
//             console.log("Crear Address")
//             console.log(data);
//             });
// ////Este es para obtener Address by id
//           this.userFacade.getUserAdressById('1', '2').subscribe(
//             (data) => {
//             console.log("Obtener Address By Id")
//             console.log(data);
//             });
// ////Este es para Actualizar Address by id
//           this.userFacade.setUserAdress('1', '1', this.address).subscribe(
//             (data) => {
//             console.log("Actualizar Address By Id")
//             console.log(data.response);
//             });
// ////Este es para Eliminar Address by id
//           this.userFacade.deleteUserAdress('1', '3').subscribe(
//             (data) => {
//             console.log("Eliminar Address By Id")
//             console.log(data);
//             });

// ////Este es para hacer el feedback proporcionada por el cliente
//           this.userFacade.setUserFeedback('1', '2', this.feedback).subscribe(
//             (data) => {
//             console.log("Feedback")
//             console.log(data.response);
//             });

// ////Este es para Restore password
//           this.userFacade.restorePassword('username2').subscribe(
//             (data) => {
//             console.log("Restore password")
//             console.log(data.response);
//             });

// ////Este es para Obtener las terminales
//           this.terminalFacade.getTerminals().subscribe(
//             (data) => {
//             console.log("Terminales")
//             console.log(data);
//             });
// ////Este es para Obtener las terminales by id
//           this.terminalFacade.getTerminalsById('2').subscribe(
//             (data) => {
//             console.log("Routes")
//             console.log(data);
//             });
// ////Este es para Obtener las Rutas
//             this.routesFacade.getRoutes().subscribe(
//               (data) => {
//               console.log("Routes")
//               console.log(data);
//               });
// ////Este es para Obtener Ruta by id
//           this.routesFacade.getRoutesById('8').subscribe(
//             (data) => {
//             console.log("Routes by Id")
//             console.log(data);
//             });
// ////Este es para Obtener las terminales by id
//           this.routesFacade.getRoutesEta('2').subscribe(
//             (data) => {
//             console.log("Routes Eta")
//             console.log(data);
//             });

// ////Este es para Obtener container
//           this.containerFacade.getContainers().subscribe(
//             (data) => {
//             console.log("Contaiers")
//             console.log(data);
//             });
// ////Este es para Obtener container by id
//           this.containerFacade.getContainerById('0').subscribe(
//             (data) => {
//             console.log("Containers by id")
//             console.log(data);
//             });
// ////Este es para Obtener routes eta
//           this.routesFacade.getRoutesEta('2').subscribe(
//             (data) => {
//             console.log("Routes Eta")
//             console.log(data);
//             });
// ////Este es para Obtener cotizacion del seguro
//           this.containerFacade.getContainerInsurance().subscribe(
//             (data) => {
//             console.log("Cotizacion del seguro")
//             console.log(data);
//             });

// ////Este es para Obtener listado de servicios intermodal
//           this.servicesFacade.getServices().subscribe(
//             (data) => {
//             console.log("Servicios intermodal")
//             console.log(data);
//             });
// ////Este es para Obtener servicio de intermodal by id
//           this.servicesFacade.getServiceById('0').subscribe(
//             (data) => {
//             console.log("servicio intermodal by id")
//             console.log(data);
//             });
// ////Este es para Obtener listado de servicios intermodal adicionales
//           this.servicesFacade.getServices().subscribe(
//             (data) => {
//             console.log("Servicios intermodal adicionales")
//             console.log(data);
//             });
// //Este es para Obtener servicio de intermodal by id adicionales
//           this.servicesFacade.getServiceById('1').subscribe(
//             (data) => {
//             console.log("servicio intermodal by id adicionales")
//             console.log(data);
//             });
// //Este es para Obtener el tipo de intercambio
//           this.servicesFacade.getExchangerate().subscribe(
//             (data) => {
//             console.log("Tipo de intercambio")
//             console.log(data);
//             });
// //Este es para Obtener listado de bancos
//           this.paymentFacade.getPaymentBank().subscribe(
//             (data) => {
//             console.log("Listado de bancos")
//             console.log(data);
//             });
// //Este es para Obtener banco por id
//           this.paymentFacade.getPaymentBankById('2').subscribe(
//             (data) => {
//             console.log("Banco by id")
//             console.log(data);
//             });
// //Este es para agregar referencia bancaria del pago realizado
//           this.paymentFacade.setPaymentReference(this.paymentReference).subscribe(
//             (data) => {
//             console.log("Referencia bancaria")
//             console.log(data.response);
//             });
// //Este es para agregar un nuevo mensaje desde el formulario Contactos
//           this.authorizationFacade.createContact(this.contact).subscribe(
//             (data) => {
//             console.log("Message Contact")
//             console.log(data.response);
//             });

// //Este es para obtener la validacion del peso
//           this.bookingFacade.getBookingWeight().subscribe(
//             (data) => {
//             console.log("Weight")
//             console.log(data);
//             });
// //Este es para obtener el listado de los tipos de documentos
//           this.bookingFacade.getBookingDocumentTypes().subscribe(
//             (data) => {
//             console.log("DocumentTypes")
//             console.log(data);
//             });
// //Este es para obtener un documento
//           this.bookingFacade.getBookingDocumentTypesById('1').subscribe(
//             (data) => {
//             console.log("DocumentTypes By Id")
//             console.log(data);
//             });
// //Este es para obtener un listado de stcc
//           this.bookingFacade.getBookingStcc().subscribe(
//             (data) => {
//             console.log("Stcc")
//             console.log(data);
//             });
// //Este es para obtener un stcc
//           this.bookingFacade.getBookingStccById('1').subscribe(
//             (data) => {
//             console.log("Stcc By Id")
//             console.log(data);
//             });
// //Este es para obtener un listado de cdfi
//           this.bookingFacade.getBookingCfdi().subscribe(
//             (data) => {
//             console.log("Cfdi")
//             console.log(data);
//             });
// //Este es para obtener un cfdi
//           this.bookingFacade.getBookingCfdiById('1').subscribe(
//             (data) => {
//             console.log("Cfdi By Id")
//             console.log(data);
//             });
// //Este es para obtener un listado de dias libres
//           this.bookingFacade.getBookingHolidays().subscribe(
//             (data) => {
//             console.log("Holiday")
//             console.log(data);
//             });
// //Este es para obtener un dia libre
//           this.bookingFacade.getBookingHolidaysById('1').subscribe(
//             (data) => {
//             console.log("Holiday By Id")
//             console.log(data);
//             });
// //Este es para procesar la tabla de pagos
//           this.bookingFacade.setBookingPayment(this.bookingPayment).subscribe(
//             (data) => {
//             console.log("Payment")
//             console.log(data.response);
//             });
// //Este es para obtener la lista de los metodos de pago
//           this.bookingFacade.getBookingPaymentMethod().subscribe(
//             (data) => {
//             console.log("PaymentMethod")
//             console.log(data);
//             });
// //Este es para obtiene un metodo de pago
//           this.bookingFacade.getBookingPaymentMethodById('1').subscribe(
//             (data) => {
//             console.log("PaymentMethod By Id")
//             console.log(data);
//             });


// //Este es para procesar la tabla de pagos
//           this.userFacade.setUserQuotes('1', this.quotes).subscribe(
//             (data) => {
//             console.log("Payment")
//             console.log(data.response);
//             });
        }

        
login(){
  //////Este es para el logueo
    //console.log(this.user)
    
    this.authorizationFacade.session(this.user).subscribe(
      (data) => {
        console.log(data);
        var p = data
        console.log(p.response.user.id);
        // alert(data.status.success)
        if(data.success == true){
        this.identity=this.user;
        // console.log(data.response.token)
        this.token.token = data.response.token;
        localStorage.setItem('token', this.token.token);
        localStorage.setItem('identity', JSON.stringify(this.identity));
        localStorage.setItem('id', p.response.user.id);
        localStorage.setItem('name', p.response.user.name);
        this.status = "success"
        this._router.navigate(['/']);
        }else{   
          this.status = "error"
          // console.log(this.status)
          // console.log(data.success)
          // console.log (data.status.message)
          this.userStatus = data.status.message;

        }
      }, (e)=>{
        this.status = "error"
        console.log(e)
        this.userStatus =e.error.status.message;
          // console.log (data.status.message)
      });
      

}


}
