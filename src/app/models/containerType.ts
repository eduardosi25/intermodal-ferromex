import { BookingServices } from './bookingServices'
export class ContainerType {
  constructor(
   public id: number,
   public clv: String,
   public description: String,
   public equipmentType: {
      id: number,
      name: String
    },
   public active: number,
   public pop: number,
   public size: number,
   public width: number,
   public height: number,
   public depth: number,
   public maxWeight: number,
   public bookingServices: BookingServices[]
  ){}
  }
