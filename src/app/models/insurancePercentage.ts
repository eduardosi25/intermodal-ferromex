import { ExchangeRate } from './exchangeRate'
export class insurancePercentage{
  constructor(
   public id: number,
   public percentage: number,
   public validityStarts: String,
   public validityEnds: String,
   public exchangeRate: ExchangeRate
  ){}
}
