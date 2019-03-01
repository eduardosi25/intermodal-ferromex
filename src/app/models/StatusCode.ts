export class StatusCode {
    constructor(
   public success: boolean,
   public domain: string,
   public component: string,
   public operation: string,
   public scode: string,
   public type: string,
   public message: string
    ){}
}
