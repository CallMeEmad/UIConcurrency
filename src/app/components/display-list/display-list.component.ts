import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer/customer.service';
import { CustomerHolderService } from '../../services/customer-holder/customer-holder.service';
import * as  Interface from '../../interface/customer';


@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  public searchKey : string;
  public sortKey : string;
  public customers : Interface.Customer[];
  constructor(public customerService : CustomerService,public holder : CustomerHolderService) { }
  
   
   
  ngOnInit(): void {
    this.GetData();
    this.sortKey = "internationalCode";
  }



  public GetData() : void {
    this.customerService.Get(null)
     .subscribe(
       result => {
         this.customers = result;
       },
       error => {
         console.log(error);
       },
       () => {
         console.log(`لیست مشتریان با موفقیت دریافت شد`);
       }
     );
 }


 public setHolderForEdit(index : number) : void{
    var selectedCustomer = this.customers[index];
    this.holder.customer = selectedCustomer;
    this.holder.canEditing = true;
 }

 public deleteCustomer(index : number) : void{
  var selectedCustomer = this.customers[index];
  this.customerService.Delete(selectedCustomer.id).subscribe(
    ok=> {
      if (ok==1){
        alert('با موفقیت مشتری انتخاب شده حذف شد');
        this.GetData();
      }else{
        alert('عملیات حذف مشتری با شکست مواجعه شد');
      }
    } , 
    error=> {
      console.log(error);
    }, 
    ()=>{
      console.log("delete customer successful.");
    }
    );

   
}

public  search():void{
  this.customerService.Get(this.searchKey)
  .subscribe(
    result => {
      this.customers = result;
    },
    error => {
      console.log(error);
    },
    () => {
      console.log(`لیست مشتریان با موفقیت دریافت شد`);
    }
  );
}

public changeSortValue(value : string) : void{
  this.sortKey = value;
}

}
