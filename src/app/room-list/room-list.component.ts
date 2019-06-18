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

    private floors: IterableIterator<String>;
    private roomsByFloor: Map<String, Array<Room>>;

    constructor(private dataService: DataService,
                private router: Router) {
    }

    ngOnInit() {
        this.dataService.getRooms().subscribe(response => {
            this.roomsByFloor = new Map<String, Array<Room>>();
            response.forEach(room => {
                var key = room.etage;
                if (!this.roomsByFloor.has(key)){
                    this.roomsByFloor.set(key, new Array<Room>());
                }
                this.roomsByFloor.get(key).push(room);
            });
            this.floors = this.roomsByFloor.keys();
        });
    }

    public showRoomDetails(room: Room) {
        this.router.navigate(['room-list', room.id]);
    }
}