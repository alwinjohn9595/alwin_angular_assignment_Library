import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private auth: AuthService,
    private routes:Router) { }
loginForm = this.fb.group({


email:['',[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],


})

  ngOnInit(): void {
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }


  loginuser () {
    
    this.auth.loginUser(this.loginForm.value).subscribe(
      res =>{
           
           alert("Welocme User");
           localStorage.setItem('token', res.token);
           
          this.routes.navigate(['/login'])
          
      },
      err =>{
         if(err.status=="404"){
           alert("user not registered");
         }  

      }
    )


}
}
