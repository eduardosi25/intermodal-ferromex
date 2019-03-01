export class BookingPayment {
    
    constructor(
       public wppNotificationId: number,
       public reference: String,
       public response: String,
       public folioCPayments: String,
       public auth: String,
       public cdResponse: String,
       public cdError: String,
       public nbError: String,
       public date: String,
       public time: String,
       public ccNumber: String,
       public amount: String,
       public nbCompany: String,
       public nbMerchant: String,
       public ccType: String,
       public emvKeyDate: String,
       public idUrl: String,
       public email: String,
       public additionalData: String
    ){}
    }