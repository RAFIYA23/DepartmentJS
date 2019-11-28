import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
{
  constructor(private router:Router) { }
  
  IsLoggedIn()
  {
     if(window.sessionStorage.getItem('active')!=null && window.sessionStorage.getItem('active')=="1")
     {
       return true;
     }
     else
     {
       return false;
     }
  } 
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    
    if(this.IsLoggedIn())
    {
      return true; 
    }
    else
    {
      this.router.navigate(['login']);
      return false; 
    }
      
  }
 
  
   LoginDatails(userdetails)
   {
     if(userdetails.uname=="abc" && userdetails.password=="abc@123")
     {
        window.sessionStorage.setItem('active',"1");
        return true;
      }
      else
      {
        return false;
      }
        
   }
   Logout()
   {
     window.sessionStorage.setItem('active',"0");
   }
}
