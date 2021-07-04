import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookserviceService } from '../bookservice.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books=[{
    title:'' ,
    author: '',
    gener: '',
    image: '',
    _id:""
  }]

  constructor(private router:Router,private _book:BookserviceService,public _auth:AuthService) { }

  ngOnInit(): void {
    this._book.getbooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
      console.log(this.books);
    })

  }

  editBooks(book:any)
  {
    localStorage.setItem("editbookId", book._id.toString());
    this.router.navigate(['bookUpdate']);

  }

  deleteBooks(book:any)
  {
    this._book.deletebook(book._id)
      .subscribe((data:any) => {
        this.books = this.books.filter(p => p !== book);
      })

}

}
