import { NgModule } from '@angular/core';
import {Routes, RouterModule, ROUTER_CONFIGURATION} from '@angular/router';

import { RoomListComponent } from './room-list/room-list.component';
import { RoomBookComponent } from './room-book/room-book.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "room-book", component: RoomBookComponent},
  {path: "room-list", component: RoomListComponent},
  {path: "room-list/:roomId", component: RoomDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
