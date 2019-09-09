import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username;
  birthday;
  age;

  constructor(private router: Router) { }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/')
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    this.birthday = sessionStorage.getItem('birthday');
    this.age = sessionStorage.getItem('age');
  }

}
