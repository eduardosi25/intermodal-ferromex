import { DocumentType } from './documentType'
export class ImdDocument{
  constructor(
   public id: number,
   public documentType: DocumentType,
   public code: String,
   public comments: String,
   public documentUrl: String
  ){}
  }
