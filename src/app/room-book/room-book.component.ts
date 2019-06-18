import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../data.service";
import {Booking} from "../shared/models/Booking";

@Component({
    selector: 'app-room-book',
    templateUrl: './room-book.component.html',
    styleUrls: ['./room-book.component.css']
})
export class RoomBookComponent implements OnInit {
    roomId: string;
    appointments: Array<Booking>;
    durations = [15, 30, 45, 60, 75, 90, 105, 120];

    constructor(private route: ActivatedRoute,
                private dataService: DataService) {
        this.route.params.subscribe(params => {
            console.log(params);
            this.roomId = params.roomId;
        });
    }

    ngOnInit() {
        this.dataService.getRoomDetails(this.roomId).subscribe(value => this.appointments = value.appointments);

    }

    public bookRoom(roomId: string) {

    }

    public selectStart(startTime: Date) {
    }

    public selectDuration(durationInMinutes: number) {
    }


}
