import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {


  constructor(private router : Router) { }
  canActivate(){
    
    if(!!localStorage.getItem("username") && !!localStorage.getItem("password")){
      return true;
    }
    else{
      this.router.navigate(['/'])
      return false;
    }
  }
}
