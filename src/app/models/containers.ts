import { Booking } from './booking';
import { ContainerType } from  './containerType';
import { Stcc } from  './stcc';
import { AdditionalServiceType } from  './additionalServiceType';
import { insurancePercentage } from  './insurancePercentage';
import { ImdDocument } from  './imdDocument';
export class Containers 
    {
      constructor(
     public id: number,
     public booking: Booking,
     public containerType: ContainerType,
     public netWeight: number,
     public stcc: Stcc,
     public additionalServiceType: AdditionalServiceType,
     public containerAmount: number,
     public additionalServicesTotalAmount: number,
     public insurancePercentage: insurancePercentage,
     public imdDocument: ImdDocument
      ){}
    }
  