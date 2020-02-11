import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-room-book',
    templateUrl: './room-book.component.html',
    styleUrls: ['./room-book.component.css']
})
export class RoomBookComponent {
    roomId: string;
    startTime: string;
    durations = [15, 30, 45, 60, 75, 90, 105, 120];

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            console.log(params);
            this.roomId = params.roomId;
            this.startTime = params.startTime;
        });
    }

    public bookRoom(roomId: string) {
    }

    public selectStart(startTime: Date) {
    }

    public selectDuration(durationInMinutes: number) {
    }


}
