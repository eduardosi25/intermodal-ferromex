import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../common.service';
import { Response } from '../../../models/Response';
import { Observable } from 'rxjs';
import { Quotes } from '../../../models/quotes';

@Injectable()
export class TerminalsService {

  public urlApi = environment.api.url;
  public terminal = environment.api.methods.terminals.terminal;

  constructor(private http: HttpClient, private generalService: CommonService) { }

  getTerminals() {
    const url = this.urlApi + this.terminal;
    return this.http.get(url, { headers: this.generalService.setHeader(null, null) });
  }
  getTerminalsById(id_terminals: any){
    const url = this.urlApi + this.terminal + '/' + id_terminals;
    return this.http.get(url, { headers: this.generalService.setHeader(null, null) });
  }

}