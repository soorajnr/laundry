import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { AssignedTaskComponent } from './assigned-task/assigned-task.component';
import { FilterPipe } from './assigned-task/FilterPipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnProcessComponent } from './on-process/on-process.component';
import { CompletedComponent } from './completed/completed.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    AssignedTaskComponent,
    FilterPipe,
    OnProcessComponent,
    CompletedComponent,
    DetailTaskComponent,
    TaskEditComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports:[
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
