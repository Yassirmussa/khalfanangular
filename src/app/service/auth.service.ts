import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url =String("http://localhost:8000/")


  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.post(this.url+"api/token",data)
  }

  storeToken(token:any){
    return localStorage.setItem('token',token)
  }
  isLoggedIn():boolean{
    return !!localStorage.getItem('token')

  }
}
