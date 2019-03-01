import { NgModule } from '@angular/core';
import { provideRoutes, Routes, RouterModule } from '@angular/router';

// componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { NewPasswordComponent } from './components/recovery/new-password/new-password.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { SuccessfulComponent } from './components/register/successful/successful.component';
import { TermsComponent } from './components/terms/terms.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { LegalComponent } from './components/legal/legal.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { ReceivedComponent } from './components/recovery/received/received.component';
import { NewComponent } from './components/recovery/new/new.component';
import { SatisfactionComponent } from './components/satisfaction/satisfaction.component';
import { HomeComponent } from './components/home/home.component';
import { QuotationsComponent } from './components/quotations/quotations.component';
import { PrepareLoadComponent } from './components/prepare-load/prepare-load.component';
import { AditionalServiceComponent } from './components/aditional-service/aditional-service.component';
import { RegisterLoadComponent } from './components/register-load/register-load.component';
import { BillComponent } from './components/bill/bill.component';
import { PayComponent } from './components/pay/pay.component';
import { PayDepositComponent } from './components/pay/pay-deposit/pay-deposit.component';
import { PayCardComponent } from './components/pay/pay-card/pay-card.component';
import { StartLoadComponent } from './components/start-load/start-load.component';
import { FollowLoadComponent } from './components/load/follow-load/follow-load.component';
import { FollowLoadTimeComponent } from './components/load/follow-load-time/follow-load-time.component';
import { StatusLoad1Component } from './components/load/status-load1/status-load1.component';
import { StatusLoad2Component } from './components/load/status-load2/status-load2.component';
import { StatusLoad3Component } from './components/load/status-load3/status-load3.component';
import { StatusLoad4Component } from './components/load/status-load4/status-load4.component';
import { StatusLoad5Component } from './components/load/status-load5/status-load5.component';
import { FollowLoadPaymentComponent } from './components/load/follow-load-payment/follow-load-payment.component';
import { FollowCardComponent } from './components/pay/follow-card/follow-card.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro-usuarios', component: RegisterComponent},
  {path: 'registro-usuarios/usuario-registrado', component: SuccessfulComponent},
  {path: 'recuperacion-contrasena', component: RecoveryComponent},
  {path: 'recuperacion-contrasena/recibido', component: ReceivedComponent},
  {path: 'recuperacion-contrasena/nueva', component: NewComponent},
  {path: 'introduccion-nueva-contrasena', component: NewPasswordComponent},
  {path: 'mi-cuenta', component: UserProfileComponent},
  {path: 'satisfaccion-usuario', component: SatisfactionComponent},
  {path: 'cotizaciones', component: QuotationsComponent}, 
  {path: 'registra-tu-carga', component: RegisterLoadComponent},
  {path: 'factura', component: BillComponent},
  {path: 'paga', component:PayComponent},
  {path: 'paga-deposito', component:PayDepositComponent},
  {path: 'paga-tarjeta', component:PayCardComponent},
  {path: 'sigue-tu-card', component: FollowCardComponent},
  {path: 'inicia-tu-carga', component: StartLoadComponent},
  {path: 'prepara-tu-carga', component: PrepareLoadComponent},
  {path: 'sigue-tu-carga', component:FollowLoadComponent},
  {path: 'seguimiento-de-carga-1', component:StatusLoad1Component},
  {path: 'seguimiento-de-carga-2', component:StatusLoad2Component},
  {path: 'seguimiento-de-carga-3', component:StatusLoad3Component},
  {path: 'seguimiento-de-carga-4', component:StatusLoad4Component},
  {path: 'seguimiento-de-carga-5', component:StatusLoad5Component},
  {path: 'seguimiento-de-carga-5', component:StatusLoad5Component},
  {path: 'sigue-tu-carga-tiempo', component:FollowLoadTimeComponent},
  {path: 'servicios-adicionales', component: AditionalServiceComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'contactanos', component: ContactanosComponent},
  {path: 'terminos-condiciones', component: TermsComponent},
  {path: 'aviso-legal', component: LegalComponent},
  {path: 'sigue-tu-carga-pago-generado', component: FollowLoadPaymentComponent}

  
  
  ];
  export const APP_ROUTER_PROVIDERS = [provideRoutes(routes)];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
