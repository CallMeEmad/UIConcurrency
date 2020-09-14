import * as Interface from '../interface/customer';
import { ByteArray } from 'xdata';
export class Customer implements Interface.Customer{
    
   public id :number;
   public name :string;
   public lastName :string;
   public internationalCode :string 
   public telephoneNumber :string;
   public address :string;
   rowVersion : ByteArray;
}