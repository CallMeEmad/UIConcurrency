import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { CustomerService } from '../../services/customer/customer.service';
import { Router } from '@angular/router'
import * as Interface from '../../interface/customer';
import * as Model from '../../model/customer';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public customer : Interface.Customer;
  constructor(public customerService  : CustomerService, private router : Router) {
    this.customer=new Model.Customer();
   }
 

   registerForm: FormGroup;

  ngOnInit(){
      this.registerForm = new FormGroup({
          'name': new FormControl(null, Validators.required),
          'lastName': new FormControl(null, [Validators.required]),
          'internationalCode': new FormControl(null, [Validators.required,Validators.maxLength(10),Validators.pattern(/^-?(0|[0-9]\d*)?$/)]),
          'phoneNumber': new FormControl(null, [Validators.required,Validators.maxLength(20),Validators.pattern(/^-?(0|[0-9]\d*)?$/)]),
          'address': new FormControl(null, [Validators.required]),
      })
  }

  public insert() : void {
    if (!this.registerForm.valid){
      alert('لطفا تمام فیلد ها را مقدار دهی کنید');
      return;
    }
    this.customerService.Insert(this.customer)
    .subscribe(
      insertResult=>{
        if (insertResult>0){
          alert('عملیات درج با موفیت انجام شد');
          this.router.navigateByUrl('/display');
        }else{
          alert('عملیات درج انجام نشد');
        }
      },
      insertError=>{
        console.log(insertError);
      },
      ()=>{
        console.log('complete');
      });
  }
  
 
}
