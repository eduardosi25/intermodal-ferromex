import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
import { AuthenticateFacadeService } from './facade/authenticate-facade.service';
import { HttpClientModule } from '@angular/common/http';
import { ServicesFacadeService } from './facade/services-facade.service';
import { RoutesFacadeService } from './facade/routes-facade.service';
import { ContainerFacadeService } from './facade/container-facade.service';
import { UserFacadeService } from './facade/user-facade.service';
import { TareFacadeService } from './facade/tare-facade.service';
import { TareService } from './services/tare.service';
import { CommonService } from './common.service';
import { SharedService } from './services/authenticate.service';
import { UserService } from './services/user.service';
import { TerminalsService } from './services/terminals.service';
import { TerminalsFacadeService } from './facade/terminals-facade.service';
import { RoutesService } from './services/routes.service';
import { ContainersService } from './services/containers.service';
import { ServicesService } from './services/services.service'
import { PaymentFacadeService } from './facade/payment-facade.service'
import { BookingFacadeService } from './facade/booking-facade.service'
import { PaymentService } from './services/payment.service'
import { BookingService } from './services/booking.service'

/**
 * Clase que se exporta a el shared.module, para que a su vez, este último se exporte al app.module
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CommonService,
    

    //Facade
    AuthenticateFacadeService,
    ServicesFacadeService,
    RoutesFacadeService,
    ContainerFacadeService,
    UserFacadeService,
    TerminalsFacadeService, 
    PaymentFacadeService,
    BookingFacadeService, 

    //Service
    SharedService,
    UserService,
    TerminalsService,
    RoutesService,
    ContainersService,
    ServicesService,
    PaymentService,
    BookingService,
    
    // Eliminar depués
    TareFacadeService,
    TareService,

    HttpClientModule
  ]
})
export class ServicesFacadeModule { }
