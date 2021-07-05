import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http:HttpClient) { }
  private _addbookUrl = "/api/addbook";

 addBook(book:any){

   console.log("hello"); 
   return this.http.post<any>(this._addbookUrl,book);
 }

 getbooks(){
   console.log(this.http.get("/api/books"));
  return this.http.get("http://localhost:3000/books");

 }

 
 getbook(id:any){
  return this.http.get("/api/book/"+id);
}

editbook(book:any){
  console.log('client update')
    return this.http.put("/api/book/update",book)
    .subscribe(data =>{console.log(data)})
}

deletebook(id:any)
{
    console.log("hai")
  return this.http.delete("/api/bookremove/"+id)

}

}
