import { Injectable } from '@angular/core';
import { Room } from 'src/app/shared/models/Room';
import { Booking } from 'src/app/shared/models/Booking';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  rooms = new Array<Room>();

  constructor() { }

  public getRooms():Array<Room>{
    return this.rooms;
  }
  public bookRoom(room: Array<Room>){
    //FIXME api call
    console.log("booking a room....")
    //this.rooms.push(room);
  }
}