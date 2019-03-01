export class TerminalDst{
    constructor(
   public id: number,
   public description: String,
   public code: String,
   public splc: String,
   public Interpacifico: Boolean,
   public hours: number,
   public hoursDifference: number,
   public emailOps: String,
   public createOrder: Boolean,
   public maritime: number,
   public ATR: Boolean,
   public Intermodal: Boolean,
   public maxContainers: number,
   public pickupTime: number
    ){}
  }