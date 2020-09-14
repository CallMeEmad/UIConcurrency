import { Injectable } from '@angular/core';
import * as Interface from '../../interface/customer';
import * as Model from '../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerHolderService {

  public customer : Interface.Customer;
  public canEditing : boolean;

  constructor() {
    this.customer = new Model.Customer();
   }
   
}
