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
import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './service/auth.guard';

const routes: Routes = [
  {path:'',component:NavigationsComponent,
  canActivate:[authGuard], 
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
{path:'login',component:IndexComponent},
{path:'register', component:RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
