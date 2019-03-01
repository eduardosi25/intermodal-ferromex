import { Container } from './container'
import { TerminalSrc } from './terminalSrc'
import { TerminalDst } from './terminalDst'
import { Estatus } from './estatus'
import { CancelationReason } from './cancelationReason'
import { ArtSrc } from './atrsSrc'
import { AtrDst } from './atrsDtr'
import { ContainerType } from './containerType'
import { TerminalSrc2 } from './terminalSrc2'
import { BeneficialOwner } from './beneficialOwner'



export class BookingId {
    
    constructor(
      public id: number,
      //public rate: number,
      public container: Container,
      public pickupDate: String,
      public terminalSrc: TerminalSrc,
      public requestDate: String,
      public booking: String,
      public estatus: Estatus,
      public estatusDate: String,
      public cancelDate: String,
      public cancelationReason: CancelationReason,
      public comments: String,
      public terminalDst: TerminalDst,
      public generated: number,
      public hasAtr: number,
      public atrSrc: ArtSrc,
      public atrDate: String,
      public atrDst: AtrDst,
      public containerType: ContainerType,
      public terminalSrc2: TerminalSrc2,
      public terminalSrc2Updated: String,
      public terminalSrc2Date: String,
      public beneficialOwner: BeneficialOwner
        ){}
      
    }