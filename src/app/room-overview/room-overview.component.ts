import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';
import {RoomAgenda} from '../shared/models/RoomAgenda';
import {Booking} from '../shared/models/Booking';
import {isNull, isUndefined} from 'util';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-overview.component.html',
  styleUrls: ['./room-overview.component.css']
})
export class RoomOverviewComponent implements OnInit {
  roomId: string;
  roomAgenda: RoomAgenda = new RoomAgenda();
  appointmentNow: Booking = null;
  appointmentNext: Booking = null;
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
    console.log('ngOnInit');
    this.dataService.getRoomDetails(this.roomId).subscribe(value => this.roomAgenda = value);
    this.startTimer();
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  startTimer() {
    setTimeout(() => {
      // this.refreshTimer();
      console.log('Reload: ' + this.roomId);
      this.router.navigated = false;
      this.router.navigate(['room-overview', this.roomId]);
    }, 300000);
  }

  book(roomId: string, appointment: Booking) {
    console.log('Book Room: ' + roomId + ' from: ' + appointment.startTime + ' to: ' + appointment.endTime);
    if (appointment.blocked === false) {
      this.router.navigate(['room-book'], {queryParams: {roomId: this.roomId, startTime: appointment.startTime}});
    }
  }

  public showRoomDetail() {
    this.router.navigate(['room-list', this.roomId]);
  }

  public getOpenAppointment(): Booking {
    if (isUndefined(this.roomAgenda.appointments)) { return new Booking(); }
    if (isNull(this.appointmentNow)) {
      console.log('Load NowAppointment');
      this.appointmentNow = this.roomAgenda.appointments.filter(this.isNow)[0];
    }
    return this.appointmentNow;
  }

  public getNextAppointment(): Booking {
    if (isUndefined(this.roomAgenda.appointments)) { return new Booking(); }
    if (isNull(this.appointmentNext)) {
      const next = this.roomAgenda.appointments.filter(this.isNext);
      console.log('Load NowAppointment - Count: ' + next.length );
      if (next.length > 0) {
        this.appointmentNext = next[0];
      }
    }
    return this.appointmentNext;
  }

  isNow(appointment) {
    const now = new Date();
    const start = new Date(appointment.startTime);
    const end = new Date(appointment.endTime);
    console.log('Book Room: ' + now + ' from: ' + start + ' to: ' + end + ' - ' + (start < now));
    return (start < now) && (end > now);
  }

  isNext(appointment) {
    const now = new Date();
    const start = new Date(appointment.startTime);
    return (start > now);
  }
}
