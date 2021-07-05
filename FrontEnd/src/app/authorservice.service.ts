import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorserviceService {

  constructor(private http:HttpClient) { }
  private _addauthorUrl = "/api/addauthor";

 addauthor(author:any){

   
   return this.http.post<any>(this._addauthorUrl,author);
 }

 getauthors(){
  return this.http.get("/api/authors");

 }

 
 getauthor(id:any){
  return this.http.get("/api/author/"+id);
}

editauthor(author:any){
  console.log('client update')
    return this.http.put("/api/author/update",author)
    .subscribe(data =>{console.log(data)})
}

deleteauthor(id:any)
{
  
  return this.http.delete("/api/authorremove/"+id)

}
}
