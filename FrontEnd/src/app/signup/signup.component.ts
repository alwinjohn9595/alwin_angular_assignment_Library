import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  

  constructor(private fb:FormBuilder,
              private auth: AuthService,
              private routes:Router) { }
  signupForm = this.fb.group({
    
    uname:['',[Validators.required,,Validators.pattern(/^([a-z0-9]|[-._](?![-._])){5,20}$/)]],
    email:['',[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    // conpassword:['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]]

}, 
)
 

get signupFormControl() {
  return this.signupForm.controls;
}


  ngOnInit(): void {
  
      
  }
  
 signupuser(){
   
   this.auth.signupUser(this.signupForm.value).subscribe(
     res =>{
       console.log(res)
       alert("User sucessfully added");
       this.routes.navigate(["/login"]);
       
     },
     err =>{
        if(err.error.code === 11000){
          alert("email already in use");
        }else{
          console.log("somthing Went Wrong")
          
        }

     }
     
   )
   
 }


}
