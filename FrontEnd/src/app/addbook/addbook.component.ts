import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
 

  

  constructor(private fb:FormBuilder,
    private addbook: BookserviceService,
    private routes:Router) { }
addbookForm = this.fb.group({

        title:['',[Validators.required]],
        gener:['',[Validators.required]],
        author:['',[Validators.required]],
        image:['',[Validators.required]]

})

get addbookFormControl() {
  return this.addbookForm.controls;
}

  ngOnInit(): void {
  }


  addBooks(){
   

    this.addbook.addBook(this.addbookForm.value).subscribe(
      res =>{
        console.log(res)
        alert("User sucessfully added");
        this.routes.navigate(["/books"]);
        
      },
      err =>{
           console.log(err);
           alert("somthing Went Wrong");
           
         }
 
      
      
    )
    


}
}
