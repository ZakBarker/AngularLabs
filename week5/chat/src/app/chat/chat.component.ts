import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { FormsModule } from '@angular/forms';

const SERVER_URL = 'http://localhost:3000';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private socket;
  messagecontent: string ="";
  messages:string[] = [];
  rooms = [];
  roomslist:string = "";
  roomnotice:string = "";
  currentroom:string = "";
  isInRoom = false;
  newroom:string = "";
  numusers:number=0;

  constructor(private socketservice: SocketService) { }

  ngOnInit() {
    this.socketservice.initSocket();
    this.socketservice.getMessage((m)=>{this.messages.push(m)});
    this.socketservice.reqroomList();
    this.socketservice.getroomList((msg)=>{this.rooms = JSON.parse(msg)});
    this.socketservice.notice((msg)=>{this.roomnotice = msg});
    this.socketservice.joined((msg)=>{this.currentroom = msg
      if(this.currentroom != ""){
        this.isInRoom = true;
      }else{
        this.isInRoom = false;
      }
    });
  }

  joinRoom(){
    this.socketservice.joinRoom(this.roomslist);
    this.socketservice.reqnumusers(this.roomslist);
    this.socketservice.getnumusers((res)=>{this.numusers = res});
  }
  
  leaveRoom(){
    this.socketservice.leaveRoom(this.currentroom);
    this.socketservice.reqnumusers(this.currentroom);
    this.socketservice.getnumusers((res)=>{this.numusers = res});
    this.roomslist = null;
    this.currentroom = "";
    this.isInRoom = false;
    this.numusers = 0;
    this.roomnotice = "";
    this.messages = [];
  }

  createRoom(){
    console.log(this.createRoom);
    this.socketservice.createRoom(this.newroom);
    this.socketservice.reqroomList();
    this.newroom = "";
  }

  chat(){
    if(this.messagecontent){
      this.socketservice.sendMessage(this.messagecontent);
      this.messagecontent = null;
    }else{
      console.log("No Message");
    }
  }

  clearnotice(){
    this.roomnotice = "";
  }

}
