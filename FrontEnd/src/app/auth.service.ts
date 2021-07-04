import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';





@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _signupUrl = "http://localhost:3000/signup";
  private _loginUrl = "http://localhost:3000/login";

  helper=new JwtHelperService();  
  constructor(private http:HttpClient) { }

  signupUser(user:any)
  {
    return this.http.post<any>(this._signupUrl, user);
  }

  loginUser(user:any)

  {  
    return this.http.post<any>(this._loginUrl,user);
  }
  loggedIn()
  { 

    return !!localStorage.getItem('token');
  }

  
  getToken()
  {
    return localStorage.getItem('token')
  }


  isadmin(){
    
    const de = localStorage.getItem('token');

    const tx = JSON.stringify(de);
    
    if( de==null){
      return false;
    }else{
    
      const ty = this.helper.decodeToken(tx);
      
      if(ty.subject=="@"){
      
        return true;
      }else{
        
      return false;
      }
    }
  

  }
}  
