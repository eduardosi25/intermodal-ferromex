import { Injectable, Injector } from '@angular/core';
import { ContainersService } from '../services/containers.service';
import { PaymentReference  } from '../../../models/paymentReference';
@Injectable()
export class ContainerFacadeService {

  constructor(private injector: Injector) { }

  private _containerService: ContainersService;
  public get containerService(): ContainersService {
    if (!this._containerService) {
      this._containerService = this.injector.get(ContainersService);
    }
    return this._containerService;
  }

  getContainers() {
    return this.containerService.getContainers();
  }

  getContainerById(id_container: any) {
    return this.containerService.getContainerById(id_container);
  }

  getContainerInsurance() {
    return this.containerService.getContainerInsurance();
  }
}
