import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../common.service';
import { Response } from '../../../models/Response';
import { Observable } from 'rxjs';
import { Quotes } from '../../../models/quotes'; 

@Injectable()
export class ServicesService {
  public urlApi = environment.api.url;
  public intermodalservice = environment.api.methods.intermodalService.service;
  public additionalservice = environment.api.methods.intermodalService.additional;
  public exchangerate = environment.api.methods.intermodalService.exchangerate;
  constructor(private http: HttpClient, private generalService: CommonService) { }

  getServices()   {
    const url = this.urlApi + this.intermodalservice;
    return this.http.get(url, {headers: this.generalService.setHeader(null, null)});
}

  getServiceById(id_service: any)   {
    const url = this.urlApi + this.intermodalservice + '/' + id_service;
    return this.http.get(url, {headers: this.generalService.setHeader(null, null)});
  }

  getAdditionalServices()  {
    const url = this.urlApi + this.additionalservice;
    return this.http.get(url, {headers: this.generalService.setHeader(null, null)});
  }

  getExchangerate()  {
    const url = this.urlApi + this.exchangerate;
    return this.http.get(url, {headers: this.generalService.setHeader(null, null)});
  }

  getAdditionalServicesById(id_service: any) {
    const url = this.urlApi + this.additionalservice + '/' + id_service;
    return this.http.get(url, {headers: this.generalService.setHeader(null, null)});
  }
}

