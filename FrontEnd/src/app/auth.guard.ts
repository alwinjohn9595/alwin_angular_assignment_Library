import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService,private _router:Router)
  {

  }
  canActivate():boolean{
    if (this.auth.loggedIn())
    {
      console.log('true')
      return true

    }
    else{
      this._router.navigate(['/'])
      return false

    }
  
}
}
