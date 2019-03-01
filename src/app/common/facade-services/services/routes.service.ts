import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../common.service';
import { Response } from '../../../models/Response';
import { Observable } from 'rxjs';
import { Quotes } from '../../../models/quotes';

@Injectable()
export class RoutesService {
  public urlApi = environment.api.url;
  public routes = environment.api.methods.routes.routes;
  public eta = environment.api.methods.routes.eta;
  constructor(private http: HttpClient, private generalService: CommonService) { }

  getRoutes(){
    const url = this.urlApi + this.routes;
    return this.http.get(url, { headers: this.generalService.setHeader(null, null) });
  }

  getRoutesById(id_route: any) {
    const url = this.urlApi + this.routes + '/' + id_route;
    return this.http.get(url, { headers: this.generalService.setHeader(null, null) });
  }

  getRoutesEta(id_route: any) {
    const url = this.urlApi + this.routes + '/' + id_route + this.eta;
    return this.http.get(url, { headers: this.generalService.setHeader(null, null) });
  }
}
