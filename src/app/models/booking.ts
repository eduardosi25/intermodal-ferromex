import { TerminalDst } from './terminalDst'
import { TerminalSrc } from './terminalSrc'
import { CancelationReason } from './cancelationReason'
import { AtrDst } from './atrsDtr'
import { ArtSrc } from './atrsSrc'
import { ContainerType } from './containerType'
import { TerminalSrc2 } from './terminalSrc2'
import { Container } from './container'
import { Estatus } from './estatus'
import { BeneficialOwner } from './beneficialOwner'

export class Booking {
  constructor(
    public id: number,
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