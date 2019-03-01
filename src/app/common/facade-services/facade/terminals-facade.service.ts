import { Injectable, Injector } from '@angular/core';
import { TerminalsService } from '../services/terminals.service';

@Injectable()
export class TerminalsFacadeService {

  constructor(private injector: Injector) { }

  private _terminalsService: TerminalsService;
  public get terminalsService(): TerminalsService {
    if (!this._terminalsService) {
      this._terminalsService = this.injector.get(TerminalsService);
    }
    return this._terminalsService;
  }


  getTerminals() {
    return this.terminalsService.getTerminals();
  }

  getTerminalsById(id_terminal: any) {
    return this.terminalsService.getTerminalsById(id_terminal);
  }
}