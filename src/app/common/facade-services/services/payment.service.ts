import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../common.service';
import { Response } from '../../../models/Response';
import { Observable } from 'rxjs';
import { Quotes } from '../../../models/quotes';
import { PaymentReference } from '../../../models/paymentReference';


@Injectable()
export class PaymentService {

  public urlApi = environment.api.url;
  public bank = environment.api.methods.payment.payments;
  public bankRef = environment.api.methods.payment.paymentRef;
  public iTCreatereference =  environment.api.methods.XIT.iTCreatereference;


  constructor(private http: HttpClient, private generalService: CommonService) { }

  getPaymentBank() {
    const url = this.urlApi + this.bank;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  }

  getPaymentBankById(id_bank: any){
    const url = this.urlApi + this.bank + '/' + id_bank;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  }

  setPaymentReference(body: PaymentReference): Observable<Response<PaymentReference>> {
    const url = this.urlApi + this.bankRef;
    return this.http.post<Response<PaymentReference>>(url, body, { headers: this.generalService.setHeader(this.iTCreatereference, true) });
  }
}