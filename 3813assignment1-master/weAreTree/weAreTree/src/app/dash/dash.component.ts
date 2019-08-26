import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const BACKEND_URL = "http://localhost:3000";

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
// User Info
  username;
  user = [];
  users = [];
  userer = [{"username":"super","email":"super@super.com","role":"super","isRoomAdmin":true,"isRoomAssis":true},{"username":"Zee","email":"Zee@g.c","role":"admin","isRoomAdmin":false,"isRoomAssis":false},{"username":"Send","email":"zakobama@hotmail.com","role":"admin","isRoomAdmin":false,"isRoomAssis":false},{"username":"Word","email":"zak.barker@griffithuni.edu.au","role":"admin","isRoomAdmin":false,"isRoomAssis":false},{"username":"","email":"","role":"","isRoomAdmin":false,"isRoomAssis":false},{"username":"Derp","email":"lulu@gg","role":"user","isRoomAdmin":false,"isRoomAssis":false}];

// Data
  allUsers = [];

// Create User Variables
  newUser = "";
  newEmail = "";
  newRole = "";

// Arbitrary Variables
  error = "";


  constructor(private http: HttpClient) { }

  createUser(){
    let userObj = {
      "newUser" : "",
      "newEmail" : "",
      "newRole" : "",
    }

    userObj.newUser = this.newUser;
    userObj.newEmail = this.newEmail;
    userObj.newRole = this.newRole;
    this.http.post<any>(BACKEND_URL + "/newUser", userObj).subscribe((data) => {
      console.log(data);
      if(data != "User exists breh"){
        console.log(data);
        this.allUsers = data;
      }else{
        console.log(data);
        this.error = data;
      }
    });


  }

  fetchUser(){
    let userObj = {"username" : this.username};
    this.http.post<any>(BACKEND_URL + "/fetchUser", userObj).subscribe((data) => {
      // console.log(data);
      this.user = data;
    });
  }

  fetchUsers(){
    let userObj = {"username" : this.username};
    this.http.post<any>(BACKEND_URL + "/fetchUsers", userObj).subscribe((data) => {
      console.log(data);
      this.allUsers = data;
    });
  }

  ngOnInit() {
    this.username = localStorage.getItem("username");
    console.log(this.userer);
    this.fetchUser();
    this.fetchUsers();
  }

}
