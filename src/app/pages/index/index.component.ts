import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit{

  auth=inject(AuthService)
  route=inject(Router)


  logform!:FormGroup

  ngOnInit(): void {
    this.formController();
    
  }
  formController() {

    this.logform=new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),


    })

  }

  onLogin(){

    const data=this.logform.value
    this.auth.login(data).subscribe((resp:any)=>{

      console.log("my response are",resp)
      this.auth.storeToken(resp.access)
      this.route.navigateByUrl("")

    })



    // console.table(data)

  }




}
