import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { NewPasswordComponent } from './components/recovery/new-password/new-password.component';
import { SuccessfulComponent } from './components/register/successful/successful.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { TermsComponent } from './components/terms/terms.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { LegalComponent } from './components/legal/legal.component';
import { HomeComponent } from './components/home/home.component';
import { SatisfactionComponent } from './components/satisfaction/satisfaction.component';
import { ReceivedComponent } from './components/recovery/received/received.component';
import { NewComponent } from './components/recovery/new/new.component';
import { QuotationsComponent } from './components/quotations/quotations.component';
import { StartLoadComponent } from './components/start-load/start-load.component';
import { PrepareLoadComponent } from './components/prepare-load/prepare-load.component';
import { AditionalServiceComponent } from './components/aditional-service/aditional-service.component';
import { RegisterLoadComponent } from './components/register-load/register-load.component';
import { BillComponent } from './components/bill/bill.component';
import { PayComponent } from './components/pay/pay.component';
import { PayDepositComponent } from './components/pay/pay-deposit/pay-deposit.component';
import { PayCardComponent } from './components/pay/pay-card/pay-card.component';
import { FollowLoadComponent } from './components/load/follow-load/follow-load.component';
import { StatusLoad1Component } from './components/load/status-load1/status-load1.component';
import { StatusLoad2Component } from './components/load/status-load2/status-load2.component';
import { StatusLoad3Component } from './components/load/status-load3/status-load3.component';
import { StatusLoad4Component } from './components/load/status-load4/status-load4.component';
import { StatusLoad5Component } from './components/load/status-load5/status-load5.component';
import { FollowLoadTimeComponent } from './components/load/follow-load-time/follow-load-time.component';
import { FollowLoadPaymentComponent } from './components/load/follow-load-payment/follow-load-payment.component';
import { FollowCardComponent } from './components/pay/follow-card/follow-card.component';


// Modules
import { UserModule } from './components/user/user.module';
import { LoginModule } from './components/login/login.module';
import { SharedModule } from './common/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    RecoveryComponent,
    NewPasswordComponent,
    SuccessfulComponent,
    TermsComponent,
    FaqsComponent,
    LegalComponent,
    ContactanosComponent,
    HomeComponent,
    SatisfactionComponent,
    ReceivedComponent,
    NewComponent,
    QuotationsComponent,
    StartLoadComponent,
    PrepareLoadComponent,
    AditionalServiceComponent,
    RegisterLoadComponent,
    BillComponent,
    PayComponent,
    PayDepositComponent,
    PayCardComponent,
    FollowLoadComponent,
    StatusLoad1Component,
    StatusLoad2Component,
    StatusLoad3Component,
    StatusLoad4Component,
    StatusLoad5Component,
    FollowLoadTimeComponent,
    FollowLoadPaymentComponent,
    FollowCardComponent

  ],
  /**
   * Importar todos el modules de cada componente
   * i.e UserModule, tendrá UserProfileComponent, etc. Así no importaremos todos los componentes.
   */
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    SharedModule,
    LoginModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
