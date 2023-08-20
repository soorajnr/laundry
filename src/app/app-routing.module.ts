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
  { path: 'home', component: HomeComponent , data: { navName: 'Home' }}, 
  { path: "hisrory", component: HistoryComponent , data: { navName: 'History'}},
  { path: "profile", component: ProfileComponent , data: { navName: 'Profile'}},
  { path: "assigned", component: AssignedTaskComponent  , data: { navName: 'Task Assigned'}},
  { path: "onprocess", component: OnProcessComponent , data: { navName: 'Task onprocess'}},
  { path: "completed", component: CompletedComponent , data: { navName: 'Task Completed'}},
  { path: 'detail/:id', component: DetailTaskComponent , data: { navName: 'Task Detail'}},
  { path: 'edit', component: TaskEditComponent , data: { navName: 'Edit'}},
  { path: 'login', component: LoginComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
