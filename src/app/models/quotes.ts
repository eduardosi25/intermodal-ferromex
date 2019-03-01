import { initTransferState } from '@angular/platform-browser/src/browser/transfer_state'
import { from } from 'rxjs'
import { Userlist } from './userList'
import { ServiceType } from './serviceType'
import { Containers } from './containers'
import { Route } from './route'

import { Source } from './source'
import { Destination } from './destination'
import { PaymentMethod } from './paymenthMethod'

 
export class Quotes {
constructor(
 public id: number,
 public serviceType: ServiceType,
 public route: Route,
 public source: Source,
 public destination: Destination,
 public containersQty: number,
 public pickupDate: String,
 public deliveryDate: String,
 public totalCost: number,
 public date: String,
 public validity: String,
 public status: {
    id: number,
    name: String
  },
 public user: Userlist,
 public paymentMethod: PaymentMethod,
 public vat: {
    id: number,
    rate: number
  },
 public rate: number,
 public comments: String,
 public containers: Containers
){}
}