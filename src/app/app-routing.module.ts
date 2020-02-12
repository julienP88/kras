import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { RoomListComponent } from './room-list/room-list.component';
import { RoomBookComponent } from './room-book/room-book.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomOverviewComponent } from './room-overview/room-overview.component';


const routes: Routes = [
  {path:  '', pathMatch: 'full', redirectTo: 'room-list'},
  {path: 'room-book', component: RoomBookComponent},
  {path: 'room-list', component: RoomListComponent},
  {path: 'room-list/:roomId', component: RoomDetailComponent},
  {path: 'room-overview/:roomId', component: RoomOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
