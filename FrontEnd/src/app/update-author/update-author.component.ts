import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  authors={
    info:'' ,
    authorname: '',
    gener: '',
    image: '',
    _id:""
  }

  constructor(private _author:AuthorserviceService,private router:Router) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editauthorId");
    this._author.getauthor(authorId).subscribe((data)=>{
    this.authors=JSON.parse(JSON.stringify(data));
})
}

editauthor(){
  this._author.editauthor(this.authors);   
    alert("Success");
    this.router.navigate(['authors']);
}



}
