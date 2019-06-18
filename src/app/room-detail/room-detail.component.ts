import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../data.service";
import {RoomAgenda} from "../shared/models/RoomAgenda";

@Component({
    selector: 'app-room-detail',
    templateUrl: './room-detail.component.html',
    styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
    roomId: string;
    roomAgenda: RoomAgenda = new RoomAgenda();

    constructor(private route: ActivatedRoute,
                private dataService: DataService) {
        this.route.params.subscribe(params => {
            console.log(params);
            this.roomId = params.roomId;
        });
    }

    ngOnInit() {
        this.dataService.getRoomDetails(this.roomId).subscribe(value => this.roomAgenda = value);
    }


}
