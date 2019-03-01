import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../common.service';
import { Response } from '../../../models/Response';
import { Observable } from 'rxjs';
import { Quotes } from '../../../models/quotes';
@Injectable()
export class ContainersService {
  public urlApi = environment.api.url;
  public containers = environment.api.methods.containers.containers;
  public quote = environment.api.methods.containers.quote;
  public insurance = environment.api.methods.containers.insurance;
  constructor(private http: HttpClient, private generalService: CommonService) { }

  getContainers() {
    const url = this.urlApi + this.containers;
    return this.http.get(url, { headers: this.generalService.setHeader(null, null) });
  }
  getContainerById(id_container: any) {
    const url = this.urlApi + this.containers + "/" + id_container;
    return this.http.get(url, { headers: this.generalService.setHeader(null, null) });
  }
  getContainerInsurance() {
    const url = this.urlApi + this.insurance;
    return this.http.get(url, { headers: this.generalService.setHeader(null, null) });
  }

}
