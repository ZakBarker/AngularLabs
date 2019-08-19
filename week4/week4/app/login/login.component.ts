import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  access: boolean;
  errorMessage: string = 'Wrong Username or Password...\n Try Dylan / LovesFurries';
  users = {
    user: [{
      username: 'Dank',
      password: 'Oboe'
    },
    {
      username: 'Zee',
      password: 'Durries'
    },
    {
      username: 'Dylan',
      password: 'LovesFurries'
    }]
  }
  constructor(private router: Router, private http: HttpClientModule) { }

  login(){

    for(let i = 0; i < this.users.user.length; i++){
      if(this.username == this.users.user[i].username && this.password == this.users.user[i].password){
        this.access = true;
      }
    }
    if(this.access){
      this.router.navigateByUrl('/account');
    }
    else{
      this.access = false;
    }
  }
  
  ngOnInit(){}
}
