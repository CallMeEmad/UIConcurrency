import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as Model from '../../model/customer';
import * as Interface from '../../interface/customer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  json:true
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  mainUrl : string; 
  public constructor(private httpClient : HttpClient ){
      this.mainUrl = 'http://localhost:64149/api/Customers';
  }

  public Insert(customer : Model.Customer) : Observable<number> {

    return this.httpClient.post<number>(this.mainUrl,customer,httpOptions).pipe();
  }

  public Delete(id : number) : Observable<number> {
    
    let deleteUrl : string = this.mainUrl+'?id=' + id;
    return this.httpClient.delete<number>(deleteUrl,httpOptions).pipe();
  }

  public Update(customer : Model.Customer) : Observable<number> {
    return this.httpClient.put<number>(this.mainUrl,customer,httpOptions).pipe();
  }

  public Get(internationalCode : string) : Observable<Interface.Customer[]>  {

    let selectUrl = this.mainUrl;
    if (internationalCode != null){
      selectUrl += '?internationalCode='+internationalCode;
    }
    return this.httpClient.get<Interface.Customer[]>(selectUrl,httpOptions).pipe();
  }
}
