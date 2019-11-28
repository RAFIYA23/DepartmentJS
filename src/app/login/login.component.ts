import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdetails={"uname":"","password":""};
  message="";
  constructor(private service:AuthService,private router:Router) { }

  ngOnInit() {
  }
  Singin()
  {
      let status=this.service.LoginDatails(this.userdetails);
      if(status)
      {
        this.router.navigate(['home']);
      }
      else{
        this.message="User name/password is invalid";
      }
  }
}
