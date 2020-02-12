import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import {RoomAgenda} from '../shared/models/RoomAgenda';
import {Booking} from '../shared/models/Booking';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  roomId: string;
  roomAgenda: RoomAgenda = new RoomAgenda();
  currentDateTime = new Date();

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private router: Router) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.roomId = params.roomId;
    });
  }

  ngOnInit() {
    this.dataService.getRoomDetails(this.roomId).subscribe(value => this.roomAgenda = value);

    setTimeout(() => {
      this.router.navigate(['room-overview', this.roomId]);
    }, 30000);  //5s
  }

  book(roomId: string, appointment: Booking) {
    console.log('Book Room: ' + roomId + ' from: ' + appointment.startTime + ' to: ' + appointment.endTime);
    if (appointment.blocked === false) {
      this.router.navigate(['room-book'], {queryParams: {roomId: this.roomId, startTime: appointment.startTime}});
    }
  }
}
