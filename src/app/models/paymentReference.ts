import { Bank } from './bank'
import { BookingId } from './bookingId'

export class PaymentReference {
    
    constructor(
      public id: number,
      public reference: String,
      public bank: Bank,
      public bookingId: BookingId 
    ){}
    }