import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../../service/todoservice.service';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { AddTodosComponent } from '../add-todos/add-todos.component';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.scss'
})
export class ListTodosComponent implements OnInit {
  list: any;


  constructor (
    private todoService:TodoserviceService,
    private router:Router,
    private dialog:MatDialog
     ){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.todoService.getAll().subscribe((data:any)=>{
      this.list = data;
      console.log(this.list);
      
    })
  }
  addTodo(){
    // this.router.navigate(['/addtodo']);
  
    this.dialog.open(AddTodosComponent)
  }

  updateTodo(id:any){
    this.router.navigateByUrl("updatetodo/"+id)
    
  }

  deleteTodo(id:any){
    return this.todoService.delete(id).subscribe(()=>{
      console.log(`Item with ID ${id} deleted success`)
      this.getAll();
    })
  }



}

