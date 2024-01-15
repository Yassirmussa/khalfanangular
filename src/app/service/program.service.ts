import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private url =String("http://localhost:8000/")

  constructor(private http:HttpClient) { }


  add(body:any){
    return this.http.post(this.url+"insertprogram",body);
  }

  getAll(){
    return this.http.get(this.url+"getprogram");
  }

  delete(ProID:any){

    const urls = `${this.url+"deleteprogram"}/${ProID}/`

    return this.http.delete(urls)

  }
  get(ProID:any){
    const urls = `${this.url+"getprobyID"}/${ProID}/`
    return this.http.get(urls)
  }

  update(ProID:any,body:any){
    const urls = `${this.url+"updateprogram"}/${ProID}/`
    return this.http.put(urls,body)

  }
}
