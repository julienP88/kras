import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-room-book',
  templateUrl: './room-book.component.html',
  styleUrls: ['./room-book.component.css']
})
export class RoomBookComponent implements OnInit {
  private roomId: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.roomId = params.roomId;
    });
  }

  ngOnInit() {
  }

}
