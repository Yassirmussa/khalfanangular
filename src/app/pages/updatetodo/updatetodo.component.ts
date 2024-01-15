import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoserviceService } from '../../service/todoservice.service';

@Component({
  selector: 'app-updatetodo',
  templateUrl: './updatetodo.component.html',
  styleUrl: './updatetodo.component.scss'
})
export class UpdatetodoComponent implements OnInit{

  updateTodo!:FormGroup

  constructor( 
    private activatedRoute:ActivatedRoute,
    private todoService:TodoserviceService,
    private router:Router
    ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      const id = data.id;
      this.getTodoByID(id)
      this.formControl()
      
    })  
  }
  formControl() {
    this.updateTodo = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, [Validators.required]),
      completed: new FormControl(null, [Validators.required])
    })
  }
  getTodoByID(id:any) {
    this.todoService.getByID(id).subscribe((data:any)=>{
      console.log(data);
      this.updateTodo.get('id')?.setValue(data.id)
      this.updateTodo.get('title')?.setValue(data.title)
      this.updateTodo.get('completed')?.setValue(data.completed)
      

    })
  }
  onSave() {
    const values = this.updateTodo.value
    const id = this.updateTodo.value.id

    // console.log(id);
    
    this.todoService.update(id, values).subscribe((newdata:any)=>{
      console.log(newdata);
      this.router.navigateByUrl('/listtodos')
      
      
    })

    }

}
