import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerHolderService } from '../services/customer-holder/customer-holder.service';
@Injectable({
  providedIn: 'root'
})
export class ShortCircuitingGuard implements CanActivate {

  public constructor(private holder : CustomerHolderService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.holder.canEditing;
  }
  
}
