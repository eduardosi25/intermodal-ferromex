import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../common.service';
import { Response } from '../../../models/Response';
import { Observable } from 'rxjs';
import { Quotes } from '../../../models/quotes';

@Injectable()
export class BookingService {

  public urlApi = environment.api.url;
  public urlBooking = environment.api.methods.booking.bookings;
  public urlBookingWeght = environment.api.methods.booking.bookingWeight;
  public urlBookingDoc = environment.api.methods.booking.bookingDoc;
  public urlBookingStcc = environment.api.methods.booking.bookingStcc;
  public urlBookingCfdi = environment.api.methods.booking.bookingCfdi;
  public urlBookingHolidays = environment.api.methods.booking.bookingHolidays;
  public urlBookingPayment = environment.api.methods.booking.bookingPayment;
  public urlBookingPaymentMethod = environment.api.methods.booking.bookingPaymentMethod;
  public iTCreatePayment = environment.api.methods.XIT.iTCreatePayment;
  constructor(private http: HttpClient, private generalService: CommonService) { }

  getBookingWeight(){
    const url = this.urlApi + this.urlBooking + this.urlBookingWeght;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  }
  getBookingDocumentTypes(){
    const url = this.urlApi + this.urlBooking + this.urlBookingDoc;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  }
  getBookingDocumentTypesById(id_doc: any){
    const url = this.urlApi + this.urlBooking + this.urlBookingDoc + '/' + id_doc;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  }
  getBookingStcc(){
    const url = this.urlApi + this.urlBooking + this.urlBookingStcc;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  }
  getBookingStccById(id_stcc: any){
    const url = this.urlApi + this.urlBooking + this.urlBookingStcc + '/' + id_stcc;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  }
  getBookingCfdi(){
    const url = this.urlApi + this.urlBooking + this.urlBookingCfdi;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  }
  getBookingCfdiById(id_cfdi: any){
    const url = this.urlApi + this.urlBooking + this.urlBookingCfdi + '/' + id_cfdi;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  }
  getBookingHolidays(){
    const url = this.urlApi + this.urlBooking + this.urlBookingHolidays;
    return this.http.get(url, { headers: this.generalService.setHeader(null, null) });
  }
  getBookingHolidaysById(id_holidays){
    const url = this.urlApi + this.urlBooking + this.urlBookingHolidays + "/" + id_holidays;
    return this.http.get(url, { headers: this.generalService.setHeader(null , null) });
  }
  setBookingPayment(body: any): Observable<Response<Quotes>> {
    const url = this.urlApi + this.urlBooking + this.urlBookingPayment;
    return this.http.post<Response<Quotes>>(url, body, { headers: this.generalService.setHeader(this.iTCreatePayment , true) });
  }
  getBookingPaymentMethod(){
    const url = this.urlApi + this.urlBooking + this.urlBookingPaymentMethod;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  }
  getBookingPaymentMethodById(id_paymentMethod){
    const url = this.urlApi + this.urlBooking + this.urlBookingPaymentMethod + "/" + id_paymentMethod;
    return this.http.get(url, { headers: this.generalService.setHeader(null, true) });
  }
}