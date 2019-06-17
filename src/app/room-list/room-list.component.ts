import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms;
  selectedRoom;

  constructor(public dataService: DataService) { }


  ngOnInit() {
    this.rooms = this.dataService.getRooms();
  }
  public bookRoom(room){
    this.selectedRoom = room;
  }
}