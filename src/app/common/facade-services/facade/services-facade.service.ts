import { Injectable, Injector } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Injectable()
export class ServicesFacadeService {

  constructor(private injector: Injector) { }

  private _serviceServices: ServicesService;
  public get serviceServices(): ServicesService {
    if (!this._serviceServices) {
      this._serviceServices = this.injector.get(ServicesService);
    }
    return this._serviceServices;
  }

  getServices() {
    return this.serviceServices.getServices();
  }

  getServiceById(id_service: any) {
    return this.serviceServices.getServiceById(id_service);
  }

  getAdditionalServices() {
    return this.serviceServices.getAdditionalServices();
  }

  getAdditionalServiceById(id_service: any) {
    return this.serviceServices.getAdditionalServicesById(id_service);
  }

  getExchangerate() {
    return this.serviceServices.getExchangerate();
  }

}
