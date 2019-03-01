import { AdditionalService } from './additionalService'
export class BookingServices{
  constructor(
     public id: number,
     public name: String,
     public description: String,
     public additionalService: AdditionalService
  ){}
    }
  
