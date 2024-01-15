import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../service/program.service';

@Component({
  selector: 'app-yassir',
  templateUrl: './yassir.component.html',
  styleUrl: './yassir.component.scss'
})
export class YassirComponent implements OnInit {
  lists: any;

  constructor (private ProgramService:ProgramService){}


  ngOnInit(): void {
    this.ProgramService.getAll().subscribe((data:any)=>{
      this.lists = data;

      console.log("The values are", data);
      
    })
  }

}


