import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RoomBookComponent} from './room-book/room-book.component';
import {RoomListComponent} from './room-list/room-list.component';
import {HeaderComponent} from './header/header.component';
import {RoomDetailComponent} from './room-detail/room-detail.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RoomBookComponent,
        RoomListComponent,
        HeaderComponent,
        RoomDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
