import { from } from 'rxjs';

import { TerminalDst } from './terminalDst'
import { TerminalSrc } from './terminalSrc'


export class Route {
  constructor(
   public id: number,
   public terminalSrc: TerminalSrc,
   public terminalDst: TerminalDst,
   public routeType: {
      id: number;
      type: String
    },
   public etaDays: number
  ){}
  }