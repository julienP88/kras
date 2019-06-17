export class Room {
    _id: string;
    roomName: string;
    outlookName: string;
    telephon: string;
    floor: string;
    capacity: number;
    facilities: Array<string>;


    constructor(_id: string,roomName: string,capacity: number,outlookName:string){
        this._id = _id;
        this.roomName = roomName;
        this.capacity = capacity;
        this.outlookName = outlookName;
    }
}