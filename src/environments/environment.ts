export const environment = {
  production: false,
  api: {
    //Este es para mocks
   // url: 'http://10.10.29.123:11907/imcv-rest/v1',
    //Este es para servidor
     url: 'http://10.10.29.44:7971/rest/imcv-rest/v1',
    methods: {
      tare: 'portCorp/tare',
      authentication:{
        session: '/session',
        intent: '/intent/',
        contact: '/contact'
      },
      containers:{
        containers:'/containertypes',
        quote: '/containers/quote',
        insurance: '/containers/quote/insurance',
      },
      routes:{
        routes: '/routes',
        station: '/stations',
        eta: '/eta'
      },
      users:{
        users:'/users',
        cards:'/cards',
        notifications: '/notifications',
        pass:'/password',
        passRest:'/password/restore',
        bookings:'/bookings',
        tracking:'/tracking',
        address:'/addresses',
        quotes:'/quotes',
        feedback:'/feedback'
      },
      terminals:{
        terminal: '/terminals'
      },
      intermodalService:{
        service: '/intermodalservices',
        additional: '/additionalservices',
        exchangerate:'/exchangerate',
      },
      payment:{
        payments: '/payment/banks',
        paymentRef: '/payment/reference'
      },
      booking:{
        bookings: '/booking',
        bookingWeight: '/weight',
        bookingDoc: '/documenttypes',
        bookingStcc: '/stcc',
        bookingCfdi: '/cfdi',
        bookingHolidays: '/holidays',
        bookingPayment: '/payment',
        bookingPaymentMethod: '/paymentmethod'
      },
      XIT:{
        iTCreate:'create-user',
        iTUpdate:'update-user',
        iTCreateQuote:'create-quote',      
        iTCreateBooking:'create-booking',
        iTCreateAdreess:'create-address',
        iTUptadeAddress:'update-address',
        iTDeleteAddress:'delete-address',
        iTCreatePayment:'create-payment',
        iTCreateFeedback:'create-feedback',
        iTCreatereference:'create-reference',
        iTCreateMessage:'create-message',
      }
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // Este es para Servidor
       'X-At': '33de0363d9d01edf21270bc1636a325da3b201e9',

    }
  }
}
