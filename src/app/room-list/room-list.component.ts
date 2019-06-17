import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Room} from "../shared/models/Room";
import {Router} from "@angular/router";


@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

    rooms;
    roomsByFloor = new Map<String,Array<Room>>();
    floors;
    selectedRoom:Room;

    constructor(public dataService: DataService,
                private router: Router) {
    }

    ngOnInit() {
        this.roomsByFloor.set("2.OG",new Array<Room>(new Room("1","Marie",6,"TDE_@")));
        this.roomsByFloor.set("3.OG",new Array<Room>(new Room("2","Turing",6,"TDE_@"),
            new Room("3","Lovelace",6,"TDE_@"),
            new Room("3","Lovelace",6,"TDE_@"),
            new Room("3","Lovelace",6,"TDE_@")));
        this.roomsByFloor.set("4.OG",new Array<Room>(new Room("4","Tesla",6,"TDE_@")));
        this.roomsByFloor.set("Extern",new Array<Room>(new Room("5","Marie",6,"TDE_@")));
        this.floors=this.roomsByFloor.keys();
        this.rooms = this.dataService.getRooms();
    }

    public showRoomDetails(room:Room) {
        this.router.navigate(['room-list', room.outlookName]);
    }
}