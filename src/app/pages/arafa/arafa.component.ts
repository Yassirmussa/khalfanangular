import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProgramService } from '../../service/program.service';

@Component({
  selector: 'app-arafa',
  templateUrl: './arafa.component.html',
  styleUrl: './arafa.component.scss'
})
export class ArafaComponent implements OnInit{

  addProgram!:FormGroup

  ngOnInit(): void {
    this.formControl()
  }
  formControl() {
    this.addProgram=new FormGroup({
    ProName:new FormControl(null,[Validators.required]),
    ProDescription:new FormControl(null,[Validators.required]),
    ProCapacity:new FormControl(null,[Validators.required])
    })

  }

  constructor(private programservice:ProgramService){}

  onSave(){
    const val=this.addProgram.value;

    this.programservice.add(val).subscribe((data:any)=>{
      console.log("The value which added are ",data)
      this.addProgram.reset()
    })
  }

}
