import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
import { UserToken } from '../../models/userToken';
/**
 * Servicio para inyectar los headers y modificarlos
 */
@Injectable()
export class CommonService {
    private tmpHeaders: any;
    private headers: any;
    public token: UserToken; 
    public at = environment.api.headers["X-At"];
    public sessionToken;
    public tokenSession;


    setHeader(IT:any , ST:any): HttpHeaders{
        if(IT == null && ST == null){
            this.tmpHeaders = JSON.stringify(environment.api.headers);
            this.headers = new HttpHeaders(JSON.parse(this.tmpHeaders));
       
        }else if(IT != null && ST == null){
            this.sessionToken= this.getToken();
            this.tmpHeaders =  JSON.stringify({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-It': IT,
                'X-At': this.at,
                 'X-Rt': 'recaptchaTest'
               })
            this.headers = new HttpHeaders(JSON.parse(this.tmpHeaders));
        }else if(IT == null && ST != null){
            this.sessionToken= this.getToken();
            this.tmpHeaders =  JSON.stringify({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-St': this.sessionToken.token,
                'X-At': this.at
               })
            this.headers = new HttpHeaders(JSON.parse(this.tmpHeaders));
        }else{ 
            this.sessionToken= this.getToken();
            this.tmpHeaders =  JSON.stringify({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-St': this.sessionToken.token,
                'X-It': IT,
                'X-At': this.at,
                 'X-Rt': 'recaptchaTest'
           })
        this.headers = new HttpHeaders(JSON.parse(this.tmpHeaders));
        }

        return this.headers;
    }
    setHeaderMock(IT){
        this.sessionToken= this.getToken();
        this.tmpHeaders =  JSON.stringify({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-St': 'Mock',
            'X-It': IT,
            'X-At': this.at,
            // 'X-Rt': 'recaptchaTest'

    })
    this.headers = new HttpHeaders(JSON.parse(this.tmpHeaders));
    return this.headers;
}
   getToken() {
     this.token = new UserToken(localStorage.getItem('token'));
       if (this.token.token != undefined) {
            this.tokenSession = this.token
        } else {
            this.tokenSession = null
        }
        return this.tokenSession
    }
    // getRToken(){
    //     grecaptcha.ready(function() {
    //        let p = grecaptcha.execute('reCAPTCHA_site_key', {action: 'homepage'}).then(function(token) {
    //            console.log(p)
    //         });
    // }
}
