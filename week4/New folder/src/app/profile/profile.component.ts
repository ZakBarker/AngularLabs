import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  userCheck: string;
  email: string;
  birthday: string;
  age: string;

  constructor(private router: Router) { }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/')
  }

  goBack() {
    if (this.userCheck != sessionStorage.getItem('username')) {
      alert('Bye');
      sessionStorage.clear();
      this.router.navigateByUrl('/');
    }
    else {
      this.router.navigateByUrl('/account');
    }
  }

  changeDeets() {
    if (this.username != undefined) {
      sessionStorage.setItem('username', this.username);
    }
    if (this.birthday != undefined) {
      sessionStorage.setItem('birthday', this.birthday);
    }
    if (this.age != null) {
      sessionStorage.setItem('age', this.age);
    }
    if (this.email != undefined) {
      sessionStorage.setItem('email', this.email);
    }
  }
  ngOnInit() {
    this.userCheck = sessionStorage.getItem('username');
  }
}
