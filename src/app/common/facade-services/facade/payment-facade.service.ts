import { Injectable, Injector } from '@angular/core';
import { PaymentService } from '../services/payment.service';

@Injectable()
export class PaymentFacadeService {

  constructor(private injector: Injector) { }

  private _paymentsService: PaymentService;
  public get paymentService(): PaymentService {
    if (!this._paymentsService) {
      this._paymentsService = this.injector.get(PaymentService);
    }
    return this._paymentsService;
  }
  getPaymentBank() {
    return this.paymentService.getPaymentBank();
  }

  getPaymentBankById(id_bank: any) {
    return this.paymentService.getPaymentBankById(id_bank);
  }

  setPaymentReference(body: any) {
    return this.paymentService.setPaymentReference(body);
  }
}