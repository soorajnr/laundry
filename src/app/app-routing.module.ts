import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AssignedTaskComponent } from './assigned-task/assigned-task.component';
import { OnProcessComponent } from './on-process/on-process.component';
import { CompletedComponent } from './completed/completed.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full"  },
  { path: 'home', component: HomeComponent }, 
  { path: "hisrory", component: HistoryComponent },
  { path: "profile", component: ProfileComponent },
  { path: "assigned", component: AssignedTaskComponent },
  { path: "onprocess", component: OnProcessComponent },
  { path: "completed", component: CompletedComponent },
  { path: 'detail/:id', component: DetailTaskComponent },
  { path: 'edit', component: TaskEditComponent },
  { path: 'login', component: LoginComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
