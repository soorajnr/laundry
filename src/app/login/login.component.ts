import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  visibleLogin:boolean = false;
  hide = true;
  showLogin(){
    this.visibleLogin = !this.visibleLogin
  }
}
