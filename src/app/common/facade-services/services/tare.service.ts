import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CommonService } from '../common.service';
import { Response } from '../../../models/Response';
import { Observable } from 'rxjs';
import { Equipment } from '../../../models/equipment';
/**
 * Clase de prueba de consumo de servicios
 */
@Injectable()
export class TareService {

  constructor(private http: HttpClient, private generalService: CommonService) { }

  private apiUrl = environment.api.url;
  private tareMethod = environment.api.methods.tare;

  /**
   * Método para probar servicios
   */
  tareSearch(equiptments: any, apiToken: string, captchaToken: string): Observable<Response<Equipment[]>> {
    const url = this.apiUrl + this.tareMethod + '/equiptments/' + equiptments + '?unidades=kg';
    return ;
  }
}
