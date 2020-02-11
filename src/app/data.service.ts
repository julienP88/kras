import {Injectable} from '@angular/core';
import {Room} from 'src/app/shared/models/Room';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {RoomAgenda} from './shared/models/RoomAgenda';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})


export class DataService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };


    constructor(private http: HttpClient) {
    }

    public getRooms(): Observable<Array<Room>> {
        return this.http.get<Array<Room>>(environment.apiURL + environment.roomsEndpoint).pipe(retry(1), catchError(this.handleError));
    }

    public getRoomDetails(roomId: string): Observable<RoomAgenda> {
        console.log('showing room ' + roomId);
        const url = environment.apiURL + environment.roomDetailEndpoint + roomId;
        return this.http.get<RoomAgenda>(url).pipe(retry(1), catchError(this.handleError));
    }


    // Error handling
    private handleError(error) {
        let errorMessage;
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
