import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationsComponent } from './navigations/navigations.component';
import { ArafaComponent } from './pages/arafa/arafa.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { YassirComponent } from './pages/yassir/yassir.component';
import { ListTodosComponent } from './pages/list-todos/list-todos.component';
import { AddTodosComponent } from './pages/add-todos/add-todos.component';
import { EditprogramComponent } from './pages/editprogram/editprogram.component';
import { UpdatetodoComponent } from './pages/updatetodo/updatetodo.component';

const routes: Routes = [
  {path:'',component:NavigationsComponent,
  children:[
    {path:'',component:DashboardComponent},
    {path:'arafa',component:ArafaComponent},
    {path:'yassir',component:YassirComponent},
    {path:'listtodos', component:ListTodosComponent},
    {path:'addtodo', component:AddTodosComponent},
    {path:'editprogram/:ProID',component:EditprogramComponent},
    {path:'updatetodo/:id', component:UpdatetodoComponent},
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
