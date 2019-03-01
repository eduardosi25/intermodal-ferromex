import { CancelationReason } from './cancelationReason'
import { Address } from './address'

export class AtrDst {
  constructor(
  public id: number,
  public  booking: number,
  public  userName: String,
  public  requestDate: String,
  public  status: {
      id: number,
      description: String
    },
  public  statusDate: String,
  public  atrAddress: String,
  public  poFolio: String,
  public  positioningDate: String,
  public  comments: String,
  public  cancelationReason: CancelationReason,
  public  userNameCancelled: String,
  public  cancelationDate: String,
  public  place: number,
  public  address: Address
  ){}
  }