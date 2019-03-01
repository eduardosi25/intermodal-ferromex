import { Injectable, Injector } from '@angular/core';
import { RoutesService } from '../services/routes.service';

@Injectable()
export class RoutesFacadeService {

  constructor(private injector: Injector) { }

  private _routeService: RoutesService;
  public get routeService(): RoutesService {
    if (!this._routeService) {
      this._routeService = this.injector.get(RoutesService);
    }
    return this._routeService;
  }

  getRoutes() {
    return this.routeService.getRoutes();
  }

  getRoutesById(id_route: any) {
    return this.routeService.getRoutesById(id_route);
  }

  getRoutesEta(id_route: any) {
    return this.routeService.getRoutesEta(id_route);
  }
}
