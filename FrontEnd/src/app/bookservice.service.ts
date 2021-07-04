import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http:HttpClient) { }
  private _addbookUrl = "http://localhost:3000/addbook";

 addBook(book:any){

   console.log("hello"); 
   return this.http.post<any>(this._addbookUrl,book);
 }

 getbooks(){
   console.log(this.http.get("http://localhost:3000/books"));
  return this.http.get("http://localhost:3000/books");

 }

 
 getbook(id:any){
  return this.http.get("http://localhost:3000/book/"+id);
}

editbook(book:any){
  console.log('client update')
    return this.http.put("http://localhost:3000/book/update",book)
    .subscribe(data =>{console.log(data)})
}

deletebook(id:any)
{
    console.log("hai")
  return this.http.delete("http://localhost:3000/bookremove/"+id)

}

}
