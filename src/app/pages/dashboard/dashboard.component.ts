import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProgramService } from '../../service/program.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit{
  lists: any;


  constructor(
    private programService:ProgramService,
    private route:Router,
    
    
    ){}


  ngOnInit(): void {
    this.getAll();
   
  }
  getAll() {
    this.programService.getAll().subscribe((data:any)=>{
      this.lists=data;
      
      console.log("The value",data);
    })
  }

  onDelete(ProID:any){
    return this.programService.delete(ProID).subscribe(()=>{
      console.log(`Item with ID ${ProID} deleted success`)
      this.getAll()
    })

  }
  onUpdate(ProID:any){
    this.route.navigateByUrl("editprogram/"+ProID)

  }

}
