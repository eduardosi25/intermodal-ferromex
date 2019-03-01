import { Injectable, Injector } from '@angular/core';
import { TareService } from '../services/tare.service';
/**
 * Esta clase es de muesta, de como usar los modelos Response
 */
@Injectable()
export class TareFacadeService {

    constructor(private injector: Injector) { }

    private _tareService: TareService;
    public get tareService(): TareService {
        if (!this._tareService) {
            this._tareService = this.injector.get(TareService);
        }
        return this._tareService;
    }

    tareSearch(equipments: string, apiToken: string, captchaToken: string) {
        return this.tareService.tareSearch(equipments, apiToken, captchaToken);
    }
}
