import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  
  private url = String ('http://localhost:8000/')

  constructor(private http:HttpClient) { }

  add(body:any){
    return this.http.post(this.url+"inserttodo", body);
  }

  getAll() {
    return this.http.get(this.url+"gettodo")
  }

  getByID(id:any){
    const urls = `${this.url+"gettodobyID"}/${id}/`;
    return this.http.get(urls);
  }

  update(id:any, body:any){
    const urls = `${this.url+"updatetodo"}/${id}/`
    return this.http.put(urls,body)
  }

  delete(id:any){
    const urls = `${this.url+"deletetodo"}/${id}/`;
    return this.http.delete(urls);
  }
}
