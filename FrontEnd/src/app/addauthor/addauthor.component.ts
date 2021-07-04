import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthorserviceService } from '../authorservice.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  

  addauthorForm = this.fb.group({

    info:['',[Validators.required]],
    gener:['',[Validators.required]],
    authorname:['',[Validators.required]],
    image:['',[Validators.required]]

})

  constructor(private fb:FormBuilder,
    private addauthors:AuthorserviceService ,
    private routes:Router) { }

get addauthorFormControl() {
      return this.addauthorForm.controls;
    }   
  ngOnInit(): void {
  }


  addauthor(){
   

    this.addauthors.addauthor(this.addauthorForm.value).subscribe(
      res =>{
        console.log(res)
        alert("User sucessfully added");
        this.routes.navigate(["/authors"]);
        
      },
      err =>{
           console.log(err);
           alert("somthing Went Wrong");
           
         }
 
      
      
    )
    


}

}
