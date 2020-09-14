import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import { CustomerHolderService } from 'src/app/services/customer-holder/customer-holder.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Router } from '@angular/router';
import * as Interface from '../../interface/error';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  errorInterface : Interface.Error;

  constructor(public customerService : CustomerService,public holder : CustomerHolderService,public router: Router) { }

  ngOnInit(){
      this.editForm = new FormGroup({
          'name': new FormControl(null, Validators.required),
          'lastName': new FormControl(null, [Validators.required]),
          'internationalCode': new FormControl(null, [Validators.required,Validators.maxLength(10),Validators.pattern(/^-?(0|[0-9]\d*)?$/)]),
          'phoneNumber': new FormControl(null, [Validators.required,Validators.maxLength(20),Validators.pattern(/^-?(0|[0-9]\d*)?$/)]),
          'address': new FormControl(null, [Validators.required]),
      })
      this.holder.canEditing = false;
  }


public edit(): void {
  if (!this.editForm.valid){
    alert('لطفا تمام فیلد ها را مقدار دهی کنید');
    return;
  }

  this.customerService.Update(this.holder.customer)
  .subscribe(
    result=>{
      if (result==1){
        alert('عملیات ویرایش با موفیت انجام شد');
        this.router.navigateByUrl('/display');
      }else{
        alert('عملیات ویرایش انجام نشد');
      }
    },
    error=>{
      let strMessage : string = error.error.Detail;
      if (strMessage.indexOf('concurrency')>0)
         strMessage = 'کاربر دیگری مشتری انتخاب شده را ویرایش کرده است';
       alert(strMessage);
    },
    ()=>{
      console.log('complete');
    });


  
}
 
}
