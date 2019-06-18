import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Room} from "../shared/models/Room";
import {AusstattungType} from "../shared/models/AusstattungType";
import {Router} from "@angular/router";

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

    floors: IterableIterator<String>;
    private roomsByFloor: Map<String, Array<Room>>;
    ausstatungType = AusstattungType;

    constructor(private dataService: DataService,
                private router: Router) {
    }

    ngOnInit() {
        this.dataService.getRooms().subscribe(response => {
            this.roomsByFloor = new Map<String, Array<Room>>();
            response.forEach(room => {
                var key = room.meta.etage;
                if (!this.roomsByFloor.has(key)) {
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

    public getIconClass(icon: AusstattungType): string {
        switch (icon) {
            case AusstattungType.typ_appleTv:
                return "fa fa-apple";
            case AusstattungType.typ_pinnwand:
                return "fa fa-apple";
            case AusstattungType.typ_mobVK:
                return "fa fa-apple";
            case AusstattungType.typ_camera:
                return "fa fa-apple";
            case AusstattungType.typ_mobPolycom:
                return "fa fa-apple";
            case AusstattungType.typ_flipchart:
                return "fa fa-apple";
            case AusstattungType.typ_whiteboard:
                return "fa fa-apple";
            case AusstattungType.typ_tv:
                return "fa fa-apple";
            default:
                return "fa fa-camera";
        }
    }
}