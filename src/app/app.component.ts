import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  constructor(public service:AuthService,private router:Router){

  }
  SignOut()
  {
    this.service.Logout();
    this.router.navigate(['login']);
  }
}
