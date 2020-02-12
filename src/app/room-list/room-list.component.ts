import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Room} from '../shared/models/Room';
import {AusstattungType} from '../shared/models/AusstattungType';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  floors: IterableIterator<string>;
  private roomsByFloor: Map<string, Array<Room>>;
  ausstatungType = AusstattungType;

  constructor(private dataService: DataService,
              private router: Router) {
  }

  ngOnInit() {
    this.dataService.getRooms().subscribe(response => {
      this.roomsByFloor = new Map<string, Array<Room>>();
      response.forEach(room => {
        const key = room.meta.etage;
        if (!this.roomsByFloor.has(key)) {
          this.roomsByFloor.set(key, new Array<Room>());
        }
        this.roomsByFloor.get(key).push(room);
      });
      this.roomsByFloor = new Map([...this.roomsByFloor.entries()].sort());
      this.floors = this.roomsByFloor.keys();
    });
  }

  public showRoomDetails(room: Room) {
    this.router.navigate(['room-list', room.id]);
  }

  public showRoomOverview(room: Room) {
    this.router.navigate(['room-overview', room.id]);
  }

  public getIconClass(icon: AusstattungType): string {
    switch (icon) {
      case AusstattungType.typ_appleTv:
        return 'fa fa-apple';
      case AusstattungType.typ_pinnwand:
        return 'fa fa-thumb-tack';
      case AusstattungType.typ_mobVK:
        return 'fa fa-stop';
      case AusstattungType.typ_camera:
        return 'fa fa-video-camera';
      case AusstattungType.typ_mobPolycom:
        return 'fa fa-microphone';
      case AusstattungType.typ_flipchart:
        return 'fa fa-file-text-o';
      case AusstattungType.typ_whiteboard:
        return 'fa fa-square-o';
      case AusstattungType.typ_tv:
        return 'fa fa-desktop';
      case AusstattungType.typ_beamer:
        return 'fa fa-hdd-o';
      case AusstattungType.typ_polycom:
        return 'fa fa-phone';
      case AusstattungType.typ_desktop:
        return 'fa fa-home';
      default:
        return '';
    }
  }

  public getToolTyp(icon: AusstattungType): string {
    switch (icon) {
      case AusstattungType.typ_appleTv:
        return 'Apple TV';
      case AusstattungType.typ_pinnwand:
        return 'Pinnwand';
      case AusstattungType.typ_mobVK:
        return 'Monitorwagen';
      case AusstattungType.typ_camera:
        return 'Video Camera';
      case AusstattungType.typ_mobPolycom:
        return 'Polycom (mobil)';
      case AusstattungType.typ_flipchart:
        return 'Flipchart';
      case AusstattungType.typ_whiteboard:
        return 'Whiteboard';
      case AusstattungType.typ_tv:
        return 'Monitor';
      case AusstattungType.typ_beamer:
        return 'Beamer';
      case AusstattungType.typ_polycom:
        return 'Polycom Videokonferenz';
      case AusstattungType.typ_desktop:
        return 'Schreibtisch';
      default:
        return '';
    }
  }
}
