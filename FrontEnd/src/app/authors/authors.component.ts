import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors=[{
    info:'' ,
    authorname: '',
    gener: '',
    image: '',
    _id:""
  }]

  constructor(private router:Router,private _author:AuthorserviceService,public _auth:AuthService) { }

  ngOnInit(): void {
    this._author.getauthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
      console.log(this.authors);
    })
  }

  editAuthors(author:any)
  {
    localStorage.setItem("editauthorId", author._id.toString());
    this.router.navigate(['authorUpdate']);

  }

  deleteBooks(author:any)
  {
    this._author.deleteauthor(author._id)
      .subscribe((data:any) => {
        this.authors = this.authors.filter(p => p != author)
      })

}



}
