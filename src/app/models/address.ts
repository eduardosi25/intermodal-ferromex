import { Userlist } from './userList'

export class Address {
    
  constructor(
    public id: String,
    public user: Userlist,
    public zipCode: String,
    public state: String,
    public town: String,
    public colony: String,
    public street: String,
    public inside: String,
    public ext: String,
    public fault: Boolean
  ){}
  }