import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationsComponent } from './navigations/navigations.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { YassirComponent } from './pages/yassir/yassir.component';
import { ArafaComponent } from './pages/arafa/arafa.component';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListTodosComponent } from './pages/list-todos/list-todos.component';
import { AddTodosComponent } from './pages/add-todos/add-todos.component';

import {MatCardModule} from '@angular/material/card';
import { EditprogramComponent } from './pages/editprogram/editprogram.component';
import { UpdatetodoComponent } from './pages/updatetodo/updatetodo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './pages/register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationsComponent,
    DashboardComponent,
    YassirComponent,
    ArafaComponent,
    ListTodosComponent,
    AddTodosComponent,
    EditprogramComponent,
    UpdatetodoComponent,
    IndexComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
