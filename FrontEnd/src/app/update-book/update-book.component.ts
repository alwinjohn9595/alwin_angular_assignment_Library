
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  constructor(private _book:BookserviceService,private router:Router) { }
  
  book ={
    title:'',
    gener:'',
    author:'',
    image:'',
  }

   



 

  ngOnInit(): void {
    let bookId = localStorage.getItem("editbookId");
    this._book.getbook(bookId).subscribe((data)=>{
    this.book=JSON.parse(JSON.stringify(data));
  })

  

  }
editbook(){
  this._book.editbook(this.book);   
    alert("Success");
    this.router.navigate(['books']);
}



}
