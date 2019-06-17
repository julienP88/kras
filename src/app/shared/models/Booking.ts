import {Room} from "./Room";

export class Booking {
    _id: string;
    room: Room;
    startTime:Date;
    endTime:Date;
    eventName:string;
    organizator:string;
}