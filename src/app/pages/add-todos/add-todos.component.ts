import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoserviceService } from '../../service/todoservice.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrl: './add-todos.component.scss'
})
export class AddTodosComponent  implements OnInit{

  // form unaipa jina
  addTodo!:FormGroup

 

  ngOnInit(): void {
    this.add()
  }
  add() {
    this.addTodo = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      completed: new FormControl(null, [Validators.required])
    })
  }


  constructor (
    private todoService:TodoserviceService,
    private router:Router,     
    private dialogRef: MatDialogRef <AddTodosComponent>
    ){}

  onSave(){
    const values = this.addTodo.value;

    this.todoService.add(values).subscribe((data:any)=>{
      console.log("The value which added are ",data)
      this.addTodo.reset()
      this.dialogRef.close(); // Close the dialog
      this.router.navigate(['/listtodos'])
      
    })
  }

}
