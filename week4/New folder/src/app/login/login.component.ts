import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
import { NgForm } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

const BACKEND_URL = 'http://localhost:3000';


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

  constructor(private router: Router, private http: HttpClient) { }

  login(){
    let userpass = {username: '', password: ''};

    userpass.username = this.username;
    userpass.password = this.password;
    this.http.post<any>(BACKEND_URL + '/api/auth', userpass).subscribe((data) => {
      if(data.valid) {
        this.access = true;
        let thedata = JSON.stringify(data);
        sessionStorage.setItem('thedata', thedata);
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('age', data.age);
        sessionStorage.setItem('birthday', data.birthday);
        sessionStorage.setItem('email', data.email);

        this.router.navigateByUrl('/account');
      }
      else{
        this.access = false;
      }
    })
    }
  ngOnInit(

  ){}
}
