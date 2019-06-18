import {Injectable} from '@angular/core';
import {Room} from 'src/app/shared/models/Room';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {RoomAgenda} from "./shared/models/RoomAgenda";

@Injectable({
    providedIn: 'root'
})


export class DataService {

    rooms = new Array<Room>();
    endpoint = 'http://localhost:3001/';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };


    constructor(private http: HttpClient) {
    }

    public getRooms(): Observable<Array<Room>> {
        return this.http.get<Array<Room>>(this.endpoint + "rooms/meta").pipe(retry(1), catchError(this.handleError));
    }

    public getRoomDetails(roomId: String): Observable<RoomAgenda> {
        console.log("showing room " + roomId);
        return this.http.get<RoomAgenda>(this.endpoint + "rooms/id/" + roomId).pipe(retry(1), catchError(this.handleError));
    }


    // Error handling
    private handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}