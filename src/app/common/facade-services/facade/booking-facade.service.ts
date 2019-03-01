import { Injectable, Injector } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Injectable()
export class BookingFacadeService {

  constructor(private injector: Injector) { }

  private _bookingsService: BookingService;
  public get bookingService(): BookingService {
    if (!this._bookingsService) {
      this._bookingsService = this.injector.get(BookingService);
    }
    return this._bookingsService;
  }
  getBookingWeight() {
    return this.bookingService.getBookingWeight();
  }

  getBookingDocumentTypes() {
    return this.bookingService.getBookingDocumentTypes();
  }

  getBookingDocumentTypesById(id_doc: any) {
    return this.bookingService.getBookingDocumentTypesById(id_doc);
  }

  getBookingStcc() {
    return this.bookingService.getBookingStcc();
  }

  getBookingStccById(id_stcc: any) {
    return this.bookingService.getBookingStccById(id_stcc);
  }

  getBookingCfdi() {
    return this.bookingService.getBookingCfdi();
  }

  getBookingCfdiById(id_cfdi: any) {
    return this.bookingService.getBookingCfdiById(id_cfdi);
  }

  getBookingHolidays() {
    return this.bookingService.getBookingHolidays();
  }

  getBookingHolidaysById(id_holidays: any) {
    return this.bookingService.getBookingHolidaysById(id_holidays);
  }

  setBookingPayment(body: any) {
    return this.bookingService.setBookingPayment(body);
  }

  getBookingPaymentMethod() {
    return this.bookingService.getBookingPaymentMethod();
  }

  getBookingPaymentMethodById(id_PayMethod: any) {
    return this.bookingService.getBookingPaymentMethodById(id_PayMethod);
  }

}